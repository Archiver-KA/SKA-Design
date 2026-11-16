# Design system — Webflow Migration Proposal Page Template

`SN-W00829` · ai-saas · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A plain, document-like proposal page on a pale grey ground, with white cards and thin grey borders. The title is centred in dark grey at 36px, and the body is a stack of bordered scope rows with prices right-aligned. Colour is almost absent, so the page is grey, white and black, and the document structure carries the look.

**Mood:** plain, document-like, neutral, clear

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fafafa` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#525252` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#e5e5e5` | Hairlines, dividers, outlines |
| Accent | `#4f46e5` | Primary action and highlights |

Palette by frequency of use: `#737373` · `#171717` · `#e5e5e5` · `#ffffff` · `#d4d4d4` · `#fafafa` · `#525252` · `#a3a3a3` · `#f5f5f5` · `#4f46e5`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 36px · h2 18px · h3 14px · body 12px
- **Weights in use:** medium, semibold
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-lg` (8px), `rounded-full` (9999px), `rounded` (4px)
- **Shadows:** `shadow-sm`, `shadow-lg`, `shadow-neutral-200`
- **Content width:** `max-w-5xl`, `max-w-3xl`
- **Section padding:** `py-12`
- **Common gaps:** `gap-2`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="bg-neutral-900 hover:bg-neutral-800 text-white text-sm font-medium py-3 px-8 rounded-full shadow-lg shadow-neutral-200 transition-all transform hover:-translate-y-0.5">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Footer (`footer`)

## Motion, effects and stack

- **Effects:** gradient fills, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #fafafa;
  --color-surface: #ffffff;
  --color-text: #525252;
  --color-muted: #737373;
  --color-border: #e5e5e5;
  --color-accent: #4f46e5;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 8px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fafafa',
    surface: '#ffffff',
    ink: '#525252',
    muted: '#737373',
    line: '#e5e5e5',
    accent: '#4f46e5',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set section cards as white on #fafafa with a thin #e5e5e5 border
- **Do:** Right-align prices and keep their labels in grey
- **Do:** Use a segmented control for alternative proposal options
- **Don't:** Don't add decorative imagery to the proposal
- **Don't:** Don't introduce a second accent colour
- **Don't:** Don't centre body text inside the scope rows

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
