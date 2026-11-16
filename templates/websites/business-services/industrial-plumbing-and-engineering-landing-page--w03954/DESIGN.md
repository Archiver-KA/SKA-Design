# Design system — Industrial Plumbing & Engineering Landing Page Template

`SN-W03954` · business-services · light mode · Sinera Atlas theme `route` · language `en`

## Direction

A clean, high-contrast trade page on a white ground with black headlines in a heavy sans-serif, set tightly leaded. Safety orange (#f96302) is the single accent, used for the logo mark, the coverage button and the secondary action. A light panel with a faint dotted grid holds the service-area module, which keeps the look practical and direct.

**Mood:** practical, direct, high-contrast, trade-ready, clean

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#f5f5f5` | Cards, panels, raised areas |
| Text | `#000000` | Headings and primary copy |
| Muted text | `#5c5c5c` | Secondary copy, captions |
| Border | `#e5e5e5` | Hairlines, dividers, outlines |
| Accent | `#f96302` | Primary action and highlights |

Palette by frequency of use: `#f96302` · `#ffffff` · `#000000` · `#5c5c5c` · `#f5f5f5` · `#e5e5e5` · `#e05902`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 24px · body 16px
- **Weights in use:** semibold, medium
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-md` (6px), `rounded-xl` (12px), `rounded-lg` (8px)
- **Shadows:** `shadow-sm`, `shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-2`, `gap-1`, `gap-3`

**Primary button**

```html
<a class="bg-[#F96302] hover:bg-[#E05902] text-white px-6 py-3 rounded-md font-medium text-base whitespace-nowrap transition-colors flex items-center justify-center gap-2">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Services (`services`)
4. Map / location (`map-location`)
5. Logo cloud (`logo-cloud`)
6. Call to action (`cta`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #f5f5f5;
  --color-text: #000000;
  --color-muted: #5c5c5c;
  --color-border: #e5e5e5;
  --color-accent: #f96302;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 6px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#f5f5f5',
    ink: '#000000',
    muted: '#5c5c5c',
    line: '#e5e5e5',
    accent: '#f96302',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headlines in heavy black sans-serif, tightly leaded
- **Do:** Use safety orange (#f96302) for the logo mark and the primary action only
- **Do:** Keep service-area forms on a light panel with a faint grid
- **Don't:** Don't use orange for headline text
- **Don't:** Don't add gradient fills to the white ground
- **Don't:** Don't use more than one action colour on a screen

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
