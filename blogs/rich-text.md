---
id: rich-text-showcase
title: Modern Portfolio Features & Rich Text Showcase
date: 2024-12-30
author: Md Afridi Sk
excerpt: Exploring the new dark theme, fluid haze effects, and full markdown support including code blocks and rich formatting.
---

# Elevating the Digital Experience

Welcome to the new era of my portfolio. This post serves as both a celebration of the recent design overhaul and a showcase of the powerful rich text features now supported in this blog.

## The Design Philosophy

The goal was to create a "dark very modern translucent vibe." We achieved this through:
- **Glassmorphism**: Using `backdrop-filter: blur()` and semi-transparent backgrounds.
- **Fluid Haze**: A dynamic green haze that follows your cursor.
- **Typography**: Crisp, high-contrast text with subtle gradients.

> "Design is not just what it looks like and feels like. Design is how it works." — Steve Jobs

## Technical Implementation

### The Mouse Follower
The fluid haze effect uses a hardware-accelerated `translate3d` transformation for buttery smooth performance.

```css
#mouse-haze {
  position: fixed;
  mix-blend-mode: screen;
  filter: blur(60px);
  will-change: transform;
  /* Green Haze #019b59 */
  background: radial-gradient(circle, rgba(1, 155, 89, 0.25), transparent);
}
```

### Modern Stack
We leverage **Astro** for its incredible performance and developer experience.

```javascript
// Dynamic static paths for fast navigation
export async function getStaticPaths() {
  const blogs = getBlogs();
  return blogs.map(blog => ({
    params: { id: blog.id },
    props: { blog },
  }));
}
```

## Rich Content Support

You can now include complex structures like tables and nested lists:

| Feature | Status | Technology |
| :--- | :--- | :--- |
| Dark Mode | Completed | CSS Variables |
| Mouse Haze | Active | JS + CSS |
| Rich Text | Enabled | Markdown-it |

### Styled Code Snippets
Inline code like `const theme = 'dark'` is styled with a subtle background and accent color to stand out within paragraphs.

### List Types
- **Ordered Lists** for steps
- **Unordered Lists** for features
- **Checklists** for progress

## Conclusion
This revamp ensures that my thoughts and technical articles are presented in the most readable and visually stunning way possible. Stay tuned for more updates!
