# Design system — Fitness Gym Landing Page Template

`SN-W02602` · sports-fitness · light mode · Sinera Atlas theme `calm` · language `en`

## Direction

A bold gym page with a light header bar that carries a yellow (#ffdd00) Join button and small uppercase links. Headlines are set in heavy black sans-serif for a high-contrast, sporty tone. The yellow is reserved for calls to action.

**Mood:** bold, sporty, high-contrast, modest, yellow

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#f9fafb` | Cards, panels, raised areas |
| Text | `#0d0d0d` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#0d0d0d` | Hairlines, dividers, outlines |
| Accent | `#ffdd00` | Primary action and highlights |

Palette by frequency of use: `#ffdd00` · `#0d0d0d` · `#ffffff` · `#000000` · `#9ca3af` · `#d1d5db` · `#6b7280` · `#4b5563` · `#f3f4f6` · `#1f2937`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Barlow
- **Body:** Barlow
- **Loaded families:** Bebas Neue, Barlow
- **Scale (largest breakpoint):** h1 144px · h2 60px · h3 30px · body 12px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-3xl` (24px)
- **Shadows:** `shadow-[0_0_15px_rgba(255,221,0,0.3)]`, `shadow-lg`, `shadow-[0_0_20px_rgba(255,221,0,0.2)]`
- **Content width:** `max-w-7xl`, `max-w-[250px]`
- **Section padding:** `py-24`, `py-12`
- **Common gaps:** `gap-4`, `gap-2`, `gap-6`

**Primary button**

```html
<a class="bg-[#FFDD00] text-[#0D0D0D] font-semibold px-6 py-3 rounded-full flex items-center gap-2 group hover:bg-yellow-400 transition-colors text-sm">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Services (`services`)
5. Pricing (`pricing`)
6. Newsletter signup (`newsletter`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #f9fafb;
  --color-text: #0d0d0d;
  --color-muted: #6b7280;
  --color-border: #0d0d0d;
  --color-accent: #ffdd00;
  --font-display: "Barlow", sans-serif;
  --font-body: "Barlow", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#f9fafb',
    ink: '#0d0d0d',
    muted: '#6b7280',
    line: '#0d0d0d',
    accent: '#ffdd00',
  },
  fontFamily: { display: ['Barlow'], sans: ['Barlow'] },
} }
```

## Do and don't

- **Do:** Use the yellow (#ffdd00) for the header button and the primary calls to action only
- **Do:** Set headlines in heavy black sans-serif
- **Do:** Keep the header light with small uppercase links and a single filled button at right
- **Don't:** Don't set the header links in yellow; the Join button carries the accent
- **Don't:** Don't set body copy in yellow; it is for actions
- **Don't:** Don't use yellow as a large fill; it reads as a signal on light surfaces

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
