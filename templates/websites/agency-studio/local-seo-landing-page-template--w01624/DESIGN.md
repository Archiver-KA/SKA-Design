# Design system — Local SEO Landing Page Template

`SN-W01624` · agency-studio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A cinematic dark SEO page on charcoal (#171717). A large, high-contrast serif headline in white capitals sets 'LOCAL' in bright white and 'SEO' fading into grey. Translucent dark panels recede behind the title like a deck of cards, adding depth without colour. The purple word in the logo is the only chromatic element.

**Mood:** cinematic, dark, editorial, layered

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#171717` | Page ground |
| Surface | `#1a1a1a` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#a3a3a3` | Secondary copy, captions |
| Border | `#262626` | Hairlines, dividers, outlines |
| Accent | `#c084fc` | Primary action and highlights |
| Second accent | `#c084fc` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#262626` · `#22d3ee` · `#06b6d4` · `#525252` · `#a3a3a3` · `#171717` · `#000000` · `#737373` · `#c084fc`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Manrope
- **Body:** Manrope
- **Loaded families:** Cinzel, Manrope
- **Scale (largest breakpoint):** h1 128px · body 14px
- **Weights in use:** bold, medium, normal
- **Letter spacing:** `tracking-widest`, `tracking-[0.4em]`

## Shape, spacing and layout

- **Corner radius:** `rounded-sm` (2px), `rounded-full` (9999px), `rounded-lg` (8px)
- **Shadows:** `shadow-[0_0_px_rgba(6,182,212,0.15)]`, `shadow-[0_0_8px_rgba(6,182,212,0.15)]`, `shadow-[0_0_30px_rgba(255,255,255,0.1)]`
- **Common gaps:** `gap-2`, `gap-6`, `gap-8`

**Primary button**

```html
<a class="relative z-10 border border-white/20 bg-white/5 backdrop-blur-sm px-10 py-4 text-xs font-medium uppercase tracking-[0.25em] text-white transition-all duration-500 hover:border-white/60 hover:bg-white/10 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN), GSAP, Three.js
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #171717;
  --color-surface: #1a1a1a;
  --color-text: #ffffff;
  --color-muted: #a3a3a3;
  --color-border: #262626;
  --color-accent: #c084fc;
  --color-accent-2: #c084fc;
  --font-display: "Manrope", sans-serif;
  --font-body: "Manrope", sans-serif;
  --radius: 2px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#171717',
    surface: '#1a1a1a',
    ink: '#ffffff',
    muted: '#a3a3a3',
    line: '#262626',
    accent: '#c084fc',
    accent2: '#c084fc',
  },
  fontFamily: { display: ['Manrope'], sans: ['Manrope'] },
} }
```

## Do and don't

- **Do:** Set the headline in a high-contrast serif, uppercase, white, with the second word in grey
- **Do:** Stack translucent dark panels behind the title for depth instead of adding colour
- **Do:** Use purple (#c084fc) only in the logo mark and one accent
- **Don't:** Don't set body copy in the display serif
- **Don't:** Don't add more than one chromatic colour to the page
- **Don't:** Don't fill the main CTA; keep it an outline

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
