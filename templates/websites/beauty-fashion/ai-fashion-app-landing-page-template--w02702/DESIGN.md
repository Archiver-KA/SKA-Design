# Design system — AI Fashion App Landing Page Template

`SN-W02702` · beauty-fashion · dark mode · Sinera Atlas theme `dwell` · language `en`

## Direction

AI fashion app page on pure black (#000000) with a heavy white sans headline, and its second line set in neon lime (#a3e635). A phone mockup sits on the right, and small translucent cards float over it, so the page reads as a dark app showcase. The lime is the single signal colour, used for the key phrase and the store badges.

**Mood:** neon, dark, app-led, energetic

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#171717` | Cards, panels, raised areas |
| Text | `#cbd5e1` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#262626` | Hairlines, dividers, outlines |
| Accent | `#a3e635` | Primary action and highlights |
| Second accent | `#1e293b` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#a3e635` · `#000000` · `#262626` · `#171717` · `#94a3b8` · `#84cc16` · `#64748b` · `#525252` · `#404040`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Plus Jakarta Sans
- **Body:** Plus Jakarta Sans
- **Loaded families:** Geist, Roboto, Montserrat, Poppins, Playfair Display, Instrument Serif
- **Scale (largest breakpoint):** h1 72px · h2 30px · h3 20px · body 14px
- **Weights in use:** semibold, bold, medium
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-lg` (8px)
- **Shadows:** `shadow-sm`, `shadow-lg`, `shadow-2xl`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-3`, `gap-4`, `gap-2`

**Primary button**

```html
<a class="flex items-center justify-center gap-3 bg-white text-black px-6 py-3.5 rounded-lg hover:bg-lime-400 transition-all shadow-lg hover:shadow-lime-400/20 w-full sm:w-auto group">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Logo cloud (`logo-cloud`)
4. Gallery / portfolio (`gallery-portfolio`)
5. Benefits (`benefits`)
6. Stats band (`stats`)
7. Call to action (`cta`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Swiper
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #171717;
  --color-text: #cbd5e1;
  --color-muted: #64748b;
  --color-border: #262626;
  --color-accent: #a3e635;
  --color-accent-2: #1e293b;
  --font-display: "Plus Jakarta Sans", sans-serif;
  --font-body: "Plus Jakarta Sans", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#171717',
    ink: '#cbd5e1',
    muted: '#64748b',
    line: '#262626',
    accent: '#a3e635',
    accent2: '#1e293b',
  },
  fontFamily: { display: ['Plus Jakarta Sans'], sans: ['Plus Jakarta Sans'] },
} }
```

## Do and don't

- **Do:** Set the hero on pure black (#000000) with white heavy sans headlines.
- **Do:** Use lime (#a3e635) for one key phrase per headline and the primary highlight only.
- **Do:** Frame the app preview in a phone mockup with small floating cards.
- **Don't:** Don't set body copy in lime; it is for headline phrases.
- **Don't:** Don't add a second neon colour beside the lime.
- **Don't:** Don't place the phone mockup on a light panel; the page is dark throughout.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
