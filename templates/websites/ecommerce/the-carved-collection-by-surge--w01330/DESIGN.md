# Design system — The Carved Collection - by Surge

`SN-W01330` · ecommerce · dark mode · Sinera Atlas theme `market` · language `en`

## Direction

A dark, gallery-like furniture hero on near-black (#0f0f0f), framed by faint vertical hairline rules that read like architectural drawings. The headline is a large white serif, with 'Form.' set in italic for contrast, above a small tracked uppercase label. The primary button is a thin white outline rather than a filled block, so the page stays restrained and lets the furniture set the tone.

**Mood:** architectural, restrained, dark, gallery

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0f0f0f` | Page ground |
| Surface | `#0f0f0f` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#a3a3a3` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#ffffff` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#000000` · `#0f0f0f` · `#8b7e74` · `#737373` · `#1a1a1a` · `#a3a3a3` · `#525252` · `#d4d4d4` · `#e5e5e5`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display, Geist, Roboto, Montserrat, Poppins
- **Scale (largest breakpoint):** h1 128px · h2 60px · h3 18px · body 12px
- **Weights in use:** medium, light, normal
- **Letter spacing:** `tracking-widest`, `tracking-[0.2em]`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px)
- **Content width:** `max-w-[1920px]`, `max-w-4xl`
- **Section padding:** `py-32`, `py-24`
- **Common gaps:** `gap-4`, `gap-1`, `gap-8`

**Primary button**

```html
<a class="hidden md:inline-flex px-6 py-2 border border-white/20 text-[10px] uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all duration-500">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Feature grid (`features`)
5. Product grid (`product-grid`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #0f0f0f;
  --color-surface: #0f0f0f;
  --color-text: #ffffff;
  --color-muted: #a3a3a3;
  --color-border: #ffffff;
  --color-accent: #ffffff;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0f0f0f',
    surface: '#0f0f0f',
    ink: '#ffffff',
    muted: '#a3a3a3',
    line: '#ffffff',
    accent: '#ffffff',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the ground near-black (#0f0f0f) with white type and hairline rules as the only structure
- **Do:** Set the headline in large serif with one italic word, and labels in small tracked uppercase
- **Do:** Use a thin white outline button for the primary action, with no filled blocks
- **Don't:** Don't add warm or taupe backgrounds; the page is black and white
- **Don't:** Don't thicken the hairline rules or add coloured dividers
- **Don't:** Don't set the serif headline in bold weights; it stays light and elegant

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
