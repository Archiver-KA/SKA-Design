# Design system — Minimalist Distraction-Free Writing Template

`SN-W02118` · portfolio · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

The page uses a white ground [#ffffff], a pale grey surface [#f4f4f5] and dark zinc text [#27272a]. It uses Inter at small sizes, a single navigation bar and rounded-md corners, with no shadows or effects. The design is meant to be quiet, leaving the writing area as the only focus.

**Mood:** quiet, neutral, focused, plain, functional

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#f4f4f5` | Cards, panels, raised areas |
| Text | `#27272a` | Headings and primary copy |
| Border | `#e4e4e7` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#18181b` · `#27272a` · `#e4e4e7` · `#ffffff` · `#a1a1aa` · `#f4f4f5` · `#d4d4d8`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Weights in use:** medium
- **Letter spacing:** `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-md` (6px)
- **Content width:** `max-w-5xl`

**Primary button**

```html
<a class="group flex items-center justify-center p-2 rounded-md text-zinc-400 hover:text-zinc-900 hover:bg-zinc-100 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-zinc-200">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)

## Motion, effects and stack

- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #f4f4f5;
  --color-text: #27272a;
  --color-border: #e4e4e7;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 6px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#f4f4f5',
    ink: '#27272a',
    line: '#e4e4e7',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the writing surface on white (#ffffff) with text in #27272a.
- **Do:** Use the pale grey (#f4f4f5) for panels only, not for the writing area.
- **Do:** Keep the navigation to one bar with small text.
- **Don't:** Don't add shadows or gradients; the design has no effects.
- **Don't:** Don't add an accent colour to the page.
- **Don't:** Don't apply the rounded-md corners to full-width page sections.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
