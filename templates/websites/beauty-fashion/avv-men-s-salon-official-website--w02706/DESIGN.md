# Design system — AVV Men's Salon Official Website

`SN-W02706` · beauty-fashion · dark mode · Sinera Atlas theme `dwell` · language `en`

## Direction

Men's salon page on a deep navy ground (#050b14). The headline is a large light serif italic in pale slate (#cbd5e1). Gold (#c9a24d) appears only on the small kicker above it and the solid CALL NOW button, so gold is the single accent on a dark, formal page.

**Mood:** formal, dark, classic, refined

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#050b14` | Page ground |
| Text | `#cbd5e1` | Headings and primary copy |
| Muted text | `#475569` | Secondary copy, captions |
| Border | `#334155` | Hairlines, dividers, outlines |
| Accent | `#c9a24d` | Primary action and highlights |
| Second accent | `#1e293b` | Supporting highlights |

Palette by frequency of use: `#c9a24d` · `#ffffff` · `#050b14` · `#1e293b` · `#64748b` · `#cbd5e1` · `#475569` · `#94a3b8` · `#0f172a` · `#080f1f`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 20px · body 14px
- **Weights in use:** medium, bold, semibold
- **Letter spacing:** `tracking-widest`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px)
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-24`, `py-20`
- **Common gaps:** `gap-6`, `gap-2`, `gap-12`

**Primary button**

```html
<a class="bg-[#C9A24D] text-[#050B14] px-8 py-3.5 text-xs font-bold uppercase tracking-widest hover:bg-white transition-colors duration-300 flex items-center gap-2">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Services (`services`)
5. Pricing (`pricing`)
6. Feature grid (`features`)
7. Timeline (`timeline`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #050b14;
  --color-text: #cbd5e1;
  --color-muted: #475569;
  --color-border: #334155;
  --color-accent: #c9a24d;
  --color-accent-2: #1e293b;
  --font-display: "Playfair Display", serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#050b14',
    ink: '#cbd5e1',
    muted: '#475569',
    line: '#334155',
    accent: '#c9a24d',
    accent2: '#1e293b',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the hero on deep navy (#050b14) with pale slate (#cbd5e1) serif headlines.
- **Do:** Use gold (#c9a24d) for the primary button and the small kicker only.
- **Do:** Centre the hero composition with a soft glow behind the headline.
- **Don't:** Don't set the page ground in gold; the ground is navy.
- **Don't:** Don't set headlines in dark navy text; they are light on this ground.
- **Don't:** Don't add a second accent colour beside the gold.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
