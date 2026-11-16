# Design system — Vedic Astrology Dosha Report Landing Page Template

`SN-W04124` · business-services · light mode · Sinera Atlas theme `route` · language `en`

## Direction

A warm cream page (#fbf4e8) with a serif headline in deep brown (#3e2a1a), where the final phrase is set in an italic blue. The primary button is a gold gradient (#d4a24c) beside a dark outline button, and thin concentric rings sit behind a dark orb in the hero. The mood is ceremonial and calm, with gold reserved for the action.

**Mood:** ceremonial, warm, calm, traditional, soft

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fbf4e8` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#3e2a1a` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#d4a24c` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#fbf4e8` · `#3e2a1a` · `#d4a24c` · `#2a1c11`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** Playfair Display
- **Loaded families:** Playfair Display, Poppins
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 20px · body 14px
- **Weights in use:** medium, semibold, light
- **Letter spacing:** `tracking-widest`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-sm` (2px), `rounded-lg` (8px)
- **Shadows:** `shadow-sm`, `shadow-xl`, `shadow-vedic-gold/5`
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-2`, `gap-6`, `gap-16`

**Primary button**

```html
<a class="hidden md:flex items-center gap-2 px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-vedic-brown hover:bg-vedic-cosmic transition-all duration-300 rounded-sm">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Feature grid (`features`)
5. Gallery / portfolio (`gallery-portfolio`)
6. FAQ (`faq`)
7. Newsletter signup (`newsletter`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #fbf4e8;
  --color-surface: #ffffff;
  --color-text: #3e2a1a;
  --color-border: #ffffff;
  --color-accent: #d4a24c;
  --font-display: "Playfair Display", serif;
  --font-body: "Playfair Display", serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fbf4e8',
    surface: '#ffffff',
    ink: '#3e2a1a',
    line: '#ffffff',
    accent: '#d4a24c',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['Playfair Display'] },
} }
```

## Do and don't

- **Do:** Set headlines in a serif face in deep brown (#3e2a1a) on cream (#fbf4e8)
- **Do:** Use gold (#d4a24c) for the primary button only
- **Do:** Keep the decorative rings thin and low-contrast behind the hero visual
- **Don't:** Don't use pure black for headlines
- **Don't:** Don't fill the hero background with saturated colour
- **Don't:** Don't add more than one italic phrase per headline

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
