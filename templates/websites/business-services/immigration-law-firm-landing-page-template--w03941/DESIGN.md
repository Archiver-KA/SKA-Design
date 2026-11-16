# Design system — Immigration Law Firm Landing Page Template

`SN-W03941` · business-services · dark mode · Sinera Atlas theme `route` · language `en`

## Direction

A dark, restrained law-firm page on a deep navy-black ground (#050615). Large Playfair Display headlines alternate roman and italic lines, and the italic lines are shaded from white to grey, which gives the page its signature. Gold (#c4a470) is used for the primary button and for small uppercase labels above the figures, so the page reads as formal without decoration.

**Mood:** formal, restrained, dark, editorial, precise

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#050615` | Page ground |
| Surface | `#0a0a0a` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#9ca3af` | Secondary copy, captions |
| Border | `#e5e7eb` | Hairlines, dividers, outlines |
| Accent | `#c4a470` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#c4a470` · `#050615` · `#9ca3af` · `#e5e7eb` · `#6b7280` · `#000000` · `#f9fafb` · `#d1d5db` · `#0a0a0a`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display
- **Scale (largest breakpoint):** h1 24px · h2 48px · h3 20px · body 14px
- **Weights in use:** medium, light, bold
- **Letter spacing:** `tracking-widest`, `tracking-[0.2em]`

## Shape, spacing and layout

- **Corner radius:** `rounded-sm` (2px), `rounded-full` (9999px)
- **Shadows:** `shadow-2xl`
- **Content width:** `max-w-[1400px]`, `max-w-[1200px]`
- **Section padding:** `py-24`, `py-16`
- **Common gaps:** `gap-3`, `gap-6`, `gap-5`

**Primary button**

```html
<a class="inline-flex items-center justify-center px-8 py-4 bg-[#C4A470] hover:bg-[#a38656] text-white text-[11px] uppercase tracking-[0.2em] font-medium transition-all duration-300 rounded-sm">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. Menu list (`menu-list`)
3. Navigation bar (`navbar`)
4. Feature grid (`features`)
5. Services (`services`)
6. Booking form (`booking`)
7. Contact form (`contact-form`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, custom keyframes
- **Libraries:** Tailwind CSS (CDN), AOS scroll reveal
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #050615;
  --color-surface: #0a0a0a;
  --color-text: #ffffff;
  --color-muted: #9ca3af;
  --color-border: #e5e7eb;
  --color-accent: #c4a470;
  --font-display: "Playfair Display", serif;
  --font-body: "Inter", sans-serif;
  --radius: 2px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#050615',
    surface: '#0a0a0a',
    ink: '#ffffff',
    muted: '#9ca3af',
    line: '#e5e7eb',
    accent: '#c4a470',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headlines in Playfair Display, alternating roman and italic lines
- **Do:** Use gold (#c4a470) only for the primary button and small labels
- **Do:** Set statistics as large numerals with a small uppercase label beneath
- **Don't:** Don't use bright colours or saturated gradients
- **Don't:** Don't set body copy in a serif; use Inter
- **Don't:** Don't round the buttons into pills; keep corners square

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
