# Design system — EPIA Systems Landing Page Template

`SN-W00372` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `ru`

## Direction

A near-black, dense technical page with white Inter headlines at about 60px and a faint grid drawn across the lower hero. The product is shown as a dashboard mock with a stat card, and the only colour is green (#22c55e), used for the stat highlight and the chart fill. The effect is that of an operations tool, where small precise details carry the weight.

**Mood:** technical, dense, dark, operational, precise

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#080808` | Page ground |
| Surface | `#080808` | Cards, panels, raised areas |
| Text | `#f5f5f5` | Headings and primary copy |
| Muted text | `#ededed` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#22c55e` | Primary action and highlights |
| Second accent | `#22c55e` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#6366f1` · `#818cf8` · `#080808` · `#22c55e` · `#020202` · `#000000` · `#a5b4fc` · `#4ade80` · `#0ea5e9`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 60px · h2 36px · h3 18px · body 14px
- **Weights in use:** medium, light, bold
- **Letter spacing:** `tracking-[0.2em]`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded` (4px), `rounded-lg` (8px)
- **Shadows:** `shadow-2xl`, `shadow-black/80`, `shadow-[0_0_10px_#6366f1]`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-16`, `py-24`
- **Common gaps:** `gap-3`, `gap-2`, `gap-4`

**Primary button**

```html
<a class="h-12 px-6 rounded-full border border-white/10 hover:bg-white/5 text-sm font-medium text-white transition-colors w-full sm:w-auto flex items-center justify-center gap-2 group">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Stats band (`stats`)
5. Marquee (`marquee`)
6. Feature grid (`features`)
7. Services (`services`)
8. FAQ (`faq`)
9. Bento grid (`bento-grid`)
10. Process / steps (`how-it-works`)
11. Pricing (`pricing`)
12. Call to action (`cta`)
13. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Three.js, Unicorn Studio (WebGL scenes), AOS scroll reveal
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #080808;
  --color-surface: #080808;
  --color-text: #f5f5f5;
  --color-muted: #ededed;
  --color-border: #ffffff;
  --color-accent: #22c55e;
  --color-accent-2: #22c55e;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#080808',
    surface: '#080808',
    ink: '#f5f5f5',
    muted: '#ededed',
    line: '#ffffff',
    accent: '#22c55e',
    accent2: '#22c55e',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use the green (#22c55e) only for positive figures and the chart fill inside the dashboard mock.
- **Do:** Set the hero headline in Inter at about 60px, white, broken onto three lines.
- **Do:** Keep the dashboard mock as the hero visual, with dark panels and thin rules.
- **Don't:** Don't use the indigo (#818cf8) as the main accent; the signal colour is green.
- **Don't:** Don't add a stock illustration; the dashboard is the image.
- **Don't:** Don't fill buttons with the green; the buttons are dark and outlined.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
