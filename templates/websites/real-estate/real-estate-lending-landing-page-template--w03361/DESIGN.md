# Design system — Real Estate Lending Landing Page Template

`SN-W03361` · real-estate · dark mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A dark, warm hero on near-black green (#011812) over a darkened interior photograph. The headline is white sans-serif, and its second line is set in an amber gradient (#fbbf24) that carries the emphasis. A solid amber button sits beside an outlined button, and a small pill label with a thin border sits above the headline.

**Mood:** warm, dark, reassuring, contemporary

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#011812` | Page ground |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#475569` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#fbbf24` | Primary action and highlights |
| Second accent | `#10b981` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#f59e0b` · `#fbbf24` · `#011812` · `#94a3b8` · `#cbd5e1` · `#64748b` · `#022019` · `#10b981` · `#78350f`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Manrope
- **Body:** Manrope
- **Loaded families:** Manrope
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 20px · body 14px
- **Weights in use:** medium, light, semibold
- **Letter spacing:** `tracking-wider`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-2xl` (16px)
- **Shadows:** `shadow-lg`, `shadow-amber-900/20`, `shadow-2xl`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="hidden sm:block px-5 py-2.5 bg-white text-[#011812] rounded-full text-xs font-bold uppercase tracking-wider hover:bg-amber-400 transition-all hover:scale-105">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Services (`services`)
4. Process / steps (`how-it-works`)
5. Testimonials (`testimonials`)
6. Contact form (`contact-form`)
7. FAQ (`faq`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #011812;
  --color-text: #ffffff;
  --color-muted: #475569;
  --color-border: #ffffff;
  --color-accent: #fbbf24;
  --color-accent-2: #10b981;
  --font-display: "Manrope", sans-serif;
  --font-body: "Manrope", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#011812',
    ink: '#ffffff',
    muted: '#475569',
    line: '#ffffff',
    accent: '#fbbf24',
    accent2: '#10b981',
  },
  fontFamily: { display: ['Manrope'], sans: ['Manrope'] },
} }
```

## Do and don't

- **Do:** Keep the hero on near-black green (#011812) with white headlines
- **Do:** Use amber (#fbbf24) for the emphasis line and the primary button only
- **Do:** Pair the solid amber primary button with an outlined secondary button
- **Don't:** Don't use amber as a page background; it is for emphasis
- **Don't:** Don't place amber text on light backgrounds
- **Don't:** Don't add a second accent colour to the buttons

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
