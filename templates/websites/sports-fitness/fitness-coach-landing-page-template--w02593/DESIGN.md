# Design system — Fitness Coach Landing Page Template

`SN-W02593` · sports-fitness · dark mode · Sinera Atlas theme `calm` · language `en`

## Direction

A bold, dark coaching page on near-black with a very large heavy white sans-serif headline stacked over three lines, and the middle line dropped to grey. Pure red (#ff0000) is the single accent, used for the header button and a small dot in the logo. The page is dark throughout, so it reads as a dark, high-contrast poster.

**Mood:** bold, dark, high-contrast, direct, energetic

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#09090b` | Page ground |
| Surface | `#f4f4f5` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#e4e4e7` | Hairlines, dividers, outlines |
| Accent | `#ff0000` | Primary action and highlights |

Palette by frequency of use: `#ff0000` · `#ffffff` · `#09090b` · `#52525b` · `#a1a1aa` · `#18181b` · `#e4e4e7` · `#f4f4f5` · `#27272a` · `#71717a`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** ui-sans-serif
- **Body:** ui-sans-serif
- **Scale (largest breakpoint):** h1 128px · h2 60px · h3 24px · body 16px
- **Weights in use:** semibold, extrabold, medium
- **Letter spacing:** `tracking-widest`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-sm` (2px)
- **Shadows:** `shadow-xl`, `shadow-zinc-200/50`, `shadow-[0_8px_30px_rgb(0,0,0,0.04)]`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-4`, `gap-2`, `gap-6`

**Primary button**

```html
<a class="hidden md:inline-flex bg-[#FF0000] text-white px-6 py-3 font-semibold text-sm uppercase tracking-wide hover:bg-red-700 transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Services (`services`)
5. Benefits (`benefits`)
6. Stats band (`stats`)
7. FAQ (`faq`)
8. Contact form (`contact-form`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** gradient fills, CSS animations, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #09090b;
  --color-surface: #f4f4f5;
  --color-text: #ffffff;
  --color-muted: #71717a;
  --color-border: #e4e4e7;
  --color-accent: #ff0000;
  --font-display: "ui-sans-serif", serif;
  --font-body: "ui-sans-serif", serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#09090b',
    surface: '#f4f4f5',
    ink: '#ffffff',
    muted: '#71717a',
    line: '#e4e4e7',
    accent: '#ff0000',
  },
  fontFamily: { display: ['ui-sans-serif'], sans: ['ui-sans-serif'] },
} }
```

## Do and don't

- **Do:** Set the headline in heavy white sans-serif with the middle line in grey
- **Do:** Use the red (#ff0000) for the header button and the logo dot only
- **Do:** Keep the hero on the near-black ground and the nav in small uppercase
- **Don't:** Don't use a light background; the ground is near-black
- **Don't:** Don't fill large areas with red; it marks the action only
- **Don't:** Don't switch the ground to light; it stays dark

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
