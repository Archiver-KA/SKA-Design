# Design system — Plant E-commerce Landing Page Template

`SN-W01300` · ecommerce · light mode · Sinera Atlas theme `market` · language `en`

## Direction

A calm, botanical storefront on warm off-white (#fafaf9), with near-black headlines and a deep green (#047857) for the second headline line and the primary button. The hero is a two-line sans headline, a short grey subline, and a pale image panel on the right. Pill buttons and generous whitespace keep the page quiet and spacious.

**Mood:** fresh, calm, spacious, natural, clean

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fafaf9` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#292524` | Headings and primary copy |
| Muted text | `#78716c` | Secondary copy, captions |
| Border | `#e7e5e4` | Hairlines, dividers, outlines |
| Accent | `#047857` | Primary action and highlights |

Palette by frequency of use: `#047857` · `#ffffff` · `#064e3b` · `#78716c` · `#f5f5f4` · `#e7e5e4` · `#1c1917` · `#fafaf9` · `#065f46` · `#059669`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 30px · h3 18px · body 12px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-wide`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-xl` (12px)
- **Shadows:** `shadow-sm`, `shadow-lg`, `shadow-emerald-900/5`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-20`, `py-24`
- **Common gaps:** `gap-2`, `gap-4`, `gap-1`

**Primary button**

```html
<a class="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white bg-emerald-700 rounded-lg hover:bg-emerald-800 focus:ring-4 focus:ring-emerald-100 transition-all shadow-sm shadow-emerald-200">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Product grid (`product-grid`)
4. Feature grid (`features`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #fafaf9;
  --color-surface: #ffffff;
  --color-text: #292524;
  --color-muted: #78716c;
  --color-border: #e7e5e4;
  --color-accent: #047857;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fafaf9',
    surface: '#ffffff',
    ink: '#292524',
    muted: '#78716c',
    line: '#e7e5e4',
    accent: '#047857',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the second headline line in green (#047857) and the first in near-black
- **Do:** Use the deep green (#047857) for the primary button and the status dot only
- **Do:** Keep the hero image panel pale, with the headline and copy on the left
- **Don't:** Don't use a pale green-grey for text; it fades into the image panel
- **Don't:** Don't add a second accent hue; the page is green plus warm neutrals
- **Don't:** Don't set the headline in a heavy weight; keep it regular to medium.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
