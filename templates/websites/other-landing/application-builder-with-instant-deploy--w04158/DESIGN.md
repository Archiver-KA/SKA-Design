# Design system — Application Builder with Instant Deploy

`SN-W04158` · other-landing · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark, glassy product page where a large white headline sits over a deep slate ground with an orange primary button. The orange (#fb923c) is the only warm colour and is kept for the call to action, while the code panel and feature cards use translucent dark glass with rounded corners. The headline sets its first sentence in white and the rest in grey, both in Inter.

**Mood:** technical, glassy, focused, warm-accented

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#3d4757` | Page ground |
| Surface | `#0e112b` | Cards, panels, raised areas |
| Text | `#111111` | Headings and primary copy |
| Muted text | `#ffffff` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#fb923c` | Primary action and highlights |
| Second accent | `#f9a8d4` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#a8a29e` · `#fb923c` · `#f87171` · `#ef4444` · `#3d4757` · `#f9a8d4` · `#dc2626` · `#a855f7` · `#27272a`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 48px · h3 18px · body 14px
- **Weights in use:** semibold, medium
- **Letter spacing:** `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-2xl` (16px), `rounded-full` (9999px), `rounded-lg` (8px)
- **Shadows:** `shadow-red-500/30`, `shadow-lg`
- **Content width:** `max-w-6xl`
- **Common gaps:** `gap-2`, `gap-8`

**Primary button**

```html
<a class="fixed bottom-6 right-6 z-10 inline-flex items-center gap-2 rounded-full bg-white/10 hover:bg-white/20 hover:scale-105 backdrop-blur px-4 py-2 text-sm font-medium text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-400 transition-all duration-200 animate-fade-in delay-300 font-sans">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. Code / terminal (`code-terminal`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #3d4757;
  --color-surface: #0e112b;
  --color-text: #111111;
  --color-muted: #ffffff;
  --color-border: #ffffff;
  --color-accent: #fb923c;
  --color-accent-2: #f9a8d4;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 16px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#3d4757',
    surface: '#0e112b',
    ink: '#111111',
    muted: '#ffffff',
    line: '#ffffff',
    accent: '#fb923c',
    accent2: '#f9a8d4',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use the orange (#fb923c) for the primary button only.
- **Do:** Set the headline in Inter, with the first sentence in white and the rest in grey.
- **Do:** Keep cards as translucent dark glass with rounded corners.
- **Don't:** Don't add a second warm accent beside the orange.
- **Don't:** Don't use solid light cards on the dark ground.
- **Don't:** Don't set the headline in a single colour.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
