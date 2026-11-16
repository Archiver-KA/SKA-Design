# Design system — Real Estate Asset Management & Investment Template

`SN-W01023` · fintech-crypto · dark mode · Sinera Atlas theme `circuit` · language `fr`

## Direction

A dark, restrained real-estate investment page on a near-black ground (#0d0d0d), with a cream serif headline and a gold (#c9a96e) solid primary button. The gold also marks the emblem and the small uppercase eyebrow, and the hero stays free of photography. Copy is set in warm grey with generous spacing, so the page feels formal and considered.

**Mood:** formal, warm, quiet, luxurious, understated

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0d0d0d` | Page ground |
| Surface | `#141311` | Cards, panels, raised areas |
| Text | `#b8b0a2` | Headings and primary copy |
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
  --color-text: #b8b0a2;
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
    ink: '#b8b0a2',
    muted: '#6e675c',
    line: '#26231e',
    accent: '#c9a96e',
  },
  fontFamily: { display: ['Montserrat'], sans: ['Montserrat'] },
} }
```

## Do and don't

- **Do:** Use the gold (#c9a96e) for the primary button, the emblem and the eyebrow only.
- **Do:** Set headlines in the cream serif, centred, with tight leading.
- **Do:** Keep body copy in warm grey (#b8b0a2) on the near-black ground.
- **Don't:** Don't add photography to the hero.
- **Don't:** Don't use a bright colour for buttons.
- **Don't:** Don't set long lines of text in full-strength gold.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
