# Design system — Luxury Hotel Landing Page Template

`SN-W03089` · travel · dark mode · Sinera Atlas theme `dwell` · language `ru`

## Direction

A dark hospitality page on a warm near-black ground (#1a1412). Headlines are set in Cormorant Garamond at large size, and one italic word in each headline is coloured pale sky blue (#7dd3fc), the only accent. Labels are small uppercase Inter with wide tracking, and the booking bar is an outlined panel with thin borders rather than a filled block.

**Mood:** quiet, luxurious, dark, precise

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#1a1412` | Page ground |
| Text | `#ffffff` | Headings and primary copy |
| Accent | `#7dd3fc` | Primary action and highlights |

Palette by frequency of use: `#38bdf8` · `#ffffff` · `#7dd3fc` · `#1a1412` · `#0c4a6e`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Cormorant Garamond
- **Body:** Inter
- **Loaded families:** Inter, Cormorant Garamond, Geist, Roboto, Montserrat, Poppins
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 48px · body 12px
- **Weights in use:** light, medium, semibold
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px)
- **Content width:** `max-w-screen-2xl`, `max-w-4xl`
- **Section padding:** `py-32`, `py-20`
- **Common gaps:** `gap-3`, `gap-6`, `gap-2`

**Primary button**

```html
<a class="bg-gold-400 text-dark-950 px-6 py-2.5 text-[10px] font-medium uppercase tracking-widest hover:bg-gold-300 transition-all font-instrument-serif">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Listings (`listings`)
4. Stats band (`stats`)
5. Call to action (`cta`)
6. Feature grid (`features`)
7. Testimonials (`testimonials`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #1a1412;
  --color-text: #ffffff;
  --color-accent: #7dd3fc;
  --font-display: "Cormorant Garamond", serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#1a1412',
    ink: '#ffffff',
    accent: '#7dd3fc',
  },
  fontFamily: { display: ['Cormorant Garamond'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headlines in Cormorant Garamond and colour one italic word per headline in #7dd3fc
- **Do:** Use small uppercase tracked Inter labels above headlines
- **Do:** Build form and booking fields as thin outlined boxes on the dark ground
- **Don't:** Don't use the pale blue for body text or large fills
- **Don't:** Don't add filled coloured buttons; the page relies on outlines
- **Don't:** Don't set the page on a light background

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
