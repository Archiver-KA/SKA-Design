# Design system — Digitize Ventures - Venture Capital Template

`SN-W00345` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A flat black ground with white Instrument Serif type for headlines and a rounded glass navigation pill floating at the top. The page is black and serif-led, and the design relies on type rather than colour.

**Mood:** minimal, dark, austere

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Text | `#ffffff` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#ffffff` · `#000000`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Instrument Serif
- **Body:** Instrument Serif
- **Loaded families:** Instrument Serif, Barlow
- **Scale (largest breakpoint):** h3 36px · body 18px
- **Weights in use:** medium, light, semibold
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-xl` (12px)
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-32`, `py-24`
- **Common gaps:** `gap-2`, `gap-4`, `gap-6`

**Primary button**

```html
<a class="bg-white text-black hover:bg-white/90 transition-colors rounded-full px-3.5 py-1.5 text-sm font-medium flex items-center gap-1.5 ml-2">…</a>
```

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes
- **Libraries:** Three.js, React
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #000000;
  --color-text: #ffffff;
  --color-border: #ffffff;
  --font-display: "Instrument Serif", serif;
  --font-body: "Instrument Serif", serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    ink: '#ffffff',
    line: '#ffffff',
  },
  fontFamily: { display: ['Instrument Serif'], sans: ['Instrument Serif'] },
} }
```

## Do and don't

- **Do:** Keep the page ground pure black (#000000) with white type
- **Do:** Set headlines in Instrument Serif in white
- **Do:** Keep the navigation as a rounded pill floating over the page
- **Don't:** Don't add colour; the palette is black and white only
- **Don't:** Don't make the page depend on the 3D scene to show its content
- **Don't:** Don't set display headlines in a sans-serif face

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
