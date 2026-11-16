# Design system — Product Designer Portfolio Website Template

`SN-W02194` · portfolio · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

Clean editorial light page: a white ground with near-black bold sans headlines, very large and tightly set, and a smaller grey year line below. The left column holds a small uppercase nav and a short paragraph, while a pale rounded pill sits as a decorative shape. There is no accent colour; grey and black carry hierarchy.

**Mood:** clean, bold, minimal, neutral, editorial

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#f5f5f5` | Cards, panels, raised areas |
| Text | `#171717` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#e5e5e5` | Hairlines, dividers, outlines |
| Accent | `#171717` | Primary action and highlights |
| Second accent | `#4ade80` | Supporting highlights |

Palette by frequency of use: `#e5e5e5` · `#171717` · `#f5f5f5` · `#ffffff` · `#737373` · `#000000` · `#a3a3a3` · `#525252` · `#fafafa` · `#f87171`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** var(--font-sans)
- **Body:** var(--font-sans)
- **Loaded families:** Inter, Geist Mono, Geist
- **Scale (largest breakpoint):** h1 96px · h2 36px · h3 20px · body 14px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded` (4px), `rounded-xl` (12px)
- **Shadows:** `shadow-xl`, `shadow-lg`, `shadow-sm`
- **Content width:** `max-w-6xl`, `max-w-[1400px]`
- **Section padding:** `py-24`, `py-12`
- **Common gaps:** `gap-2`, `gap-12`, `gap-3`

**Primary button**

```html
<a class="px-6 py-3 rounded-lg bg-neutral-900 text-white font-medium hover:bg-neutral-800 transition-colors font-geist-mono text-sm">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. Sidebar (`sidebar`)
3. Product grid (`product-grid`)
4. Logo cloud (`logo-cloud`)
5. Feature grid (`features`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #f5f5f5;
  --color-text: #171717;
  --color-muted: #737373;
  --color-border: #e5e5e5;
  --color-accent: #171717;
  --color-accent-2: #4ade80;
  --font-display: "var(--font-sans)", sans-serif;
  --font-body: "var(--font-sans)", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#f5f5f5',
    ink: '#171717',
    muted: '#737373',
    line: '#e5e5e5',
    accent: '#171717',
    accent2: '#4ade80',
  },
  fontFamily: { display: ['var(--font-sans)'], sans: ['var(--font-sans)'] },
} }
```

## Do and don't

- **Do:** Set the headline in a bold sans at very large size, tightly tracked
- **Do:** Use a grey (#737373) year line under the headline
- **Do:** Keep the nav small and uppercase in grey
- **Don't:** Don't add accent colour; the page is black, white and grey
- **Don't:** Don't set body copy wider than the left column
- **Don't:** Don't use the pale pill as a button; it is decorative

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
