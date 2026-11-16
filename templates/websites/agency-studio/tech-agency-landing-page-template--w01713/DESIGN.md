# Design system — Tech Agency Landing Page Template

`SN-W01713` · agency-studio · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A white page with a large dark sans headline in two lines, and the second line, 'digital experiences.', set in orange (#ea580c). An orange pill button sits next to an outlined white pill, and a faint orange glow sits in the lower corner. The palette is one warm accent on white, which keeps the page direct and product-led.

**Mood:** warm, clean, direct, product-led

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#fafafa` | Cards, panels, raised areas |
| Text | `#18181b` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#e4e4e7` | Hairlines, dividers, outlines |
| Accent | `#ea580c` | Primary action and highlights |
| Second accent | `#2563eb` | Supporting highlights |

Palette by frequency of use: `#ea580c` · `#71717a` · `#ffffff` · `#18181b` · `#f4f4f5` · `#e4e4e7` · `#fafafa` · `#fff7ed` · `#f97316` · `#52525b`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Geist
- **Body:** Geist
- **Loaded families:** Playfair Display, Geist
- **Scale (largest breakpoint):** h1 48px · h2 36px · h3 20px · body 14px
- **Weights in use:** bold, semibold, medium
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-2xl` (16px), `rounded-full` (9999px), `rounded-lg` (8px)
- **Shadows:** `shadow-sm`, `shadow-xl`, `shadow-lg`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-24`, `py-20`
- **Common gaps:** `gap-4`, `gap-2`, `gap-6`

**Primary button**

```html
<a class="w-full sm:w-auto h-12 px-8 rounded-full bg-orange-600 hover:bg-orange-700 text-white font-semibold text-sm flex items-center justify-center gap-2 transition-all shadow-xl shadow-orange-600/20 hover:shadow-orange-600/30">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Services (`services`)
4. Process / steps (`how-it-works`)
5. Gallery / portfolio (`gallery-portfolio`)
6. Call to action (`cta`)
7. Timeline (`timeline`)
8. Feature grid (`features`)
9. Code / terminal (`code-terminal`)
10. Stats band (`stats`)
11. Contact form (`contact-form`)
12. Footer (`footer`)

## Motion, effects and stack

- **Effects:** gradient fills, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #fafafa;
  --color-text: #18181b;
  --color-muted: #71717a;
  --color-border: #e4e4e7;
  --color-accent: #ea580c;
  --color-accent-2: #2563eb;
  --font-display: "Geist", sans-serif;
  --font-body: "Geist", sans-serif;
  --radius: 16px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#fafafa',
    ink: '#18181b',
    muted: '#71717a',
    line: '#e4e4e7',
    accent: '#ea580c',
    accent2: '#2563eb',
  },
  fontFamily: { display: ['Geist'], sans: ['Geist'] },
} }
```

## Do and don't

- **Do:** Set the headline in large sans, with the key phrase in orange (#ea580c).
- **Do:** Use an orange pill for the primary button and an outlined white pill for the secondary.
- **Do:** Keep the page on white with one faint orange glow in a corner.
- **Don't:** Don't use orange for body copy; it is for the headline phrase and the primary button.
- **Don't:** Don't add a second accent colour such as blue (#2563eb).
- **Don't:** Don't set the headline in a light weight.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
