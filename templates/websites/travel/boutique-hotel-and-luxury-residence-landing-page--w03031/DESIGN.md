# Design system — Boutique Hotel & Luxury Residence Landing Page Template

`SN-W03031` · travel · dark mode · Sinera Atlas theme `dwell` · language `pl`

## Direction

A deep green forest photograph sets the tone, with a dark pine wash over a cabin in the trees. The headline is a cream serif with its second line in italic, and thin spaced uppercase labels run down the left edge in a vertical strip. A cream outlined button sits at the top right, so the page is green and cream throughout, with a restrained hotel calm.

**Mood:** serene, wooded, refined, architectural

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#263b35` | Page ground |
| Surface | `#f7f0e5` | Cards, panels, raised areas |
| Text | `#f7f0e5` | Headings and primary copy |
| Border | `#f7f0e5` | Hairlines, dividers, outlines |
| Accent | `#8e3138` | Primary action and highlights |
| Second accent | `#e7d9c7` | Supporting highlights |

Palette by frequency of use: `#8e3138` · `#ffffff` · `#f7f0e5` · `#29483f` · `#263b35` · `#e7d9c7` · `#f5f1e8` · `#b8d1bf` · `#fbd84d` · `#392f28`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** DM Mono
- **Loaded families:** DM Mono, Manrope, Playfair Display
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 24px · body 12px
- **Weights in use:** semibold, medium
- **Letter spacing:** `tracking-[0.14em]`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px)
- **Content width:** `max-w-7xl`
- **Section padding:** `py-16`, `py-24`
- **Common gaps:** `gap-3`, `gap-5`, `gap-2`

**Primary button**

```html
<a class="inline-flex items-center gap-2 border border-[#f7f0e5]/80 bg-[#f7f0e5] px-4 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-[#29453c] transition hover:bg-transparent hover:text-white">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Booking form (`booking`)
4. Feature grid (`features`)
5. Services (`services`)
6. Call to action (`cta`)
7. Contact form (`contact-form`)
8. Footer (`footer`)
9. Modal / overlay (`modal-overlay`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #263b35;
  --color-surface: #f7f0e5;
  --color-text: #f7f0e5;
  --color-border: #f7f0e5;
  --color-accent: #8e3138;
  --color-accent-2: #e7d9c7;
  --font-display: "Playfair Display", serif;
  --font-body: "DM Mono", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#263b35',
    surface: '#f7f0e5',
    ink: '#f7f0e5',
    line: '#f7f0e5',
    accent: '#8e3138',
    accent2: '#e7d9c7',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['DM Mono'] },
} }
```

## Do and don't

- **Do:** Set the headline in cream serif, with the second line in italic
- **Do:** Use deep green (#263b35) as the ground for the hero and dark sections
- **Do:** Run small spaced uppercase labels vertically along the left edge
- **Don't:** Don't use burgundy (#8e3138) for large areas; it is not part of this palette.
- **Don't:** Don't set the headline over a bright sky area; the photograph needs its dark tone
- **Don't:** Don't set the serif headline in bold; it stays light and elegant

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
