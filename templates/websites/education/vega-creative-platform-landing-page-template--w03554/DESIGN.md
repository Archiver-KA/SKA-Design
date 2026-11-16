# Design system — Vega Creative Platform Landing Page Template

`SN-W03554` · education · light mode · Sinera Atlas theme `calm` · language `en`

## Direction

Vega is a dark, product-like creative platform shown as an app window, with a category sidebar and a large video player at the centre. Its headline and labels are white sans-serif, and indigo (#6366f1) highlights the active category and the New badge. The layout sits on a deep blue backdrop, with small thumbnails and metadata text that keep the focus on browsing.

**Mood:** product-like, dark, media-focused, structured, compact

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#3b82f6` | Page ground |
| Surface | `#000000` | Cards, panels, raised areas |
| Text | `#111111` | Headings and primary copy |
| Muted text | `#ffffff` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#6366f1` | Primary action and highlights |
| Second accent | `#ef4444` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#000000` · `#6366f1` · `#3b82f6` · `#f8fafc` · `#e2e8f0` · `#60a5fa` · `#a5b4fc` · `#cbd5e1` · `#9333ea`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 36px · h2 18px · h3 12px · body 15px
- **Weights in use:** medium, semibold
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-xl` (12px)
- **Shadows:** `shadow-lg`, `shadow`, `shadow-indigo-500/25`
- **Content width:** `max-w-[1600px]`, `max-w-[1400px]`
- **Common gaps:** `gap-3`, `gap-2`, `gap-4`

**Primary button**

```html
<a class="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 px-3 py-2.5 text-xs font-medium text-white transition-all shadow-lg shadow-indigo-500/25">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Unicorn Studio (WebGL scenes)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #3b82f6;
  --color-surface: #000000;
  --color-text: #111111;
  --color-muted: #ffffff;
  --color-border: #ffffff;
  --color-accent: #6366f1;
  --color-accent-2: #ef4444;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#3b82f6',
    surface: '#000000',
    ink: '#111111',
    muted: '#ffffff',
    line: '#ffffff',
    accent: '#6366f1',
    accent2: '#ef4444',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use indigo (#6366f1) only for active categories and badges
- **Do:** Show the product as a dark app window rather than a flat illustration
- **Do:** Keep thumbnails and metadata small and secondary to the video
- **Don't:** Don't use light panels inside the app window
- **Don't:** Don't add decorative gradients behind the video
- **Don't:** Don't use indigo for body text

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
