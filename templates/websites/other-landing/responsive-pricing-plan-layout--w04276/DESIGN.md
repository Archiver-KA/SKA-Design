# Design system — Responsive Pricing Plan Layout

`SN-W04276` · other-landing · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A compact dark pricing block with a segmented Monthly and Yearly toggle and a green savings note above three plain cards. The cards use a charcoal surface with thin grey borders, and a small blue dot marks each tier name. Blue is kept for the recommended plan's button and the tier dots, while green is limited to check marks and the savings note.

**Mood:** plain, functional, dark, measured

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#101010` | Page ground |
| Surface | `#151515` | Cards, panels, raised areas |
| Text | `#d1d5db` | Headings and primary copy |
| Border | `#232323` | Hairlines, dividers, outlines |
| Accent | `#3b82f6` | Primary action and highlights |
| Second accent | `#4ade80` | Supporting highlights |

Palette by frequency of use: `#4ade80` · `#d1d5db` · `#ffffff` · `#9ca3af` · `#232323` · `#151515` · `#3b82f6` · `#e5e7eb` · `#2a2a2a` · `#101010`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h2 30px · body 14px
- **Weights in use:** medium, light, semibold

## Shape, spacing and layout

- **Corner radius:** `rounded-md` (6px), `rounded-xl` (12px), `rounded-full` (9999px)
- **Shadows:** `shadow-lg`
- **Content width:** `max-w-6xl`, `max-w-2xl`
- **Common gaps:** `gap-6`

**Primary button**

```html
<a class="w-full py-2 bg-[#232323] hover:bg-[#2a2a2a] text-white rounded-md transition">…</a>
```

## Page structure

Blocks in page order:

1. Pricing (`pricing`)

## Motion, effects and stack

- **Libraries:** Tailwind CSS (CDN)
- **Icons:** inline SVG

## Tokens

```css
:root {
  --color-background: #101010;
  --color-surface: #151515;
  --color-text: #d1d5db;
  --color-border: #232323;
  --color-accent: #3b82f6;
  --color-accent-2: #4ade80;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 6px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#101010',
    surface: '#151515',
    ink: '#d1d5db',
    line: '#232323',
    accent: '#3b82f6',
    accent2: '#4ade80',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use blue (#3b82f6) for the recommended plan's button and the tier dots
- **Do:** Use green (#4ade80) for check marks and the savings note only
- **Do:** Keep the plan cards charcoal with thin grey borders and no shadow
- **Don't:** Don't put green on the buttons
- **Don't:** Don't add gradients to the plan cards
- **Don't:** Don't replace the Monthly and Yearly toggle with a dropdown

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
