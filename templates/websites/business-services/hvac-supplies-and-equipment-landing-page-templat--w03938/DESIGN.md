# Design system — HVAC Supplies & Equipment Landing Page Template

`SN-W03938` · business-services · light mode · Sinera Atlas theme `route` · language `en`

## Direction

A blunt trade-catalogue look: a near-black hero with headlines set in uppercase Squada One at display size, and key words highlighted in bright yellow (#f7ec30). Yellow is reserved for buttons and those highlight words, so the calls to action stand out at once. A framed photograph of a technician at work with a thin yellow border adds practical, unpolished realism.

**Mood:** blunt, industrial, high-contrast, direct, practical

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#f4f3ee` | Cards, panels, raised areas |
| Text | `#212120` | Headings and primary copy |
| Muted text | `#5a5a56` | Secondary copy, captions |
| Border | `#212120` | Hairlines, dividers, outlines |
| Accent | `#f7ec30` | Primary action and highlights |

Palette by frequency of use: `#ab6600` · `#c9c7bd` · `#ffffff` · `#212120` · `#f7ec30` · `#c9c9c4` · `#2c2c2a` · `#5a5a56` · `#e5e3da` · `#f4f3ee`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Squada One
- **Body:** Squada One
- **Loaded families:** Squada One, Encode Sans Semi Expanded
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 20px · body 14px
- **Weights in use:** light, normal, medium
- **Letter spacing:** `tracking-wide`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** none used — square corners
- **Shadows:** `shadow-xl`, `shadow-[4px_4px_0_#212120]`, `shadow-[4px_4px_0_#AB6600]`
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Section padding:** `py-20`
- **Common gaps:** `gap-2`, `gap-4`, `gap-8`

**Primary button**

```html
<a class="inline-flex items-center justify-center bg-[#AB6600] px-6 py-3 font-['Squada_One'] text-sm uppercase tracking-wide text-white transition-colors hover:bg-[#F7EC30] hover:text-[#212120]">…</a>
```

## Page structure

Blocks in page order:

1. Announcement bar (`announcement-bar`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Feature grid (`features`)
5. Gallery / portfolio (`gallery-portfolio`)
6. Call to action (`cta`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** gradient fills, blend modes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #f4f3ee;
  --color-text: #212120;
  --color-muted: #5a5a56;
  --color-border: #212120;
  --color-accent: #f7ec30;
  --font-display: "Squada One", sans-serif;
  --font-body: "Squada One", sans-serif;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#f4f3ee',
    ink: '#212120',
    muted: '#5a5a56',
    line: '#212120',
    accent: '#f7ec30',
  },
  fontFamily: { display: ['Squada One'], sans: ['Squada One'] },
} }
```

## Do and don't

- **Do:** Set headlines in Squada One in uppercase at display size
- **Do:** Use the yellow (#f7ec30) only for buttons and one highlight word per headline
- **Do:** Frame photographs with a thin yellow border on the dark hero
- **Don't:** Don't add rounded corners or soft shadows; edges stay square
- **Don't:** Don't introduce a second accent colour beside the yellow
- **Don't:** Don't set body copy in a light weight or a serif face

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
