# Design system — AI Platform Landing Page UI

`SN-W00126` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

Deep aubergine hero on #181025 with white Manrope headlines, large and tightly set. The visual does most of the colour work: a bright magenta light trail sweeps across the left, and translucent stat panels with a radial gauge overlap it on the right. The interface around it stays sparse, so the page feels atmospheric and product-led.

**Mood:** atmospheric, dark, futuristic, product-led

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#181025` | Page ground |
| Text | `#ffffff` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#ffffff` · `#111827` · `#181025` · `#374151`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Manrope
- **Body:** Manrope
- **Loaded families:** Manrope, Inter
- **Scale (largest breakpoint):** h1 72px · body 20px
- **Weights in use:** medium, semibold

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-sm` (2px), `rounded-lg` (8px)
- **Content width:** `max-w-7xl`
- **Common gaps:** `gap-12`, `gap-4`, `gap-2`

**Primary button**

```html
<a class="py-4 px-8 rounded-xl bg-white text-gray-900 font-medium text-center transition-all hover:bg-white/90">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)

## Motion, effects and stack

- **Effects:** gradient fills, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Font Awesome

## Tokens

```css
:root {
  --color-background: #181025;
  --color-text: #ffffff;
  --color-border: #ffffff;
  --font-display: "Manrope", sans-serif;
  --font-body: "Manrope", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#181025',
    ink: '#ffffff',
    line: '#ffffff',
  },
  fontFamily: { display: ['Manrope'], sans: ['Manrope'] },
} }
```

## Do and don't

- **Do:** Keep the hero ground at #181025 and let the glowing visual carry the colour
- **Do:** Set headlines in Manrope in white with tight leading
- **Do:** Layer stat panels over the artwork as translucent glass cards
- **Don't:** Don't add a second saturated hue to the hero
- **Don't:** Don't place solid coloured buttons over the glow
- **Don't:** Don't crowd the hero with more than one focal visual

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
