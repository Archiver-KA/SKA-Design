# Design system — Artist Portfolio Website Template

`SN-W01815` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

Cinematic and musical: a black-and-white hero photograph of performers sits behind a wide, decorative display title in white, with a small uppercase line and one white pill button below. The page is monochrome, and the mood comes from the grayscale photo and the centred title. Navigation is minimal, and the layout is a single full-screen hero.

**Mood:** cinematic, monochrome, dramatic, minimal

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#e5e5e5` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#34d399` | Primary action and highlights |

Palette by frequency of use: `#000000` · `#ffffff` · `#a3a3a3` · `#171717` · `#737373` · `#525252` · `#34d399` · `#d4d4d4` · `#050505` · `#fff7ed`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** var(--font-sans)
- **Body:** var(--font-sans)
- **Loaded families:** Inter, Space Grotesk
- **Scale (largest breakpoint):** h2 48px · h3 16px · body 14px
- **Weights in use:** medium, normal
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-none` (0)
- **Shadows:** `shadow-2xl`
- **Content width:** `max-w-7xl`, `max-w-5xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-1`, `gap-6`, `gap-8`

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Listings (`listings`)
4. Video / media (`video-media`)
5. Footer (`footer`)
6. Modal / overlay (`modal-overlay`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #e5e5e5;
  --color-text: #ffffff;
  --color-muted: #737373;
  --color-border: #ffffff;
  --color-accent: #34d399;
  --font-display: "var(--font-sans)", sans-serif;
  --font-body: "var(--font-sans)", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#e5e5e5',
    ink: '#ffffff',
    muted: '#737373',
    line: '#ffffff',
    accent: '#34d399',
  },
  fontFamily: { display: ['var(--font-sans)'], sans: ['var(--font-sans)'] },
} }
```

## Do and don't

- **Do:** Keep the hero photograph grayscale and the page black and white
- **Do:** Set the title in a wide, centred display face in white
- **Do:** Use one white pill button for the primary action
- **Don't:** Don't use the mint accent (#34d399) in the hero.
- **Don't:** Don't set the hero on a white ground
- **Don't:** Don't add graphics over the performers

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
