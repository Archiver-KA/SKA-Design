# Design system — Playbase Video Platform Template

`SN-W03738` · entertainment · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A dark, neutral video interface modelled on a standard content grid. A near-black ground, a grey sidebar and a row of filter chips make up the chrome, and the video thumbnails supply all the colour. Titles are small Inter in white with muted grey details beneath, so the content, not the frame, carries the page.

**Mood:** neutral, content-first, dense, quiet, functional

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Surface | `#262626` | Cards, panels, raised areas |
| Text | `#e5e5e5` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#262626` | Hairlines, dividers, outlines |
| Accent | `#ffffff` | Primary action and highlights |
| Second accent | `#60a5fa` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#262626` · `#171717` · `#a3a3a3` · `#d4d4d4` · `#000000` · `#0a0a0a` · `#e5e5e5` · `#737373` · `#404040`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 24px · h3 14px · body 12px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded` (4px)
- **Shadows:** `shadow-[0_0_30px_rgba(255,255,255,0.4)]`, `shadow-none`, `shadow-[0_0_40px_rgba(0,0,0,0.5)]`
- **Content width:** `max-w-[360px]`, `max-w-[400px]`
- **Common gaps:** `gap-1`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="bg-neutral-900 hover:bg-neutral-800 text-neutral-300 px-3 py-1.5 rounded-lg text-sm font-medium whitespace-nowrap transition-colors border border-neutral-800">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Listings (`listings`)
3. Hero (`hero`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #0a0a0a;
  --color-surface: #262626;
  --color-text: #e5e5e5;
  --color-muted: #737373;
  --color-border: #262626;
  --color-accent: #ffffff;
  --color-accent-2: #60a5fa;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0a0a0a',
    surface: '#262626',
    ink: '#e5e5e5',
    muted: '#737373',
    line: '#262626',
    accent: '#ffffff',
    accent2: '#60a5fa',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep navigation and chrome neutral and let video thumbnails carry the colour
- **Do:** Use a white fill only for the selected filter chip
- **Do:** Set details such as view counts and dates in muted grey under each title
- **Don't:** Don't add brand colour to the sidebar or top bar
- **Don't:** Don't use large display sizes for card titles
- **Don't:** Don't add heavy borders or shadows around cards

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
