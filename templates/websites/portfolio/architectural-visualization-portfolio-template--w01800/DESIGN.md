# Design system — Architectural Visualization Portfolio Template

`SN-W01800` · portfolio · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

Quiet and minimal on a white ground, with a thin top bar and two short grey lines of text centred in the hero, leaving most of the first screen empty. The only dark element is the black Book Render button, so contrast comes from one filled control. Image cards with thin borders sit below the fold in a three-column row. The design relies on whitespace and restraint.

**Mood:** minimal, airy, plain, functional

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#000000` | Cards, panels, raised areas |
| Text | `#1c1917` | Headings and primary copy |
| Muted text | `#78716c` | Secondary copy, captions |
| Border | `#1c1917` | Hairlines, dividers, outlines |
| Accent | `#1c1917` | Primary action and highlights |

Palette by frequency of use: `#1c1917` · `#ffffff` · `#fafaf9` · `#e7e5e4` · `#000000` · `#78716c` · `#f5f5f4` · `#d6d3d1` · `#a8a29e` · `#292524`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Newsreader
- **Body:** Inter
- **Loaded families:** Inter, Newsreader
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 30px · body 12px
- **Weights in use:** medium, light, bold
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-lg` (8px)
- **Shadows:** `shadow-xl`, `shadow-sm`, `shadow-2xl`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-24`, `py-20`
- **Common gaps:** `gap-2`, `gap-4`, `gap-3`

**Primary button**

```html
<a class="bg-[#1C1917] text-[#FAFAF9] px-5 py-2 rounded-full text-xs font-medium tracking-wide hover:bg-opacity-90 transition-all flex items-center gap-2 group shadow-lg shadow-stone-900/10">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Code / terminal (`code-terminal`)
3. Hero (`hero`)
4. Process / steps (`how-it-works`)
5. Integrations (`integrations`)
6. Feature grid (`features`)
7. Call to action (`cta`)
8. Testimonials (`testimonials`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN), GSAP
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #000000;
  --color-text: #1c1917;
  --color-muted: #78716c;
  --color-border: #1c1917;
  --color-accent: #1c1917;
  --font-display: "Newsreader", serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#000000',
    ink: '#1c1917',
    muted: '#78716c',
    line: '#1c1917',
    accent: '#1c1917',
  },
  fontFamily: { display: ['Newsreader'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the hero to short grey lines of text and one dark button
- **Do:** Use white and near-black only; the page carries no hue
- **Do:** Leave generous space between the hero and the card row
- **Don't:** Don't add gradients or coloured accents to the hero
- **Don't:** Don't fill the first screen with imagery
- **Don't:** Don't switch to a dark ground; the page is light and the look depends on it

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
