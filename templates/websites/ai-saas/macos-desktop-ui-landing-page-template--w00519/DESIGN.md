# Design system — macOS Desktop UI Landing Page Template

`SN-W00519` · ai-saas · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A macOS desktop recreation: a violet-to-pink wallpaper with a white Finder-style window, a grey sidebar and a dark menu bar. The page's own content sits inside the window, with a near-black Download CV button and a pale grey secondary button. The soft blue-grey text and hairline window chrome make it a convincing product demo rather than a landing page.

**Mood:** nostalgic, playful, desktop-like, clean, crafted

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#f3f4f6` | Cards, panels, raised areas |
| Text | `#1e293b` | Headings and primary copy |
| Muted text | `#475569` | Secondary copy, captions |
| Border | `#e5e7eb` | Hairlines, dividers, outlines |
| Accent | `#000000` | Primary action and highlights |
| Second accent | `#fca5a5` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#e5e7eb` · `#475569` · `#3b82f6` · `#f3f4f6` · `#64748b` · `#000000` · `#94a3b8` · `#4b5563` · `#0f172a`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 30px · h2 14px · h3 14px · body 12px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded` (4px), `rounded-sm` (2px), `rounded-lg` (8px)
- **Shadows:** `shadow-lg`, `shadow-sm`, `shadow-md`
- **Common gaps:** `gap-2`, `gap-1`, `gap-4`

**Primary button**

```html
<a class="bg-slate-900 text-white px-4 py-1.5 rounded-md text-xs font-medium shadow-sm hover:bg-slate-800 transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #f3f4f6;
  --color-text: #1e293b;
  --color-muted: #475569;
  --color-border: #e5e7eb;
  --color-accent: #000000;
  --color-accent-2: #fca5a5;
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
    ink: '#1e293b',
    muted: '#475569',
    line: '#e5e7eb',
    accent: '#000000',
    accent2: '#fca5a5',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the content inside a single white window with grey sidebar and hairline chrome.
- **Do:** Use near-black (#000000) for the primary button.
- **Do:** Use the wallpaper gradient only behind the window, never as a background for the text.
- **Don't:** Don't add extra window shadows or bright chrome beyond the macOS grey.
- **Don't:** Don't set the window content on the purple gradient.
- **Don't:** Don't use the pale pink (#fca5a5) as a fill; it is only a small accent.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
