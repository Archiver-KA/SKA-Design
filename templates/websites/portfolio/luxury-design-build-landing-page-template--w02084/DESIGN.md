# Design system — Luxury Design Build Landing Page Template

`SN-W02084` · portfolio · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A corporate design-build page with a full-bleed photograph of a modern house under a dark overlay, carrying white headline type. The one warm note is the gold consultation button [#c49b45], placed under the subline, and the rest of the interface is neutral. The first screen ends on a white band, so the page moves from photography to a light slate-on-white body.

**Mood:** corporate, polished, reassuring, neutral, architectural

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#f8fafc` | Cards, panels, raised areas |
| Text | `#1e293b` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#c49b45` | Primary action and highlights |
| Second accent | `#e2e8f0` | Supporting highlights |

Palette by frequency of use: `#0f172a` · `#ffffff` · `#c49b45` · `#475569` · `#2d3748` · `#cbd5e1` · `#334155` · `#e2e8f0` · `#f8fafc` · `#64748b`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Manrope
- **Body:** Manrope
- **Loaded families:** Manrope
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 18px · body 16px
- **Weights in use:** medium, light
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-sm` (2px), `rounded-full` (9999px), `rounded` (4px)
- **Shadows:** `shadow-lg`, `shadow-xl`
- **Content width:** `max-w-[1400px]`, `max-w-4xl`
- **Section padding:** `py-32`, `py-24`
- **Common gaps:** `gap-5`, `gap-2`, `gap-4`

**Primary button**

```html
<a class="mt-10 inline-flex items-center gap-3 bg-[#C49B45] text-white px-8 py-4 text-base font-medium rounded-sm hover:bg-[#b58f3c] transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Feature grid (`features`)
5. Call to action (`cta`)
6. Team (`team`)
7. Footer (`footer`)

## Motion, effects and stack

- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #f8fafc;
  --color-text: #1e293b;
  --color-muted: #64748b;
  --color-border: #ffffff;
  --color-accent: #c49b45;
  --color-accent-2: #e2e8f0;
  --font-display: "Manrope", sans-serif;
  --font-body: "Manrope", sans-serif;
  --radius: 2px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#f8fafc',
    ink: '#1e293b',
    muted: '#64748b',
    line: '#ffffff',
    accent: '#c49b45',
    accent2: '#e2e8f0',
  },
  fontFamily: { display: ['Manrope'], sans: ['Manrope'] },
} }
```

## Do and don't

- **Do:** Place headlines over a dark overlay on the hero photograph, never on bare photography.
- **Do:** Use gold (#c49b45) only for the primary consultation button.
- **Do:** Keep the nav in light text on the image with one outlined button on the right.
- **Don't:** Don't use gold for text or borders; it is a button colour only.
- **Don't:** Don't set body copy over busy photo areas without the overlay.
- **Don't:** Don't add more than one solid button to the hero.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
