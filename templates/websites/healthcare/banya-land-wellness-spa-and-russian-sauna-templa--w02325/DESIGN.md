# Design system — Banya-Land | Wellness Spa & Russian Sauna Template

`SN-W02325` · healthcare · dark mode · Sinera Atlas theme `calm` · language `ru`

## Direction

A dark, atmospheric sauna brand on near-black (#121311) with a lifted panel (#1a1c19) and warm cream text (#e5e3db). The display type is a large serif set in cream, and gold (#b89b5e) is kept for small letter-spaced eyebrow labels. Primary actions are solid cream pills with dark text and secondary actions are thin outlines, which keeps the page restrained and luxurious.

**Mood:** dark, luxurious, restrained, atmospheric

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#121311` | Page ground |
| Surface | `#1a1c19` | Cards, panels, raised areas |
| Text | `#e5e3db` | Headings and primary copy |
| Muted text | `#9a988f` | Secondary copy, captions |
| Border | `#e5e3db` | Hairlines, dividers, outlines |
| Accent | `#b89b5e` | Primary action and highlights |

Palette by frequency of use: `#e5e3db` · `#9a988f` · `#b89b5e` · `#121311` · `#1a1c19` · `#ffffff` · `#d6d3d1` · `#1c1917`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Cormorant Garamond
- **Body:** Cormorant Garamond
- **Loaded families:** Cormorant Garamond, Manrope
- **Scale (largest breakpoint):** h1 112px · h2 60px · h3 30px · body 14px
- **Weights in use:** medium, light
- **Letter spacing:** `tracking-tighter`, `tracking-[0.2em]`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-xl` (12px)
- **Content width:** `max-w-screen-2xl`, `max-w-7xl`
- **Section padding:** `py-24`, `py-40`
- **Common gaps:** `gap-4`, `gap-12`, `gap-6`

**Primary button**

```html
<a class="bg-[#E5E3DB] hover:bg-white text-[#121311] px-8 py-4 rounded-full text-xs uppercase tracking-[0.2em] transition-all flex items-center gap-2 w-full sm:w-auto justify-center font-medium">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Call to action (`cta`)
3. Hero (`hero`)
4. Feature grid (`features`)
5. About (`about`)
6. Testimonials (`testimonials`)
7. Booking form (`booking`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN), GSAP, Lenis smooth scroll
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #121311;
  --color-surface: #1a1c19;
  --color-text: #e5e3db;
  --color-muted: #9a988f;
  --color-border: #e5e3db;
  --color-accent: #b89b5e;
  --font-display: "Cormorant Garamond", serif;
  --font-body: "Cormorant Garamond", serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#121311',
    surface: '#1a1c19',
    ink: '#e5e3db',
    muted: '#9a988f',
    line: '#e5e3db',
    accent: '#b89b5e',
  },
  fontFamily: { display: ['Cormorant Garamond'], sans: ['Cormorant Garamond'] },
} }
```

## Do and don't

- **Do:** Set headlines in the serif display face in cream (#e5e3db) at large size.
- **Do:** Use gold (#b89b5e) for small uppercase eyebrow labels only.
- **Do:** Make primary buttons solid cream with dark text and secondary buttons thin outlines.
- **Don't:** Don't use gold for large fills or body text.
- **Don't:** Don't add bright colours; the page stays in cream, gold and near-black.
- **Don't:** Don't use white section backgrounds; the dark ground runs through the page.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
