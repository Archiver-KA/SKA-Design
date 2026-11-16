# Design system — Futuristic Coffee Shop Landing Page Template

`SN-W01170` · ecommerce · dark mode · Sinera Atlas theme `market` · language `en`

## Direction

A near-black, glitch-styled coffee page where one oversized white wordmark, BREW, is split by red and green chromatic offsets, like a broken signal. The header is small, spaced uppercase in muted grey, with a bright green pill as the only solid control. The poster-like hero carries the whole first screen, and the rose accent (#f43f5e) appears in the offset and interface highlights.

**Mood:** glitch, dark, futuristic, bold

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#020202` | Page ground |
| Text | `#ffffff` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#f43f5e` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#f43f5e` · `#fda4af` · `#fecdd3` · `#fb7185` · `#020202`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** var(--font-body)
- **Body:** var(--font-body)
- **Loaded families:** Syne, Space Grotesk, Noto Sans JP
- **Weights in use:** semibold
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-xl` (12px), `rounded-lg` (8px), `rounded-md` (6px)
- **Shadows:** `shadow-lg`
- **Content width:** `max-w-[85%]`
- **Common gaps:** `gap-4`, `gap-2`

**Primary button**

```html
<a class="w-full sm:w-auto mt-3 sm:mt-0 flex-shrink-0 bg-rose-500/10 hover:bg-rose-500/20 text-rose-300 hover:text-rose-200 border border-rose-500/30 hover:border-rose-400/50 backdrop-blur-md px-5 py-2.5 text-xs font-semibold uppercase tracking-widest rounded-md transition-all duration-300 flex items-center justify-center gap-2">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Menu list (`menu-list`)
4. Feature grid (`features`)
5. Call to action (`cta`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), blend modes
- **Libraries:** Tailwind CSS (CDN), GSAP, Lenis smooth scroll
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #020202;
  --color-text: #ffffff;
  --color-border: #ffffff;
  --color-accent: #f43f5e;
  --font-display: "var(--font-body)", sans-serif;
  --font-body: "var(--font-body)", sans-serif;
  --radius: 12px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#020202',
    ink: '#ffffff',
    line: '#ffffff',
    accent: '#f43f5e',
  },
  fontFamily: { display: ['var(--font-body)'], sans: ['var(--font-body)'] },
} }
```

## Do and don't

- **Do:** Keep the hero on near-black (#020202) with one oversized wordmark centred.
- **Do:** Use the red and green chromatic offset only on display type, never on body copy.
- **Do:** Keep navigation small, uppercase and spaced, in muted grey.
- **Don't:** Don't set body copy in the glitch treatment; it is reserved for the wordmark.
- **Don't:** Don't use a light background; the style depends on black.
- **Don't:** Don't add a second bright colour beyond the header button and the offset.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
