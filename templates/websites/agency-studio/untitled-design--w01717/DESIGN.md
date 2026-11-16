# Design system — Untitled Design

`SN-W01717` · agency-studio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A monochrome dark agency page: pure black ground, white and grey type, and no colour in the hero at all. Inter does everything, with the headline set very large and tight, and the second half of the headline dropped to grey so the lead line carries the weight. Depth comes from translucent glass panels and a stack of labelled service cards on the right, not from colour or imagery.

**Mood:** monochrome, stark, bold, technical, minimal

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#171717` | Cards, panels, raised areas |
| Text | `#d4d4d4` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#f43f5e` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#a3a3a3` · `#000000` · `#f43f5e` · `#fb7185` · `#737373` · `#171717` · `#d4d4d4` · `#e5e5e5` · `#262626`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 72px · h3 16px
- **Weights in use:** medium, semibold, light
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-md` (6px)
- **Content width:** `max-w-[100px]`, `max-w-[1800px]`
- **Common gaps:** `gap-4`, `gap-3`, `gap-2`

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Services (`services`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #171717;
  --color-text: #d4d4d4;
  --color-muted: #737373;
  --color-border: #ffffff;
  --color-accent: #f43f5e;
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
    surface: '#171717',
    ink: '#d4d4d4',
    muted: '#737373',
    line: '#ffffff',
    accent: '#f43f5e',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the hero in black, white and grey with no accent colour
- **Do:** Set headlines in Inter at display size with tight tracking
- **Do:** Use translucent glass panels for service cards and side panels
- **Don't:** Don't introduce a rose or red accent into the hero
- **Don't:** Don't use serif type for headlines
- **Don't:** Don't put imagery behind the headline; the page relies on type alone

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
