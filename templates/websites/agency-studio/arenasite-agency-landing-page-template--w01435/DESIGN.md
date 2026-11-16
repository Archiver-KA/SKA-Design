# Design system — ArenaSite Agency Landing Page Template

`SN-W01435` · agency-studio · dark mode · Sinera Atlas theme `workshop` · language `pt-BR`

## Direction

A near-black ground ([#09090b]) with a violet highlight ([#a855f7]) on the key words and a soft glowing field behind the hero. The headline is a heavy sans with a light, glassy gradient on the first phrase and a small pill badge above it. The look is polished and product-like, built from glass pills and glow rather than hard edges.

**Mood:** polished, glassy, dark, luminous, modern

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#09090b` | Page ground |
| Surface | `#18181b` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#ffffff` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#a855f7` | Primary action and highlights |
| Second accent | `#facc15` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#a855f7` · `#18181b` · `#a1a1aa` · `#09090b` · `#facc15` · `#d1d5db` · `#d4d4d8` · `#eab308` · `#d8b4fe`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** var(--font-sans)
- **Body:** var(--font-sans)
- **Loaded families:** Inter, Roboto, Montserrat, Playfair Display
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 20px · body 14px
- **Weights in use:** medium, bold, semibold
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-xl` (12px)
- **Shadows:** `shadow-[0_0_8px_rgba(234,179,8,0.3)]`, `shadow-[0_0_30px_rgba(168,85,247,0.1)]`, `shadow-[0_0_15px_rgba(168,85,247,0.4)]`
- **Content width:** `max-w-[425px]`, `max-w-2xl`
- **Common gaps:** `gap-4`, `gap-3`, `gap-16`

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Marquee (`marquee`)
4. Feature grid (`features`)
5. Gallery / portfolio (`gallery-portfolio`)
6. Process / steps (`how-it-works`)
7. Call to action (`cta`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Three.js, Unicorn Studio (WebGL scenes)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #09090b;
  --color-surface: #18181b;
  --color-text: #ffffff;
  --color-muted: #ffffff;
  --color-border: #ffffff;
  --color-accent: #a855f7;
  --color-accent-2: #facc15;
  --font-display: "var(--font-sans)", sans-serif;
  --font-body: "var(--font-sans)", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#09090b',
    surface: '#18181b',
    ink: '#ffffff',
    muted: '#ffffff',
    line: '#ffffff',
    accent: '#a855f7',
    accent2: '#facc15',
  },
  fontFamily: { display: ['var(--font-sans)'], sans: ['var(--font-sans)'] },
} }
```

## Do and don't

- **Do:** Use violet (#a855f7) for one highlighted phrase per headline
- **Do:** Keep a small pill badge with a dot above the hero headline
- **Do:** Set body copy in light grey (#a1a1aa) on the dark ground
- **Don't:** Don't use the yellow (#facc15) for more than a rare call-to-action accent
- **Don't:** Don't drop the glass pill treatment from the nav and badges
- **Don't:** Don't put the layout on a light background, the hero is dark

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
