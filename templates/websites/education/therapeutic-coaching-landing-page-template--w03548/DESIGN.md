# Design system — Therapeutic Coaching Landing Page Template

`SN-W03548` · education · light mode · Sinera Atlas theme `calm` · language `pl`

## Direction

The therapy page sits on a warm cream ground (#f9f6f2) with heavy, tightly leaded sans-serif headlines in near-black. Its one loud colour is lime green (#94e130), used on the primary button and the small tag above the headline. A tall portrait fills one half of the hero, which keeps the page personal and direct. The layout is simple, warm and unfussy.

**Mood:** warm, direct, personal, bold, cream

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f9f6f2` | Page ground |
| Surface | `#f4eee5` | Cards, panels, raised areas |
| Text | `#141414` | Headings and primary copy |
| Muted text | `#4e4d4c` | Secondary copy, captions |
| Accent | `#94e130` | Primary action and highlights |

Palette by frequency of use: `#141414` · `#4e4d4c` · `#94e130` · `#737373` · `#ffffff` · `#a1a1a1` · `#f4eee5` · `#000000` · `#262626` · `#f9f6f2`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Figtree
- **Body:** Figtree
- **Loaded families:** Figtree, Inter
- **Weights in use:** semibold, medium
- **Letter spacing:** `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-[10px]` (10px), `rounded-2xl` (16px)
- **Content width:** `max-w-[1320px]`, `max-w-2xl`
- **Section padding:** `py-20`, `py-32`
- **Common gaps:** `gap-6`, `gap-12`, `gap-2`

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Testimonials (`testimonials`)
5. Services (`services`)
6. FAQ (`faq`)
7. Call to action (`cta`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #f9f6f2;
  --color-surface: #f4eee5;
  --color-text: #141414;
  --color-muted: #4e4d4c;
  --color-accent: #94e130;
  --font-display: "Figtree", sans-serif;
  --font-body: "Figtree", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f9f6f2',
    surface: '#f4eee5',
    ink: '#141414',
    muted: '#4e4d4c',
    accent: '#94e130',
  },
  fontFamily: { display: ['Figtree'], sans: ['Figtree'] },
} }
```

## Do and don't

- **Do:** Use lime green (#94e130) only for the primary button and small tags
- **Do:** Set headlines in heavy near-black sans-serif with tight leading
- **Do:** Place a full-height portrait beside the hero copy
- **Don't:** Don't use lime green for body text or links
- **Don't:** Don't set the page on a cold grey background
- **Don't:** Don't crop the portrait into a small circle

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
