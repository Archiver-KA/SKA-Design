# Design system — Private Finance Community Landing Page Template

`SN-W01017` · fintech-crypto · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A light, editorial membership page on warm cream (#f9f8f4), with a dark ink serif headline set large and its middle lines in italic. A gold (#e0b33b) pill is the one warm action, and a muted grey line of supporting copy sits under the headline. The page is quiet and conversational, leaning on the serif and generous space rather than on imagery.

**Mood:** quiet, editorial, warm, exclusive, conversational

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f9f8f4` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#1a1918` | Headings and primary copy |
| Muted text | `#8c8a85` | Secondary copy, captions |
| Border | `#e8e5df` | Hairlines, dividers, outlines |
| Accent | `#e0b33b` | Primary action and highlights |
| Second accent | `#0a66c2` | Supporting highlights |

Palette by frequency of use: `#e0b33b` · `#1a1918` · `#e8e5df` · `#8c8a85` · `#f9f8f4` · `#33322e` · `#ffffff` · `#0a66c2` · `#fdfcfb` · `#000000`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Fira Sans
- **Body:** Fira Sans
- **Loaded families:** Fira Sans, Newsreader
- **Scale (largest breakpoint):** h1 88px · h2 48px · h3 24px · body 12px
- **Weights in use:** light, extralight
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-[20px]` (20px), `rounded-[24px]` (24px)
- **Shadows:** `shadow-[0_8px_30px_rgb(0,0,0,0.02)]`, `shadow-[0_20px_40px_rgb(0,0,0,0.06)]`, `shadow-lg`
- **Content width:** `max-w-[90rem]`, `max-w-2xl`
- **Section padding:** `py-32`
- **Common gaps:** `gap-4`, `gap-8`, `gap-16`

**Primary button**

```html
<a class="group relative inline-flex items-center justify-center px-8 py-4 bg-[#E0B33B] text-[#1A1918] rounded-full text-sm tracking-wide transition-all duration-500 hover:shadow-[0_0_30px_rgba(224,179,59,0.4)] hover:-translate-y-0.5">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Feature grid (`features`)
5. Map / location (`map-location`)
6. Team (`team`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), blend modes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #f9f8f4;
  --color-surface: #ffffff;
  --color-text: #1a1918;
  --color-muted: #8c8a85;
  --color-border: #e8e5df;
  --color-accent: #e0b33b;
  --color-accent-2: #0a66c2;
  --font-display: "Fira Sans", sans-serif;
  --font-body: "Fira Sans", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f9f8f4',
    surface: '#ffffff',
    ink: '#1a1918',
    muted: '#8c8a85',
    line: '#e8e5df',
    accent: '#e0b33b',
    accent2: '#0a66c2',
  },
  fontFamily: { display: ['Fira Sans'], sans: ['Fira Sans'] },
} }
```

## Do and don't

- **Do:** Set the headline in dark ink (#1a1918) serif, with the middle lines in italic.
- **Do:** Use the gold (#e0b33b) pill for the membership action only.
- **Do:** Keep the hero on the cream ground (#f9f8f4) with generous space.
- **Don't:** Don't use gold for body copy or links.
- **Don't:** Don't add product photography to the hero.
- **Don't:** Don't set the headline in a bold sans-serif.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
