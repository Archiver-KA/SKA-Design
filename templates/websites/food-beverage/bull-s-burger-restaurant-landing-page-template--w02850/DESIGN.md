# Design system — Bull's Burger Restaurant Landing Page Template

`SN-W02850` · food-beverage · dark mode · Sinera Atlas theme `dwell` · language `fr`

## Direction

Loud and dark, poster-like. A near-black ground (#0a0a0a) holds an oversized all-caps headline split across two lines, white for the first word and a saturated red (#dc2626) for the second. That split colour is the device the page repeats, and the same red fills the order button in the nav. Small tracked eyebrow text sits above and below the headline, and the whole page is set mostly in capitals.

**Mood:** loud, poster-like, dark, fast

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Surface | `#0a0a0a` | Cards, panels, raised areas |
| Text | `#f5f5f5` | Headings and primary copy |
| Muted text | `#f4ede4` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#dc2626` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#ef4444` · `#dc2626` · `#0a0a0a` · `#f87171` · `#000000` · `#171717` · `#0b0708` · `#f4ede4` · `#7f1d1d`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** DM Sans
- **Body:** DM Sans
- **Loaded families:** Bebas Neue, DM Sans, Instrument Serif
- **Scale (largest breakpoint):** h2 72px · h3 30px · body 12px
- **Weights in use:** semibold
- **Letter spacing:** `tracking-widest`, `tracking-[0.3em]`

## Shape, spacing and layout

- **Corner radius:** `rounded-xl` (12px), `rounded-2xl` (16px), `rounded-lg` (8px)
- **Shadows:** `shadow-2xl`, `shadow-lg`, `shadow-red-900/40`
- **Content width:** `max-w-7xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="inline-flex items-center gap-2 bg-red-600 hover:bg-red-500 transition text-white text-xs uppercase tracking-widest font-semibold px-4 py-2 rounded-lg">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Marquee (`marquee`)
4. Menu list (`menu-list`)
5. Feature grid (`features`)
6. Bento grid (`bento-grid`)
7. Contact form (`contact-form`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #0a0a0a;
  --color-surface: #0a0a0a;
  --color-text: #f5f5f5;
  --color-muted: #f4ede4;
  --color-border: #ffffff;
  --color-accent: #dc2626;
  --font-display: "DM Sans", sans-serif;
  --font-body: "DM Sans", sans-serif;
  --radius: 12px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0a0a0a',
    surface: '#0a0a0a',
    ink: '#f5f5f5',
    muted: '#f4ede4',
    line: '#ffffff',
    accent: '#dc2626',
  },
  fontFamily: { display: ['DM Sans'], sans: ['DM Sans'] },
} }
```

## Do and don't

- **Do:** Set headlines in all caps at display size, with the key word in red (#dc2626)
- **Do:** Use red (#dc2626) for the order button and one headline word per section
- **Do:** Keep the ground at #0a0a0a and let the photography supply the mid-tones
- **Don't:** Don't set body copy in all caps
- **Don't:** Don't use red for large background panels; it is for emphasis
- **Don't:** Don't soften headlines with light weights or pale greys

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
