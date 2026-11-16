# Design system — Creative Studio Landing Page Template

`SN-W01494` · agency-studio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A pure black hero (#000000) where the headline reads 'We believe in purpose-driven humans.', with the middle phrase fading from light to grey and the final word in white. A muted grey paragraph sits centred beneath, followed by a solid white pill and an outlined pill. The layout is wide, centred and almost entirely typographic, with no colour in the first screen.

**Mood:** sparse, centred, typographic, calm

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#18181b` | Cards, panels, raised areas |
| Text | `#e4e4e7` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#ffffff` | Primary action and highlights |
| Second accent | `#a45a02` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#71717a` · `#000000` · `#18181b` · `#d4d4d8` · `#27272a` · `#f9fafb` · `#a1a1aa` · `#e4e4e7` · `#e5e5e5`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Space Grotesk, Geist, Roboto, Montserrat, Poppins
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 24px · body 14px
- **Weights in use:** light, medium, normal
- **Letter spacing:** `tracking-wide`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-sm` (2px), `rounded-[2.5rem]` (2.5rem)
- **Shadows:** `shadow-sm`, `shadow-lg`, `shadow-[0_20px_60px_rgba(0,0,0,0.06)]`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-48`
- **Common gaps:** `gap-3`, `gap-6`, `gap-4`

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Marquee (`marquee`)
4. Video / media (`video-media`)
5. Contact form (`contact-form`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Three.js, Unicorn Studio (WebGL scenes)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #18181b;
  --color-text: #e4e4e7;
  --color-muted: #71717a;
  --color-border: #ffffff;
  --color-accent: #ffffff;
  --color-accent-2: #a45a02;
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
    ink: '#e4e4e7',
    muted: '#71717a',
    line: '#ffffff',
    accent: '#ffffff',
    accent2: '#a45a02',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in a regular-to-light sans at large size, and fade the middle phrase to grey.
- **Do:** Keep the ground pure black (#000000) with white and grey type only.
- **Do:** Use a solid white pill for the primary action and an outlined pill for the video link.
- **Don't:** Don't add a green accent; the page has no accent colour.
- **Don't:** Don't place imagery behind the headline on the first screen.
- **Don't:** Don't set the body copy in white; it stays muted grey (#a1a1aa).

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
