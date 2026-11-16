# Design system — Cinematic Studio Portfolio Landing Page Template

`SN-W01862` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A near-black studio page whose first screen is almost empty: a small letter-spaced grey label under a serif wordmark, with grey uppercase navigation and one outlined pill. Faint horizontal bands mark the lower area. The design relies on a black ground and a serif wordmark, with no colour in the first view.

**Mood:** quiet, dark, understated, serif

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#050505` | Page ground |
| Surface | `#050505` | Cards, panels, raised areas |
| Text | `#fef3c7` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#fde68a` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#050505` · `#fde68a` · `#000000` · `#fef3c7` · `#fbbf24` · `#0a0a0a` · `#0f0f0f` · `#171717` · `#78350f`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** var(--font-sans)
- **Loaded families:** Inter, Playfair Display
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 24px · body 14px
- **Weights in use:** bold, light, medium
- **Letter spacing:** `tracking-tighter`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-2xl` (16px)
- **Content width:** `max-w-[1400px]`, `max-w-5xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-12`, `gap-2`, `gap-8`

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Case studies (`case-studies`)
4. About (`about`)
5. Team (`team`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #050505;
  --color-surface: #050505;
  --color-text: #fef3c7;
  --color-border: #ffffff;
  --color-accent: #fde68a;
  --font-display: "Playfair Display", serif;
  --font-body: "var(--font-sans)", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#050505',
    surface: '#050505',
    ink: '#fef3c7',
    line: '#ffffff',
    accent: '#fde68a',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['var(--font-sans)'] },
} }
```

## Do and don't

- **Do:** Keep the ground near-black (#050505) and the wordmark in a small serif
- **Do:** Use small uppercase grey labels for the eyebrow and navigation
- **Do:** Frame the connect action as a thin outlined pill
- **Don't:** Don't use the amber background (#78350f); the page is black.
- **Don't:** Don't add colour to the first screen
- **Don't:** Don't ship the hero without its media.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
