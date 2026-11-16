# Design system — Property Management Landing Page Template

`SN-W03330` · real-estate · dark mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A near-black, centred hero with a large white sans headline split over two lines, where the word 'Condominium' is set in italic gold to carry the emphasis. A short hairline rule sits above the headline, and a white filled button and an outlined button sit side by side in small caps. The palette stays black, white and grey, with gold reserved for the italic word.

**Mood:** dark, composed, formal, restrained

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#050505` | Page ground |
| Surface | `#080808` | Cards, panels, raised areas |
| Text | `#a3a3a3` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#ffffff` · `#737373` · `#000000` · `#050505` · `#d4d4d4` · `#a3a3a3` · `#080808` · `#171717` · `#333333` · `#e5e5e5`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 36px · body 12px
- **Weights in use:** medium, light, normal
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-sm` (2px)
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-32`, `py-24`
- **Common gaps:** `gap-2`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="px-5 py-2 border border-gold-500/30 text-gold-400 hover:bg-gold-500 hover:text-black transition-all duration-300 text-xs font-medium uppercase tracking-widest">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Services (`services`)
5. Gallery / portfolio (`gallery-portfolio`)
6. Logo cloud (`logo-cloud`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #050505;
  --color-surface: #080808;
  --color-text: #a3a3a3;
  --color-muted: #737373;
  --color-border: #ffffff;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 2px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#050505',
    surface: '#080808',
    ink: '#a3a3a3',
    muted: '#737373',
    line: '#ffffff',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the key word of the headline in italic gold, at the same size as the rest.
- **Do:** Put a hairline rule above the headline to mark the start of the hero.
- **Do:** Pair a white filled button with an outlined button of the same size.
- **Don't:** Don't use gold for body text or buttons; it stays on the headline word.
- **Don't:** Don't add a bright accent colour to the navigation.
- **Don't:** Don't left-align the centred hero copy; the layout is symmetrical.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
