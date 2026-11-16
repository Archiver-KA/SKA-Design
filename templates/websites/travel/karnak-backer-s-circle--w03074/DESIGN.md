# Design system — Karnak Backer's Circle

`SN-W03074` · travel · dark mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A dark luxury concierge page on a near-black ground (#080808) with a very large white sans headline that fills the width, and a muted grey subline. A single tan pill button (#c09c6e) is the only colour in the hero, and a dark outlined card waits below for the next section. The design is restrained and reads like a private membership page.

**Mood:** dark, luxurious, restrained, exclusive

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#080808` | Page ground |
| Surface | `#9e8b75` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#525252` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#c09c6e` | Primary action and highlights |
| Second accent | `#22c55e` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#c09c6e` · `#737373` · `#a3a3a3` · `#080808` · `#000000` · `#0a0a0a` · `#050505` · `#ef4444` · `#525252`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Geist
- **Body:** -apple-system
- **Loaded families:** Geist, Roboto, Montserrat, Poppins, Playfair Display, Instrument Serif
- **Scale (largest breakpoint):** h1 110px · h2 48px · h3 30px · body 14px
- **Weights in use:** medium, light, semibold
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-sm` (2px)
- **Shadows:** `shadow-2xl`, `shadow-lg`, `shadow-xl`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Common gaps:** `gap-2`, `gap-3`, `gap-4`

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Feature grid (`features`)
5. Benefits (`benefits`)
6. Gallery / portfolio (`gallery-portfolio`)
7. Timeline (`timeline`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), AOS scroll reveal
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #080808;
  --color-surface: #9e8b75;
  --color-text: #ffffff;
  --color-muted: #525252;
  --color-border: #ffffff;
  --color-accent: #c09c6e;
  --color-accent-2: #22c55e;
  --font-display: "Geist", sans-serif;
  --font-body: "-apple-system", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#080808',
    surface: '#9e8b75',
    ink: '#ffffff',
    muted: '#525252',
    line: '#ffffff',
    accent: '#c09c6e',
    accent2: '#22c55e',
  },
  fontFamily: { display: ['Geist'], sans: ['-apple-system'] },
} }
```

## Do and don't

- **Do:** Set the hero headline very large in white sans on near-black
- **Do:** Use the tan (#c09c6e) for the single pill button in the hero
- **Do:** Keep the subline grey (#a3a3a3) and short
- **Don't:** Don't use the tan (#c09c6e) as a page ground; it is an accent
- **Don't:** Don't add red or green accents; the palette here is neutral
- **Don't:** Don't add a second button in the hero

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
