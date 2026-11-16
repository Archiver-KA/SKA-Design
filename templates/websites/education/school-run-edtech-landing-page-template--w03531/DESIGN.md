# Design system — School Run EdTech Landing Page Template

`SN-W03531` · education · light mode · Sinera Atlas theme `calm` · language `en`

## Direction

A plain, document-style policy page on white, with a large black serif headline and clear section headings. Teal (#00919f) is the only colour, used for the navigation action, and the cookie table uses light grey header rows and thin row dividers. The page is sober and readable, built for long-form text and tables rather than marketing.

**Mood:** plain, readable, sober, functional

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#f5f5f5` | Cards, panels, raised areas |
| Text | `#0a0a0a` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#e5e5e5` | Hairlines, dividers, outlines |
| Accent | `#00919f` | Primary action and highlights |

Palette by frequency of use: `#0a0a0a` · `#00919f` · `#ffffff` · `#e5e5e5` · `#737373` · `#f5f5f5` · `#fafafa`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 48px · h2 24px · body 16px
- **Weights in use:** normal, medium, semibold
- **Letter spacing:** `tracking-[0.06em]`, `tracking-[-0.025em]`

## Shape, spacing and layout

- **Corner radius:** `rounded-md` (6px), `rounded-2xl` (16px)
- **Shadows:** `shadow-[0_-8px_30px_rgba(0,0,0,0.04)]`
- **Content width:** `max-w-5xl`, `max-w-3xl`
- **Section padding:** `py-12`
- **Common gaps:** `gap-6`, `gap-3`, `gap-x-4`

**Primary button**

```html
<a class="text-sm font-medium bg-[#00919F] text-white px-4 py-2 h-9 rounded-md hover:opacity-80 transition-opacity duration-120 shrink-0 hidden sm:flex items-center justify-center">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), blend modes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #f5f5f5;
  --color-text: #0a0a0a;
  --color-muted: #737373;
  --color-border: #e5e5e5;
  --color-accent: #00919f;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 6px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#f5f5f5',
    ink: '#0a0a0a',
    muted: '#737373',
    line: '#e5e5e5',
    accent: '#00919f',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the page title and section headings in a large serif in near-black
- **Do:** Use teal (#00919f) for the navigation action only
- **Do:** Lay out tables with light grey header rows and thin grey row dividers
- **Don't:** Don't add decorative imagery or illustrations to policy pages
- **Don't:** Don't use teal for body text or links within paragraphs
- **Don't:** Don't use heavy card shadows or coloured fills behind text

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
