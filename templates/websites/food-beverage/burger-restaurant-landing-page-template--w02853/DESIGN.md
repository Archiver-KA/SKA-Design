# Design system — Burger Restaurant Landing Page Template

`SN-W02853` · food-beverage · dark mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A bold, flat red poster with white type. The hero is a full-bleed red field (#b91c1c) carrying a very large, heavy all-caps wordmark in white, under a black rounded navigation bar that holds the logo and one red button. The photograph is a plain card with no effects, and the flat colour blocks do the work, which reads vintage rather than modern-glossy.

**Mood:** bold, flat, red, vintage

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#b91c1c` | Page ground |
| Surface | `#000000` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#f8fafc` | Secondary copy, captions |
| Border | `#000000` | Hairlines, dividers, outlines |
| Accent | `#b91c1c` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#000000` · `#b91c1c` · `#f7f4eb` · `#0f0f0f` · `#f8fafc` · `#dc2626`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Oswald
- **Body:** DM Sans
- **Loaded families:** Geist, Roboto, Montserrat, Poppins, Playfair Display, Instrument Serif
- **Scale (largest breakpoint):** h1 192px · h2 60px · h3 24px · body 14px
- **Weights in use:** semibold, bold, black
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-[2rem]` (2rem), `rounded-xl` (12px), `rounded-full` (9999px)
- **Shadows:** `shadow-lg`, `shadow-2xl`, `shadow-xl`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-20`
- **Common gaps:** `gap-2`, `gap-6`, `gap-4`

**Primary button**

```html
<a class="inline-flex items-center gap-2 bg-brand-red text-white border-4 border-white font-display font-bold text-lg uppercase px-8 py-3 rounded-xl hover:bg-white hover:text-brand-red hover:border-brand-red transition-all shadow-xl whitespace-nowrap">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Marquee (`marquee`)
4. Logo cloud (`logo-cloud`)
5. Menu list (`menu-list`)
6. Map / location (`map-location`)

## Motion, effects and stack

- **Effects:** blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #b91c1c;
  --color-surface: #000000;
  --color-text: #ffffff;
  --color-muted: #f8fafc;
  --color-border: #000000;
  --color-accent: #b91c1c;
  --font-display: "Oswald", sans-serif;
  --font-body: "DM Sans", sans-serif;
  --radius: 2rem;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#b91c1c',
    surface: '#000000',
    ink: '#ffffff',
    muted: '#f8fafc',
    line: '#000000',
    accent: '#b91c1c',
  },
  fontFamily: { display: ['Oswald'], sans: ['DM Sans'] },
} }
```

## Do and don't

- **Do:** Use the flat red (#b91c1c) as the full-bleed hero ground
- **Do:** Set the wordmark in heavy white all-caps sans
- **Do:** Keep the navigation as a black bar with white type and one red button
- **Don't:** Don't add a gradient over the flat red hero field
- **Don't:** Don't set the hero headline in a serif
- **Don't:** Don't add a second colour block that competes with the hero red

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
