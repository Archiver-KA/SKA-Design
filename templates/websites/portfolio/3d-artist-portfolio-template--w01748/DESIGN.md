# Design system — 3D Artist Portfolio Template

`SN-W01748` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

The component is a dark artist-portfolio timeline on pure black [#000000] with zinc surfaces [#18181b] and grey text [#a1a1aa]. It is built in React with Framer Motion and a Three.js scene, and its 18px base size and blend-mode effects give a restrained, gallery-style presentation.

**Mood:** dark, restrained, gallery-style, quiet

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#18181b` | Cards, panels, raised areas |
| Text | `#a1a1aa` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#ffffff` · `#71717a` · `#a1a1aa` · `#000000` · `#18181b` · `#27272a` · `#09090b` · `#e4e4e7` · `#3f3f46` · `#d4d4d8`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 18px · h2 48px · h3 14px · body 14px
- **Weights in use:** medium, semibold, light
- **Letter spacing:** `tracking-wider`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-2xl` (16px)
- **Shadows:** `shadow-2xl`
- **Content width:** `max-w-4xl`, `max-w-2xl`
- **Common gaps:** `gap-4`, `gap-1`, `gap-6`

**Primary button**

```html
<a class="absolute top-4 right-4 z-10 text-zinc-400 hover:text-white bg-black/20 backdrop-blur rounded-full p-2 transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Timeline (`timeline`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN), Three.js, AOS scroll reveal, Framer Motion, React
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #18181b;
  --color-text: #a1a1aa;
  --color-muted: #71717a;
  --color-border: #ffffff;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#18181b',
    ink: '#a1a1aa',
    muted: '#71717a',
    line: '#ffffff',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use black (#000000) for the background with zinc (#18181b) for surfaces
- **Do:** Set the timeline text in grey (#a1a1aa) with muted captions (#71717a)
- **Do:** Keep the timeline spacing modest and let the 3D scene carry the visual interest
- **Don't:** Don't add bright accent colours.
- **Don't:** Don't set the component on a light background
- **Don't:** Don't enlarge the type past the template's modest base size

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
