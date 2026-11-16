# Design system — Weather Forecast and Location Tracker

`SN-W04336` · other-landing · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A light, card-based weather screen on warm off-white with a single search field at the top. The current location is a larger card with the temperature in big numerals, and a solid warm brown button carries the one main action. Saved cities sit in a two-column grid of small white tiles, each with a city name, a temperature and a short condition.

**Mood:** calm, warm, clear, utilitarian, soft

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Text | `#111111` | Headings and primary copy |
| Accent | `#fbbf24` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#fbbf24`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** system sans-serif
- **Body:** system sans-serif
- **Scale (largest breakpoint):** h1 24px · h2 18px · h3 16px
- **Weights in use:** medium, light

## Shape, spacing and layout

- **Corner radius:** `rounded-xl` (12px), `rounded-full` (9999px), `rounded-3xl` (24px)
- **Shadows:** `shadow-sm`, `shadow-md`
- **Common gaps:** `gap-3`, `gap-1`

**Primary button**

```html
<a class="w-full bg-taupe-600 text-white py-2.5 rounded-lg text-sm font-medium hover:bg-taupe-700 transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)

## Motion, effects and stack

- **Libraries:** Tailwind CSS (CDN)

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-text: #111111;
  --color-accent: #fbbf24;
  --font-display: "system sans-serif", serif;
  --font-body: "system sans-serif", serif;
  --radius: 12px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    ink: '#111111',
    accent: '#fbbf24',
  },
  fontFamily: { display: ['system sans-serif'], sans: ['system sans-serif'] },
} }
```

## Do and don't

- **Do:** Use the warm brown button for the View Details action only
- **Do:** Show each temperature as a large numeral inside its card
- **Do:** Lay saved locations in a two-column grid of white tiles
- **Don't:** Don't add bright colours to the location tiles
- **Don't:** Don't add a second filled button inside the location card
- **Don't:** Don't drop the short condition text under each temperature

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
