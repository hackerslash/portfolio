// Dev-only content admin. Hooks the Astro dev server and nothing else, so it
// exists ONLY under `npm run dev` — it emits no route into `astro build`.
// Routes: GET /admin (UI), GET/POST /api/cv (read/write cv.json),
// POST /api/cv/upload (optimize + save an image via native `sips`).
import { readFile, writeFile } from 'node:fs/promises'
import { execFileSync } from 'node:child_process'
import { existsSync, mkdirSync, rmSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import path from 'node:path'
import os from 'node:os'

const HERE = path.dirname(fileURLToPath(import.meta.url))

function body(req) {
  return new Promise((resolve, reject) => {
    const chunks = []
    req.on('data', (c) => chunks.push(c))
    req.on('end', () => resolve(Buffer.concat(chunks)))
    req.on('error', reject)
  })
}

const json = (res, code, obj) => {
  res.statusCode = code
  res.setHeader('content-type', 'application/json')
  res.end(JSON.stringify(obj))
}

const slugify = (name) =>
  path.parse(name).name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '') || 'img'

function sipsDims(file) {
  const out = execFileSync('sips', ['-g', 'pixelWidth', '-g', 'pixelHeight', file]).toString()
  const w = +(/pixelWidth:\s*(\d+)/.exec(out)?.[1] ?? 0)
  const h = +(/pixelHeight:\s*(\d+)/.exec(out)?.[1] ?? 0)
  return { w, h }
}

export default function cvAdmin() {
  return {
    name: 'cv-admin',
    hooks: {
      'astro:server:setup': ({ server }) => {
        const root = server.config.root // project root
        const cvPath = path.join(root, 'cv.json')
        const galleryDir = path.join(root, 'public', 'gallery')

        server.middlewares.use(async (req, res, next) => {
          const url = (req.url || '').split('?')[0]

          try {
            // ── Admin UI ──
            if (url === '/admin' || url === '/admin/') {
              const html = await readFile(path.join(HERE, 'admin.html'))
              res.setHeader('content-type', 'text/html; charset=utf-8')
              res.end(html)
              return
            }

            // ── Site design tokens (single source of truth) ──
            if (url === '/admin/tokens.css') {
              const css = await readFile(path.join(root, 'tokens.css'))
              res.setHeader('content-type', 'text/css; charset=utf-8')
              res.end(css)
              return
            }

            // ── Read whole cv.json ──
            if (url === '/api/cv' && req.method === 'GET') {
              const cv = JSON.parse(await readFile(cvPath, 'utf8'))
              json(res, 200, cv)
              return
            }

            // ── Write whole cv.json ──
            if (url === '/api/cv' && req.method === 'POST') {
              const raw = (await body(req)).toString('utf8')
              const parsed = JSON.parse(raw) // throws -> 400 below
              await writeFile(cvPath, JSON.stringify(parsed, null, 2) + '\n')
              json(res, 200, { ok: true })
              return
            }

            // ── Delete image files (basename-confined to public/gallery) ──
            if (url === '/api/cv/delete-files' && req.method === 'POST') {
              const { files = [] } = JSON.parse((await body(req)).toString('utf8') || '{}')
              const deleted = []
              for (const f of files) {
                const target = path.join(galleryDir, path.basename(f))
                if (existsSync(target)) { rmSync(target, { force: true }); deleted.push(path.basename(f)) }
              }
              json(res, 200, { ok: true, deleted })
              return
            }

            // ── Optimize + save an uploaded image ──
            if (url === '/api/cv/upload' && req.method === 'POST') {
              const name = new URL(req.url, 'http://x').searchParams.get('name') || 'image.jpg'
              const bytes = await body(req)
              if (!bytes.length) return json(res, 400, { error: 'empty upload' })

              if (!existsSync(galleryDir)) mkdirSync(galleryDir, { recursive: true })

              let slug = slugify(name)
              let n = 1
              while (existsSync(path.join(galleryDir, `${slug}.jpg`))) slug = `${slugify(name)}-${++n}`

              const tmp = path.join(os.tmpdir(), `cvadmin-${slug}.jpg`)
              await writeFile(tmp, bytes)
              const full = path.join(galleryDir, `${slug}.jpg`)
              const thumb = path.join(galleryDir, `${slug}-t.jpg`)
              execFileSync('sips', ['-Z', '1600', '-s', 'format', 'jpeg', '-s', 'formatOptions', '82', tmp, '--out', full])
              execFileSync('sips', ['-Z', '800', '-s', 'format', 'jpeg', '-s', 'formatOptions', '74', tmp, '--out', thumb])
              rmSync(tmp, { force: true })
              const { w, h } = sipsDims(thumb)

              json(res, 200, {
                src: `/gallery/${slug}-t.jpg`,
                full: `/gallery/${slug}.jpg`,
                w, h,
                alt: '', caption: '', description: '', tag: '',
              })
              return
            }

            next()
          } catch (err) {
            json(res, 400, { error: String(err?.message || err) })
          }
        })
      },
      'astro:server:start': ({ address, logger }) => {
        logger.info(`\x1b[1mContent admin\x1b[0m ready at http://localhost:${address.port}/admin/`)
      },
    },
  }
}
