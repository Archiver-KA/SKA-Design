# Design system — Luxury Tavern & Membership Landing Page Template

`SN-W02939` · food-beverage · dark mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A dark, members-only tavern page on near-black (#09090b) with a large off-white serif headline, the second word set in a grey italic. Small tracked caps eyebrows and a circular text badge in muted gold (#c5a059) give the page its quiet ceremony. Gold is the only warm colour on the page.

**Mood:** exclusive, ceremonial, quiet, moody

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#09090b` | Page ground |
| Surface | `#18181b` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#a1a1aa` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#c5a059` | Primary action and highlights |
| Second accent | `#ce1126` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#27272a` · `#52525b` · `#c5a059` · `#71717a` · `#d4d4d8` · `#fde68a` · `#0c0a09` · `#a1a1aa` · `#18181b`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display, Geist, Roboto, Montserrat, Poppins
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 20px · body 14px
- **Weights in use:** semibold, medium, bold
- **Letter spacing:** `tracking-widest`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px)
- **Shadows:** `shadow-lg`, `shadow-2xl`
- **Content width:** `max-w-2xl`, `max-w-4xl`
- **Section padding:** `py-24`, `py-16`
- **Common gaps:** `gap-8`, `gap-16`, `gap-6`

**Primary button**

```html
<a class="inline-flex items-center gap-3 bg-amber-200/90 text-zinc-900 px-8 py-4 text-xs uppercase tracking-widest font-medium hover:bg-white transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Menu list (`menu-list`)
2. Hero (`hero`)
3. Contact form (`contact-form`)
4. Navigation bar (`navbar`)
5. About (`about`)
6. Timeline (`timeline`)
7. Pricing (`pricing`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #09090b;
  --color-surface: #18181b;
  --color-text: #ffffff;
  --color-muted: #a1a1aa;
  --color-border: #ffffff;
  --color-accent: #c5a059;
  --color-accent-2: #ce1126;
  --font-display: "Playfair Display", serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#09090b',
    surface: '#18181b',
    ink: '#ffffff',
    muted: '#a1a1aa',
    line: '#ffffff',
    accent: '#c5a059',
    accent2: '#ce1126',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the hero headline in Playfair Display with the second word in grey italic
- **Do:** Use muted gold (#c5a059) for eyebrows, the circular badge and small labels only
- **Do:** Keep long copy centred and short, with a thin rule separating it from the headline
- **Don't:** Don't use the gold as a button fill; the button style is light on dark
- **Don't:** Don't set the page on a light ground; it is dark.
- **Don't:** Don't add more than one accent colour

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
