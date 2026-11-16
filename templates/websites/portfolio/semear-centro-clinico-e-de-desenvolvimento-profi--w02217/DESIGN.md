# Design system — Semear | Centro Clínico e de Desenvolvimento Profissional

`SN-W02217` · portfolio · light mode · Sinera Atlas theme `workshop` · language `pt-BR`

## Direction

A calm, warm clinical hero: a light cream ground under a dark green nav bar, with the headline in a light serif in deep green-black (#2c332e). One key word per headline, here 'florescer', is set in italic gold (#d4b46e), and the same gold recurs on the nav button, so the accent is used sparingly. Rounded photo frames and a green chat bubble soften the page.

**Mood:** calm, warm, organic, trustworthy

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fafaf9` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#2c332e` | Headings and primary copy |
| Muted text | `#5c665c` | Secondary copy, captions |
| Border | `#e5e5e5` | Hairlines, dividers, outlines |
| Accent | `#d4b46e` | Primary action and highlights |
| Second accent | `#25d366` | Supporting highlights |

Palette by frequency of use: `#d4b46e` · `#2c332e` · `#ffffff` · `#e5e5e5` · `#2e3b2e` · `#5c665c` · `#fafaf9` · `#a3afa3` · `#3e4f3e` · `#f0f0f0`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Geist
- **Body:** Geist
- **Loaded families:** Inter, Roboto, Montserrat, Poppins, Playfair Display, Instrument Serif
- **Scale (largest breakpoint):** h1 60px · h2 30px · h3 20px · body 14px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-wide`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-3xl` (24px), `rounded-xl` (12px)
- **Shadows:** `shadow-xl`, `shadow-sm`, `shadow-lg`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-16`
- **Common gaps:** `gap-4`, `gap-2`, `gap-6`

**Primary button**

```html
<a class="flex items-center justify-center px-5 py-2.5 text-xs font-semibold text-[#2C332E] bg-[#D4B46E] rounded-full hover:bg-[#c4a460] transition-all shadow-lg shadow-[#D4B46E]/20 gap-2 tracking-wide uppercase">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Contact form (`contact-form`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #fafaf9;
  --color-surface: #ffffff;
  --color-text: #2c332e;
  --color-muted: #5c665c;
  --color-border: #e5e5e5;
  --color-accent: #d4b46e;
  --color-accent-2: #25d366;
  --font-display: "Geist", sans-serif;
  --font-body: "Geist", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fafaf9',
    surface: '#ffffff',
    ink: '#2c332e',
    muted: '#5c665c',
    line: '#e5e5e5',
    accent: '#d4b46e',
    accent2: '#25d366',
  },
  fontFamily: { display: ['Geist'], sans: ['Geist'] },
} }
```

## Do and don't

- **Do:** Set the headline in a light serif in deep green-black (#2c332e)
- **Do:** Pick out one key word per headline in gold (#d4b46e)
- **Do:** Keep the nav dark green with the gold button as the primary action
- **Don't:** Don't use the gold for body copy
- **Don't:** Don't add colours beyond green, gold and cream
- **Don't:** Don't remove the rounded corners on photo frames

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
