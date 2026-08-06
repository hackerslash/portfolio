import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://hackerslash.dev',
  // The build emits directory-style routes (/blog/x/index.html), so every
  // canonical, sitemap entry and internal link has to carry the trailing
  // slash — otherwise each one costs a redirect hop.
  trailingSlash: 'always',
  integrations: [sitemap()],
});
