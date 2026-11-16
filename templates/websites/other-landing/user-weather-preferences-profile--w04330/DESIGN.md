# Design system — User Weather Preferences Profile

`SN-W04330` · other-landing · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A light preferences screen on off-white with a white profile header, a solid blue initial avatar and a list of unit toggles below. Each row shows its unit on the right, and the on state is a solid blue [#2563eb] switch while off switches are pale grey. Blue is the single interactive colour, so the avatar and the switches share one hue.

**Mood:** clear, utilitarian, light, calm, functional

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f8f8f8` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#111111` | Headings and primary copy |
| Muted text | `#7c94b5` | Secondary copy, captions |
| Border | `#eff6ff` | Hairlines, dividers, outlines |
| Accent | `#2563eb` | Primary action and highlights |
| Second accent | `#dc2626` | Supporting highlights |

Palette by frequency of use: `#7c94b5` · `#1e40af` · `#2563eb` · `#ffffff` · `#eff6ff` · `#f8f8f8` · `#dc2626` · `#3b82f6` · `#1d4ed8` · `#fef2f2`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** system sans-serif
- **Body:** system sans-serif
- **Scale (largest breakpoint):** h1 24px · h2 18px
- **Weights in use:** medium

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-3xl` (24px)
- **Shadows:** `shadow-sm`, `shadow-md`
- **Common gaps:** `gap-3`

## Page structure

Blocks in page order:

1. Hero (`hero`)

## Motion, effects and stack

- **Effects:** gradient fills
- **Libraries:** Tailwind CSS (CDN)

## Tokens

```css
:root {
  --color-background: #f8f8f8;
  --color-surface: #ffffff;
  --color-text: #111111;
  --color-muted: #7c94b5;
  --color-border: #eff6ff;
  --color-accent: #2563eb;
  --color-accent-2: #dc2626;
  --font-display: "system sans-serif", serif;
  --font-body: "system sans-serif", serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f8f8f8',
    surface: '#ffffff',
    ink: '#111111',
    muted: '#7c94b5',
    line: '#eff6ff',
    accent: '#2563eb',
    accent2: '#dc2626',
  },
  fontFamily: { display: ['system sans-serif'], sans: ['system sans-serif'] },
} }
```

## Do and don't

- **Do:** Use solid blue (#2563eb) for on-state switches and the avatar only
- **Do:** Pair each toggle with a short unit label on the right
- **Do:** Group notification settings under their own heading below preferences
- **Don't:** Don't use blue for plain text links inside the rows
- **Don't:** Don't turn off-state switches into coloured tracks
- **Don't:** Don't set the unit labels in a bold weight

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
