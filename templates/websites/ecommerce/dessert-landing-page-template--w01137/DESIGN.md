# Design system — Dessert Landing Page Template

`SN-W01137` · ecommerce · light mode · Sinera Atlas theme `market` · language `en`

## Direction

A soft dessert page on a pale blush ground has a heavy sans-serif headline in dark brown, with its second line in dusty salmon (#e8a598). The primary button is a deep brown pill, and the photograph on the right sits in a blush panel with small white rounded cards floating over it. The palette is warm and gentle, with brown carrying the text and the buttons.

**Mood:** soft, warm, playful, gentle

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fdf2f0` | Page ground |
| Text | `#111111` | Headings and primary copy |
| Border | `#fff9f2` | Hairlines, dividers, outlines |
| Accent | `#5c3d2e` | Primary action and highlights |
| Second accent | `#e8a598` | Supporting highlights |

Palette by frequency of use: `#5c3d2e` · `#ffffff` · `#fff9f2` · `#e8a598` · `#25d366` · `#fdf2f0` · `#f4e8d8` · `#4a3024`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 18px · body 14px
- **Weights in use:** medium, semibold, light
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-[2rem]` (2rem)
- **Shadows:** `shadow-premium`, `shadow-sm`, `shadow-xl`
- **Content width:** `max-w-7xl`, `max-w-[90rem]`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-4`, `gap-8`

**Primary button**

```html
<a class="hidden md:inline-flex items-center justify-center rounded-full bg-[#5C3D2E] text-white px-5 py-2.5 text-sm font-medium hover:bg-[#4A3024] transition-colors shadow-sm">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Menu list (`menu-list`)
5. Process / steps (`how-it-works`)
6. Testimonials (`testimonials`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #fdf2f0;
  --color-text: #111111;
  --color-border: #fff9f2;
  --color-accent: #5c3d2e;
  --color-accent-2: #e8a598;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fdf2f0',
    ink: '#111111',
    line: '#fff9f2',
    accent: '#5c3d2e',
    accent2: '#e8a598',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in heavy sans-serif, with the second line in dusty salmon (#e8a598)
- **Do:** Use the deep brown (#5c3d2e) for the primary button and text emphasis
- **Do:** Float small white rounded cards over the hero photograph for detail
- **Don't:** Don't use salmon as a button colour; its contrast on blush is too low
- **Don't:** Don't add the WhatsApp green (#25d366) to the hero.
- **Don't:** Don't introduce more than two warm colours in the hero

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
