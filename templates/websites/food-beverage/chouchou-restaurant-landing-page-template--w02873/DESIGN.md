# Design system — ChouChou Restaurant Landing Page Template

`SN-W02873` · food-beverage · dark mode · Sinera Atlas theme `dwell` · language `fr`

## Direction

Dark and card-based. A black ground (#000000) holds near-black rounded cards (#1c1917) with white titles, and a large headline with a grey second half leads the section. Each feature card carries a small icon, a short title and a brief list, and a single blue icon marks the accessibility block. The layout is structured and calm, with contrast coming from the card edges rather than from colour.

**Mood:** dark, card-based, structured, calm

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#1c1917` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#78716c` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#4ade80` | Primary action and highlights |
| Second accent | `#ffedd5` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#000000` · `#f5f5f4` · `#1c1917` · `#d6d3d1` · `#44403c` · `#a8a29e` · `#78716c` · `#e7e5e4` · `#57534e`.

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
- **Shadows:** `shadow-sm`, `shadow-2xl`, `shadow-lg`
- **Content width:** `max-w-[1600px]`, `max-w-4xl`
- **Section padding:** `py-20`
- **Common gaps:** `gap-3`, `gap-2`, `gap-4`

**Primary button**

```html
<a class="flex items-center gap-3 bg-white text-black pl-8 pr-2 py-2.5 rounded-full font-semibold text-sm hover:bg-stone-200 transition font-geist group">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Call to action (`cta`)
4. Bento grid (`bento-grid`)
5. Contact form (`contact-form`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #1c1917;
  --color-text: #ffffff;
  --color-muted: #78716c;
  --color-border: #ffffff;
  --color-accent: #4ade80;
  --color-accent-2: #ffedd5;
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
    surface: '#1c1917',
    ink: '#ffffff',
    muted: '#78716c',
    line: '#ffffff',
    accent: '#4ade80',
    accent2: '#ffedd5',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use dark rounded cards (#1c1917) on the black ground for every feature block
- **Do:** Set headlines in white, with the second half in grey
- **Do:** Give each card a small icon, a short title and a brief list
- **Don't:** Don't add light cards to this dark page
- **Don't:** Don't use the blue icon colour for text or buttons
- **Don't:** Don't mix light and dark cards on the same page

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
