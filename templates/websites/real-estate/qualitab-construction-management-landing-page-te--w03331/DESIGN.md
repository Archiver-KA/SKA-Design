# Design system — Qualitab Construction Management Landing Page Template

`SN-W03331` · real-estate · dark mode · Sinera Atlas theme `dwell` · language `pt-BR`

## Direction

A dark navy hero (#0a1628) with a heavy white sans headline set in tight, left-aligned lines. A small outlined label in orange sits above it, and a dashboard mockup beside the headline shows navy panels with thin borders and a few coloured dots. Orange (#ff5c00) is the single accent, used on the filled primary button and on the highlight numbers in the mockup.

**Mood:** technical, industrial, confident, dark

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a1628` | Page ground |
| Surface | `#f5f7fa` | Cards, panels, raised areas |
| Text | `#111827` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#ff5c00` | Primary action and highlights |
| Second accent | `#22c55e` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#ff5c00` · `#0a1628` · `#6b7280` · `#9ca3af` · `#d1d5db` · `#4b5563` · `#f5f7fa` · `#e5e7eb` · `#1f2937`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 60px · h2 30px · h3 24px · body 14px
- **Weights in use:** medium, semibold, light
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-lg` (8px)
- **Shadows:** `shadow-md`, `shadow-sm`, `shadow-[0_0_8px_#22c55e]`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-4`, `gap-2`, `gap-8`

**Primary button**

```html
<a class="bg-[#FF5C00] text-white text-sm font-medium px-5 py-2.5 rounded-lg hover:bg-[#e65300] transition-colors shadow-sm">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Process / steps (`how-it-works`)
5. Call to action (`cta`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels)
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #0a1628;
  --color-surface: #f5f7fa;
  --color-text: #111827;
  --color-muted: #6b7280;
  --color-border: #ffffff;
  --color-accent: #ff5c00;
  --color-accent-2: #22c55e;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0a1628',
    surface: '#f5f7fa',
    ink: '#111827',
    muted: '#6b7280',
    line: '#ffffff',
    accent: '#ff5c00',
    accent2: '#22c55e',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in heavy white sans, tight and left-aligned on navy (#0a1628).
- **Do:** Use orange (#ff5c00) for the primary button and one highlight per screen.
- **Do:** Keep product mockups in navy panels with thin borders and small coloured dots.
- **Don't:** Don't use orange for large background fields; it stays on buttons and highlights.
- **Don't:** Don't add light panels to the hero; the first screen stays navy.
- **Don't:** Don't set long copy in orange; body text is light grey.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
