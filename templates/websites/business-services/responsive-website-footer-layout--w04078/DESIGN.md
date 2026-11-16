# Design system — Responsive Website Footer Layout

`SN-W04078` · business-services · dark mode · Sinera Atlas theme `route` · language `en`

## Direction

A dark indigo footer with four even columns: a brand block with a violet gradient mark and short description, then product, company and support link lists in grey. Small indigo icon buttons sit in a row under the brand, and a thin rule separates the legal line. The palette stays within deep navy and violet, which keeps the footer calm and consistent.

**Mood:** calm, tidy, dark, consistent, quiet

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0f172a` | Page ground |
| Text | `#9ca3af` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Accent | `#312e81` | Primary action and highlights |

Palette by frequency of use: `#9ca3af` · `#312e81` · `#9333ea` · `#ffffff` · `#d1d5db` · `#c084fc` · `#0f172a` · `#a78bfa` · `#1e1b4b` · `#4f46e5`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Space Grotesk
- **Body:** Space Grotesk
- **Loaded families:** Space Grotesk
- **Scale (largest breakpoint):** body 14px
- **Weights in use:** semibold, bold

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px)
- **Content width:** `max-w-6xl`
- **Common gaps:** `gap-10`

## Page structure

Blocks in page order:

1. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** inline SVG

## Tokens

```css
:root {
  --color-background: #0f172a;
  --color-text: #9ca3af;
  --color-muted: #6b7280;
  --color-accent: #312e81;
  --font-display: "Space Grotesk", sans-serif;
  --font-body: "Space Grotesk", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0f172a',
    ink: '#9ca3af',
    muted: '#6b7280',
    accent: '#312e81',
  },
  fontFamily: { display: ['Space Grotesk'], sans: ['Space Grotesk'] },
} }
```

## Do and don't

- **Do:** Set column headings in white and links in muted grey
- **Do:** Use indigo (#312e81) for the icon button backgrounds
- **Do:** Keep the violet gradient mark (#9333ea) as the only bright element in the footer
- **Don't:** Don't add light backgrounds to footer sections
- **Don't:** Don't introduce a second accent colour in the footer
- **Don't:** Don't move the legal line above the footer rule

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
