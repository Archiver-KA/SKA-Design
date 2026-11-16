# Design system — Empathy Design Agency Landing Page Template

`SN-W01564` · agency-studio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

The first screen is a near-black field (#0a0505) with one large centred bold sans headline in white and nothing else to look at. The only colour is a red (#ff2a4a) call-out in the navigation, so the page relies on scale and empty space rather than imagery. The emptiness is the stance: one statement, one red note, and a dark ground that keeps the attention on the words.

**Mood:** minimal, bold, empty, dark, emotive

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0505` | Page ground |
| Surface | `#0a0505` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#fcfcfc` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#ff2a4a` | Primary action and highlights |

Palette by frequency of use: `#ff2a4a` · `#a39595` · `#fcfcfc` · `#ffffff` · `#706464` · `#000000` · `#0a0505` · `#0d0707`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h2 60px · h3 20px · body 14px
- **Weights in use:** semibold, medium, light
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-xl` (12px), `rounded-full` (9999px)
- **Shadows:** `shadow-[0_0_8px_#ff2a4a]`, `shadow-[0_0_30px_rgba(255,42,74,0.35)]`, `shadow-[0_0_30px_rgba(255,42,74,0.3)]`
- **Content width:** `max-w-[1200px]`, `max-w-2xl`
- **Section padding:** `py-[clamp(5rem,12vw,10rem)]`, `py-[clamp(4rem,10vw,8rem)]`
- **Common gaps:** `gap-3`, `gap-8`, `gap-2`

**Primary button**

```html
<a class="inline-flex justify-center items-center gap-2 px-8 py-3.5 rounded-full text-sm font-medium tracking-wide bg-[#ff2a4a] text-white transition-all duration-400 hover:shadow-[0_0_30px_rgba(255,42,74,0.35)] hover:-translate-y-0.5 will-change-transform w-full sm:w-auto">…</a>
```

## Page structure

Blocks in page order:

1. 3D / canvas scene (`3d-canvas`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Feature grid (`features`)
5. Stats band (`stats`)
6. Process / steps (`how-it-works`)
7. Call to action (`cta`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills
- **Libraries:** Tailwind CSS (CDN), GSAP, Three.js, Lenis smooth scroll
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #0a0505;
  --color-surface: #0a0505;
  --color-text: #ffffff;
  --color-muted: #fcfcfc;
  --color-border: #ffffff;
  --color-accent: #ff2a4a;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 12px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0a0505',
    surface: '#0a0505',
    ink: '#ffffff',
    muted: '#fcfcfc',
    line: '#ffffff',
    accent: '#ff2a4a',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the first screen to one large centred headline on near-black
- **Do:** Use the red (#ff2a4a) only for the call-out link in the navigation
- **Do:** Set headlines in a bold sans at large size in white
- **Don't:** Don't fill the hero with imagery; the empty field is part of the design
- **Don't:** Don't use red for large backgrounds or buttons
- **Don't:** Don't set text in dark grey on the near-black ground

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
