# Design system — Luxury Construction Company Landing Page Template

`SN-W03273` · real-estate · dark mode · Sinera Atlas theme `dwell` · language `pt-BR`

## Direction

Dark and architectural, on a warm near-black ground (#1c1917). A heavy white sans headline stacks two lines, and the second word is set as an outline stroke with no fill, which is the page's signature effect. Small pill tags and outlined buttons sit on the dark ground, with one light filled pill as the primary action. A light navigation bar runs across the top, separating the header from the hero.

**Mood:** architectural, bold, sober, cinematic

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#1c1917` | Page ground |
| Surface | `#0c0a09` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#78716c` | Secondary copy, captions |
| Border | `#d6d3d1` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#1c1917` · `#ffffff` · `#d6d3d1` · `#78716c` · `#57534e` · `#a8a29e` · `#e7e5e4` · `#44403c` · `#292524` · `#f5f1ea`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Roboto
- **Body:** Roboto
- **Loaded families:** Roboto
- **Scale (largest breakpoint):** h2 48px · h3 48px · body 14px
- **Weights in use:** medium, normal
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-sm` (2px), `rounded-xl` (12px)
- **Shadows:** `shadow-2xl`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-20`
- **Common gaps:** `gap-2`, `gap-3`, `gap-8`

**Primary button**

```html
<a class="btn-beam px-6 py-2.5 bg-stone-900 text-white rounded-full text-xs font-normal hover:bg-stone-700 transition-all flex items-center gap-2 group">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Marquee (`marquee`)
4. Feature grid (`features`)
5. Contact form (`contact-form`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #1c1917;
  --color-surface: #0c0a09;
  --color-text: #ffffff;
  --color-muted: #78716c;
  --color-border: #d6d3d1;
  --font-display: "Roboto", sans-serif;
  --font-body: "Roboto", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#1c1917',
    surface: '#0c0a09',
    ink: '#ffffff',
    muted: '#78716c',
    line: '#d6d3d1',
  },
  fontFamily: { display: ['Roboto'], sans: ['Roboto'] },
} }
```

## Do and don't

- **Do:** Set the second headline word as an outline stroke with no fill.
- **Do:** Use the light filled pill for the primary button and an outlined pill for the secondary.
- **Do:** Keep the hero ground warm near-black (#1c1917) with white headings.
- **Don't:** Don't fill the outlined headline word; the stroke is the effect.
- **Don't:** Don't add a bright accent colour to the dark hero.
- **Don't:** Don't make the navigation bar dark; the light bar is part of the layout.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
