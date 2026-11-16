# Design system — Solana Private Chat Landing Page Template

`SN-W02235` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A stark black landing hero: one centred bold sans headline in white on pure black, a short grey subline, and two centred pill buttons in muted grey. The nav is a rounded dark bar with light text. The page is almost entirely type and black, which reads as private and quiet.

**Mood:** private, quiet, stark, minimal

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#171717` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#a3a3a3` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#34d399` | Primary action and highlights |
| Second accent | `#38bdf8` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#34d399` · `#000000` · `#10b981` · `#6ee7b7` · `#38bdf8` · `#171717` · `#a7f3d0` · `#c084fc` · `#a855f7`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 20px · body 14px
- **Weights in use:** medium, semibold, normal
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-2xl` (16px)
- **Shadows:** `shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]`, `shadow-[0_2.8px_2.2px_rgba(0,0,0,0.3),_0_6.7px_5.3px_rgba(0,0,0,0.35),_0_12.5px_10px_rgba(0,0,0,0.4)]`
- **Content width:** `max-w-7xl`, `max-w-[85%]`
- **Common gaps:** `gap-2`, `gap-3`, `gap-x-2`

**Primary button**

```html
<a class="inline-flex items-center gap-2 text-sm font-medium text-black bg-emerald-400 rounded-lg px-4 py-2 hover:bg-emerald-300 transition font-geist">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. Call to action (`cta`)
3. Feature grid (`features`)
4. Pricing (`pricing`)
5. FAQ (`faq`)
6. Footer (`footer`)
7. Contact form (`contact-form`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Unicorn Studio (WebGL scenes)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #171717;
  --color-text: #ffffff;
  --color-muted: #a3a3a3;
  --color-border: #ffffff;
  --color-accent: #34d399;
  --color-accent-2: #38bdf8;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#171717',
    ink: '#ffffff',
    muted: '#a3a3a3',
    line: '#ffffff',
    accent: '#34d399',
    accent2: '#38bdf8',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the hero on pure black (#000000) with white headline text
- **Do:** Centre the headline and subline, with two pill buttons below
- **Do:** Set the nav as a rounded dark bar with light text
- **Don't:** Don't add a bright accent to the hero
- **Don't:** Don't add imagery; the hero is type only
- **Don't:** Don't set the buttons as solid bright fills

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
