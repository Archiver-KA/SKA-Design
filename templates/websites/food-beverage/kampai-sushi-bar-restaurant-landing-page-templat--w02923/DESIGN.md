# Design system — Kampai Sushi Bar Restaurant Landing Page Template

`SN-W02923` · food-beverage · dark mode · Sinera Atlas theme `dwell` · language `de`

## Direction

A near-black loading screen holds one line of Japanese characters in muted gold, centred over a thin rule. The screen has no other elements, so the type alone carries the look. The stance is minimal and ceremonial, with the single mark doing all the work.

**Mood:** minimal, ceremonial, near-black, still, quiet

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Text | `#000000` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#ffffff` · `#0a0a0a` · `#000000` · `#1a1a1a` · `#0f0f0f`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** var(--font-body)
- **Body:** var(--font-body)
- **Loaded families:** Cormorant Garamond, Inter, Noto Serif JP
- **Scale (largest breakpoint):** h1 60px · h2 48px · h3 20px · body 14px
- **Weights in use:** light
- **Letter spacing:** `tracking-widest`, `tracking-[0.2em]`

## Shape, spacing and layout

- **Corner radius:** none used — square corners
- **Content width:** `max-w-7xl`, `max-w-6xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-4`, `gap-3`, `gap-12`

**Primary button**

```html
<a class="hidden md:block px-6 py-2 border border-gold/30 text-xs uppercase tracking-[0.2em] text-gold hover:bg-gold hover:text-black transition-all duration-500">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Stats band (`stats`)
5. Menu list (`menu-list`)
6. Map / location (`map-location`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills
- **Libraries:** Tailwind CSS (CDN), GSAP
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #0a0a0a;
  --color-text: #000000;
  --color-border: #ffffff;
  --font-display: "var(--font-body)", sans-serif;
  --font-body: "var(--font-body)", sans-serif;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0a0a0a',
    ink: '#000000',
    line: '#ffffff',
  },
  fontFamily: { display: ['var(--font-body)'], sans: ['var(--font-body)'] },
} }
```

## Do and don't

- **Do:** Use a near-black ground (#0a0a0a) for the loading screen.
- **Do:** Set the centred mark in muted gold with a thin rule beneath it.
- **Do:** Keep the loader to one centred element with no imagery.
- **Don't:** Don't use a white background for this screen; it is near-black.
- **Don't:** Don't add motion-heavy graphics to the loader; it shows a single still mark.
- **Don't:** Don't add other text to the loader; it carries one mark only.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
