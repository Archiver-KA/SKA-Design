# Design system — Service Pricing Plans Layout

`SN-W04094` · business-services · dark mode · Sinera Atlas theme `route` · language `en`

## Direction

A dark three-tier pricing section on black, with a centred white headline and a short grey intro. The middle plan is the focus, marked by a violet top label and a solid violet button, while the outer plans stay in outlined panels. Violet check marks and grey crosses make included and excluded features easy to scan.

**Mood:** clear, dark, structured, focused, minimal

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#9ca3af` | Secondary copy, captions |
| Border | `#374151` | Hairlines, dividers, outlines |
| Accent | `#6366f1` | Primary action and highlights |

Palette by frequency of use: `#818cf8` · `#9ca3af` · `#374151` · `#ffffff` · `#1f2937` · `#6b7280` · `#4b5563` · `#6366f1` · `#000000` · `#c084fc`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** system sans-serif
- **Body:** system sans-serif
- **Scale (largest breakpoint):** h2 48px · h3 20px
- **Weights in use:** light, medium
- **Letter spacing:** `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-xl` (12px), `rounded-md` (6px)
- **Content width:** `max-w-6xl`, `max-w-2xl`
- **Common gaps:** `gap-8`

**Primary button**

```html
<a class="block text-center py-3 px-6 border border-gray-700 rounded-md hover:bg-white/5 transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Pricing (`pricing`)

## Motion, effects and stack

- **Effects:** gradient fills
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** inline SVG

## Tokens

```css
:root {
  --color-background: #000000;
  --color-text: #ffffff;
  --color-muted: #9ca3af;
  --color-border: #374151;
  --color-accent: #6366f1;
  --font-display: "system sans-serif", serif;
  --font-body: "system sans-serif", serif;
  --radius: 12px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    ink: '#ffffff',
    muted: '#9ca3af',
    line: '#374151',
    accent: '#6366f1',
  },
  fontFamily: { display: ['system sans-serif'], sans: ['system sans-serif'] },
} }
```

## Do and don't

- **Do:** Set the recommended plan's label and button in violet (#6366f1)
- **Do:** Keep the outer plan cards outlined in grey (#374151) with white text
- **Do:** Use violet check marks for included features and grey crosses for excluded ones
- **Don't:** Don't use violet for prices or headings
- **Don't:** Don't fill the outer plan buttons with colour
- **Don't:** Don't highlight more than one plan

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
