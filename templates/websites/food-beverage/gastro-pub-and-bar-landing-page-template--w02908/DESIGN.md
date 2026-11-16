# Design system — Gastro Pub & Bar Landing Page Template

`SN-W02908` · food-beverage · light mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A deep forest-green hero with a soft diagonal sheen, carrying large cream serif display type: 'Treat yourself.' set in two lines. Above the headline, a small tracked eyebrow in muted gold (#c6a35b) and a cream header bar keep the page calm, while the body copy is short and light. The stance is warm and pub-like, with green as the dominant colour and gold as the quiet label.

**Mood:** warm, pub-like, calm, green, classic

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f8f3e9` | Page ground |
| Text | `#092d2e` | Headings and primary copy |
| Border | `#092d2e` | Hairlines, dividers, outlines |
| Accent | `#c6a35b` | Primary action and highlights |
| Second accent | `#f1eadc` | Supporting highlights |

Palette by frequency of use: `#092d2e` · `#8e322a` · `#f1eadc` · `#f8f3e9` · `#c6a35b` · `#073a3b`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Manrope
- **Body:** Manrope
- **Loaded families:** DM Mono, DM Serif Display, Manrope
- **Scale (largest breakpoint):** h1 96px · h2 60px · h3 30px · body 12px
- **Weights in use:** semibold, bold
- **Letter spacing:** `tracking-tight`, `tracking-[0.12em]`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px)
- **Shadows:** `shadow-lg`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-20`, `py-28`
- **Common gaps:** `gap-3`, `gap-2`, `gap-4`

**Primary button**

```html
<a class="mt-8 inline-flex items-center gap-3 rounded-full bg-[#8E322A] px-5 py-3 text-xs font-bold uppercase tracking-[0.11em] text-[#F8F3E9] transition hover:bg-[#073A3B]">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Call to action (`cta`)
5. Contact form (`contact-form`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #f8f3e9;
  --color-text: #092d2e;
  --color-border: #092d2e;
  --color-accent: #c6a35b;
  --color-accent-2: #f1eadc;
  --font-display: "Manrope", sans-serif;
  --font-body: "Manrope", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f8f3e9',
    ink: '#092d2e',
    line: '#092d2e',
    accent: '#c6a35b',
    accent2: '#f1eadc',
  },
  fontFamily: { display: ['Manrope'], sans: ['Manrope'] },
} }
```

## Do and don't

- **Do:** Use deep forest green for hero grounds, with cream serif headlines on top.
- **Do:** Set eyebrow labels in small tracked caps in gold (#c6a35b).
- **Do:** Keep the header a cream bar with tracked uppercase navigation.
- **Don't:** Don't use bright greens; the green is deep and muted.
- **Don't:** Don't put the cream headline on a cream surface; keep it on the green hero.
- **Don't:** Don't use gold for headlines; it marks labels only.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
