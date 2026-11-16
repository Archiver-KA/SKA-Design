# Design system — Retail AI Analytics Landing Page Template

`SN-W01312` · ecommerce · light mode · Sinera Atlas theme `market` · language `es`

## Direction

A quiet analytics product page on a pale grey ground (#f7f8fa), with a dark navy dashboard mockup (#142a5a) as the focal image. Blue (#1648c9) is reserved for one emphasised word in the headline and the primary button, while mint (#7de4cb) appears only as data highlights inside the mockup. Geist at large display size keeps the page precise and technical, and the copy is in Spanish throughout.

**Mood:** precise, technical, calm, data-led

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f7f8fa` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#101828` | Headings and primary copy |
| Muted text | `#687386` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#1648c9` | Primary action and highlights |
| Second accent | `#7de4cb` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#1648c9` · `#7de4cb` · `#8fb0ff` · `#4976df` · `#142a5a` · `#f7f8fa` · `#687386` · `#5fd2bd` · `#2463d5`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Geist
- **Body:** Geist
- **Loaded families:** Geist, Inter
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 20px · body 12px
- **Weights in use:** medium, semibold
- **Letter spacing:** `tracking-tight`, `tracking-[0.15em]`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-lg` (8px)
- **Shadows:** `shadow-[0_0_0_5px_rgba(125,228,203,0.12)]`, `shadow-[0_14px_35px_rgba(34,55,91,0.06)]`, `shadow-[0_0_0_5px_rgba(46,105,217,0.14)]`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-5`, `gap-3`, `gap-2`

**Primary button**

```html
<a class="hidden items-center gap-2 rounded-lg bg-[#1648c9] px-4 py-2.5 text-sm font-medium text-white shadow-[0_8px_22px_rgba(22,72,201,0.18)] transition hover:-translate-y-0.5 hover:bg-[#113cad] sm:flex">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Stats band (`stats`)
5. Contact form (`contact-form`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN), Lenis smooth scroll
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #f7f8fa;
  --color-surface: #ffffff;
  --color-text: #101828;
  --color-muted: #687386;
  --color-border: #ffffff;
  --color-accent: #1648c9;
  --color-accent-2: #7de4cb;
  --font-display: "Geist", sans-serif;
  --font-body: "Geist", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f7f8fa',
    surface: '#ffffff',
    ink: '#101828',
    muted: '#687386',
    line: '#ffffff',
    accent: '#1648c9',
    accent2: '#7de4cb',
  },
  fontFamily: { display: ['Geist'], sans: ['Geist'] },
} }
```

## Do and don't

- **Do:** Set the blue (#1648c9) on one headline word and on the primary button only
- **Do:** Use mint (#7de4cb) for chart highlights and status dots inside the product mockup
- **Do:** Keep the hero on the light grey ground and place dark navy (#142a5a) only in the product visual
- **Don't:** Don't colour whole headlines blue; a single word carries the accent
- **Don't:** Don't use mint as a button or text colour, as it has too little contrast on white
- **Don't:** Don't set the Spanish headlines in a second display face; Geist covers headings and body

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
