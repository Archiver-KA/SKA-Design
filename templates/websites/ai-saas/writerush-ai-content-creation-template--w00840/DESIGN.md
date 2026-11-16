# Design system — WriteRush AI Content Creation Template

`SN-W00840` · ai-saas · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A light dashboard on a pale lavender ground, with a dark left admin sidebar and white cards. The top tabs and the selected platform use a violet gradient (#7a3ef0), which is the only strong colour on the screen. Platform choices are bordered tiles with small icons, and the form sits in a rounded white panel, so the page reads as a practical tool rather than a showcase.

**Mood:** practical, tool-like, light, structured

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f3f5fd` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#1f2430` | Headings and primary copy |
| Muted text | `#8b90a7` | Secondary copy, captions |
| Border | `#c8ccda` | Hairlines, dividers, outlines |
| Accent | `#7a3ef0` | Primary action and highlights |
| Second accent | `#d05ae8` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#1f2430` · `#8b90a7` · `#d9ddea` · `#cfd5e6` · `#7a3ef0` · `#6f7387` · `#c8ccda` · `#76798b` · `#d8c5ff`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** system sans-serif
- **Body:** system sans-serif
- **Scale (largest breakpoint):** h1 36px · body 16px
- **Weights in use:** normal, medium, semibold
- **Letter spacing:** `tracking-wide`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-xl` (12px), `rounded-full` (9999px), `rounded-2xl` (16px)
- **Shadows:** `shadow-sm`
- **Content width:** `max-w-3xl`
- **Common gaps:** `gap-3`, `gap-4`, `gap-2`

**Primary button**

```html
<a class="context-card w-full rounded-xl border border-[#d9ddea] bg-white px-4 py-4 text-left transition hover:border-[#cfd5e6]">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)

## Motion, effects and stack

- **Effects:** gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #f3f5fd;
  --color-surface: #ffffff;
  --color-text: #1f2430;
  --color-muted: #8b90a7;
  --color-border: #c8ccda;
  --color-accent: #7a3ef0;
  --color-accent-2: #d05ae8;
  --font-display: "system sans-serif", serif;
  --font-body: "system sans-serif", serif;
  --radius: 12px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f3f5fd',
    surface: '#ffffff',
    ink: '#1f2430',
    muted: '#8b90a7',
    line: '#c8ccda',
    accent: '#7a3ef0',
    accent2: '#d05ae8',
  },
  fontFamily: { display: ['system sans-serif'], sans: ['system sans-serif'] },
} }
```

## Do and don't

- **Do:** Use the violet (#7a3ef0) for the selected tab and the selected platform tile only
- **Do:** Keep the dashboard on the pale lavender ground with white rounded cards
- **Do:** Use a dark sidebar for navigation with small white labels
- **Don't:** Don't add a second accent colour to the form
- **Don't:** Don't fill cards with the violet
- **Don't:** Don't put body text on the lavender ground in the lightest grey

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
