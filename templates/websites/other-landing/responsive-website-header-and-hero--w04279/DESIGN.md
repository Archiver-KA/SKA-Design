# Design system — Responsive Website Header and Hero

`SN-W04279` · other-landing · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A light landing page on a pale grey ground (#f3f4f6), with a large dark headline whose key phrase is set in indigo (#4f46e5). The hero sits in a white rounded panel, and a solid black pill button leads the call to action. Rounded corners and soft grey sections keep the layout calm and open.

**Mood:** friendly, calm, light, rounded

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f3f4f6` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#1f2937` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#f3f4f6` | Hairlines, dividers, outlines |
| Accent | `#4f46e5` | Primary action and highlights |
| Second accent | `#fef3c7` | Supporting highlights |

Palette by frequency of use: `#6b7280` · `#ffffff` · `#1f2937` · `#f3f4f6` · `#e5e7eb` · `#4b5563` · `#4f46e5` · `#f9fafb` · `#9ca3af` · `#111827`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 60px · h2 36px · body 12px
- **Weights in use:** semibold, normal, bold
- **Letter spacing:** `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-lg` (8px), `rounded-full` (9999px), `rounded-3xl` (24px)
- **Shadows:** `shadow-sm`, `shadow`
- **Content width:** `max-w-7xl`
- **Common gaps:** `gap-2`, `gap-6`, `gap-4`

**Primary button**

```html
<a class="inline-flex items-center gap-3 rounded-full px-6 py-3 transition font-sans bg-black text-white hover:bg-gray-900">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. Product grid (`product-grid`)
3. Map / location (`map-location`)
4. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels)
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #f3f4f6;
  --color-surface: #ffffff;
  --color-text: #1f2937;
  --color-muted: #6b7280;
  --color-border: #f3f4f6;
  --color-accent: #4f46e5;
  --color-accent-2: #fef3c7;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 8px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f3f4f6',
    surface: '#ffffff',
    ink: '#1f2937',
    muted: '#6b7280',
    line: '#f3f4f6',
    accent: '#4f46e5',
    accent2: '#fef3c7',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the key headline phrase in indigo (#4f46e5) and the rest in near-black
- **Do:** Use a solid black pill button for the primary call to action
- **Do:** Place the hero inside a white rounded panel on the pale grey ground
- **Don't:** Don't use the indigo for body text or large fills
- **Don't:** Don't use sharp square corners on panels or buttons
- **Don't:** Don't add a dark hero background

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
