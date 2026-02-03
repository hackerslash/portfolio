---
id: markdown-showcase
title: Complete Markdown Features Showcase
date: 2024-12-31
author: Md Afridi Sk
excerpt: A comprehensive demonstration of all supported markdown features including text formatting, code blocks, tables, lists, blockquotes, images, videos, and more.
active: false
tags:
  - Markdown
  - Tutorial
  - Showcase
---

# Complete Markdown Features Showcase

This blog post demonstrates **all** the markdown features supported in this portfolio blog system. From basic formatting to advanced features like syntax-highlighted code, tables, and embedded media.

---

## 🎨 Text Formatting

### Basic Formatting

**Bold text** using double asterisks or __double underscores__

*Italic text* using single asterisks or _single underscores_

***Bold and italic*** using triple asterisks

~~Strikethrough text~~ using double tildes

### Inline Elements

Use `inline code` for technical terms or commands like `npm install`

Here's a [link to GitHub](https://github.com) and here's an [internal link](#tables)

### Paragraphs and Line Breaks

This is a paragraph with some text. It continues on the same line until you add a blank line.

This is a new paragraph. Notice the spacing between paragraphs creates nice visual separation for better readability.

---

## 📝 Headings Hierarchy

# Heading 1
## Heading 2
### Heading 3
#### Heading 4
##### Heading 5
###### Heading 6

---

## 💬 Blockquotes

> "The best way to predict the future is to invent it."
> — Alan Kay

> ### Blockquotes can contain other markdown elements
> 
> - Including **lists**
> - And `code`
> - Even *italic* text
>
> ```javascript
> const wisdom = "Code is poetry";
> ```

### Nested Blockquotes

> This is the first level of quoting.
>
> > This is nested blockquote.
> >
> > > You can nest them even deeper!

---

## 📋 Lists

### Unordered Lists

- First item
- Second item
- Third item
  - Nested item 1
  - Nested item 2
    - Deeply nested item
    - Another deeply nested item
- Fourth item

### Ordered Lists

1. First step
2. Second step
3. Third step
   1. Substep A
   2. Substep B
   3. Substep C
4. Fourth step

### Mixed Lists

1. Start with a numbered item
   - Add a bulleted sub-item
   - And another
2. Continue with numbers
   - More bullets
     - Even deeper bullets
       - Going deeper
3. Final numbered item

### Task Lists

- [x] Completed task
- [x] Another completed task
- [ ] Pending task
- [ ] Another pending task
  - [x] Subtask completed
  - [ ] Subtask pending

---

## 💻 Code Blocks

### Inline Code

Use backticks for inline code: `const variable = "value"`

Install packages with: `npm install package-name`

### JavaScript Code Block

```javascript
// Function to calculate fibonacci numbers
function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// Using modern JavaScript features
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(n => n * 2);

console.log(doubled); // [2, 4, 6, 8, 10]
```

### TypeScript Code Block

```typescript
interface User {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
}

class UserManager {
  private users: User[] = [];

  addUser(user: User): void {
    this.users.push(user);
  }

  getActiveUsers(): User[] {
    return this.users.filter(user => user.isActive);
  }
}

const manager = new UserManager();
```

### Python Code Block

```python
# Python example with syntax highlighting
def quicksort(arr):
    if len(arr) <= 1:
        return arr
    pivot = arr[len(arr) // 2]
    left = [x for x in arr if x < pivot]
    middle = [x for x in arr if x == pivot]
    right = [x for x in arr if x > pivot]
    return quicksort(left) + middle + quicksort(right)

# Using list comprehensions
numbers = [3, 6, 8, 10, 1, 2, 1]
sorted_numbers = quicksort(numbers)
print(sorted_numbers)
```

### CSS Code Block

```css
/* Modern CSS with custom properties */
:root {
  --primary-color: #019b59;
  --secondary-color: #0f172a;
  --accent-gradient: linear-gradient(135deg, #019b59, #00d97e);
}

.card {
  background: var(--secondary-color);
  border-radius: 12px;
  padding: 2rem;
  backdrop-filter: blur(10px);
  box-shadow: 0 8px 32px rgba(1, 155, 89, 0.15);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 48px rgba(1, 155, 89, 0.25);
}
```

### HTML Code Block

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Sample Page</title>
</head>
<body>
  <header>
    <nav>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  </header>
  <main>
    <h1>Welcome to my site!</h1>
    <p>This is a sample HTML document.</p>
  </main>
</body>
</html>
```

### Bash/Shell Commands

```bash
# Navigate to project directory
cd /path/to/project

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Deploy to production
npm run deploy
```

### JSON Example

```json
{
  "name": "my-portfolio",
  "version": "1.0.0",
  "description": "Modern portfolio with blog",
  "scripts": {
    "dev": "astro dev",
    "build": "astro build",
    "preview": "astro preview"
  },
  "dependencies": {
    "astro": "^4.3.2",
    "markdown-it": "^14.1.0"
  }
}
```

---

## 📊 Tables

### Simple Table

| Feature | Status | Priority |
| --- | --- | --- |
| Dark Mode | ✅ Completed | High |
| Blog System | ✅ Completed | High |
| Comments | ✅ Completed | Medium |
| Analytics | 🚧 In Progress | Low |

### Aligned Columns

| Left Aligned | Center Aligned | Right Aligned |
| :--- | :---: | ---: |
| Text | Text | Text |
| More text | More text | More text |
| Even more | Even more | Even more |

### Complex Table with Formatting

| Language | Use Case | **Difficulty** | *Popularity* |
| :--- | :--- | :---: | :---: |
| JavaScript | Web Development | ⭐⭐ | 🔥🔥🔥 |
| Python | Data Science | ⭐ | 🔥🔥🔥 |
| Rust | Systems Programming | ⭐⭐⭐⭐ | 🔥🔥 |
| TypeScript | Type-safe JS | ⭐⭐ | 🔥🔥🔥 |

---

## 🔗 Links and References

### External Links

Visit [my GitHub](https://github.com) to see my projects.

Check out [Astro documentation](https://docs.astro.build) for more info.

### Reference-style Links

I love [Astro][1] and [Markdown][2]!

[1]: https://astro.build "Astro - Modern Static Site Builder"
[2]: https://www.markdownguide.org "Markdown Guide"

### Anchor Links (Internal)

Jump to [Tables section](#tables) or [Code Blocks](#code-blocks)

---

## 🖼️ Images

### Standard Image

![Portfolio Screenshot](https://picsum.photos/400/200)

---

## 🎥 Embedded Media

### YouTube Video Embed

You can embed YouTube videos using HTML:

<iframe width="100%" height="400" src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="border-radius: 12px; margin: 2rem 0;"></iframe>

### GIF Images

![Animated GIF Example](https://media.giphy.com/media/13HgwGsXF0aiGY/giphy.gif)

### Video Element (MP4)

<video width="100%" controls style="border-radius: 12px; margin: 2rem 0;">
  <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

---

## 🎯 HTML Elements

### Custom Styled Div

<div style="background: linear-gradient(135deg, #019b59, #00d97e); padding: 2rem; border-radius: 12px; color: white; margin: 2rem 0;">
  <h3 style="margin-top: 0;">Custom Styled Section</h3>
  <p>You can use HTML directly in markdown for custom styling and layouts!</p>
</div>

### Colored Text

<p style="color: #019b59; font-size: 1.2rem; font-weight: bold;">
  This text is colored with the accent color!
</p>

<p style="color: #ff6b6b; font-style: italic;">
  And this text is red and italic!
</p>

### Highlight Box

<div style="background-color: rgba(1, 155, 89, 0.1); border-left: 4px solid #019b59; padding: 1rem; margin: 1rem 0; border-radius: 4px;">
  <strong>💡 Pro Tip:</strong> You can combine markdown and HTML for maximum flexibility!
</div>

---

## ⚠️ Special Sections

### Warning Box

<div style="background-color: rgba(255, 193, 7, 0.1); border-left: 4px solid #ffc107; padding: 1rem; margin: 1rem 0; border-radius: 4px;">
  <strong>⚠️ Warning:</strong> Make sure to test your code before deploying to production!
</div>

### Error Box

<div style="background-color: rgba(244, 67, 54, 0.1); border-left: 4px solid #f44336; padding: 1rem; margin: 1rem 0; border-radius: 4px;">
  <strong>❌ Error:</strong> This is what an error message might look like.
</div>

### Success Box

<div style="background-color: rgba(76, 175, 80, 0.1); border-left: 4px solid #4caf50; padding: 1rem; margin: 1rem 0; border-radius: 4px;">
  <strong>✅ Success:</strong> Your deployment was successful!
</div>

---

## 📐 Mathematical Expressions

While native LaTeX isn't supported, you can use Unicode symbols:

- Area of circle: A = πr²
- Pythagorean theorem: a² + b² = c²
- Summation: Σ(n) from i=1 to n
- Infinity: ∞
- Delta: Δx
- Integral: ∫f(x)dx

---

## 🎨 Horizontal Rules

You can create horizontal rules using three or more hyphens, asterisks, or underscores:

---

***

___

---

## 🔤 Special Characters & Emojis

### Emojis Work Great! 🎉

✨ Sparkles ⭐ Star 🚀 Rocket 💡 Idea 🎯 Target 🔥 Fire 

❤️ Heart 👍 Thumbs Up 🎨 Art 📱 Mobile 💻 Laptop 🌟 Glowing Star

### Special Characters

Copyright © | Registered ® | Trademark ™ | En Dash – | Em Dash —

Arrows: ← → ↑ ↓ | Quotes: " " ' ' | Ellipsis: …

---

## 📦 Code with Line Numbers (Simulated)

```javascript
1  | // Binary search implementation
2  | function binarySearch(arr, target) {
3  |   let left = 0;
4  |   let right = arr.length - 1;
5  |   
6  |   while (left <= right) {
7  |     const mid = Math.floor((left + right) / 2);
8  |     
9  |     if (arr[mid] === target) {
10 |       return mid;
11 |     } else if (arr[mid] < target) {
12 |       left = mid + 1;
13 |     } else {
14 |       right = mid - 1;
15 |     }
16 |   }
17 |   
18 |   return -1;
19 | }
```

---

## 🎭 Definition Lists (Using HTML)

<dl>
  <dt><strong>HTML</strong></dt>
  <dd>HyperText Markup Language - The standard markup language for web pages.</dd>
  
  <dt><strong>CSS</strong></dt>
  <dd>Cascading Style Sheets - Used for styling HTML elements.</dd>
  
  <dt><strong>JavaScript</strong></dt>
  <dd>A programming language that enables interactive web pages.</dd>
</dl>

---

## 🎪 Keyboard Shortcuts

Press <kbd>Ctrl</kbd> + <kbd>C</kbd> to copy

Press <kbd>Cmd</kbd> + <kbd>V</kbd> to paste

Press <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>Delete</kbd> for task manager

---

## 🏁 Conclusion

This blog post demonstrates all the rich markdown features available in this portfolio blog system, including:

✅ **Text Formatting** - Bold, italic, strikethrough, inline code
✅ **Headings** - All 6 levels with proper hierarchy
✅ **Blockquotes** - Including nested and styled quotes
✅ **Lists** - Ordered, unordered, nested, and task lists
✅ **Code Blocks** - Syntax highlighted in multiple languages
✅ **Tables** - With alignment and formatting
✅ **Links** - External, internal, and reference-style
✅ **Images** - With captions and titles
✅ **Videos & GIFs** - Embedded media support
✅ **HTML** - Custom styling and layouts
✅ **Special Characters** - Emojis and symbols
✅ **Horizontal Rules** - Section separators

Happy blogging! 🎉
