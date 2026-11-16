# Design system — Restaurant Landing Page Template for Pečenjara Baralić

`SN-W02989` · food-beverage · light mode · Sinera Atlas theme `dwell` · language `sr`

## Direction

A bold, poster-like hero: a solid red (#cf2e2e) field carries a huge white Oswald wordmark, a small spaced-capitals label above it, and a photograph of roast in a tray below. A black top bar holds the name and a single white pill button. Red is used as a full-bleed field here rather than a small accent, so the first screen reads as loud and brand-led.

**Mood:** loud, poster-like, bold, brand-led

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f4f4f4` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#000000` | Headings and primary copy |
| Border | `#000000` | Hairlines, dividers, outlines |
| Accent | `#cf2e2e` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#000000` · `#f4f4f4` · `#0f0f0f` · `#cf2e2e`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Oswald
- **Body:** DM Sans
- **Loaded families:** Geist, Roboto, Montserrat, Poppins, Playfair Display, Instrument Serif
- **Scale (largest breakpoint):** h1 176px · h2 72px · h3 24px · body 14px
- **Weights in use:** semibold, medium
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-[2rem]` (2rem), `rounded-xl` (12px)
- **Shadows:** `shadow-lg`, `shadow-sm`, `shadow-2xl`
- **Content width:** `max-w-7xl`
- **Section padding:** `py-20`
- **Common gaps:** `gap-2`, `gap-4`, `gap-6`

**Primary button**

```html
<a class="inline-flex items-center gap-2 bg-brand-black text-white border-2 border-brand-black font-display font-semibold text-base uppercase px-8 py-4 rounded-xl hover:bg-white hover:text-brand-black transition-all shadow-xl whitespace-nowrap">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Marquee (`marquee`)
4. Logo cloud (`logo-cloud`)
5. Bento grid (`bento-grid`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #f4f4f4;
  --color-surface: #ffffff;
  --color-text: #000000;
  --color-border: #000000;
  --color-accent: #cf2e2e;
  --font-display: "Oswald", sans-serif;
  --font-body: "DM Sans", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f4f4f4',
    surface: '#ffffff',
    ink: '#000000',
    line: '#000000',
    accent: '#cf2e2e',
  },
  fontFamily: { display: ['Oswald'], sans: ['DM Sans'] },
} }
```

## Do and don't

- **Do:** Use the solid red (#cf2e2e) as a full-bleed field for the hero only.
- **Do:** Set the wordmark in Oswald at a very large size, in white.
- **Do:** Keep the top bar black with a single white pill button.
- **Don't:** Don't set the wordmark in a light weight; the heavy condensed form is the look.
- **Don't:** Don't put red text on red fields.
- **Don't:** Don't add a second accent colour to the hero.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
