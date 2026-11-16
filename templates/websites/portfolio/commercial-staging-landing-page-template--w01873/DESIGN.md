# Design system — Commercial Staging Landing Page Template

`SN-W01873` · portfolio · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A light staging page whose first screen is a full-width interior photograph, with a large headline set over it in white. The headline mixes a serif italic with a sans, so 'Workspaces' and 'that' read differently from 'inspire.'. A small tracked uppercase label sits above, and a white pill sits beside an outlined pill below. The nav is a pale bar over the photo with one black pill.

**Mood:** calm, architectural, polished, neutral

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fafafa` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#171717` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#171717` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#171717` · `#525252` · `#000000` · `#d4d4d4` · `#737373` · `#a3a3a3` · `#f5f5f5` · `#e5e5e5` · `#fafafa`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 24px · body 12px
- **Weights in use:** light, semibold, medium
- **Letter spacing:** `tracking-widest`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-sm` (2px)
- **Shadows:** `shadow-sm`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-4`, `gap-6`, `gap-12`

**Primary button**

```html
<a class="px-5 py-2.5 bg-neutral-900 text-white rounded-sm hover:bg-neutral-800 transition-all">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Process / steps (`how-it-works`)
4. Gallery / portfolio (`gallery-portfolio`)
5. Services (`services`)
6. About (`about`)
7. Contact form (`contact-form`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #fafafa;
  --color-surface: #ffffff;
  --color-text: #171717;
  --color-muted: #737373;
  --color-border: #ffffff;
  --color-accent: #171717;
  --font-display: "Playfair Display", serif;
  --font-body: "Inter", sans-serif;
  --radius: 2px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fafafa',
    surface: '#ffffff',
    ink: '#171717',
    muted: '#737373',
    line: '#ffffff',
    accent: '#171717',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use a full-width interior photograph as the hero, with the headline over it
- **Do:** Mix serif italic and sans in the headline, one style per word group
- **Do:** Keep buttons as a solid white pill beside an outlined pill
- **Don't:** Don't place the headline over a busy area of the photograph
- **Don't:** Don't use bright colours in the UI
- **Don't:** Don't set the whole headline in a single style

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
