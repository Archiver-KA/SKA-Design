# Design system — Pulseframe Mobile App Landing Page Template

`SN-W00649` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark mobile-first page whose three phone-width sections sit side by side, each complete on its own. Orange (#ff6b35) fills the primary button and gives the section headline its heat, while the rest is near-black and white. Tight white sans headlines sit over dark tile grids, so the phone layout is itself the design.

**Mood:** mobile-first, dark, energetic, stacked, warm-accent

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Surface | `#000000` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#ff6b35` | Primary action and highlights |
| Second accent | `#34d399` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#000000` · `#ff6b35` · `#f5f5f5` · `#6ee7b7` · `#0a0a0a` · `#34d399` · `#171717`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 34px · h2 28px · h3 18px · body 14px
- **Weights in use:** medium, semibold, normal
- **Letter spacing:** `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-lg` (8px)
- **Shadows:** `shadow-[0_2.8px_2.2px_rgba(0,0,0,0.034),_0_6.7px_5.3px_rgba(0,0,0,0.048),_0_12.5px_10px_rgba(0,0,0,0.06),_0_22.3px_17.9px_rgba(0,0,0,0.072),_0_41.8px_33.4px_rgba(0,0,0,0.086),_0_100px_80px_rgba(0,0,0,0.12)]`, `shadow-[0_0_48px_rgba(255,107,53,0.45)]`
- **Section padding:** `py-[2px]`
- **Common gaps:** `gap-2`, `gap-3`, `gap-1`

**Primary button**

```html
<a class="inline-flex items-center gap-2 text-sm font-medium text-black bg-white rounded-full px-4 py-2.5 hover:bg-white/90 transition">…</a>
```

## Page structure

Blocks in page order:

1. Call to action (`cta`)
2. Hero (`hero`)
3. Product grid (`product-grid`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), blend modes
- **Libraries:** Tailwind CSS (CDN), AOS scroll reveal
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #0a0a0a;
  --color-surface: #000000;
  --color-text: #ffffff;
  --color-border: #ffffff;
  --color-accent: #ff6b35;
  --color-accent-2: #34d399;
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
    ink: '#ffffff',
    line: '#ffffff',
    accent: '#ff6b35',
    accent2: '#34d399',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Design each section at phone width first and keep orange (#ff6b35) to the primary button
- **Do:** Set headlines in heavy white Inter on near-black (#0a0a0a)
- **Do:** Use dark tiles with outline icons for integration grids
- **Don't:** Don't use orange as a background fill; it is for the primary action
- **Don't:** Don't add light cards; the tiles stay dark
- **Don't:** Don't use the mint (#34d399) for buttons; it marks small details

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
