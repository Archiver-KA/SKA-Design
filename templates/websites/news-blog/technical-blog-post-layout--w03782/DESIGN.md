# Design system — Technical Blog Post Layout

`SN-W03782` · news-blog · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

An article page on a very dark ground, with a centred column, a large sans-serif title and small grey metadata beneath it. Annotation labels sit in the margins in small uppercase text, which gives the page its technical, specification-sheet character. Tags are small rounded pills, and images run as full-width blocks within the column.

**Mood:** technical, annotated, dark, precise

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#18181b` | Page ground |
| Surface | `#27272a` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#9ca3af` | Secondary copy, captions |
| Border | `#27272a` | Hairlines, dividers, outlines |
| Accent | `#4ade80` | Primary action and highlights |

Palette by frequency of use: `#9ca3af` · `#27272a` · `#ffffff` · `#d1d5db` · `#4b5563` · `#374151` · `#18181b` · `#6b7280` · `#3f3f46` · `#0c0c0c`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Instrument Serif, IBM Plex Serif, IBM Plex Mono
- **Scale (largest breakpoint):** h2 20px · h3 14px · body 14px
- **Weights in use:** semibold, medium, normal

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded` (4px), `rounded-lg` (8px)
- **Content width:** `max-w-6xl`, `max-w-2xl`
- **Common gaps:** `gap-2`, `gap-4`, `gap-1`

## Motion, effects and stack

- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #18181b;
  --color-surface: #27272a;
  --color-text: #ffffff;
  --color-muted: #9ca3af;
  --color-border: #27272a;
  --color-accent: #4ade80;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#18181b',
    surface: '#27272a',
    ink: '#ffffff',
    muted: '#9ca3af',
    line: '#27272a',
    accent: '#4ade80',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the article title in Inter at a large size, in white (#ffffff).
- **Do:** Keep metadata small and muted (#9ca3af) above the body text.
- **Do:** Place section labels in the margins in small uppercase text.
- **Don't:** Don't use bright colours in the body text.
- **Don't:** Don't place the margin labels inside the article column.
- **Don't:** Don't add decorative backgrounds behind the article.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
