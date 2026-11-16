# Design system — User Account Settings Panel

`SN-W04325` · other-landing · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A settings panel with a near-black sidebar listing four sections in white text, beside a light content area with a clear profile form. The active item is marked by a slightly lighter block with a short underline, and fields are plain bordered inputs stacked in one column. The dark rail and the light form split navigation from content, and the page uses neutral tones only.

**Mood:** orderly, functional, neutral, clean, structured

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f5f5f5` | Page ground |
| Surface | `#fafafa` | Cards, panels, raised areas |
| Text | `#525252` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#e5e5e5` | Hairlines, dividers, outlines |
| Accent | `#262626` | Primary action and highlights |

Palette by frequency of use: `#fafafa` · `#a3a3a3` · `#e5e5e5` · `#404040` · `#262626` · `#525252` · `#ffffff` · `#f5f5f5` · `#d4d4d4` · `#4ade80`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** system-ui
- **Body:** system-ui
- **Loaded families:** Geist, Inter, IBM Plex Serif, IBM Plex Mono
- **Scale (largest breakpoint):** h2 24px · h3 24px · body 14px
- **Weights in use:** medium
- **Letter spacing:** `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-lg` (8px), `rounded-full` (9999px), `rounded-2xl` (16px)
- **Content width:** `max-w-5xl`, `max-w-2xl`
- **Common gaps:** `gap-4`

**Primary button**

```html
<a class="flex items-center px-4 py-3 text-neutral-300 hover:text-white hover:bg-neutral-700/30 rounded-lg transition">…</a>
```

## Page structure

Blocks in page order:

1. Articles (`blog-articles`)
2. Navigation bar (`navbar`)
3. Call to action (`cta`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** inline SVG

## Tokens

```css
:root {
  --color-background: #f5f5f5;
  --color-surface: #fafafa;
  --color-text: #525252;
  --color-muted: #737373;
  --color-border: #e5e5e5;
  --color-accent: #262626;
  --font-display: "system-ui", sans-serif;
  --font-body: "system-ui", sans-serif;
  --radius: 8px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f5f5f5',
    surface: '#fafafa',
    ink: '#525252',
    muted: '#737373',
    line: '#e5e5e5',
    accent: '#262626',
  },
  fontFamily: { display: ['system-ui'], sans: ['system-ui'] },
} }
```

## Do and don't

- **Do:** Use the dark rail (#262626) for navigation and the light area for forms
- **Do:** Mark the active section with a lighter block and a short underline
- **Do:** Stack form fields in one column with a small label above each
- **Don't:** Don't add a green accent; the panel uses neutral tones only
- **Don't:** Don't place form fields on the dark rail
- **Don't:** Don't use rounded-full shapes for the input fields

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
