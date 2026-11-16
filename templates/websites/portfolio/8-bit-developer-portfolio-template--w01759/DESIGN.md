# Design system — 8-Bit Developer Portfolio Template

`SN-W01759` · portfolio · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

The design is a Game Boy device illustration on a warm light grey ground (#f5f5f4), with a white handset body and an olive-green screen (#8bac0f) framed in grey. Red buttons (#b91c1c) and a Press Start 2P face give the page its retro character, and the device is the single recognisable object. Colour stays within the device palette, so the page reads as an object on a plain stage.

**Mood:** retro, playful, minimal, object-centred

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f5f5f4` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#1c1917` | Headings and primary copy |
| Muted text | `#78716c` | Secondary copy, captions |
| Border | `#78716c` | Hairlines, dividers, outlines |
| Accent | `#b91c1c` | Primary action and highlights |
| Second accent | `#8bac0f` | Supporting highlights |

Palette by frequency of use: `#1c1917` · `#a8a29e` · `#78716c` · `#ffffff` · `#b91c1c` · `#d6d3d1` · `#0c0a09` · `#7f1d1d` · `#8bac0f` · `#306230`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Press Start 2P
- **Body:** Press Start 2P
- **Loaded families:** Press Start 2P
- **Scale (largest breakpoint):** h1 24px · h2 12px · h3 12px
- **Weights in use:** bold, black, normal
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded` (4px)
- **Shadows:** `shadow-none`, `shadow-md`, `shadow-[2px_2px_0px_#500]`
- **Content width:** `max-w-[420px]`
- **Common gaps:** `gap-1`, `gap-2`, `gap-4`

**Primary button**

```html
<a class="mt-2 w-full bg-gb-darkest text-gb-lightest py-2 text-[10px] hover:opacity-90 active:translate-y-1">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)

## Motion, effects and stack

- **Effects:** CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #f5f5f4;
  --color-surface: #ffffff;
  --color-text: #1c1917;
  --color-muted: #78716c;
  --color-border: #78716c;
  --color-accent: #b91c1c;
  --color-accent-2: #8bac0f;
  --font-display: "Press Start 2P", sans-serif;
  --font-body: "Press Start 2P", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f5f5f4',
    surface: '#ffffff',
    ink: '#1c1917',
    muted: '#78716c',
    line: '#78716c',
    accent: '#b91c1c',
    accent2: '#8bac0f',
  },
  fontFamily: { display: ['Press Start 2P'], sans: ['Press Start 2P'] },
} }
```

## Do and don't

- **Do:** Keep the Game Boy screen in olive green (#8bac0f) as the most saturated area.
- **Do:** Set headings and UI labels in Press Start 2P.
- **Do:** Use the red (#b91c1c) only for the device buttons and the primary action.
- **Don't:** Don't add gradients or glass effects; the look is flat and device-like.
- **Don't:** Don't set long paragraphs in Press Start 2P; pixel type is hard to read in bulk.
- **Don't:** Don't add a second accent colour beside the device palette.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
