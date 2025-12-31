import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

/**
 * Load all blog posts from the /blogs directory
 * @returns {Array} Array of blog post objects
 */
export function getBlogs() {
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
    const blogs = fileNames.map(fileName => {
      // Read the file content
      const filePath = path.join(blogsDirectory, fileName);
      const fileContent = fs.readFileSync(filePath, 'utf8');
      
      // Parse the frontmatter using gray-matter
      const { data, content } = matter(fileContent);
      
      // Return the blog post object
      return {
        id: data.id || fileName.replace(/\.md$/, ''),
        title: data.title,
        date: data.date,
        author: data.author,
        excerpt: data.excerpt,
        content: content,
        active: data.active !== false // Default to true if not specified
      };
    });
    
    // Filter out inactive blogs and sort by date (newest first)
    return blogs
      .filter(blog => blog.active === true)
      .sort((a, b) => new Date(b.date) - new Date(a.date));
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
export function getBlogById(id) {
  const blogs = getBlogs();
  return blogs.find(blog => blog.id === id) || null;
}
