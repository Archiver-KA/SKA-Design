# Design system — Accounting & Business Services Landing Page Template

`SN-W00849` · fintech-crypto · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A near-black accounting hero with a three-line headline in white, grey and gold (#ffd369) on the final line. A gold slogan line with a thin left rule carries the trust message, and a photo of a hand holding a calculator sits on the right under a dark overlay. Gold is the only accent, kept to the headline and the primary button.

**Mood:** serious, dark, trustworthy, warm

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#050505` | Page ground |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#ffd369` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#737373` · `#a3a3a3` · `#d4d4d4` · `#000000` · `#404040` · `#ffd369` · `#050505` · `#333333` · `#555555`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Manrope
- **Body:** Manrope
- **Loaded families:** Manrope
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 20px · body 14px
- **Weights in use:** medium, bold, semibold
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-lg` (8px), `rounded-full` (9999px), `rounded-xl` (12px)
- **Shadows:** `shadow-2xl`, `shadow-[0_0_25px_-5px_rgba(242,201,76,0.4)]`, `shadow-black`
- **Content width:** `max-w-4xl`
- **Section padding:** `py-24`, `py-12`
- **Common gaps:** `gap-4`, `gap-2`, `gap-1`

**Primary button**

```html
<a class="px-8 py-4 bg-gold-gradient text-charcoal-900 font-semibold rounded-lg hover:shadow-[0_0_25px_-5px_rgba(242,201,76,0.4)] transition-all duration-300 text-center flex items-center justify-center gap-2">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Team (`team`)
4. Services (`services`)
5. Testimonials (`testimonials`)
6. Feature grid (`features`)
7. Map / location (`map-location`)
8. Call to action (`cta`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #050505;
  --color-text: #ffffff;
  --color-muted: #737373;
  --color-border: #ffffff;
  --color-accent: #ffd369;
  --font-display: "Manrope", sans-serif;
  --font-body: "Manrope", sans-serif;
  --radius: 8px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#050505',
    ink: '#ffffff',
    muted: '#737373',
    line: '#ffffff',
    accent: '#ffd369',
  },
  fontFamily: { display: ['Manrope'], sans: ['Manrope'] },
} }
```

## Do and don't

- **Do:** Set the final headline line in gold (#ffd369) and the other lines in white and grey
- **Do:** Keep the photo under a dark overlay so the headline stays legible
- **Do:** Use a gold primary button with dark text beside a dark secondary
- **Don't:** Don't set body copy in gold
- **Don't:** Don't add a light background to the hero
- **Don't:** Don't put gold on the photo itself

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
