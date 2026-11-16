# Design system — Digital Journal Layout with Sidebar

`SN-W03758` · news-blog · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A light journal layout on a pale grey ground with a clean white header. A left column holds the article details as labelled entries with thin dividers, and the main column opens with a large serif title whose second line is set in violet [#a78bfa]. A violet pill button sits beside the title, and violet is the only accent in the layout.

**Mood:** editorial, soft, layered, purple-accented, calm

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f3f4f6` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#111827` | Headings and primary copy |
| Muted text | `#4b5563` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#a78bfa` | Primary action and highlights |

Palette by frequency of use: `#4b5563` · `#111827` · `#ffffff` · `#374151` · `#f3f4f6` · `#6b7280` · `#a78bfa`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, IBM Plex Serif, IBM Plex Mono, Playfair Display, Instrument Serif
- **Scale (largest breakpoint):** h1 72px · h2 24px · body 12px
- **Weights in use:** medium, semibold, light
- **Letter spacing:** `tracking-tighter`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-lg` (8px), `rounded-xl` (12px), `rounded-2xl` (16px)
- **Shadows:** `shadow-xl`, `shadow-lg`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Common gaps:** `gap-4`, `gap-8`

**Primary button**

```html
<a class="p-2 rounded-lg bg-flux-100 hover:bg-flux-200 transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)

## Motion, effects and stack

- **Effects:** gradient fills
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #f3f4f6;
  --color-surface: #ffffff;
  --color-text: #111827;
  --color-muted: #4b5563;
  --color-border: #ffffff;
  --color-accent: #a78bfa;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 8px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f3f4f6',
    surface: '#ffffff',
    ink: '#111827',
    muted: '#4b5563',
    line: '#ffffff',
    accent: '#a78bfa',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use violet (#a78bfa) for the highlighted title phrase and the action button only
- **Do:** Set the article title in a large serif, with the second line in the accent tone
- **Do:** Keep the details column as labelled entries separated by thin dividers
- **Don't:** Don't use violet for body text or long links
- **Don't:** Don't add gradient fills to the sidebar or cards
- **Don't:** Don't fill the details column with coloured panels

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
