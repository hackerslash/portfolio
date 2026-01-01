# Portfolio

A modern, minimalist portfolio website built with Astro, featuring a fully-functional blog system with tags, comments, and dark mode support.

## ✨ Features

- **Responsive Design** - Optimized for all devices
- **Dark/Light Mode** - Theme switcher with persistent preferences
- **Blog System** - Markdown-based blog with syntax highlighting
- **Tagging System** - Clickable tags for filtering blog posts
- **Comments** - Integrated Giscus comments for blog posts
- **Preview Images** - Visual blog post previews
- **Interactive UI** - Smooth animations and hover effects

## 🚀 Quick Start

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build
```

## ⚙️ Configuration

The portfolio is easily configurable through JSON file:

- **`cv.json`** - Your personal information, work experience, education, skills, and projects

Simply update `cv.json` with your details and the entire portfolio will automatically reflect your information.

## 📝 Adding Blog Posts

Create a markdown file in the `blogs/` directory with frontmatter:

```markdown
---
id: your-blog-id
title: Your Blog Title
date: 2024-01-01
author: Your Name
excerpt: A brief description of your post
active: true
tags:
  - JavaScript
  - Tutorial
---

Your blog content here...
```

## 🛠️ Tech Stack

- [Astro](https://astro.build) - Static site generator
- [Markdown-it](https://github.com/markdown-it/markdown-it) - Markdown parser
- [Shiki](https://shiki.matsu.io/) - Syntax highlighting
- [Giscus](https://giscus.app/) - Comments system

## 📄 License

MIT

## 🙏 Credits

Originally based on [minimalist-portfolio-json](https://github.com/midudev/minimalist-portfolio-json) by [@midudev](https://github.com/midudev), with extensive modifications and enhancements.
