# Design system — Método A Tríade

`SN-W03505` · education · dark mode · Sinera Atlas theme `calm` · language `pt-BR`

## Direction

A dark, editorial sales page on pure black (#000000) with a tall, condensed display face for the headline. White type carries the argument, and one clause is set in gold (#c8a037) to mark the turn of the message. Charcoal panels (#18181b) with thin grey borders hold the supporting media card, so the layout reads as dramatic and deliberate.

**Mood:** bold, dramatic, dark, condensed

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#18181b` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#a1a1aa` | Secondary copy, captions |
| Border | `#3f3f46` | Hairlines, dividers, outlines |
| Accent | `#c8a037` | Primary action and highlights |
| Second accent | `#22c55e` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#a1a1aa` · `#52525b` · `#71717a` · `#18181b` · `#27272a` · `#000000` · `#3f3f46` · `#22c55e` · `#c8a037`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Bebas Neue
- **Body:** Bebas Neue
- **Loaded families:** Bebas Neue, Lato
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 24px · body 14px
- **Weights in use:** bold, light, semibold
- **Letter spacing:** `tracking-wide`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-xl` (12px), `rounded-full` (9999px), `rounded` (4px)
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-4`, `gap-3`, `gap-2`

**Primary button**

```html
<a class="hidden sm:inline-flex items-center gap-2 px-6 py-2 bg-white/5 border border-white/10 hover:bg-brand-gold hover:text-black hover:border-brand-gold text-white text-xs font-bold uppercase tracking-wider transition-all duration-300 rounded-sm">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Logo cloud (`logo-cloud`)
3. Navigation bar (`navbar`)
4. Hero (`hero`)
5. Feature grid (`features`)
6. Call to action (`cta`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #18181b;
  --color-text: #ffffff;
  --color-muted: #a1a1aa;
  --color-border: #3f3f46;
  --color-accent: #c8a037;
  --color-accent-2: #22c55e;
  --font-display: "Bebas Neue", sans-serif;
  --font-body: "Bebas Neue", sans-serif;
  --radius: 12px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#18181b',
    ink: '#ffffff',
    muted: '#a1a1aa',
    line: '#3f3f46',
    accent: '#c8a037',
    accent2: '#22c55e',
  },
  fontFamily: { display: ['Bebas Neue'], sans: ['Bebas Neue'] },
} }
```

## Do and don't

- **Do:** Set the headline in Bebas Neue, with the key clause in gold (#c8a037)
- **Do:** Keep the page on pure black with charcoal panels and thin grey borders
- **Do:** Use gold only for the highlighted headline clause and the primary button
- **Don't:** Don't set long body copy in the condensed display face
- **Don't:** Don't add light panels or white sections to the dark layout
- **Don't:** Don't use gold for body text or for large filled areas

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
