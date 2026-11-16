# Design system — Averton B2B Growth Strategy Landing Page Template

`SN-W00241` · ai-saas · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A light, warm off-white page with a dark green headline set large and centred, and a dark green filled pill button for the single call to action. Below the hero, a horizontal strip of community avatars forms a social-proof band. The first screen uses only dark green and cream, which makes the page calm and professional for a B2B audience.

**Mood:** calm, professional, warm, restrained

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fcfcfa` | Page ground |
| Surface | `#2e3a2f` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#fcfcfa` | Secondary copy, captions |
| Border | `#242424` | Hairlines, dividers, outlines |
| Accent | `#2e3a2f` | Primary action and highlights |

Palette by frequency of use: `#5dc39b` · `#242424` · `#ffffff` · `#f5f5e9` · `#2e3a2f` · `#1f1b16` · `#fcfcfa` · `#161715` · `#f5efe6` · `#d8cebe`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Manrope
- **Scale (largest breakpoint):** h2 60px · h3 36px · body 12px
- **Weights in use:** medium, normal, semibold
- **Letter spacing:** `tracking-tight`, `tracking-[0.2em]`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-2xl` (16px)
- **Shadows:** `shadow-sm`
- **Content width:** `max-w-4xl`, `max-w-3xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-3`, `gap-2`, `gap-5`

**Primary button**

```html
<a class="hidden md:inline-flex items-center gap-2.5 rounded-full pl-1.5 pr-5 py-1.5 text-sm font-medium hover:-translate-y-0.5 transition-transform duration-200 bg-[#2e3a2f] text-white">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Marquee (`marquee`)
3. Booking form (`booking`)
4. Services (`services`)
5. Process / steps (`how-it-works`)
6. Gallery / portfolio (`gallery-portfolio`)
7. Stats band (`stats`)
8. Case studies (`case-studies`)
9. Pricing (`pricing`)
10. FAQ (`faq`)
11. Testimonials (`testimonials`)
12. Contact form (`contact-form`)
13. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), custom keyframes
- **Libraries:** Tailwind CSS (CDN), Three.js, AOS scroll reveal
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #fcfcfa;
  --color-surface: #2e3a2f;
  --color-text: #ffffff;
  --color-muted: #fcfcfa;
  --color-border: #242424;
  --color-accent: #2e3a2f;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fcfcfa',
    surface: '#2e3a2f',
    ink: '#ffffff',
    muted: '#fcfcfa',
    line: '#242424',
    accent: '#2e3a2f',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in a large sans, centred, in dark green (#2e3a2f)
- **Do:** Use dark green for the primary button and the nav CTA only
- **Do:** Show social proof as a continuous strip of member avatars below the hero
- **Don't:** Don't use the mint accent for buttons or text in the hero
- **Don't:** Don't set the page on a dark background; the ground is off-white
- **Don't:** Don't put avatars in a grid that competes with the headline

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
