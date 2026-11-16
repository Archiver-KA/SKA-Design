# Design system — Personal Trainer Landing Page Template

`SN-W02662` · sports-fitness · dark mode · Sinera Atlas theme `calm` · language `en`

## Direction

A black gym hero with a large white sans-serif headline in which the words DREAM PHYSIQUE are set in lime (#a6e93a). The lime is the only colour and also fills the top-right button and a small status pill. A black-and-white photograph of gym equipment sits in a rounded frame on the right, so the page is high-contrast and sporty.

**Mood:** high-contrast, sporty, black, fresh, direct

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#262626` | Hairlines, dividers, outlines |
| Accent | `#a6e93a` | Primary action and highlights |

Palette by frequency of use: `#a6e93a` · `#ffffff` · `#000000` · `#262626` · `#171717` · `#737373` · `#a3a3a3` · `#d4d4d4` · `#404040` · `#525252`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Montserrat
- **Body:** Montserrat
- **Loaded families:** Montserrat, Oswald, Geist, Roboto, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 24px · body 14px
- **Weights in use:** medium, light, semibold
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-[30px]` (30px), `rounded-[24px]` (24px), `rounded-full` (9999px)
- **Shadows:** `shadow-[0_0_30px_rgba(166,233,58,0.05)]`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-20`
- **Common gaps:** `gap-4`, `gap-8`, `gap-6`

**Primary button**

```html
<a class="bg-[#A6E93A] text-black px-6 py-2.5 rounded-[30px] font-semibold hover:bg-white transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Services (`services`)
5. Stats band (`stats`)
6. Testimonials (`testimonials`)
7. Timeline (`timeline`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #ffffff;
  --color-text: #ffffff;
  --color-muted: #737373;
  --color-border: #262626;
  --color-accent: #a6e93a;
  --font-display: "Montserrat", sans-serif;
  --font-body: "Montserrat", sans-serif;
  --radius: 30px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#ffffff',
    ink: '#ffffff',
    muted: '#737373',
    line: '#262626',
    accent: '#a6e93a',
  },
  fontFamily: { display: ['Montserrat'], sans: ['Montserrat'] },
} }
```

## Do and don't

- **Do:** Set the emphasis words of each headline in #a6e93a on a black ground.
- **Do:** Use lime for the primary button and the small status pill only.
- **Do:** Frame photographs with rounded corners of 30px or more.
- **Don't:** Don't put lime text on white or light grey.
- **Don't:** Don't use the lime as a large background fill.
- **Don't:** Don't use a light background for the hero; the design relies on the black.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
