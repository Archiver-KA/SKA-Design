# Design system — Flight Itinerary Overview Panel

`SN-W03048` · travel · light mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A flight itinerary card styled as a light app panel: a pale slate page (#f1f5f9) holds a white card with a pale sky-blue header band (#e0f2fe) and slate text (#334155). Information is grouped in rows with small grey labels above each value, and the airport codes and times are the largest type. Blue appears only as a quiet tint in the header and icons, so the content stays calm and readable.

**Mood:** calm, clear, utilitarian, airy

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f1f5f9` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#334155` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#f1f5f9` | Hairlines, dividers, outlines |
| Accent | `#7dd3fc` | Primary action and highlights |

Palette by frequency of use: `#334155` · `#64748b` · `#f1f5f9` · `#ffffff` · `#f8fafc` · `#e0f2fe` · `#e2e8f0` · `#475569` · `#f0f9ff` · `#38bdf8`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** system sans-serif
- **Body:** system sans-serif
- **Scale (largest breakpoint):** h1 20px
- **Weights in use:** medium, bold

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-lg` (8px)
- **Shadows:** `shadow-sm`, `shadow-xl`
- **Common gaps:** `gap-4`, `gap-3`

**Primary button**

```html
<a class="flex-1 bg-sky-100 text-sky-600 py-3 rounded-lg font-medium border border-sky-200">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. Booking form (`booking`)

## Motion, effects and stack

- **Libraries:** Tailwind CSS (CDN)
- **Icons:** inline SVG

## Tokens

```css
:root {
  --color-background: #f1f5f9;
  --color-surface: #ffffff;
  --color-text: #334155;
  --color-muted: #64748b;
  --color-border: #f1f5f9;
  --color-accent: #7dd3fc;
  --font-display: "system sans-serif", serif;
  --font-body: "system sans-serif", serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f1f5f9',
    surface: '#ffffff',
    ink: '#334155',
    muted: '#64748b',
    line: '#f1f5f9',
    accent: '#7dd3fc',
  },
  fontFamily: { display: ['system sans-serif'], sans: ['system sans-serif'] },
} }
```

## Do and don't

- **Do:** Put times and airport codes in the largest type inside each flight row
- **Do:** Use the pale sky tint (#e0f2fe) only for the header band
- **Do:** Keep labels small and grey (#64748b) above each value
- **Don't:** Don't use a saturated blue for buttons or headers
- **Don't:** Don't wrap every flight row in a card with heavy shadows
- **Don't:** Don't drop the booking reference from the top of the panel

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
