# Design system — Real Estate & Mortgage Landing Page Template

`SN-W01021` · fintech-crypto · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A warm, light real-estate and mortgage page: a cream-to-taupe gradient hero with a bold serif headline in dark brown, and its second phrase set in pale gold. Gold-brown buttons (#a0722a) carry the primary actions, and a gold leaf illustration on the right adds a crafted, heritage note. The palette is warm and neutral, and the header carries a language switch for a bilingual audience.

**Mood:** warm, heritage, high-end, bilingual, gentle

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#faf7f2` | Page ground |
| Surface | `#fff9f3` | Cards, panels, raised areas |
| Text | `#262626` | Headings and primary copy |
| Muted text | `#a08060` | Secondary copy, captions |
| Accent | `#a0722a` | Primary action and highlights |

Palette by frequency of use: `#a0722a` · `#a08060` · `#fff9f3` · `#3d2c1e` · `#faf7f2` · `#7a5520` · `#c9a96e` · `#6b4f38` · `#8b6347` · `#f5efe6`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Geist
- **Body:** Geist
- **Loaded families:** Playfair Display, Montserrat, Geist
- **Scale (largest breakpoint):** h1 96px · h2 48px · body 12px
- **Weights in use:** light, medium
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-3xl` (24px)
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-28`
- **Common gaps:** `gap-3`, `gap-5`, `gap-2`

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Services (`services`)
5. Articles (`blog-articles`)
6. Contact form (`contact-form`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), blend modes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #faf7f2;
  --color-surface: #fff9f3;
  --color-text: #262626;
  --color-muted: #a08060;
  --color-accent: #a0722a;
  --font-display: "Geist", sans-serif;
  --font-body: "Geist", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#faf7f2',
    surface: '#fff9f3',
    ink: '#262626',
    muted: '#a08060',
    accent: '#a0722a',
  },
  fontFamily: { display: ['Geist'], sans: ['Geist'] },
} }
```

## Do and don't

- **Do:** Set the second headline phrase in pale gold and keep the first in dark brown.
- **Do:** Use the gold-brown (#a0722a) button for the primary action and an outline for the secondary.
- **Do:** Keep the decorative leaf illustration to the hero's right edge.
- **Don't:** Don't use the pale gold for buttons.
- **Don't:** Don't add cool colours to the warm gradient.
- **Don't:** Don't put the headline on a dark background.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
