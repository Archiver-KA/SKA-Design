# Design system — Creative Portfolio Landing Page Template

`SN-W01897` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A dark page with a light-weight sans headline in pale grey, and a two-column card grid of rounded panels with thin borders. The bio card and the skill list use small pill tags for keywords, and a green dot marks availability. Colour is kept to the status dot and icons, so the cards carry the structure and the page reads as calm.

**Mood:** calm, dark, orderly, modern

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0b0b0c` | Page ground |
| Surface | `#000000` | Cards, panels, raised areas |
| Text | `#e5e5e5` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#34d399` | Primary action and highlights |
| Second accent | `#fbbf24` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#a3a3a3` · `#000000` · `#e5e5e5` · `#d4d4d4` · `#f5f5f5` · `#22d3ee` · `#34d399` · `#e879f9` · `#fbbf24`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist
- **Scale (largest breakpoint):** h1 60px · h2 24px · h3 24px · body 14px
- **Weights in use:** medium, semibold
- **Letter spacing:** `tracking-tighter`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-xl` (12px)
- **Shadows:** `shadow-sm`, `shadow-[0_10px_40px_-10px_rgba(0,0,0,0.6)]`, `shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)]`
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Common gaps:** `gap-3`, `gap-2`, `gap-x-3`

**Primary button**

```html
<a class="inline-flex items-center gap-2 rounded-full border bg-white/[0.03] px-4 py-2 text-sm font-medium transition backdrop-blur border-white/10 text-neutral-100 hover:bg-white/10">…</a>
```

## Page structure

Blocks in page order:

1. 3D / canvas scene (`3d-canvas`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Services (`services`)
5. Contact form (`contact-form`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Spline 3D
- **Icons:** Lucide, Iconify

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

- **Do:** Set the headline in a light-weight sans in pale grey.
- **Do:** Use the green (#34d399) only for the availability dot and small icons.
- **Do:** Put keywords in small outlined pill tags inside the bio card.
- **Don't:** Don't fill the cards with colour; they stay near-black with thin borders.
- **Don't:** Don't set the headline in bold; the light weight is part of the look.
- **Don't:** Don't square off the rounded corners on the cards.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
