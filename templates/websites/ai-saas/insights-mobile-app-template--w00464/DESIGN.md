# Design system — Insights Mobile App Template

`SN-W00464` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark mobile-app UI with a near-black ground and deep violet gradient cards for featured series. Headings are bold Inter, with small grey metadata lines under each title and a row of pill-shaped filters at the top. Thumbnails are rounded and sit inside the violet panels. The look is calm and media-first, designed for a phone screen rather than a desktop page.

**Mood:** media-first, calm, dark, app-like, rounded

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0b0b0f` | Page ground |
| Surface | `#000000` | Cards, panels, raised areas |
| Text | `#f1f5f9` | Headings and primary copy |
| Muted text | `#cbd5e1` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#362a84` | Primary action and highlights |
| Second accent | `#ec4899` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#cbd5e1` · `#0b0b0f` · `#f1f5f9` · `#e2e8f0` · `#000000` · `#362a84` · `#1e293b` · `#8879d1` · `#94a3b8`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 28px · h2 22px · h3 15px · body 12px
- **Weights in use:** semibold, medium
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-3xl` (24px), `rounded-2xl` (16px)
- **Shadows:** `shadow-[0_10px_40px_-10px_rgba(120,80,255,0.35)]`, `shadow-[0_40px_120px_-30px_rgba(0,0,0,0.75)]`, `shadow-[0_10px_40px_-10px_rgba(0,0,0,0.6)]`
- **Common gaps:** `gap-1`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="rounded-full bg-white/5 p-2 ring-1 ring-white/10 hover:bg-white/10 transition duration-200 ease-out motion-reduce:transition-none active:scale-95 motion-reduce:transform-none">…</a>
```

## Page structure

Blocks in page order:

1. 3D / canvas scene (`3d-canvas`)
2. Hero (`hero`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills
- **Libraries:** Tailwind CSS (CDN), Spline 3D
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #0b0b0f;
  --color-surface: #000000;
  --color-text: #f1f5f9;
  --color-muted: #cbd5e1;
  --color-border: #ffffff;
  --color-accent: #362a84;
  --color-accent-2: #ec4899;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0b0b0f',
    surface: '#000000',
    ink: '#f1f5f9',
    muted: '#cbd5e1',
    line: '#ffffff',
    accent: '#362a84',
    accent2: '#ec4899',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use deep violet (#362a84) gradient fills for featured cards only
- **Do:** Keep metadata in small grey text under each title
- **Do:** Set section headings in bold with a More link on the right
- **Don't:** Don't add bright colours to thumbnails or chrome
- **Don't:** Don't present it as a desktop layout; the design is a phone frame
- **Don't:** Don't use hard borders; separate cards with fill and radius

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
