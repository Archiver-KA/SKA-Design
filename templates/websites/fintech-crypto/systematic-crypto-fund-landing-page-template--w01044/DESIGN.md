# Design system — Systematic Crypto Fund Landing Page Template

`SN-W01044` · fintech-crypto · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A near-black minimalist page has a large grotesk hero: Pure Alpha. in white and Zero Noise. stacked beneath it in mid grey at the same size. A small outlined label sits above the headline, and the key details sit in a bordered grid of label and value cells on the right. The page is monochrome, and the grey step between the headline lines is the signature.

**Mood:** minimal, monochrome, severe, precise

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#ffffff` · `#737373` · `#050505` · `#a3a3a3` · `#404040` · `#0a0a0a` · `#525252` · `#080808` · `#0c0c0c` · `#d4d4d4`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 96px · h2 24px · h3 18px · body 14px
- **Weights in use:** medium, semibold
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded` (4px), `rounded-full` (9999px), `rounded-sm` (2px)
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Common gaps:** `gap-6`, `gap-2`, `gap-px`

**Primary button**

```html
<a class="px-3 py-1.5 border border-white/10 rounded text-xs font-medium text-neutral-300 hover:bg-white hover:text-black hover:border-transparent transition-all duration-300">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Process / steps (`how-it-works`)
4. Team (`team`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #0a0a0a;
  --color-text: #ffffff;
  --color-muted: #737373;
  --color-border: #ffffff;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 4px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0a0a0a',
    ink: '#ffffff',
    muted: '#737373',
    line: '#ffffff',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the ground near-black (#0a0a0a) with type in white (#ffffff) and greys
- **Do:** Set the second headline line in grey (#737373) at the same size as the first
- **Do:** Present key facts in a bordered grid of label and value cells
- **Don't:** Don't use a light mode; the page is dark.
- **Don't:** Don't add an accent colour; the page is monochrome
- **Don't:** Don't drop the hairline borders from the fact grid; the grid depends on them

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
