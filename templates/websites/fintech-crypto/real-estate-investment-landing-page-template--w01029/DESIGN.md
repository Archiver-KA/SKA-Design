# Design system — Real Estate Investment Landing Page Template

`SN-W01029` · fintech-crypto · dark mode · Sinera Atlas theme `circuit` · language `fr`

## Direction

A quiet luxury real estate page sits on a near-black ground (#0d0d0d), with gold (#c9a96e) kept for the primary button and the italic second line of the hero headline. Headings use a high-contrast serif in cream (#f2ede4), which gives a private-banking tone. The signature is restraint: one gold button and one gold italic line, all else cream and warm grey.

**Mood:** restrained, old-money, warm, editorial

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0d0d0d` | Page ground |
| Surface | `#141311` | Cards, panels, raised areas |
| Text | `#b8b0a2` | Headings and primary copy |
| Muted text | `#6e675c` | Secondary copy, captions |
| Border | `#26231e` | Hairlines, dividers, outlines |
| Accent | `#c9a96e` | Primary action and highlights |

Palette by frequency of use: `#c9a96e` · `#b8b0a2` · `#d4a340` · `#0d0d0d` · `#26231e` · `#f2ede4` · `#1c1915` · `#9c7434` · `#6e675c` · `#141311`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Montserrat
- **Body:** Montserrat
- **Loaded families:** Montserrat, Playfair Display
- **Scale (largest breakpoint):** h1 60px · h2 42px · h3 23px · body 14px
- **Weights in use:** semibold, medium, light
- **Letter spacing:** `tracking-[0.22em]`, `tracking-[0.14em]`

## Shape, spacing and layout

- **Corner radius:** `rounded` (4px), `rounded-lg` (8px), `rounded-full` (9999px)
- **Content width:** `max-w-[1140px]`, `max-w-2xl`
- **Section padding:** `py-[1.125rem]`, `py-[68px]`
- **Common gaps:** `gap-3`, `gap-6`, `gap-5`

**Primary button**

```html
<a class="inline-flex min-h-12 items-center justify-center rounded bg-[#C9A96E] px-5 py-3 text-center text-[0.8125rem] font-semibold uppercase tracking-[0.14em] text-[#0D0D0D] transition duration-300 hover:-translate-y-px hover:bg-[#D4A340]">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Feature grid (`features`)
5. Testimonials (`testimonials`)
6. Call to action (`cta`)
7. Footer (`footer`)

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

- **Do:** Use the gold (#c9a96e) only for the primary button and one italic headline line per hero
- **Do:** Set headlines in a serif in cream (#f2ede4), with body copy in warm grey (#b8b0a2)
- **Do:** Set eyebrow labels in small uppercase with wide letter spacing, in gold
- **Don't:** Don't use a bright or saturated colour; the warm gold is the only accent
- **Don't:** Don't round buttons into pills; they keep square corners
- **Don't:** Don't add bright glows behind the hero; the only light is a soft vignette

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
