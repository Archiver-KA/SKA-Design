# Design system — Network Infrastructure Visualization

`SN-W04245` · other-landing · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark two-column dashboard card on near-black (#030712), with a left panel reserved for a map and a right panel of metrics. Headings are white and bold, body and labels are muted grey, and the progress bars are plain light grey rather than coloured. Small uppercase tags sit above each panel title, and the buttons are one grey and one solid white.

**Mood:** technical, muted, dashboard, restrained

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#030712` | Page ground |
| Surface | `#1f2937` | Cards, panels, raised areas |
| Text | `#9ca3af` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#1f2937` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#9ca3af` · `#1f2937` · `#d1d5db` · `#000000` · `#e5e7eb` · `#030712` · `#ffffff` · `#6b7280` · `#111827` · `#374151`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h2 24px · h3 20px · body 14px
- **Weights in use:** medium, bold, semibold

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-xl` (12px)
- **Shadows:** `shadow-lg`
- **Content width:** `max-w-4xl`

**Primary button**

```html
<a class="px-4 py-2 bg-gray-800 hover:bg-gray-700 text-gray-200 rounded-lg transition flex items-center">…</a>
```

## Page structure

Blocks in page order:

1. 3D / canvas scene (`3d-canvas`)
2. Map / location (`map-location`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels)
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** inline SVG

## Tokens

```css
:root {
  --color-background: #030712;
  --color-surface: #1f2937;
  --color-text: #9ca3af;
  --color-muted: #6b7280;
  --color-border: #1f2937;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#030712',
    surface: '#1f2937',
    ink: '#9ca3af',
    muted: '#6b7280',
    line: '#1f2937',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep progress bars in plain light grey, without colour
- **Do:** Set panel titles bold white, with labels in muted grey
- **Do:** Use small uppercase tags above each panel title
- **Don't:** Don't add accent colours to the metrics; the page is grey-scale
- **Don't:** Don't use light panels on the near-black ground
- **Don't:** Don't remove the two-column split; the map and metrics are paired

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
