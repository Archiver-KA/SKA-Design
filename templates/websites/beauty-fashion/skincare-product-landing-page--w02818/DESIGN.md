# Design system — Skincare Product Landing Page

`SN-W02818` · beauty-fashion · light mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A botanical skincare hero on white, where the second headline line is set in a green italic serif (#059669) and the rest in near-black. A deep green panel (#047857) holds the product's ingredient list and gives the page a darker second weight. Gold stars (#fbbf24) and small rating blocks supply the trust cues, and the layout is a grid of rounded panels around the headline.

**Mood:** botanical, trustworthy, clean, fresh

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#047857` | Cards, panels, raised areas |
| Text | `#111827` | Headings and primary copy |
| Muted text | `#4b5563` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#059669` | Primary action and highlights |
| Second accent | `#fbbf24` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#4b5563` · `#047857` · `#34d399` · `#fbbf24` · `#059669` · `#6b7280` · `#6ee7b7` · `#ecfdf5` · `#2563eb`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display, IBM Plex Serif, IBM Plex Mono
- **Scale (largest breakpoint):** h1 72px · h2 30px · h3 20px · body 14px
- **Weights in use:** medium, semibold, light
- **Letter spacing:** `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-3xl` (24px), `rounded-xl` (12px)
- **Shadows:** `shadow-sm`, `shadow-xl`, `shadow-lg`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-20`, `py-24`
- **Common gaps:** `gap-3`, `gap-2`, `gap-4`

**Primary button**

```html
<a class="bg-emerald-600 text-white px-4 py-2 rounded-full hover:bg-emerald-700 transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Stats band (`stats`)
4. Call to action (`cta`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #047857;
  --color-text: #111827;
  --color-muted: #4b5563;
  --color-border: #ffffff;
  --color-accent: #059669;
  --color-accent-2: #fbbf24;
  --font-display: "Playfair Display", serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#047857',
    ink: '#111827',
    muted: '#4b5563',
    line: '#ffffff',
    accent: '#059669',
    accent2: '#fbbf24',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the second headline line in an italic serif in the green (#059669)
- **Do:** Use the deep green panel (#047857) for the key product card only
- **Do:** Keep the gold (#fbbf24) to star ratings and small icon badges
- **Don't:** Don't set body copy in gold; it is for stars and badges
- **Don't:** Don't add a second green to the same panel
- **Don't:** Don't use the gold as a button fill

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
