# Design system — Spa & Wellness Landing Page Template

`SN-W02531` · healthcare · light mode · Sinera Atlas theme `calm` · language `en`

## Direction

A centred, photo-led spa hero: a full-bleed massage photograph under a soft overlay carries a white, centred serif headline with an italic second line. The interface is restrained, with a thin white navigation over the image and white pill buttons that read clearly on the photograph. The imagery and white type carry the look.

**Mood:** serene, photographic, centred, soft

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fafaf9` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#57534e` | Headings and primary copy |
| Muted text | `#78716c` | Secondary copy, captions |
| Border | `#f5f5f4` | Hairlines, dividers, outlines |
| Accent | `#78350f` | Primary action and highlights |

Palette by frequency of use: `#1c1917` · `#ffffff` · `#78716c` · `#57534e` · `#fafaf9` · `#f5f5f4` · `#f59e0b` · `#78350f` · `#292524` · `#a8a29e`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** Manrope
- **Loaded families:** Manrope, Playfair Display
- **Scale (largest breakpoint):** h1 96px · h2 36px · h3 20px · body 14px
- **Weights in use:** medium, light, bold
- **Letter spacing:** `tracking-wider`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-lg` (8px)
- **Shadows:** `shadow-sm`, `shadow-xl`, `shadow-lg`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-24`, `py-12`
- **Common gaps:** `gap-2`, `gap-4`, `gap-6`

**Primary button**

```html
<a class="hidden md:inline-flex items-center justify-center px-6 py-2.5 bg-stone-900 text-white text-xs font-semibold uppercase tracking-wider rounded-full hover:bg-amber-900 transition-colors shadow-sm">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Pricing (`pricing`)
5. Feature grid (`features`)
6. Timeline (`timeline`)
7. Testimonials (`testimonials`)
8. Contact form (`contact-form`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #fafaf9;
  --color-surface: #ffffff;
  --color-text: #57534e;
  --color-muted: #78716c;
  --color-border: #f5f5f4;
  --color-accent: #78350f;
  --font-display: "Playfair Display", serif;
  --font-body: "Manrope", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fafaf9',
    surface: '#ffffff',
    ink: '#57534e',
    muted: '#78716c',
    line: '#f5f5f4',
    accent: '#78350f',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['Manrope'] },
} }
```

## Do and don't

- **Do:** Set the hero headline centred in a white serif, with the second line in italic
- **Do:** Put the hero over a full-bleed photograph under a soft dark overlay
- **Do:** Use white pill buttons with dark text, one filled and one outlined
- **Don't:** Don't set the hero headline in a sans face
- **Don't:** Don't add saturated colour over the photograph
- **Don't:** Don't use the brown accent (#78350f) for hero buttons.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
