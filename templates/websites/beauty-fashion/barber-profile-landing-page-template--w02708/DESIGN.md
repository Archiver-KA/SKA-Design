# Design system — Barber Profile Landing Page Template

`SN-W02708` · beauty-fashion · light mode · Sinera Atlas theme `dwell` · language `en`

## Direction

Barber profile page built as a single centred card on a warm grey ground (#e7e5e4). The card is white, with a circular placeholder avatar, a bold sans name and a full-width charcoal button as the main action. Below it, stacked link rows with small icons and arrows do the rest, so the design reads as a link-in-bio card rather than a full landing page.

**Mood:** quiet, functional, card-based, neutral

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#e7e5e4` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#1c1917` | Headings and primary copy |
| Muted text | `#57534e` | Secondary copy, captions |
| Border | `#e7e5e4` | Hairlines, dividers, outlines |
| Accent | `#1c1917` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#d6d3d1` · `#e7e5e4` · `#fafaf9` · `#57534e` · `#1c1917` · `#78716c` · `#f5f5f4` · `#a8a29e` · `#44403c`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Space Grotesk
- **Scale (largest breakpoint):** h1 30px · body 14px
- **Weights in use:** semibold, medium
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-xl` (12px), `rounded-full` (9999px), `rounded-lg` (8px)
- **Shadows:** `shadow-sm`, `shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]`, `shadow-lg`
- **Content width:** `max-w-2xl`
- **Common gaps:** `gap-1.5`, `gap-2`

**Primary button**

```html
<a class="flex items-center justify-center w-full hover:bg-stone-800 transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 text-sm font-medium text-white font-geist bg-stone-900 rounded-xl py-4 shadow-md group relative overflow-hidden">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Footer (`footer`)

## Motion, effects and stack

- **Effects:** CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #e7e5e4;
  --color-surface: #ffffff;
  --color-text: #1c1917;
  --color-muted: #57534e;
  --color-border: #e7e5e4;
  --color-accent: #1c1917;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 12px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#e7e5e4',
    surface: '#ffffff',
    ink: '#1c1917',
    muted: '#57534e',
    line: '#e7e5e4',
    accent: '#1c1917',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Centre the profile in one white card on the warm grey ground (#e7e5e4).
- **Do:** Make the primary button full-width charcoal (#1c1917) with white text.
- **Do:** Use the green (#22c55e) only for the small availability dot next to the status line.
- **Don't:** Don't use green for buttons; it is a status mark here.
- **Don't:** Don't add a second column; the design is a single narrow card.
- **Don't:** Don't add shadows to the card if the hairline edge is enough; keep the card flat.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
