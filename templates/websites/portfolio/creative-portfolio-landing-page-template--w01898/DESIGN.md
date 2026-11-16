# Design system — Creative Portfolio Landing Page Template

`SN-W01898` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A near-black page with a light-weight sans headline, where the name is set in white and 'Your Creator' in a lighter grey. The layout is a card grid: a dark portrait placeholder, a bio card with keyword pills, and a list of rows with small green icon tiles. Green appears only on the availability dot and the icons, so the cards carry the structure.

**Mood:** calm, dark, technical, orderly

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0b0b0c` | Page ground |
| Surface | `#000000` | Cards, panels, raised areas |
| Text | `#e5e5e5` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#34d399` | Primary action and highlights |
| Second accent | `#fbbf24` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#a3a3a3` · `#d4d4d4` · `#000000` · `#e5e5e5` · `#f5f5f5` · `#34d399` · `#22d3ee` · `#e879f9` · `#fbbf24`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 60px · h2 24px · h3 24px · body 14px
- **Weights in use:** medium, semibold
- **Letter spacing:** `tracking-tighter`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-xl` (12px)
- **Shadows:** `shadow-sm`, `shadow-[0_10px_40px_-10px_rgba(0,0,0,0.6)]`, `shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)]`
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Common gaps:** `gap-3`, `gap-2`, `gap-8`

## Page structure

Blocks in page order:

1. 3D / canvas scene (`3d-canvas`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Call to action (`cta`)
5. Video / media (`video-media`)
6. Services (`services`)
7. Contact form (`contact-form`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN), Spline 3D
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #0b0b0c;
  --color-surface: #000000;
  --color-text: #e5e5e5;
  --color-border: #ffffff;
  --color-accent: #34d399;
  --color-accent-2: #fbbf24;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0b0b0c',
    surface: '#000000',
    ink: '#e5e5e5',
    line: '#ffffff',
    accent: '#34d399',
    accent2: '#fbbf24',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the name in white and the title in lighter grey, in a light-weight sans.
- **Do:** Use the green (#34d399) for the availability dot and icon tiles only.
- **Do:** Keep keyword tags as small pills inside the bio card.
- **Don't:** Don't add a bright hero image; the portrait slot stays a dark card.
- **Don't:** Don't use the green for body copy.
- **Don't:** Don't make the cards solid colour blocks; they stay near-black.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
