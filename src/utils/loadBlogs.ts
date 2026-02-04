import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { WORDS_PER_MINUTE } from './constants';

export interface BlogPost {
  id: string;
  title: string;
  date: string;
  author: string;
  excerpt: string;
  content: string;
  readingTime: string;
  active: boolean;
  tags: string[];
}

export interface BlogFrontmatter {
  id?: string;
  title: string;
  date: string;
  author: string;
  excerpt: string;
  active?: boolean;
  tags?: string[];
}

/**
 * Calculate estimated reading time for content
 * @param {string} content - The markdown/text content
 * @returns {string} Reading time in format "X min read"
 */
function calculateReadingTime(content: string): string {
  // Average reading speed (words per minute)
  const wordsPerMinute = WORDS_PER_MINUTE;

  // Strip markdown syntax and HTML tags for more accurate word count
  const plainText = content
    .replace(/```[\s\S]*?```/g, '') // Remove code blocks
    .replace(/`[^`]*`/g, '')        // Remove inline code
    .replace(/#+\s*/g, '')          // Remove headings markers
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1') // Convert links to just text
    .replace(/!\[([^\]]*)\]\([^)]*\)/g, '')  // Remove images
    .replace(/[*_~]/g, '')          // Remove emphasis markers
    .replace(/<[^>]*>/g, '')        // Remove HTML tags
    .replace(/\n+/g, ' ')           // Replace newlines with spaces
    .trim();

  // Count words
  const wordCount = plainText.split(/\s+/).filter(word => word.length > 0).length;

  // Calculate reading time
  const readingTime = Math.ceil(wordCount / wordsPerMinute);

  // Return formatted string
  return readingTime === 1 ? '1 min read' : `${readingTime} min read`;
}

/**
 * Validate blog frontmatter
 */
function validateBlogFrontmatter(data: any, fileName: string): data is BlogFrontmatter {
  const requiredFields = ['title', 'date', 'author', 'excerpt'];
  const missingFields = requiredFields.filter(field => !data[field]);

  if (missingFields.length > 0) {
    console.error(`Invalid blog post "${fileName}": Missing required fields: ${missingFields.join(', ')}`);
    return false;
  }

  return true;
}

/**
 * Load all blog posts from the /blogs directory
 * @returns {Array} Array of blog post objects
 */
export function getBlogs(): BlogPost[] {
  try {
    // Get the blogs directory path
    const blogsDirectory = path.join(process.cwd(), 'blogs');

    // Check if directory exists
    if (!fs.existsSync(blogsDirectory)) {
      console.error('Blogs directory not found:', blogsDirectory);
      return [];
    }

    // Get all markdown files from the blogs directory
    const fileNames = fs.readdirSync(blogsDirectory)
      .filter(fileName => fileName.endsWith('.md'));

    // Map through each file and get the metadata and content
    const blogs = fileNames
      .map(fileName => {
        try {
          // Read the file content
          const filePath = path.join(blogsDirectory, fileName);
          const fileContent = fs.readFileSync(filePath, 'utf8');

          // Parse the frontmatter using gray-matter
          const { data, content } = matter(fileContent);

          // Validate frontmatter
          if (!validateBlogFrontmatter(data, fileName)) {
            return null;
          }

          // Return the blog post object
          return {
            id: data.id || fileName.replace(/\.md$/, ''),
            title: data.title,
            date: data.date,
            author: data.author,
            excerpt: data.excerpt,
            content: content,
            readingTime: calculateReadingTime(content),
            active: data.active !== false, // Default to true if not specified
            tags: data.tags || []
          } as BlogPost;
        } catch (error) {
          console.error(`Error loading blog post "${fileName}":`, error);
          return null;
        }
      })
      .filter((blog): blog is BlogPost => blog !== null);

    // Filter out inactive blogs and sort by date (newest first)
    return blogs
      .filter(blog => blog.active === true)
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  } catch (error) {
    console.error('Error loading blogs:', error);
    return [];
  }
}

/**
 * Get a specific blog post by ID
 * @param {string} id - The blog post ID
 * @returns {Object|null} The blog post object or null if not found
 */
export function getBlogById(id: string): BlogPost | null {
  const blogs = getBlogs();
  return blogs.find(blog => blog.id === id) || null;
}
