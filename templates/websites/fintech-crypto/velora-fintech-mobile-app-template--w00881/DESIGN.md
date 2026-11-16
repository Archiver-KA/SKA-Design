# Design system — Velora Fintech Mobile App Template

`SN-W00881` · fintech-crypto · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A light design-system board on a white page: small grey labels, bold black headings and a three-column grid of colour swatches, type scale and components. The primary button is solid near-black with a white label, the secondary is outlined, and the input is a pale grey field. Green appears only on a success swatch, so the look is neutral, utilitarian and easy to scan.

**Mood:** light, utilitarian, neutral, systematic, clear

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fafafa` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#18181b` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#e4e4e7` | Hairlines, dividers, outlines |
| Accent | `#059669` | Primary action and highlights |
| Second accent | `#f43f5e` | Supporting highlights |

Palette by frequency of use: `#e4e4e7` · `#ffffff` · `#18181b` · `#71717a` · `#fafafa` · `#a1a1aa` · `#f4f4f5` · `#52525b` · `#d4d4d8` · `#27272a`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 36px · h2 24px · h3 14px · body 12px
- **Weights in use:** medium, semibold
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-[2.5rem]` (2.5rem)
- **Shadows:** `shadow-sm`, `shadow-2xl`, `shadow-lg`
- **Content width:** `max-w-6xl`
- **Section padding:** `py-12`
- **Common gaps:** `gap-1`, `gap-3`, `gap-2`

**Primary button**

```html
<a class="w-full bg-zinc-900 text-white rounded-xl py-3 px-4 text-sm font-medium hover:bg-zinc-800 transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. Feature grid (`features`)
3. Sign-in form (`auth-form`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels)
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #fafafa;
  --color-surface: #ffffff;
  --color-text: #18181b;
  --color-muted: #71717a;
  --color-border: #e4e4e7;
  --color-accent: #059669;
  --color-accent-2: #f43f5e;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
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
    line: '#e4e4e7',
    accent: '#059669',
    accent2: '#f43f5e',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the primary button as solid near-black (#18181b) with a white label
- **Do:** Lay foundations out in three columns: colours, type, components
- **Do:** Use green only for success states and the success swatch
- **Don't:** Don't add gradients or glows to the foundations board
- **Don't:** Don't use the success green as a button colour
- **Don't:** Don't use tinted surfaces; keep the page white with hairline grey borders

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
