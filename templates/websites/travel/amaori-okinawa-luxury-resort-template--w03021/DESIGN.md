# Design system — AMAORI Okinawa Luxury Resort Template

`SN-W03021` · travel · light mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A high-end hotel page on a pale grey ground, built from large rounded cards. The left card is solid near-black with a large sans headline in white, and the right card is a full-bleed photograph of sky and terrace. Uppercase monospace labels run along the top, giving a quiet editorial rhythm with almost no colour.

**Mood:** cinematic, airy, restrained, high-end

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#e7e7e7` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#111827` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#111111` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#d4d4d8` · `#71717a` · `#a1a1aa` · `#52525b` · `#000000` · `#111111` · `#18181b` · `#e7e7e7` · `#191c21`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, JetBrains Mono
- **Scale (largest breakpoint):** h1 72px · h2 60px · h3 24px · body 14px
- **Weights in use:** medium, normal, light
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-xl` (12px)
- **Shadows:** `shadow-2xl`, `shadow-sm`, `shadow-xl`
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Section padding:** `py-16`, `py-24`
- **Common gaps:** `gap-3`, `gap-4`, `gap-2`

**Primary button**

```html
<a class="group inline-flex items-center gap-2 rounded-full bg-[#111111] px-4 py-2 text-xs font-medium text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#191C21] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:ring-offset-2 focus:ring-offset-[#e7e7e7]">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Feature grid (`features`)
5. Testimonials (`testimonials`)
6. Pricing (`pricing`)
7. Contact form (`contact-form`)
8. Gallery / portfolio (`gallery-portfolio`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN), GSAP
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #e7e7e7;
  --color-surface: #ffffff;
  --color-text: #111827;
  --color-muted: #71717a;
  --color-border: #ffffff;
  --color-accent: #111111;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#e7e7e7',
    surface: '#ffffff',
    ink: '#111827',
    muted: '#71717a',
    line: '#ffffff',
    accent: '#111111',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the hero headline in large white sans on a near-black card
- **Do:** Pair the dark card with a full-bleed photograph of the property
- **Do:** Use uppercase monospace for the top label strip
- **Don't:** Don't add a coloured accent; the page is black, white and grey
- **Don't:** Don't use hard square corners; cards use large radii
- **Don't:** Don't set body copy over the photograph; it sits on the dark card

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
