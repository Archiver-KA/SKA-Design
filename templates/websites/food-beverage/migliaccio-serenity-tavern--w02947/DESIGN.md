# Design system — Migliaccio Serenity Tavern

`SN-W02947` · food-beverage · dark mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A dark, private-dining page on near-black (#09090b) with a large off-white Playfair Display headline, the second word set in grey italic. Blue (#0076b6) appears only in the small tracked eyebrow line, and a circular text badge on the right adds a quiet emblem. The page is monochrome apart from that single blue, so it reads as exclusive and restrained.

**Mood:** exclusive, restrained, monochrome, ceremonial

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#09090b` | Page ground |
| Surface | `#18181b` | Cards, panels, raised areas |
| Text | `#f5f5f5` | Headings and primary copy |
| Muted text | `#a1a1aa` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#0076b6` | Primary action and highlights |
| Second accent | `#0076b6` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#ce1126` · `#a1a1aa` · `#71717a` · `#09090b` · `#18181b` · `#0076b6` · `#000000` · `#e4e4e7` · `#d4d4d8`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display, Geist, Roboto, Montserrat, Poppins
- **Scale (largest breakpoint):** h1 128px · h2 48px · h3 24px · body 14px
- **Weights in use:** light, medium, semibold
- **Letter spacing:** `tracking-widest`, `tracking-[0.2em]`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded` (4px)
- **Shadows:** `shadow-2xl`, `shadow-lg`, `shadow-white/5`
- **Content width:** `max-w-7xl`, `max-w-[1800px]`
- **Section padding:** `py-32`
- **Common gaps:** `gap-3`, `gap-8`, `gap-2`

**Primary button**

```html
<a class="bg-white/10 px-4 py-2 rounded-full hover:bg-white hover:text-black transition-colors btn-hover-red">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Timeline (`timeline`)
5. Menu list (`menu-list`)
6. Booking form (`booking`)
7. Pricing (`pricing`)
8. Logo cloud (`logo-cloud`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #09090b;
  --color-surface: #18181b;
  --color-text: #f5f5f5;
  --color-muted: #a1a1aa;
  --color-border: #ffffff;
  --color-accent: #0076b6;
  --color-accent-2: #0076b6;
  --font-display: "Playfair Display", serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#09090b',
    surface: '#18181b',
    ink: '#f5f5f5',
    muted: '#a1a1aa',
    line: '#ffffff',
    accent: '#0076b6',
    accent2: '#0076b6',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the hero headline in Playfair Display with the second word in grey italic
- **Do:** Use the blue (#0076b6) only for the eyebrow line and small labels
- **Do:** Keep the nav in small uppercase sans with a single outline membership button
- **Don't:** Don't use the red (#ce1126) on the dark ground; it is not part of the design.
- **Don't:** Don't make the page light; the ground is near-black
- **Don't:** Don't set body copy in pure white; use the muted grey for secondary lines

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
