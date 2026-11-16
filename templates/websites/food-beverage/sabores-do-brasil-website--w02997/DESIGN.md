# Design system — Sabores do Brasil Website

`SN-W02997` · food-beverage · dark mode · Sinera Atlas theme `dwell` · language `pt-BR`

## Direction

A dark warm-brown hero (#3d1f0d) with a three-line serif headline: the first line in gold (#e8a020), a white bold middle line, and a closing phrase in orange italic (#c87a2e). Gold fills the primary button beside a gold outlined one, and a green WhatsApp pill floats at the bottom right. The hero is dark and earthy, and the copy is serif.

**Mood:** warm, story-driven, serif-led, earthy

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#3d1f0d` | Page ground |
| Surface | `#faf6ee` | Cards, panels, raised areas |
| Text | `#f5efe0` | Headings and primary copy |
| Accent | `#e8a020` | Primary action and highlights |
| Second accent | `#25d366` | Supporting highlights |

Palette by frequency of use: `#3d1f0d` · `#a0522d` · `#e8a020` · `#c87a2e` · `#f5efe0` · `#2c1a0e` · `#faf6ee` · `#6b4c2a` · `#d9cfc0` · `#25d366`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** DM Sans
- **Body:** DM Sans
- **Loaded families:** DM Sans, Great Vibes, Lora, Playfair Display
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 24px · body 18px
- **Weights in use:** semibold, light, medium
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-md` (6px), `rounded-[14px]` (14px)
- **Shadows:** `shadow-sm`, `shadow-xl`, `shadow-md`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-4`, `gap-3`, `gap-8`

**Primary button**

```html
<a class="filter-btn px-6 py-2.5 rounded-md bg-[#3D1F0D] text-[#F5EFE0] font-['DM_Sans'] font-medium text-sm whitespace-nowrap shadow-sm transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Product grid (`product-grid`)
5. Testimonials (`testimonials`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #3d1f0d;
  --color-surface: #faf6ee;
  --color-text: #f5efe0;
  --color-accent: #e8a020;
  --color-accent-2: #25d366;
  --font-display: "DM Sans", sans-serif;
  --font-body: "DM Sans", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#3d1f0d',
    surface: '#faf6ee',
    ink: '#f5efe0',
    accent: '#e8a020',
    accent2: '#25d366',
  },
  fontFamily: { display: ['DM Sans'], sans: ['DM Sans'] },
} }
```

## Do and don't

- **Do:** Set the three headline lines in gold, white, and orange italic, in that order.
- **Do:** Use the gold (#e8a020) for the primary button and the outlined secondary.
- **Do:** Keep the green WhatsApp pill (#25d366) for the contact action only.
- **Don't:** Don't put the page on a cream ground; the hero is dark brown.
- **Don't:** Don't use DM Sans; the copy is serif.
- **Don't:** Don't use the green for anything except the WhatsApp action.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
