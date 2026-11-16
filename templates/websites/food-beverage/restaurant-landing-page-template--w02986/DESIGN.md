# Design system — Restaurant Landing Page Template

`SN-W02986` · food-beverage · light mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A dark hero card set inside a light page frame: a near-black rounded panel holds a very large white Inter headline, with a white rating chip and a price chip above it. The primary button is a white pill with a dark arrow badge, and a dark secondary pill carries a green WhatsApp icon. The framed card is the main visual, so the light page ground shows only at the edges.

**Mood:** framed, bold, clean, rounded

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f5f5f4` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#0f172a` | Headings and primary copy |
| Muted text | `#78716c` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#15803d` | Primary action and highlights |
| Second accent | `#f87171` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#f5f5f4` · `#000000` · `#1c1917` · `#d6d3d1` · `#44403c` · `#78716c` · `#57534e` · `#a8a29e` · `#e7e5e4`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Plus Jakarta Sans, Geist
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 24px · body 18px
- **Weights in use:** medium, bold, semibold
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-[2.5rem]` (2.5rem)
- **Shadows:** `shadow-sm`, `shadow-lg`, `shadow-2xl`
- **Content width:** `max-w-[1600px]`, `max-w-4xl`
- **Section padding:** `py-20`
- **Common gaps:** `gap-3`, `gap-4`, `gap-2`

**Primary button**

```html
<a class="flex items-center gap-3 bg-white text-black pl-8 pr-2 py-2.5 rounded-full font-semibold text-sm hover:bg-stone-200 transition font-geist group">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Menu list (`menu-list`)
4. Bento grid (`bento-grid`)
5. Map / location (`map-location`)
6. Booking form (`booking`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #f5f5f4;
  --color-surface: #ffffff;
  --color-text: #0f172a;
  --color-muted: #78716c;
  --color-border: #ffffff;
  --color-accent: #15803d;
  --color-accent-2: #f87171;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f5f5f4',
    surface: '#ffffff',
    ink: '#0f172a',
    muted: '#78716c',
    line: '#ffffff',
    accent: '#15803d',
    accent2: '#f87171',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the hero as a rounded dark panel inside the light page frame.
- **Do:** Use white pill buttons with a dark circle icon for the primary action.
- **Do:** Use green only for the WhatsApp icon in the contact button.
- **Don't:** Don't fill the hero panel with light colours.
- **Don't:** Don't turn the WhatsApp green into a button colour.
- **Don't:** Don't drop the rating and price chips above the headline.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
