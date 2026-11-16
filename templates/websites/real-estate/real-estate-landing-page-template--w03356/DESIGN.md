# Design system — Real Estate Landing Page Template

`SN-W03356` · real-estate · dark mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A near-black property search page with the whole hero framed in a rounded panel that has thin light borders. The headline is large white sans-serif in two lines with a grey intro beneath and a small indigo-tinted chip above it. Three stat tiles and a short feature list sit in a column on the right, and the listing preview is a bordered black panel below.

**Mood:** dark, product-led, crisp, modern

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Surface | `#000000` | Cards, panels, raised areas |
| Text | `#f5f5f5` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#312e81` | Primary action and highlights |
| Second accent | `#0891b2` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#a3a3a3` · `#d4d4d4` · `#f5f5f5` · `#000000` · `#e5e5e5` · `#171717` · `#404040` · `#262626` · `#312e81`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h2 60px · h3 16px · body 11px
- **Weights in use:** medium, semibold
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-[40px]` (40px)
- **Shadows:** `shadow-[0px_0px_0px_1px_rgba(255,255,255,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.3),0px_12px_24px_-12px_rgba(0,0,0,0.5)]`, `shadow-[0_8px_30px_rgba(0,0,0,0.35)]`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Common gaps:** `gap-2`, `gap-1.5`, `gap-3`

**Primary button**

```html
<a class="group inline-flex items-center gap-2 text-sm font-medium text-neutral-900 tracking-tight bg-white hover:bg-indigo-100 border border-white/10 rounded-full px-4 py-2">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Stats band (`stats`)
4. About (`about`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills
- **Libraries:** Tailwind CSS (CDN), Unicorn Studio (WebGL scenes)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #0a0a0a;
  --color-surface: #000000;
  --color-text: #f5f5f5;
  --color-muted: #737373;
  --color-border: #ffffff;
  --color-accent: #312e81;
  --color-accent-2: #0891b2;
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
    surface: '#000000',
    ink: '#f5f5f5',
    muted: '#737373',
    line: '#ffffff',
    accent: '#312e81',
    accent2: '#0891b2',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Frame the hero in a rounded near-black panel with thin light borders
- **Do:** Set headlines large in white on near-black (#0a0a0a)
- **Do:** Use the deep indigo (#312e81) only for the eyebrow chip and background wash
- **Don't:** Don't use bright colours on the stat tiles
- **Don't:** Don't place grey text on black panels at small sizes
- **Don't:** Don't remove the thin borders around the panels

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
