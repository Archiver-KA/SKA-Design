# Design system — Substance Lab Design Practice Template

`SN-W02244` · portfolio · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A soft, light studio page on a warm off-white ground (#fbfaf7), with one large pale iridescent glass sphere as the centrepiece. The palette leans green and stays quiet: a deep green pill button (#1e4d33) is the only solid colour in the nav. Blurred translucent shapes float behind the nav and the sphere, so depth comes from translucency rather than shadow, and that is what makes the page recognisable.

**Mood:** soft, airy, premium, translucent, calm

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fbfaf7` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#12281a` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#1e4d33` | Primary action and highlights |
| Second accent | `#e4efda` | Supporting highlights |

Palette by frequency of use: `#000000` · `#ffffff` · `#42a85d` · `#1e4d33` · `#fbfaf7` · `#12281a` · `#2a6647` · `#e4efda`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Geist
- **Body:** Geist
- **Loaded families:** Geist, Inter, Instrument Serif
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 20px · body 12px
- **Weights in use:** light, medium, normal
- **Letter spacing:** `tracking-tighter`, `tracking-[0.25em]`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-xl` (12px)
- **Shadows:** `shadow-xl`, `shadow-2xl`, `shadow-black/10`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Common gaps:** `gap-2`, `gap-2.5`, `gap-6`

**Primary button**

```html
<a class="ml-1 sm:ml-2 bg-[#1E4D33] hover:bg-[#2A6647] active:scale-95 text-white text-sm font-medium px-4 sm:px-5 py-2 rounded-full transition-all duration-300 whitespace-nowrap shadow-lg shadow-[#1E4D33]/30">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Case studies (`case-studies`)
4. Product grid (`product-grid`)
5. Logo cloud (`logo-cloud`)
6. Testimonials (`testimonials`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #fbfaf7;
  --color-surface: #ffffff;
  --color-text: #12281a;
  --color-border: #ffffff;
  --color-accent: #1e4d33;
  --color-accent-2: #e4efda;
  --font-display: "Geist", sans-serif;
  --font-body: "Geist", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fbfaf7',
    surface: '#ffffff',
    ink: '#12281a',
    line: '#ffffff',
    accent: '#1e4d33',
    accent2: '#e4efda',
  },
  fontFamily: { display: ['Geist'], sans: ['Geist'] },
} }
```

## Do and don't

- **Do:** Keep the ground at #fbfaf7 and place one translucent glass form in the hero.
- **Do:** Use the deep green (#1e4d33) only for the primary nav action.
- **Do:** Build depth with blur and translucency, not drop shadows.
- **Don't:** Don't fill sections with saturated colour; the iridescence stays inside the sphere.
- **Don't:** Don't use a dark page ground in this style.
- **Don't:** Don't set the nav as a full-width bar; it floats as a rounded pill.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
