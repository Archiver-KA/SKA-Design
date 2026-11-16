# Design system — TW Winner Announcement

`SN-W04311` · other-landing · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark prize-reveal page on black with a large white headline and a grid of prize cards, each with a thin border and a white caption beneath. The page keeps its own chrome black and white, so the colour comes from the prize images themselves. The layout is simple and centred, built for a moment of reveal rather than for reading.

**Mood:** celebratory, minimal, dark, game-like, clear

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#f3f4f6` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#10b981` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#000000` · `#10b981` · `#f9fafb` · `#e2e8f0` · `#34d399` · `#f3f4f6` · `#374151` · `#111827`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 60px · h2 20px · body 14px
- **Weights in use:** semibold, medium, bold
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-xl` (12px), `rounded-full` (9999px), `rounded-lg` (8px)
- **Shadows:** `shadow-[0_0_30px_-5px_rgba(255,255,255,0.15)]`, `shadow-2xl`, `shadow-[0_0_15px_-3px_rgba(16,185,129,0.2)]`
- **Content width:** `max-w-4xl`, `max-w-6xl`
- **Common gaps:** `gap-1.5`, `gap-2`, `gap-4`

## Page structure

Blocks in page order:

1. Video / media (`video-media`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Gallery / portfolio (`gallery-portfolio`)
5. Modal / overlay (`modal-overlay`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Unicorn Studio (WebGL scenes)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #f3f4f6;
  --color-text: #ffffff;
  --color-border: #ffffff;
  --color-accent: #10b981;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 12px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#f3f4f6',
    ink: '#ffffff',
    line: '#ffffff',
    accent: '#10b981',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep prize cards in an even grid with thin borders
- **Do:** Use white type for headlines and captions
- **Do:** Let the prize images carry the colour on the page
- **Don't:** Don't use a light page background; the reveal is built for black
- **Don't:** Don't add accent colours to the card chrome
- **Don't:** Don't place caption text over busy parts of an image

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
