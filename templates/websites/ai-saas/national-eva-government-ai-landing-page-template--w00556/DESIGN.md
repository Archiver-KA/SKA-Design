# Design system — National EVA Government AI Landing Page Template

`SN-W00556` · ai-saas · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

An official, plain hero on a white ground with a very large near-black headline, 'National EVA', set across two lines in a neutral sans-serif. Grey supporting text explains the purpose in a formal tone, and a small tag with a green dot marks the category. Colour is almost absent, so scale and whitespace carry the page rather than accent colours.

**Mood:** official, plain, airy, formal

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#17191f` | Cards, panels, raised areas |
| Text | `#000000` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#e5e7eb` | Hairlines, dividers, outlines |
| Accent | `#22c55e` | Primary action and highlights |
| Second accent | `#22c55e` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#6b7280` · `#9ca3af` · `#e5e7eb` · `#000000` · `#4b5563` · `#d1d5db` · `#17191f` · `#f6f7fa` · `#f3f4f6`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h2 48px · h3 24px · body 14px
- **Weights in use:** medium, bold, semibold
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-[24px]` (24px)
- **Shadows:** `shadow-lg`, `shadow-sm`, `shadow-xl`
- **Content width:** `max-w-[1400px]`, `max-w-3xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-4`, `gap-8`

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Stats band (`stats`)
4. About (`about`)
5. Feature grid (`features`)
6. Product grid (`product-grid`)
7. Integrations (`integrations`)

## Motion, effects and stack

- **Effects:** blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Three.js, Unicorn Studio (WebGL scenes)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #17191f;
  --color-text: #000000;
  --color-muted: #6b7280;
  --color-border: #e5e7eb;
  --color-accent: #22c55e;
  --color-accent-2: #22c55e;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#17191f',
    ink: '#000000',
    muted: '#6b7280',
    line: '#e5e7eb',
    accent: '#22c55e',
    accent2: '#22c55e',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in near-black (#000000) at very large size
- **Do:** Keep the page ground white (#ffffff) with grey supporting text (#6b7280)
- **Do:** Use the green dot in the category tag as the only colour cue in the hero
- **Don't:** Don't put the page on a dark ground; it stays white
- **Don't:** Don't add decorative colour blocks to the hero
- **Don't:** Don't reduce the headline well below its large scale; the scale is the design

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
