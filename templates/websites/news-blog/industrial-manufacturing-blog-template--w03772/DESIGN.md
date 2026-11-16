# Design system — Industrial Manufacturing Blog Template

`SN-W03772` · news-blog · light mode · Sinera Atlas theme `route` · language `en`

## Direction

A clean white blog index with a large bold sans-serif page title and a small blue and orange mark beside it. Each post is a two-column row, with an image on the left and a bold dark title, a grey date and a short excerpt on the right. Orange [#ff5722] read-more links close each entry, and the overall look is corporate, plain and orderly.

**Mood:** corporate, plain, clear, orderly, functional

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#f3f4f6` | Cards, panels, raised areas |
| Text | `#1f2937` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#f3f4f6` | Hairlines, dividers, outlines |
| Accent | `#ff5722` | Primary action and highlights |
| Second accent | `#2563eb` | Supporting highlights |

Palette by frequency of use: `#ff5722` · `#6b7280` · `#ffffff` · `#111827` · `#f3f4f6` · `#4b5563` · `#e64a19` · `#000000` · `#9ca3af` · `#374151`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h2 48px · h3 36px · body 14px
- **Weights in use:** semibold, light, normal
- **Letter spacing:** `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded` (4px)
- **Shadows:** `shadow-xl`
- **Content width:** `max-w-[90rem]`
- **Section padding:** `py-24`
- **Common gaps:** `gap-8`, `gap-16`, `gap-1`

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Articles (`blog-articles`)
3. Footer (`footer`)

## Motion, effects and stack

- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #f3f4f6;
  --color-text: #1f2937;
  --color-muted: #6b7280;
  --color-border: #f3f4f6;
  --color-accent: #ff5722;
  --color-accent-2: #2563eb;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 4px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#f3f4f6',
    ink: '#1f2937',
    muted: '#6b7280',
    line: '#f3f4f6',
    accent: '#ff5722',
    accent2: '#2563eb',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set post titles in bold dark sans-serif, with a grey date line above the excerpt
- **Do:** Use orange (#ff5722) for read-more links and the title mark only
- **Do:** Keep each post as an image and text row with generous space between rows
- **Don't:** Don't add shadows or borders to the post rows
- **Don't:** Don't use blue for links; blue is reserved for the title mark
- **Don't:** Don't use orange as a filled button colour

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
