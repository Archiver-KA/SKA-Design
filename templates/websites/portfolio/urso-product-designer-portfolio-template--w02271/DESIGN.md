# Design system — URSO Product Designer Portfolio Template

`SN-W02271` · portfolio · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A monochrome product-designer portfolio on an off-white ground (#fafafa), built around a very large heavy grey sans wordmark that fills the hero's centre. Thin vertical guide lines run through the wordmark, and small grey text sits in the lower corners. Colour is absent, so the weight and scale of the wordmark carry the identity, and the guide lines give it an architectural, grid-based feel.

**Mood:** bold, minimal, monochrome, structured, quiet

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fafafa` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#18181b` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#f4f4f5` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#18181b` · `#ffffff` · `#f4f4f5` · `#71717a` · `#e4e4e7` · `#fafafa` · `#a1a1aa` · `#d4d4d8` · `#52525b` · `#0a0a0a`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Clash Display
- **Body:** Clash Display
- **Loaded families:** Geist, Roboto, Montserrat, Poppins, Playfair Display, Instrument Serif
- **Scale (largest breakpoint):** h2 60px · h3 24px · body 16px
- **Weights in use:** medium, semibold
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded` (4px), `rounded-sm` (2px)
- **Shadows:** `shadow-sm`, `shadow-2xl`
- **Content width:** `max-w-screen-xl`, `max-w-2xl`
- **Section padding:** `py-32`
- **Common gaps:** `gap-4`, `gap-3`, `gap-10`

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Case studies (`case-studies`)
4. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #fafafa;
  --color-surface: #ffffff;
  --color-text: #18181b;
  --color-muted: #71717a;
  --color-border: #f4f4f5;
  --font-display: "Clash Display", sans-serif;
  --font-body: "Clash Display", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fafafa',
    surface: '#ffffff',
    ink: '#18181b',
    muted: '#71717a',
    line: '#f4f4f5',
  },
  fontFamily: { display: ['Clash Display'], sans: ['Clash Display'] },
} }
```

## Do and don't

- **Do:** Set the wordmark in a heavy sans at the centre of the hero, very large.
- **Do:** Keep the thin vertical guide lines faint and full-height behind the wordmark.
- **Do:** Keep the page on off-white (#fafafa) with dark grey type and small grey captions.
- **Don't:** Don't add an accent colour; the page is grey and off-white only.
- **Don't:** Don't set the wordmark in a light weight; the heavy sans is the identity.
- **Don't:** Don't place imagery over the wordmark; the guide lines are the only overlay.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
