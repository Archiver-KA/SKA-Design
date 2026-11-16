# Design system — Code Editor Styled User Testimonials

`SN-W04171` · other-landing · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark code editor presents testimonials as data, with a tab bar, line numbers and syntax colours on a #111827 ground. Pink (#f472b6) highlights the heading word and the left border of each entry, and mint green (#86efac) is used for the quoted text. The window has rounded corners and a darker title bar, while the heading uses the default sans-serif.

**Mood:** technical, playful, dark, data-like

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#111827` | Page ground |
| Surface | `#1f2937` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Accent | `#f472b6` | Primary action and highlights |
| Second accent | `#86efac` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#6b7280` · `#f472b6` · `#86efac` · `#1f2937` · `#111827` · `#60a5fa` · `#9ca3af` · `#fb923c` · `#93c5fd`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** system sans-serif
- **Body:** system sans-serif
- **Scale (largest breakpoint):** h2 30px
- **Weights in use:** bold

## Shape, spacing and layout

- **Corner radius:** `rounded-lg` (8px), `rounded-full` (9999px)
- **Shadows:** `shadow-2xl`
- **Content width:** `max-w-5xl`
- **Section padding:** `py-12`

## Page structure

Blocks in page order:

1. Testimonials (`testimonials`)

## Motion, effects and stack

- **Libraries:** Tailwind CSS (CDN)

## Tokens

```css
:root {
  --color-background: #111827;
  --color-surface: #1f2937;
  --color-text: #ffffff;
  --color-muted: #6b7280;
  --color-accent: #f472b6;
  --color-accent-2: #86efac;
  --font-display: "system sans-serif", serif;
  --font-body: "system sans-serif", serif;
  --radius: 8px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#111827',
    surface: '#1f2937',
    ink: '#ffffff',
    muted: '#6b7280',
    accent: '#f472b6',
    accent2: '#86efac',
  },
  fontFamily: { display: ['system sans-serif'], sans: ['system sans-serif'] },
} }
```

## Do and don't

- **Do:** Use pink (#f472b6) for the heading highlight and each entry's left border.
- **Do:** Set quoted text in mint green (#86efac).
- **Do:** Keep line numbers in grey beside each entry.
- **Don't:** Don't add a light background behind the editor.
- **Don't:** Don't set testimonial text in plain white without code styling.
- **Don't:** Don't use pink for quoted text.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
