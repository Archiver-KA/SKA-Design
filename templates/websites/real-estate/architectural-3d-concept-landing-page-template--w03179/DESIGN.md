# Design system — Architectural 3D Concept Landing Page Template

`SN-W03179` · real-estate · dark mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A near-black, minimal 3D concept page with a left sidebar of small white nav items and a right column of slider controls. The 3D viewport takes the centre, and small uppercase labels name each control. Greys do all the work, from the grey page tone to white labels. Type is small and quiet, with the title as the only large text.

**Mood:** minimal, technical, dark, quiet

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#27272a` | Page ground |
| Surface | `#050505` | Cards, panels, raised areas |
| Text | `#e4e4e7` | Headings and primary copy |
| Muted text | `#d4d4d8` | Secondary copy, captions |
| Border | `#52525b` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#27272a` · `#a1a1aa` · `#e4e4e7` · `#52525b` · `#ffffff` · `#71717a` · `#d4d4d8` · `#f4f4f5` · `#18181b` · `#050505`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 18px
- **Weights in use:** medium, semibold
- **Letter spacing:** `tracking-tighter`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px)
- **Content width:** `max-w-7xl`
- **Common gaps:** `gap-3`, `gap-2`, `gap-10`

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. 3D / canvas scene (`3d-canvas`)
3. Sidebar (`sidebar`)

## Motion, effects and stack

- **Effects:** custom keyframes
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #27272a;
  --color-surface: #050505;
  --color-text: #e4e4e7;
  --color-muted: #d4d4d8;
  --color-border: #52525b;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#27272a',
    surface: '#050505',
    ink: '#e4e4e7',
    muted: '#d4d4d8',
    line: '#52525b',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the page in the palette greys, with white for labels
- **Do:** Use small uppercase labels for the control panel
- **Do:** Place the 3D canvas in the centre, with the sidebar and controls at the edges
- **Don't:** Don't use accent colours; the page is monochrome
- **Don't:** Don't set body copy larger than the labels; the type stays small
- **Don't:** Don't add shadows or raised cards to the controls

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
