# Design system — Luxury Real Estate Portfolio Landing Page Template

`SN-W02099` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `fr`

## Direction

A dark, French-language advisory page with a near-black ground [#0d0d0d] and a serif headline in warm cream [#f2ede4] that carries the whole first screen. The tan-gold accent [#c9a96e] fills the primary button and the nav call to action, and a small gold emblem sits above the eyebrow line. Spacing is generous, and the secondary action is a plain text link with an arrow.

**Mood:** dark, warm, discreet, classical, measured

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0d0d0d` | Page ground |
| Surface | `#141311` | Cards, panels, raised areas |
| Text | `#f2ede4` | Headings and primary copy |
| Muted text | `#6e675c` | Secondary copy, captions |
| Border | `#26231e` | Hairlines, dividers, outlines |
| Accent | `#c9a96e` | Primary action and highlights |

Palette by frequency of use: `#c9a96e` · `#d4a340` · `#b8b0a2` · `#0d0d0d` · `#26231e` · `#f2ede4` · `#1c1915` · `#9c7434` · `#141311` · `#e3ddd1`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Montserrat
- **Body:** Montserrat
- **Loaded families:** Montserrat, Playfair Display
- **Scale (largest breakpoint):** h1 60px · h2 42px · h3 23px · body 25px
- **Weights in use:** medium, semibold, light
- **Letter spacing:** `tracking-[0.22em]`, `tracking-[0.14em]`

## Shape, spacing and layout

- **Corner radius:** `rounded` (4px), `rounded-lg` (8px), `rounded-full` (9999px)
- **Content width:** `max-w-6xl`, `max-w-3xl`
- **Section padding:** `py-16`, `py-28`
- **Common gaps:** `gap-3`, `gap-10`, `gap-8`

**Primary button**

```html
<a class="group inline-flex min-h-14 items-center justify-center rounded px-9 py-[1.125rem] text-center font-['Montserrat'] text-[0.8125rem] font-semibold uppercase tracking-[0.14em] transition duration-300 hover:-translate-y-0.5 bg-[#C9A96E] text-[#0D0D0D] hover:bg-[#D4A340] w-full">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. About (`about`)
5. Call to action (`cta`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels)
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #0d0d0d;
  --color-surface: #141311;
  --color-text: #f2ede4;
  --color-muted: #6e675c;
  --color-border: #26231e;
  --color-accent: #c9a96e;
  --font-display: "Montserrat", sans-serif;
  --font-body: "Montserrat", sans-serif;
  --radius: 4px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0d0d0d',
    surface: '#141311',
    ink: '#f2ede4',
    muted: '#6e675c',
    line: '#26231e',
    accent: '#c9a96e',
  },
  fontFamily: { display: ['Montserrat'], sans: ['Montserrat'] },
} }
```

## Do and don't

- **Do:** Set headlines in warm cream (#f2ede4) serif, centred over two lines.
- **Do:** Use the tan-gold (#c9a96e) for filled buttons and the emblem only.
- **Do:** Pair the filled button with a plain text link, not a second button.
- **Don't:** Don't use the gold for headline text; keep it on buttons and marks.
- **Don't:** Don't set body copy in pure white; the body text is a warm grey-beige.
- **Don't:** Don't add photography to the hero; the first screen is type, emblem and button.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
