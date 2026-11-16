# Design system — Dynamic Prompt Template Editor

`SN-W04190` · other-landing · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark form panel on a near-black ground (#09090b), built from zinc tones: a slightly lighter panel (#27272a) with grey-violet input borders (#3f3f46) and light grey labels. The primary Copy button is solid indigo (#4f46e5), and the secondary Save action is an outline. Compact system sans-serif type and small radii keep the tool-like tone, and template variables appear as small highlighted tags inside the text.

**Mood:** functional, dark, precise, quiet

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#09090b` | Page ground |
| Surface | `#27272a` | Cards, panels, raised areas |
| Text | `#e4e4e7` | Headings and primary copy |
| Muted text | `#a1a1aa` | Secondary copy, captions |
| Border | `#3f3f46` | Hairlines, dividers, outlines |
| Accent | `#4f46e5` | Primary action and highlights |
| Second accent | `#fbbf24` | Supporting highlights |

Palette by frequency of use: `#27272a` · `#3f3f46` · `#a1a1aa` · `#e4e4e7` · `#6366f1` · `#71717a` · `#fbbf24` · `#09090b` · `#18181b` · `#fcd34d`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** system sans-serif
- **Body:** system sans-serif
- **Scale (largest breakpoint):** h3 14px
- **Weights in use:** medium

## Shape, spacing and layout

- **Corner radius:** `rounded` (4px), `rounded-lg` (8px)
- **Shadows:** `shadow-lg`
- **Common gaps:** `gap-2`

**Primary button**

```html
<a class="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded text-xs font-medium transition-colors">…</a>
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
  --color-accent: #4f46e5;
  --color-accent-2: #fbbf24;
  --font-display: "system sans-serif", serif;
  --font-body: "system sans-serif", serif;
  --radius: 4px;
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
    accent: '#4f46e5',
    accent2: '#fbbf24',
  },
  fontFamily: { display: ['system sans-serif'], sans: ['system sans-serif'] },
} }
```

## Do and don't

- **Do:** Use solid indigo (#4f46e5) on the one primary action only
- **Do:** Keep input fields on the zinc panel with a visible border (#3f3f46)
- **Do:** Show template variables as small highlighted tags inside text
- **Don't:** Don't place a second filled button of equal weight beside the primary
- **Don't:** Don't add decorative gradients to the panel
- **Don't:** Don't use light backgrounds for the editor

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
