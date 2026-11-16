# Design system — Wellness and Yoga Retreat Landing Page Template

`SN-W02560` · healthcare · dark mode · Sinera Atlas theme `calm` · language `en`

## Direction

A cinematic retreat hero: a sunset photograph of people on a hillside sits under a dark overlay, with a large white serif headline in which one word is italic. The buttons are cream, one filled and one outlined, and thin uppercase labels sit at the edges like a film frame. The stance is serene and reflective, with the photograph doing the atmosphere.

**Mood:** serene, cinematic, reflective, warm

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#14140d` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#f4f1df` | Headings and primary copy |
| Border | `#252417` | Hairlines, dividers, outlines |
| Accent | `#f4f1df` | Primary action and highlights |

Palette by frequency of use: `#252417` · `#f4f1df` · `#eeede2` · `#ffffff` · `#14140d`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Newsreader
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 24px · body 12px
- **Weights in use:** normal, medium, light
- **Letter spacing:** `tracking-tight`, `tracking-[0.16rem]`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px)
- **Content width:** `max-w-6xl`, `max-w-5xl`
- **Section padding:** `py-16`, `py-20`
- **Common gaps:** `gap-2`, `gap-4`, `gap-10`

**Primary button**

```html
<a class="group inline-flex items-center justify-center gap-2 rounded-full bg-[#f4f1df] px-5 py-3 text-xs font-medium uppercase tracking-[0.14rem] text-[#252417] transition duration-300 hover:bg-white hover:pr-4">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. Feature grid (`features`)
3. Testimonials (`testimonials`)
4. Timeline (`timeline`)
5. Logo cloud (`logo-cloud`)
6. About (`about`)
7. Gallery / portfolio (`gallery-portfolio`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills
- **Libraries:** Tailwind CSS (CDN), Lenis smooth scroll
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #14140d;
  --color-surface: #ffffff;
  --color-text: #f4f1df;
  --color-border: #252417;
  --color-accent: #f4f1df;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#14140d',
    surface: '#ffffff',
    ink: '#f4f1df',
    line: '#252417',
    accent: '#f4f1df',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the hero headline in a large white serif, with one italic word
- **Do:** Put the hero over a full-bleed sunset photograph under a dark overlay
- **Do:** Use cream buttons: one filled for the main action, one outlined for the second
- **Don't:** Don't add a bright colour to the hero; the photograph supplies the warmth
- **Don't:** Don't enlarge the thin edge labels; they stay small and uppercase
- **Don't:** Don't put a light background behind the headline; the overlay stays dark

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
