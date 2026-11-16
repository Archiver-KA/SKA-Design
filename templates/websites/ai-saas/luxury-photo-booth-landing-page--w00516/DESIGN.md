# Design system — Luxury Photo Booth Landing Page

`SN-W00516` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A photo-booth rental page whose hero is a dark charcoal gradient (#3f3f46 to near-black) rather than white, with a large white serif headline and a gold gradient on the middle line. The two buttons are white and outlined, so the photography and gallery sections can carry the colour. The hero feels cinematic and event-led, and the nav bar is a thin black strip with a gold call to action.

**Mood:** cinematic, event-led, luxurious, dark charcoal, warm gold

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#18181b` | Page ground |
| Surface | `#fafafa` | Cards, panels, raised areas |
| Text | `#18181b` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#3f3f46` | Hairlines, dividers, outlines |
| Accent | `#ffffff` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#18181b` · `#000000` · `#a1a1aa` · `#71717a` · `#3f3f46` · `#d4d4d8` · `#27272a` · `#fafafa` · `#f4f4f5`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** Montserrat
- **Loaded families:** Montserrat, Playfair Display
- **Scale (largest breakpoint):** h1 96px · h2 60px · h3 24px · body 18px
- **Weights in use:** medium, light, bold
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-lg` (8px), `rounded-full` (9999px), `rounded-2xl` (16px)
- **Shadows:** `shadow-xl`, `shadow-sm`, `shadow-2xl`
- **Content width:** `max-w-7xl`, `max-w-5xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-3`, `gap-8`, `gap-6`

**Primary button**

```html
<a class="hidden md:inline-flex items-center justify-center px-6 py-2.5 bg-gradient-gold text-black text-lg font-medium rounded-full hover:brightness-110 transition-all transform hover:-translate-y-0.5 shadow-lg">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Timeline (`timeline`)
4. Pricing (`pricing`)
5. Gallery / portfolio (`gallery-portfolio`)
6. Testimonials (`testimonials`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #18181b;
  --color-surface: #fafafa;
  --color-text: #18181b;
  --color-muted: #71717a;
  --color-border: #3f3f46;
  --color-accent: #ffffff;
  --font-display: "Playfair Display", serif;
  --font-body: "Montserrat", sans-serif;
  --radius: 8px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#18181b',
    surface: '#fafafa',
    ink: '#18181b',
    muted: '#71717a',
    line: '#3f3f46',
    accent: '#ffffff',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['Montserrat'] },
} }
```

## Do and don't

- **Do:** Set the middle headline line in a gold gradient over the charcoal hero.
- **Do:** Use white for the primary button and an outline for the secondary.
- **Do:** Let the gallery photography carry the colour on the page.
- **Don't:** Don't put the hero on a white ground; it stays charcoal.
- **Don't:** Don't add a second gold accent to buttons.
- **Don't:** Don't use the gold gradient on body copy.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
