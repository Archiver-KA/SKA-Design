# Design system — Mortgage Borrowing Capacity Calculator Template

`SN-W01002` · fintech-crypto · dark mode · Sinera Atlas theme `circuit` · language `fr`

## Direction

A dark, restrained property page on a near-black ground (#0d0d0d), with cream serif headlines and the second line set in italic gold (#c9a96e). Gold is the solid primary button colour and the emblem, while nav links are small uppercase grey. The hero is centred over a plain black field with no photography, which keeps the tone formal and considered.

**Mood:** formal, warm, quiet, considered, understated

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0d0d0d` | Page ground |
| Surface | `#141311` | Cards, panels, raised areas |
| Text | `#b8b0a2` | Headings and primary copy |
| Muted text | `#6e675c` | Secondary copy, captions |
| Border | `#e3ddd1` | Hairlines, dividers, outlines |
| Accent | `#c9a96e` | Primary action and highlights |

Palette by frequency of use: `#c9a96e` · `#b8b0a2` · `#d4a340` · `#9c7434` · `#0d0d0d` · `#6e675c` · `#26231e` · `#e3ddd1` · `#f2ede4` · `#ffffff`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Montserrat
- **Body:** Montserrat
- **Loaded families:** Montserrat, Playfair Display
- **Scale (largest breakpoint):** h1 60px · h2 42px · h3 23px · body 14px
- **Weights in use:** medium, semibold, light
- **Letter spacing:** `tracking-[0.22em]`, `tracking-[0.14em]`

## Shape, spacing and layout

- **Corner radius:** `rounded-lg` (8px), `rounded` (4px), `rounded-full` (9999px)
- **Content width:** `max-w-[1140px]`, `max-w-2xl`
- **Section padding:** `py-[1.125rem]`, `py-[68px]`
- **Common gaps:** `gap-3`, `gap-5`, `gap-4`

**Primary button**

```html
<a class="inline-flex min-h-12 items-center justify-center rounded bg-[#C9A96E] px-5 py-3 text-center text-[0.8125rem] font-semibold uppercase tracking-[0.14em] text-[#0D0D0D] transition duration-300 hover:-translate-y-px hover:bg-[#D4A340]">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Testimonials (`testimonials`)
5. About (`about`)
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
  --color-border: #e3ddd1;
  --color-accent: #c9a96e;
  --font-display: "Montserrat", sans-serif;
  --font-body: "Montserrat", sans-serif;
  --radius: 8px;
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
    line: '#e3ddd1',
    accent: '#c9a96e',
  },
  fontFamily: { display: ['Montserrat'], sans: ['Montserrat'] },
} }
```

## Do and don't

- **Do:** Set the second headline line in italic gold (#c9a96e).
- **Do:** Use the solid gold button for the main action only.
- **Do:** Keep body copy in the warm grey (#b8b0a2) on near-black.
- **Don't:** Don't add photography to the hero.
- **Don't:** Don't use a bright colour for buttons.
- **Don't:** Don't set the headline in a sans-serif face.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
