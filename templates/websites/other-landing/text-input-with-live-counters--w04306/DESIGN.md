# Design system — Text Input with Live Counters

`SN-W04306` · other-landing · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A compact dark panel on near-black [#09090b] with grey input areas and a single indigo [#6366f1] button for the main action. Each counter sits in its own dark tile with a thin progress bar beneath the figure, and the type is plain system sans-serif. The result is a utility-first tool that stays out of the way of the text being written.

**Mood:** utilitarian, compact, dark, quiet, functional

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#09090b` | Page ground |
| Surface | `#27272a` | Cards, panels, raised areas |
| Text | `#e4e4e7` | Headings and primary copy |
| Muted text | `#a1a1aa` | Secondary copy, captions |
| Border | `#3f3f46` | Hairlines, dividers, outlines |
| Accent | `#6366f1` | Primary action and highlights |

Palette by frequency of use: `#27272a` · `#a1a1aa` · `#3f3f46` · `#6366f1` · `#e4e4e7` · `#71717a` · `#09090b` · `#18181b` · `#4f46e5` · `#4338ca`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** system sans-serif
- **Body:** system sans-serif
- **Scale (largest breakpoint):** h3 14px
- **Weights in use:** medium

## Shape, spacing and layout

- **Corner radius:** `rounded-md` (6px), `rounded` (4px), `rounded-full` (9999px)
- **Shadows:** `shadow-xl`
- **Common gaps:** `gap-2`

**Primary button**

```html
<a class="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded text-xs font-medium transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Call to action (`cta`)
2. Contact form (`contact-form`)

## Motion, effects and stack

- **Libraries:** Tailwind CSS (CDN)
- **Icons:** inline SVG

## Tokens

```css
:root {
  --color-background: #09090b;
  --color-surface: #27272a;
  --color-text: #e4e4e7;
  --color-muted: #a1a1aa;
  --color-border: #3f3f46;
  --color-accent: #6366f1;
  --font-display: "system sans-serif", serif;
  --font-body: "system sans-serif", serif;
  --radius: 6px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#09090b',
    surface: '#27272a',
    ink: '#e4e4e7',
    muted: '#a1a1aa',
    line: '#3f3f46',
    accent: '#6366f1',
  },
  fontFamily: { display: ['system sans-serif'], sans: ['system sans-serif'] },
} }
```

## Do and don't

- **Do:** Use the indigo (#6366f1) only for the primary action button
- **Do:** Show each count with a thin progress bar under its number
- **Do:** Keep the panel narrow and centred with rounded-md corners
- **Don't:** Don't use a light background for the tool panel
- **Don't:** Don't add decorative imagery that competes with the text area
- **Don't:** Don't set the counter numbers in a large display type

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
