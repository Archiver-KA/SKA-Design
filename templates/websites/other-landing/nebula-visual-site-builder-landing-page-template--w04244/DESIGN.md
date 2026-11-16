# Design system — Nebula Visual Site Builder Landing Page Template

`SN-W04244` · other-landing · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark product hero on black, with a centred, large sans-serif headline in white and a soft blue glow behind the top of the page. The primary action is a solid blue button with an arrow, paired with a dark ghost button. The first screen ends on a dark editor window, a product preview with a toolbar and side panels in the same grey-black tones.

**Mood:** confident, dark, product-led, precise

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#262626` | Cards, panels, raised areas |
| Text | `#f1f5f9` | Headings and primary copy |
| Muted text | `#cbd5e1` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#38bdf8` | Primary action and highlights |
| Second accent | `#10b981` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#cbd5e1` · `#000000` · `#38bdf8` · `#94a3b8` · `#0ea5e9` · `#e2e8f0` · `#262626` · `#10b981` · `#a3a3a3`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 36px · body 14px
- **Weights in use:** medium, semibold, normal
- **Letter spacing:** `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-md` (6px), `rounded-full` (9999px), `rounded-lg` (8px)
- **Shadows:** `shadow-black/50`, `shadow-2xl`, `shadow-[0_20px_80px_-20px_rgba(0,0,0,0.8)]`
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="block rounded-lg px-3 py-2 text-sm font-medium text-slate-200 hover:bg-white/5">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Pricing (`pricing`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Unicorn Studio (WebGL scenes)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #262626;
  --color-text: #f1f5f9;
  --color-muted: #cbd5e1;
  --color-border: #ffffff;
  --color-accent: #38bdf8;
  --color-accent-2: #10b981;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 6px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#262626',
    ink: '#f1f5f9',
    muted: '#cbd5e1',
    line: '#ffffff',
    accent: '#38bdf8',
    accent2: '#10b981',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline large and white, centred, in a sans-serif
- **Do:** Use a solid blue button with an arrow for the primary action
- **Do:** Keep the product window in the same grey-black tones as the page
- **Don't:** Don't add a second bright colour to the hero
- **Don't:** Don't use light panels in the editor preview
- **Don't:** Don't set the headline in a serif face

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
