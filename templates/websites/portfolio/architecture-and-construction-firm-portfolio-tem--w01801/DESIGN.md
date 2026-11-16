# Design system — Architecture & Construction Firm Portfolio Template

`SN-W01801` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

Dark and technical: a near-black ground with a large white sans headline in three stacked lines, grey secondary words and a small uppercase tag above. A slim stat strip along the bottom edge sets three figures in white on a darker band. Buttons are plain, a white fill for the primary and an outline for the secondary, and the type and figures do all the work.

**Mood:** technical, dark, stark, precise

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#818cf8` | Primary action and highlights |
| Second accent | `#f472b6` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#171717` · `#a3a3a3` · `#000000` · `#27272a` · `#818cf8` · `#e5e5e5` · `#737373` · `#a1a1aa` · `#f5f5f5`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, JetBrains Mono
- **Scale (largest breakpoint):** h1 96px · h2 36px · h3 14px · body 14px
- **Weights in use:** medium, light
- **Letter spacing:** `tracking-tighter`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded` (4px), `rounded-sm` (2px), `rounded-full` (9999px)
- **Shadows:** `shadow-sm`, `shadow-[0_0_10px_rgba(0,0,0,0.3)]`, `shadow-[0_4px_20px_rgba(0,0,0,0.15)]`
- **Content width:** `max-w-screen-2xl`, `max-w-2xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-6`, `gap-4`

**Primary button**

```html
<a class="px-6 py-3 rounded-lg bg-[#818CF8] text-white text-sm font-medium hover:bg-[#818CF8]/90 transition-colors flex items-center gap-2 shadow-[0_0_20px_rgba(129,140,248,0.3)]">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Case studies (`case-studies`)
4. Bento grid (`bento-grid`)
5. Feature grid (`features`)
6. Stats band (`stats`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #ffffff;
  --color-text: #ffffff;
  --color-muted: #737373;
  --color-border: #ffffff;
  --color-accent: #818cf8;
  --color-accent-2: #f472b6;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 4px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#ffffff',
    ink: '#ffffff',
    muted: '#737373',
    line: '#ffffff',
    accent: '#818cf8',
    accent2: '#f472b6',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the hero headline in white sans with the last words in grey
- **Do:** Divide the stat figures into a dark band along the bottom edge
- **Do:** Keep buttons plain: white fill for primary, outline for secondary
- **Don't:** Don't use a light ground for this template
- **Don't:** Don't add decorative icons or illustrations to the hero
- **Don't:** Don't tint the headline; the grey is the only second colour

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
