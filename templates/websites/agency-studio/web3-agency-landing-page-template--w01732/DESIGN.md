# Design system — Web3 Agency Landing Page Template

`SN-W01732` · agency-studio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A near-black Web3 page set in Clash Display, with indigo and emerald accents and GSAP motion. A small uppercase status line sits in the bottom-right corner, and the hero stays minimal on the dark ground.

**Mood:** dark, futuristic, minimal

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#030303` | Page ground |
| Surface | `#000000` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#6366f1` | Primary action and highlights |
| Second accent | `#10b981` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#27272a` · `#000000` · `#52525b` · `#71717a` · `#a1a1aa` · `#6366f1` · `#3f3f46` · `#0a0a0a` · `#10b981`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Clash Display
- **Body:** Clash Display
- **Loaded families:** Clash Display, General Sans
- **Scale (largest breakpoint):** h2 96px · h3 24px · body 18px
- **Weights in use:** bold, medium, light
- **Letter spacing:** `tracking-widest`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-sm` (2px)
- **Content width:** `max-w-[1600px]`, `max-w-[1800px]`
- **Section padding:** `py-32`, `py-20`
- **Common gaps:** `gap-4`, `gap-3`, `gap-1`

**Primary button**

```html
<a class="magnetic hidden md:flex items-center gap-2 border border-white/20 px-6 py-2 rounded-full hover:bg-white hover:text-black transition-all duration-300 group">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Marquee (`marquee`)
4. Stats band (`stats`)
5. Services (`services`)
6. Call to action (`cta`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), GSAP, Three.js, Lenis smooth scroll
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #030303;
  --color-surface: #000000;
  --color-text: #ffffff;
  --color-muted: #71717a;
  --color-border: #ffffff;
  --color-accent: #6366f1;
  --color-accent-2: #10b981;
  --font-display: "Clash Display", sans-serif;
  --font-body: "Clash Display", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#030303',
    surface: '#000000',
    ink: '#ffffff',
    muted: '#71717a',
    line: '#ffffff',
    accent: '#6366f1',
    accent2: '#10b981',
  },
  fontFamily: { display: ['Clash Display'], sans: ['Clash Display'] },
} }
```

## Do and don't

- **Do:** Keep the page near-black (#030303) with indigo (#6366f1) and emerald (#10b981) accents
- **Do:** Set headlines and body text in Clash Display
- **Do:** Use small uppercase status lines in a corner for loading and system messages
- **Don't:** Don't add decorative effects to the status line
- **Don't:** Don't use light backgrounds; the page is dark throughout
- **Don't:** Don't add orange or other colours beyond the indigo and emerald accents

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
