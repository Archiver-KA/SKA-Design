# Design system — Client Testimonials and Success Stories

`SN-W04168` · other-landing · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A testimonial section on a deep navy-slate ground (#111827), with a bold white heading whose final phrase is set in blue (#60a5fa). A wide featured quote card sits above a row of smaller cards, all with thin grey borders and rounded corners. Yellow (#facc15) appears only as star ratings, and the quotes are set in italic.

**Mood:** clear, structured, dark, trustworthy

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#111827` | Page ground |
| Surface | `#1f2937` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#d1d5db` | Secondary copy, captions |
| Border | `#374151` | Hairlines, dividers, outlines |
| Accent | `#facc15` | Primary action and highlights |
| Second accent | `#60a5fa` | Supporting highlights |

Palette by frequency of use: `#facc15` · `#ffffff` · `#1f2937` · `#d1d5db` · `#374151` · `#60a5fa` · `#111827` · `#3b82f6` · `#9ca3af` · `#f3f4f6`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** IBM Plex Sans
- **Body:** IBM Plex Sans
- **Loaded families:** IBM Plex Sans
- **Scale (largest breakpoint):** h2 36px · body 14px
- **Weights in use:** medium, bold, semibold

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-2xl` (16px)
- **Shadows:** `shadow-lg`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-20`
- **Common gaps:** `gap-8`

## Page structure

Blocks in page order:

1. Testimonials (`testimonials`)

## Motion, effects and stack

- **Libraries:** Tailwind CSS (CDN)
- **Icons:** inline SVG

## Tokens

```css
:root {
  --color-background: #111827;
  --color-surface: #1f2937;
  --color-text: #ffffff;
  --color-muted: #d1d5db;
  --color-border: #374151;
  --color-accent: #facc15;
  --color-accent-2: #60a5fa;
  --font-display: "IBM Plex Sans", sans-serif;
  --font-body: "IBM Plex Sans", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#111827',
    surface: '#1f2937',
    ink: '#ffffff',
    muted: '#d1d5db',
    line: '#374151',
    accent: '#facc15',
    accent2: '#60a5fa',
  },
  fontFamily: { display: ['IBM Plex Sans'], sans: ['IBM Plex Sans'] },
} }
```

## Do and don't

- **Do:** Set the final phrase of the heading in blue (#60a5fa).
- **Do:** Use yellow (#facc15) only for star ratings.
- **Do:** Keep cards on #1f2937 with a #374151 border and rounded corners.
- **Don't:** Don't use the yellow for buttons or links.
- **Don't:** Don't set quotes upright; they stay italic.
- **Don't:** Don't use a light background for the cards.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
