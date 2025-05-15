# Blog Image Guide

This guide explains how to use HTML img tags in your markdown blog posts to create responsive, properly scaled images.

## Basic Image Usage

### Standard Markdown Image Syntax

You can use standard markdown image syntax:

```markdown
![Alt text](image-url)
```

Example:
```markdown
![A beautiful landscape](https://example.com/image.jpg)
```

### HTML Image Tag

For more control, use HTML img tags directly in your markdown:

```html
<img src="image-url" alt="Alt text" width="100%" />
```

Example:
```html
<img src="https://example.com/image.jpg" alt="A beautiful landscape" width="100%" />
```

## Image Sizing Options

### Full-Width Image

```html
<img src="image-url" alt="Alt text" width="100%" />
```

### Half-Width Image

```html
<img src="image-url" alt="Alt text" width="50%" />
```

### Fixed Width Image

```html
<img src="image-url" alt="Alt text" width="500px" />
```

### Responsive Image with Maximum Width

```html
<img src="image-url" alt="Alt text" width="100%" style="max-width: 800px;" />
```

## Image Alignment

### Center-Aligned Image

```html
<img src="image-url" alt="Alt text" width="70%" style="display: block; margin: 0 auto;" />
```

### Left-Aligned Image

```html
<img src="image-url" alt="Alt text" width="50%" style="float: left; margin-right: 20px; margin-bottom: 10px;" />
```

### Right-Aligned Image

```html
<img src="image-url" alt="Alt text" width="50%" style="float: right; margin-left: 20px; margin-bottom: 10px;" />
```

## Multiple Images

### Two Images Side by Side

```html
<div style="display: flex; gap: 10px; margin-bottom: 20px;">
  <img src="image-url-1" alt="Alt text 1" width="50%" />
  <img src="image-url-2" alt="Alt text 2" width="50%" />
</div>
```

### Three Images in a Row

```html
<div style="display: flex; gap: 10px; margin-bottom: 20px;">
  <img src="image-url-1" alt="Alt text 1" width="33.33%" />
  <img src="image-url-2" alt="Alt text 2" width="33.33%" />
  <img src="image-url-3" alt="Alt text 3" width="33.33%" />
</div>
```

## Images with Captions

### Using Figure and Figcaption

```html
<figure>
  <img src="image-url" alt="Alt text" width="100%" />
  <figcaption>This is a caption for the image</figcaption>
</figure>
```

### Using Markdown Caption (Alternative Method)

```markdown
![Alt text](image-url)
*This is a caption for the image*
```

## Best Practices

1. **Always include alt text** for accessibility
2. **Optimize image file sizes** before uploading
3. **Use relative widths** (percentages) for responsive design
4. **Consider mobile users** when setting image sizes
5. **Use appropriate image formats**:
   - JPEG for photographs
   - PNG for graphics with transparency
   - WebP for better compression (when supported)
   - SVG for vector graphics

## Examples

### Blog Cover Image

```html
<img src="cover-image-url" alt="Blog post cover image" width="100%" style="max-height: 400px; object-fit: cover;" />
```

### Profile Picture or Icon

```html
<img src="profile-image-url" alt="Profile picture" width="150px" style="border-radius: 50%;" />
```

### Image with Border and Shadow

```html
<img src="image-url" alt="Alt text" width="80%" style="border: 1px solid #ddd; box-shadow: 0 4px 8px rgba(0,0,0,0.1);" />
```

## Responsive Behavior

All images in the blog are automatically responsive thanks to the CSS in the blog template. However, using the HTML img tag gives you more control over the initial sizing and layout.

On mobile devices, side-by-side images will automatically stack vertically for better viewing on smaller screens.
