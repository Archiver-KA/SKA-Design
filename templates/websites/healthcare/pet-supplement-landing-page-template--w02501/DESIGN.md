# Design system — Pet Supplement Landing Page Template

`SN-W02501` · healthcare · light mode · Sinera Atlas theme `calm` · language `en`

## Direction

A soft, warm-neutral product hero on off-white (#f9f9f8), with a large charcoal headline whose second line is set in a lighter grey and a rounded dog photograph as the anchor image. Dark pill buttons carry the call to action, and a small pale-yellow (#fef3c7) dot marks the floating data card. Inter at large size with generous whitespace keeps the tone calm and trustworthy.

**Mood:** warm, calm, trustworthy, clean

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f9f9f8` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#27272a` | Headings and primary copy |
| Muted text | `#78716c` | Secondary copy, captions |
| Border | `#e7e5e4` | Hairlines, dividers, outlines |
| Accent | `#fef3c7` | Primary action and highlights |
| Second accent | `#991b1b` | Supporting highlights |

Palette by frequency of use: `#27272a` · `#e7e5e4` · `#ffffff` · `#a8a29e` · `#78716c` · `#f5f5f4` · `#d6d3d1` · `#f9f9f8` · `#57534e` · `#fef3c7`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 30px · h3 14px · body 12px
- **Weights in use:** medium, semibold, light
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-2xl` (16px)
- **Shadows:** `shadow-sm`, `shadow-[0_2px_8px_rgba(0,0,0,0.02)]`, `shadow-lg`
- **Content width:** `max-w-6xl`, `max-w-[180px]`
- **Common gaps:** `gap-3`, `gap-2`, `gap-4`

**Primary button**

```html
<a class="text-xs font-medium text-stone-500 hover:text-[#27272A] px-4 py-2 rounded-full hover:bg-stone-100/50 transition-all">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Bento grid (`bento-grid`)
5. Newsletter signup (`newsletter`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #f9f9f8;
  --color-surface: #ffffff;
  --color-text: #27272a;
  --color-muted: #78716c;
  --color-border: #e7e5e4;
  --color-accent: #fef3c7;
  --color-accent-2: #991b1b;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f9f9f8',
    surface: '#ffffff',
    ink: '#27272a',
    muted: '#78716c',
    line: '#e7e5e4',
    accent: '#fef3c7',
    accent2: '#991b1b',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in Inter with the second line in a lighter grey
- **Do:** Frame product photography with rounded corners and float one small data card over it
- **Do:** Use dark pill buttons for the primary action and outlined pills for secondary
- **Don't:** Don't use the pale yellow (#fef3c7) for buttons or text; it is a small tag accent only
- **Don't:** Don't use the red (#991b1b) accent.
- **Don't:** Don't set the photograph in a hard-edged box

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
