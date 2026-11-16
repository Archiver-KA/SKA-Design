# Design system — Community Events Landing Page Template

`SN-W03576` · events · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

The community events page is warm and informal, set on an off-white ground (#faf9f6) with a large dark charcoal headline. One word in each headline is set in a coral tone, which gives the hero its personality. Photos sit as slightly tilted cards with soft edges, and the buttons are dark pills paired with an outline pill. The layout feels tactile and human rather than polished.

**Mood:** warm, casual, playful, editorial, tactile

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#faf9f6` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#27272a` | Headings and primary copy |
| Muted text | `#52525b` | Secondary copy, captions |
| Border | `#e4e4e7` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#ffffff` · `#27272a` · `#faf9f6` · `#000000` · `#f4f4f5` · `#e4e4e7` · `#d4d4d8` · `#a1a1aa` · `#52525b` · `#18181b`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Recoleta
- **Body:** Satoshi
- **Loaded families:** DM Serif Display, Inter, Satoshi, Recoleta
- **Scale (largest breakpoint):** h1 96px · h2 60px · h3 24px · body 14px
- **Weights in use:** bold, semibold, medium
- **Letter spacing:** `tracking-tighter`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-xl` (12px)
- **Shadows:** `shadow-sm`, `shadow-xl`, `shadow-lg`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-2`, `gap-4`, `gap-8`

**Primary button**

```html
<a class="px-8 py-4 bg-ccc-text text-ccc-base rounded-full text-sm uppercase tracking-widest font-medium hover:bg-zinc-800 transition-all w-full sm:w-auto flex items-center justify-center gap-2 group">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Articles (`blog-articles`)
5. Booking form (`booking`)
6. Call to action (`cta`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN), AOS scroll reveal
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #faf9f6;
  --color-surface: #ffffff;
  --color-text: #27272a;
  --color-muted: #52525b;
  --color-border: #e4e4e7;
  --font-display: "Recoleta", sans-serif;
  --font-body: "Satoshi", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#faf9f6',
    surface: '#ffffff',
    ink: '#27272a',
    muted: '#52525b',
    line: '#e4e4e7',
  },
  fontFamily: { display: ['Recoleta'], sans: ['Satoshi'] },
} }
```

## Do and don't

- **Do:** Set the hero headline large and dark, with one word per line in coral
- **Do:** Use a dark pill button beside an outline pill for the two hero actions
- **Do:** Show event photos as tilted cards with soft edges
- **Don't:** Don't use coral for more than one word per headline
- **Don't:** Don't place photos flat and square without the tilt
- **Don't:** Don't switch the page to a dark background

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
