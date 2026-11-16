# Design system — Hardware Spoofer Setup Guide Template

`SN-W00435` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark, centred wizard card on a navy ground: a header with a small label and a cyan step pill, a numbered title, and two equal choice cards in a row with arrow buttons. Cyan (#06b6d4) marks the step pill and the number tile, and the cards are dark panels with thin borders. A small help line at the foot explains the choice, which keeps the flow calm and step by step.

**Mood:** calm, step-by-step, dark, focused, technical

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#020410` | Page ground |
| Surface | `#000000` | Cards, panels, raised areas |
| Text | `#cbd5e1` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#06b6d4` | Primary action and highlights |
| Second accent | `#ef4444` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#06b6d4` · `#cbd5e1` · `#67e8f9` · `#64748b` · `#ef4444` · `#22d3ee` · `#000000` · `#f97316` · `#94a3b8`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 24px · h2 16px · h3 14px · body 11px
- **Weights in use:** medium, normal, light
- **Letter spacing:** `tracking-wider`, `tracking-[0.18em]`

## Shape, spacing and layout

- **Corner radius:** `rounded-lg` (8px), `rounded-xl` (12px), `rounded` (4px)
- **Shadows:** `shadow-xl`, `shadow-lg`, `shadow-2xl`
- **Content width:** `max-w-2xl`, `max-w-3xl`
- **Common gaps:** `gap-2`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="px-4 py-2.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-[11px] font-medium text-[#020410]">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. Process / steps (`how-it-works`)
3. Testimonials (`testimonials`)
4. Product grid (`product-grid`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #020410;
  --color-surface: #000000;
  --color-text: #cbd5e1;
  --color-muted: #64748b;
  --color-border: #ffffff;
  --color-accent: #06b6d4;
  --color-accent-2: #ef4444;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 8px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#020410',
    surface: '#000000',
    ink: '#cbd5e1',
    muted: '#64748b',
    line: '#ffffff',
    accent: '#06b6d4',
    accent2: '#ef4444',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the step indicator as a small cyan pill in the card header
- **Do:** Set choice cards as equal-width dark panels with a thin border and an arrow
- **Do:** Put a short help line under the choices, in muted slate
- **Don't:** Don't fill the choice cards with cyan; it marks state only
- **Don't:** Don't add a second accent colour to the wizard
- **Don't:** Don't turn the wizard into a full-width page; it stays centred

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
