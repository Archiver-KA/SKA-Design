# Design system — Segmented Control with Nested Options

`SN-W04284` · other-landing · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A single dark segmented control on a flat charcoal ground (#171717). The two options sit in a fully rounded track, and the selected segment is raised to a slightly lighter grey with a faint edge. Labels are small, bold and white, and there is no accent colour, so the control reads as neutral and precise.

**Mood:** minimal, neutral, dark, precise

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#171717` | Page ground |
| Surface | `#262626` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#e5e7eb` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#ffffff` · `#171717` · `#262626` · `#e5e7eb`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** system sans-serif
- **Body:** system sans-serif
- **Weights in use:** semibold

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px)
- **Shadows:** `shadow-lg`
- **Common gaps:** `gap-0`

## Page structure

Blocks in page order:

1. Contact form (`contact-form`)

## Motion, effects and stack

- **Libraries:** Tailwind CSS (CDN)

## Tokens

```css
:root {
  --color-background: #171717;
  --color-surface: #262626;
  --color-text: #ffffff;
  --color-muted: #e5e7eb;
  --color-border: #ffffff;
  --font-display: "system sans-serif", serif;
  --font-body: "system sans-serif", serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#171717',
    surface: '#262626',
    ink: '#ffffff',
    muted: '#e5e7eb',
    line: '#ffffff',
  },
  fontFamily: { display: ['system sans-serif'], sans: ['system sans-serif'] },
} }
```

## Do and don't

- **Do:** Set the track in charcoal (#262626) on the #171717 ground with fully rounded ends
- **Do:** Raise the selected segment to a lighter grey with a faint edge
- **Do:** Keep labels small, bold and white, with no accent colour
- **Don't:** Don't add a colour to the selected state
- **Don't:** Don't use square corners on the track
- **Don't:** Don't enlarge the labels beyond the height of the control

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
