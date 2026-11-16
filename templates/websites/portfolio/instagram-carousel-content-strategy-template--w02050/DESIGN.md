# Design system — Instagram Carousel Content Strategy Template

`SN-W02050` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `ru`

## Direction

A single dark slide in the style of an Instagram carousel: a near-black card (#000000) with a bold white Inter headline and one phrase set in grey as a pivot. Body copy is small and grey, and a handle sits at the foot of the card. The look is typographic and minimal, so the slide reads as text with no imagery or ornament.

**Mood:** typographic, minimal, dark, editorial, bold

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#111111` | Page ground |
| Surface | `#000000` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#22c55e` | Primary action and highlights |
| Second accent | `#ef4444` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#525252` · `#737373` · `#000000` · `#a3a3a3` · `#d4d4d4` · `#22c55e` · `#404040` · `#ef4444` · `#111111`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 48px · h2 30px · h3 20px · body 18px
- **Weights in use:** semibold, medium, light
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded` (4px)
- **Shadows:** `shadow-2xl`, `shadow-[0_0_40px_rgba(255,255,255,0.15)]`, `shadow-inner`
- **Content width:** `max-w-[250px]`
- **Common gaps:** `gap-4`, `gap-2`, `gap-5`

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. Feature grid (`features`)

## Motion, effects and stack

- **Effects:** gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #111111;
  --color-surface: #000000;
  --color-text: #ffffff;
  --color-muted: #737373;
  --color-border: #ffffff;
  --color-accent: #22c55e;
  --color-accent-2: #ef4444;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#111111',
    surface: '#000000',
    ink: '#ffffff',
    muted: '#737373',
    line: '#ffffff',
    accent: '#22c55e',
    accent2: '#ef4444',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in Inter bold, white, with the key phrase in grey.
- **Do:** Keep the slide on near-black with white and grey text only.
- **Do:** Place the handle and a small caption at the foot of the card.
- **Don't:** Don't add imagery or decoration; the slide is text-led.
- **Don't:** Don't use bright colours for body copy.
- **Don't:** Don't set the headline in a light weight.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
