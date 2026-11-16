# Design system — Lime Green Studios Product Studio Landing Page Template

`SN-W02074` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A minimal near-black loading screen (#050505) with one lime-green (#abff00) rounded square holding a two-letter mark, a white wordmark beside it, and a grey Loading line below. Lime is the only colour and is kept to the logo tile.

**Mood:** minimal, dark, energetic, modern, sharp

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#050505` | Page ground |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Accent | `#abff00` | Primary action and highlights |
| Second accent | `#a78bfa` | Supporting highlights |

Palette by frequency of use: `#abff00` · `#737373` · `#525252` · `#404040` · `#ffffff` · `#050505` · `#d4d4d4` · `#a3a3a3` · `#a78bfa` · `#22d3ee`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 16px · body 12px
- **Weights in use:** semibold, medium, bold
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded` (4px), `rounded-2xl` (16px)
- **Shadows:** `shadow-2xl`
- **Content width:** `max-w-6xl`, `max-w-4xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-2.5`, `gap-3`, `gap-1.5`

**Primary button**

```html
<a class="block text-sm font-semibold text-center py-2.5 rounded-full bg-lime mt-4">…</a>
```

## Page structure

Blocks in page order:

1. 3D / canvas scene (`3d-canvas`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Marquee (`marquee`)
5. Bento grid (`bento-grid`)
6. Services (`services`)
7. Process / steps (`how-it-works`)
8. Testimonials (`testimonials`)
9. Contact form (`contact-form`)
10. Footer (`footer`)

## Motion, effects and stack

- **Effects:** CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #050505;
  --color-text: #ffffff;
  --color-muted: #737373;
  --color-accent: #abff00;
  --color-accent-2: #a78bfa;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#050505',
    ink: '#ffffff',
    muted: '#737373',
    accent: '#abff00',
    accent2: '#a78bfa',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use the lime (#abff00) for the logo tile and as the single brand accent.
- **Do:** Keep backgrounds near-black (#050505) with white wordmarks.
- **Do:** Set status text such as Loading in a plain, small grey.
- **Don't:** Don't use lime for body text.
- **Don't:** Don't add gradients around the logo tile.
- **Don't:** Don't add colours beside the lime; the page is black, white and grey.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
