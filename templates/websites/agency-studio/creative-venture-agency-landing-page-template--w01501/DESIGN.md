# Design system — Creative Venture Agency Landing Page Template

`SN-W01501` · agency-studio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A solid black screen (#000000) with a huge lowercase white wordmark, 'rejouice', set in a neutral grotesque and cropped across the lower half of the first screen. Navigation is reduced to a small label at the top left and a plain 'Menu' word at the top right. The screen is nearly empty, so the wordmark is the only graphic element and carries the whole look.

**Mood:** stark, minimal, monolithic, confident

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#9ca3af` | Secondary copy, captions |
| Border | `#000000` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#ffffff` · `#9ca3af` · `#000000` · `#e5e7eb` · `#faf8f5` · `#111111` · `#d1d5db`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h2 67px · h3 72px
- **Weights in use:** normal, medium, semibold
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px)
- **Content width:** `max-w-[1800px]`, `max-w-6xl`
- **Section padding:** `py-20`, `py-32`
- **Common gaps:** `gap-2`, `gap-4`, `gap-8`

**Primary button**

```html
<a class="border border-white/30 rounded-full px-8 py-4 hover:bg-white hover:text-black transition-colors text-sm font-medium">…</a>
```

## Page structure

Blocks in page order:

1. About (`about`)
2. Hero (`hero`)
3. Logo cloud (`logo-cloud`)
4. Services (`services`)
5. Integrations (`integrations`)
6. Gallery / portfolio (`gallery-portfolio`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #000000;
  --color-text: #ffffff;
  --color-muted: #9ca3af;
  --color-border: #000000;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    ink: '#ffffff',
    muted: '#9ca3af',
    line: '#000000',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the wordmark very large in lowercase white grotesque, cropped across the lower half of the first screen.
- **Do:** Keep the ground solid black (#000000) and use no colour on the first screen.
- **Do:** Reduce navigation to a small label at the top left and a single 'Menu' word at the top right.
- **Don't:** Don't add a second typeface; the wordmark is the only typographic voice.
- **Don't:** Don't fill the hero with imagery before the wordmark.
- **Don't:** Don't set the wordmark in a heavy weight; it is regular.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
