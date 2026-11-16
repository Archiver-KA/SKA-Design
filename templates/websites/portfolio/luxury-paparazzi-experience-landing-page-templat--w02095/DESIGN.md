# Design system — Luxury Paparazzi Experience Landing Page Template

`SN-W02095` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A dark, cinematic hero on near-black [#050505] with a very large white serif headline whose second word is set in italic with a gold gradient [#c9a84c]. A small red live-status dot [#ff0000] and a thin ticker strip of uppercase location labels run beneath. The gradient word is the one moment of colour; the rest is white and grey type.

**Mood:** cinematic, dark, bold, theatrical, urgent

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#050505` | Page ground |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#5a5248` | Secondary copy, captions |
| Border | `#f9f5ef` | Hairlines, dividers, outlines |
| Accent | `#c9a84c` | Primary action and highlights |
| Second accent | `#ff0000` | Supporting highlights |

Palette by frequency of use: `#f9f5ef` · `#c9a84c` · `#050505` · `#8a7e6e` · `#111111` · `#1a1a1a` · `#000000` · `#0a0a0a` · `#151515` · `#eae5dd`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Cormorant Garamond
- **Body:** DM Sans
- **Loaded families:** Cormorant Garamond, DM Sans
- **Scale (largest breakpoint):** h1 160px · h2 72px · h3 30px · body 14px
- **Weights in use:** bold, semibold, medium
- **Letter spacing:** `tracking-widest`, `tracking-[0.2em]`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px)
- **Shadows:** `shadow-lg`, `shadow-[0_0_10px_#ff0000]`, `shadow-[0_0_30px_rgba(201,168,76,0.3)]`
- **Content width:** `max-w-7xl`, `max-w-[90rem]`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-3`, `gap-8`, `gap-4`

**Primary button**

```html
<a class="bg-[#C9A84C] text-[#050505] font-semibold text-sm px-10 py-4 uppercase tracking-widest hover:bg-[#F9F5EF] transition-all duration-300 shadow-[0_0_30px_rgba(201,168,76,0.3)] hover:shadow-[0_0_50px_rgba(201,168,76,0.5)] hover:-translate-y-1">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Process / steps (`how-it-works`)
4. Feature grid (`features`)
5. Call to action (`cta`)
6. Marquee (`marquee`)
7. Listings (`listings`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #050505;
  --color-text: #ffffff;
  --color-muted: #5a5248;
  --color-border: #f9f5ef;
  --color-accent: #c9a84c;
  --color-accent-2: #ff0000;
  --font-display: "Cormorant Garamond", serif;
  --font-body: "DM Sans", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#050505',
    ink: '#ffffff',
    muted: '#5a5248',
    line: '#f9f5ef',
    accent: '#c9a84c',
    accent2: '#ff0000',
  },
  fontFamily: { display: ['Cormorant Garamond'], sans: ['DM Sans'] },
} }
```

## Do and don't

- **Do:** Use the gold gradient only on the italic headline word, not on body text.
- **Do:** Keep the red (#ff0000) to the live-status dot and small labels.
- **Do:** Run one uppercase ticker strip beneath the hero, with items separated by small dots.
- **Don't:** Don't put the gold gradient on buttons or navigation links.
- **Don't:** Don't use the red over larger areas; it is a signal dot only.
- **Don't:** Don't set the hero headline in a sans-serif; the serif is part of the voice.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
