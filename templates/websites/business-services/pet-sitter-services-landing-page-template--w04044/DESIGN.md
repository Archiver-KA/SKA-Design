# Design system — Pet Sitter Services Landing Page Template

`SN-W04044` · business-services · light mode · Sinera Atlas theme `route` · language `ja`

## Direction

A quiet, editorial Japanese services page on a warm off-white ground. The headline is a centred serif set in dark ink on two lines with generous line spacing, and a small pill label sits above it. The primary action is a solid dark pill, the secondary a bordered pill, and a wide photograph strip runs across the page below the hero.

**Mood:** quiet, editorial, warm, refined

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fafaf9` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#292524` | Headings and primary copy |
| Muted text | `#78716c` | Secondary copy, captions |
| Border | `#f5f5f4` | Hairlines, dividers, outlines |
| Accent | `#1c1917` | Primary action and highlights |

Palette by frequency of use: `#1c1917` · `#78716c` · `#e7e5e4` · `#a8a29e` · `#fafaf9` · `#f5f5f4` · `#ffffff` · `#292524` · `#57534e` · `#44403c`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Noto Serif JP
- **Body:** Noto Sans JP
- **Loaded families:** Noto Sans JP, Noto Serif JP
- **Scale (largest breakpoint):** h1 48px · h2 36px · h3 18px · body 14px
- **Weights in use:** medium
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-[2rem]` (2rem)
- **Shadows:** `shadow-sm`, `shadow-md`
- **Content width:** `max-w-6xl`, `max-w-5xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-4`, `gap-5`, `gap-12`

**Primary button**

```html
<a class="hidden md:inline-flex items-center justify-center bg-stone-900 text-stone-50 text-sm font-medium px-6 py-3 rounded-full transition-colors hover:bg-stone-800">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Services (`services`)
5. Case studies (`case-studies`)
6. Call to action (`cta`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #fafaf9;
  --color-surface: #ffffff;
  --color-text: #292524;
  --color-muted: #78716c;
  --color-border: #f5f5f4;
  --color-accent: #1c1917;
  --font-display: "Noto Serif JP", serif;
  --font-body: "Noto Sans JP", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fafaf9',
    surface: '#ffffff',
    ink: '#292524',
    muted: '#78716c',
    line: '#f5f5f4',
    accent: '#1c1917',
  },
  fontFamily: { display: ['Noto Serif JP'], sans: ['Noto Sans JP'] },
} }
```

## Do and don't

- **Do:** Set headlines in a centred serif with generous line spacing
- **Do:** Use dark ink (#1c1917) for the primary button and text
- **Do:** Keep the top navigation to one solid pill button
- **Don't:** Don't introduce orange; this page uses neutral tones
- **Don't:** Don't set the serif headline in bold
- **Don't:** Don't cut the wide photograph strip into small tiles

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
