# Design system — A Demo Salon Website

`SN-W02698` · beauty-fashion · dark mode · Sinera Atlas theme `dwell` · language `en`

## Direction

Luxury salon page on deep navy (#08101c) with a white classical serif headline, and the second line in italic grey-blue (#94a3b8). Gold (#cfb56d) is the only accent, used on the primary booking button and the small badge above the headline. Centred composition, generous spacing and a thin outlined secondary button give it a quiet, premium tone.

**Mood:** luxurious, dark, refined, classical

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#08101c` | Page ground |
| Surface | `#0b1422` | Cards, panels, raised areas |
| Text | `#cbd5e1` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#cfb56d` | Primary action and highlights |
| Second accent | `#1e293b` | Supporting highlights |

Palette by frequency of use: `#cfb56d` · `#ffffff` · `#08101c` · `#94a3b8` · `#cbd5e1` · `#64748b` · `#0b1422` · `#0f1a2b` · `#334155` · `#d4a574`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Cormorant Garamond
- **Body:** Inter
- **Loaded families:** Cormorant Garamond, Inter
- **Scale (largest breakpoint):** h1 96px · h2 36px · h3 20px · body 14px
- **Weights in use:** medium, light, bold
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-sm` (2px)
- **Shadows:** `shadow-[0_0_20px_rgba(207,181,109,0.15)]`
- **Content width:** `max-w-6xl`, `max-w-4xl`
- **Section padding:** `py-20`, `py-24`
- **Common gaps:** `gap-4`, `gap-3`, `gap-2`

**Primary button**

```html
<a class="cta-glow w-full sm:w-auto px-8 py-4 bg-[#CFB56D] text-[#08101C] font-medium text-sm tracking-widest uppercase rounded-sm hover:bg-white transition-colors duration-300">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Services (`services`)
5. Pricing (`pricing`)
6. Feature grid (`features`)
7. Timeline (`timeline`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Tailwind CSS v4 (browser)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #08101c;
  --color-surface: #0b1422;
  --color-text: #cbd5e1;
  --color-muted: #64748b;
  --color-border: #ffffff;
  --color-accent: #cfb56d;
  --color-accent-2: #1e293b;
  --font-display: "Cormorant Garamond", serif;
  --font-body: "Inter", sans-serif;
  --radius: 2px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#08101c',
    surface: '#0b1422',
    ink: '#cbd5e1',
    muted: '#64748b',
    line: '#ffffff',
    accent: '#cfb56d',
    accent2: '#1e293b',
  },
  fontFamily: { display: ['Cormorant Garamond'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the hero on deep navy (#08101c) with white serif headlines.
- **Do:** Use the gold (#cfb56d) for the primary booking button and small badges only.
- **Do:** Set the second headline line in italic grey-blue (#94a3b8) for emphasis.
- **Don't:** Don't use gold for body copy or large fills; it is an accent.
- **Don't:** Don't add a bright or saturated colour beside the gold.
- **Don't:** Don't replace the outlined secondary button with a solid one; the pair is the look.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
