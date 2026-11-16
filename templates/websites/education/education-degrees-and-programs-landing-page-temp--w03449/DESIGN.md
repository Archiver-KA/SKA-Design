# Design system — Education Degrees & Programs Landing Page Template

`SN-W03449` · education · light mode · Sinera Atlas theme `calm` · language `en`

## Direction

A clean academic page on white, with a centred serif title in near-black and a light grey subtitle beneath it. Violet [#b54bfb] marks the active navigation item and the Apply button, and a large duotone photograph in blue and orange sits in a rounded frame. The look is modern and editorial.

**Mood:** clean, modern, editorial, academic

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#f3f4f6` | Cards, panels, raised areas |
| Text | `#374151` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#f3f4f6` | Hairlines, dividers, outlines |
| Accent | `#b54bfb` | Primary action and highlights |

Palette by frequency of use: `#b54bfb` · `#ffffff` · `#111827` · `#f3f4f6` · `#4b5563` · `#9ca3af` · `#6b7280` · `#e5e7eb` · `#374151` · `#7e22ce`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** a serif face
- **Body:** Roboto
- **Loaded families:** Roboto
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 24px · body 20px
- **Weights in use:** medium, bold, semibold
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-lg` (8px), `rounded-md` (6px), `rounded-xl` (12px)
- **Shadows:** `shadow-sm`, `shadow-lg`, `shadow-2xl`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-20`, `py-24`
- **Common gaps:** `gap-12`, `gap-x-8`, `gap-y-16`

**Primary button**

```html
<a class="hidden md:inline-flex items-center justify-center px-5 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-[#b54bfb] hover:bg-purple-700 transition-all shadow-sm">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Services (`services`)
4. Bento grid (`bento-grid`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #f3f4f6;
  --color-text: #374151;
  --color-muted: #6b7280;
  --color-border: #f3f4f6;
  --color-accent: #b54bfb;
  --font-display: "a serif face", serif;
  --font-body: "Roboto", sans-serif;
  --radius: 8px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#f3f4f6',
    ink: '#374151',
    muted: '#6b7280',
    line: '#f3f4f6',
    accent: '#b54bfb',
  },
  fontFamily: { display: ['a serif face'], sans: ['Roboto'] },
} }
```

## Do and don't

- **Do:** Set the page title in a centred serif in near-black
- **Do:** Use violet (#b54bfb) for the active navigation item and the main button
- **Do:** Frame the large hero photograph in a rounded box
- **Don't:** Don't use violet for body text
- **Don't:** Don't add a second saturated colour beside the blue duotone
- **Don't:** Don't set the subtitle in dark text; keep it light grey

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
