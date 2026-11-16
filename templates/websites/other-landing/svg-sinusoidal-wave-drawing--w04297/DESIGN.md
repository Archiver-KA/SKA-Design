# Design system — SVG Sinusoidal Wave Drawing

`SN-W04297` · other-landing · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark navy demo on #0f172a, with a sky-blue (#0ea5e9) wave that draws itself across a slate panel. The gridlines are faint, the replay button uses the same blue, and the explanatory text sits below in light grey. The effect is technical and calm, built on stroke animation rather than decoration.

**Mood:** technical, calm, dark, minimal

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0f172a` | Page ground |
| Surface | `#1e293b` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#cbd5e1` | Secondary copy, captions |
| Accent | `#0ea5e9` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#0f172a` · `#1e293b` · `#0ea5e9` · `#0284c7` · `#cbd5e1`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** system sans-serif
- **Body:** system sans-serif
- **Scale (largest breakpoint):** h1 30px
- **Weights in use:** bold

## Shape, spacing and layout

- **Corner radius:** `rounded-xl` (12px), `rounded-md` (6px)
- **Shadows:** `shadow-xl`
- **Content width:** `max-w-4xl`, `max-w-2xl`
- **Section padding:** `py-12`

**Primary button**

```html
<a class="px-4 py-2 bg-sky-500 hover:bg-sky-600 text-white rounded-md transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)

## Motion, effects and stack

- **Effects:** custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** inline SVG

## Tokens

```css
:root {
  --color-background: #0f172a;
  --color-surface: #1e293b;
  --color-text: #ffffff;
  --color-muted: #cbd5e1;
  --color-accent: #0ea5e9;
  --font-display: "system sans-serif", serif;
  --font-body: "system sans-serif", serif;
  --radius: 12px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0f172a',
    surface: '#1e293b',
    ink: '#ffffff',
    muted: '#cbd5e1',
    accent: '#0ea5e9',
  },
  fontFamily: { display: ['system sans-serif'], sans: ['system sans-serif'] },
} }
```

## Do and don't

- **Do:** Draw the sky-blue (#0ea5e9) wave as a single stroke on the slate panel
- **Do:** Keep the grid lines faint and the replay button in the same blue
- **Do:** Set the explanatory text in light grey below the panel
- **Don't:** Don't add a second bright colour to the wave panel
- **Don't:** Don't fill the panel with gradients
- **Don't:** Don't remove the replay control

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
