# Design system — Untitled Design

`SN-W03653` · events · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A minimal, dark registration page on a near-black ground, with a light sans-serif headline centred over two lines and a small pill label above it. The form sits in a dark rounded panel with muted grey labels and dark inputs, each separated by generous spacing. There is no colour anywhere; the layout relies on tonal steps of black and grey and hairline outlines.

**Mood:** minimal, sober, dark, focused

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#09090b` | Page ground |
| Surface | `#18181b` | Cards, panels, raised areas |
| Text | `#f4f4f5` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#27272a` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#a1a1aa` · `#27272a` · `#09090b` · `#f4f4f5` · `#3f3f46` · `#18181b` · `#71717a` · `#52525b` · `#d4d4d8` · `#e4e4e7`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 36px · h2 16px · h3 12px · body 14px
- **Weights in use:** medium
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-lg` (8px), `rounded-full` (9999px), `rounded-2xl` (16px)
- **Shadows:** `shadow-2xl`, `shadow-black`
- **Content width:** `max-w-3xl`, `max-w-2xl`
- **Section padding:** `py-12`, `py-20`
- **Common gaps:** `gap-4`, `gap-2`, `gap-3`

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels)
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #09090b;
  --color-surface: #18181b;
  --color-text: #f4f4f5;
  --color-muted: #71717a;
  --color-border: #27272a;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 8px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#09090b',
    surface: '#18181b',
    ink: '#f4f4f5',
    muted: '#71717a',
    line: '#27272a',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in a light sans-serif in near-white (#f4f4f5), centred
- **Do:** Build form panels from tonal steps of black and grey (#18181b, #09090b)
- **Do:** Keep input labels muted grey and placeholder text dimmer still
- **Don't:** Don't add a bright accent colour to the form
- **Don't:** Don't use light input backgrounds
- **Don't:** Don't place the form over a photographic background

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
