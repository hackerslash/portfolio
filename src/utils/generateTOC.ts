export interface TOCItem {
  id: string;
  text: string;
  level: number;
}

/**
 * Generate a URL-friendly slug from heading text
 */
function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/**
 * Extract table of contents from markdown content
 * Returns array of heading items with id, text, and level
 * Only includes h2 (##) headings
 */
export function generateTOC(markdown: string): TOCItem[] {
  const headingRegex = /^(#{2})\s+(.+)$/gm;
  const toc: TOCItem[] = [];
  let match;

  while ((match = headingRegex.exec(markdown)) !== null) {
    const level = match[1].length;
    const text = match[2].trim();
    const id = slugify(text);

    toc.push({
      id,
      text,
      level,
    });
  }

  return toc;
}

/**
 * Add IDs to headings in rendered HTML
 */
export function addHeadingIds(html: string): string {
  return html.replace(
    /<h([23])>(.*?)<\/h\1>/g,
    (_match, level, content) => {
      const text = content.replace(/<[^>]*>/g, '').trim();
      const id = slugify(text);
      return `<h${level} id="${id}">${content}</h${level}>`;
    }
  );
}
