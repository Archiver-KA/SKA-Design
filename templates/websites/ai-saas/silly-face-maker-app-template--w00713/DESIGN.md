# Design system — Silly Face Maker App Template

`SN-W00713` · ai-saas · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A playful but restrained component panel: a light card with a dotted grid, a large flat yellow face on the left and a column of option tiles grouped as shape, colour, eyes and mouth. The selected tile is marked by a dark outline, not a fill. Colour comes from the preview face, so the controls stay neutral, with a near-black Randomize button beside a soft pink Crazy Mode button.

**Mood:** playful, neutral, tidy, soft, component-led

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fafafa` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#111827` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#111827` | Hairlines, dividers, outlines |
| Accent | `#fecdd3` | Primary action and highlights |
| Second accent | `#fde68a` | Supporting highlights |

Palette by frequency of use: `#111827` · `#6b7280` · `#ffffff` · `#000000` · `#9ca3af` · `#fecdd3` · `#e5e7eb` · `#e11d48` · `#f9fafb` · `#f43f5e`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 20px
- **Weights in use:** medium, semibold
- **Letter spacing:** `tracking-widest`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-2xl` (16px)
- **Shadows:** `shadow-sm`, `shadow-[0_4px_24px_rgba(0,0,0,0.02)]`
- **Content width:** `max-w-3xl`
- **Common gaps:** `gap-2`, `gap-1`, `gap-3`

## Page structure

Blocks in page order:

1. Hero (`hero`)

## Motion, effects and stack

- **Effects:** CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #fafafa;
  --color-surface: #ffffff;
  --color-text: #111827;
  --color-muted: #6b7280;
  --color-border: #111827;
  --color-accent: #fecdd3;
  --color-accent-2: #fde68a;
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
    ink: '#111827',
    muted: '#6b7280',
    line: '#111827',
    accent: '#fecdd3',
    accent2: '#fde68a',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Mark the selected option tile with a dark 1px outline, not a fill.
- **Do:** Keep the controls neutral and let the preview face carry the colour.
- **Do:** Use near-black (#111827) for the primary action and the pale pink for Crazy Mode only.
- **Don't:** Don't add gradients to the preview face; it is a flat fill.
- **Don't:** Don't fill selected tiles; the outline is the selection state.
- **Don't:** Don't add heavy shadows to the card.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
