# Design system — 3D Portfolio Landing Page Template

`SN-W01756` · portfolio · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

Inter carries both display and body text at a modest 20px heading size, with dark grey text ([#52525b]) on a white ground. The base is restrained, with visual interest coming from Three.js scenes and blend-mode layering rather than from typography or colour.

**Mood:** restrained, neutral, scene-driven, modern

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Text | `#52525b` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#ffffff` · `#050505` · `#52525b` · `#000000` · `#d4d4d8` · `#71717a` · `#ef4444` · `#27272a`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 20px
- **Weights in use:** semibold, medium
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** none used — square corners
- **Common gaps:** `gap-1`, `gap-8`, `gap-2`

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Hero (`hero`)

## Motion, effects and stack

- **Effects:** blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN), Three.js, React
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-text: #52525b;
  --color-muted: #71717a;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    ink: '#52525b',
    muted: '#71717a',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headings in Inter at a modest size, not oversized display type.
- **Do:** Let the Three.js scenes and blend-mode effects carry the visual interest instead of added colour.
- **Do:** Keep body text in dark grey (#52525b) on the white ground.
- **Don't:** Don't add a second display typeface; the design uses Inter only.
- **Don't:** Don't place large neutral panels over the 3D scenes; they compete with them.
- **Don't:** Don't add shadow-heavy cards.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
