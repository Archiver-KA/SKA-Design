# Design system — Advanced Interactive Chess Game Template

`SN-W03666` · entertainment · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A utilitarian dark chess interface, with charcoal panels and small uppercase labels on the left and the board on the right. Controls are plain: a solid white button for the main action, segmented toggles for side and opponent, and a row of colour swatches for board styling. Hierarchy comes from spacing and type size rather than from colour.

**Mood:** functional, quiet, minimal, technical

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Surface | `#27272a` | Cards, panels, raised areas |
| Text | `#d4d4d8` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#27272a` | Hairlines, dividers, outlines |
| Accent | `#ffffff` | Primary action and highlights |
| Second accent | `#818cf8` | Supporting highlights |

Palette by frequency of use: `#27272a` · `#71717a` · `#e4e4e7` · `#a1a1aa` · `#ffffff` · `#3f3f46` · `#18181b` · `#f4f4f5` · `#d4d4d8` · `#52525b`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Weights in use:** medium, semibold, extrabold
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-md` (6px), `rounded` (4px)
- **Shadows:** `shadow-sm`, `shadow`, `shadow-inner`
- **Content width:** `max-w-6xl`, `max-w-[640px]`
- **Common gaps:** `gap-0.5`, `gap-1.5`, `gap-3`

**Primary button**

```html
<a class="flex items-center justify-center gap-2 w-full py-2 px-4 bg-zinc-100 text-zinc-950 hover:bg-white rounded border border-transparent transition-colors text-sm font-medium">…</a>
```

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN), Three.js, AOS scroll reveal
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #0a0a0a;
  --color-surface: #27272a;
  --color-text: #d4d4d8;
  --color-muted: #71717a;
  --color-border: #27272a;
  --color-accent: #ffffff;
  --color-accent-2: #818cf8;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0a0a0a',
    surface: '#27272a',
    ink: '#d4d4d8',
    muted: '#71717a',
    line: '#27272a',
    accent: '#ffffff',
    accent2: '#818cf8',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use the solid white button for the one primary action
- **Do:** Set labels in small uppercase with wide tracking
- **Do:** Keep segmented controls as flat grey pills with one selected state
- **Don't:** Don't add bright colours to the controls; the interface is neutral
- **Don't:** Don't place the board on a light panel
- **Don't:** Don't add coloured highlights beyond the board swatches

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
