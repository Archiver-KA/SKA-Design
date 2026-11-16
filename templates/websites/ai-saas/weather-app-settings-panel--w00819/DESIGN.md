# Design system — Weather App Settings Panel

`SN-W00819` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A compact dark settings panel shown as a phone frame on black. Segmented controls use solid blue (#3b82f6) for the selected option and grey for the inactive ones, and grouped sections sit on a dark card with thin dividers. A small orange (#f97316) swatch appears in the theme row, and labels are muted grey.

**Mood:** functional, dark, tidy, compact

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#1a1a1a` | Cards, panels, raised areas |
| Text | `#9ca3af` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#232323` | Hairlines, dividers, outlines |
| Accent | `#3b82f6` | Primary action and highlights |
| Second accent | `#f97316` | Supporting highlights |

Palette by frequency of use: `#9ca3af` · `#232323` · `#3b82f6` · `#6b7280` · `#ffffff` · `#1a1a1a` · `#151515` · `#000000` · `#e5e7eb` · `#d1d5db`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 18px · h3 14px
- **Weights in use:** medium

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-xl` (12px)
- **Shadows:** `shadow-lg`, `shadow-2xl`

**Primary button**

```html
<a class="flex-1 py-1.5 text-xs font-medium rounded-md bg-blue-500 text-white">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)

## Motion, effects and stack

- **Libraries:** Tailwind CSS (CDN)
- **Icons:** inline SVG

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #1a1a1a;
  --color-text: #9ca3af;
  --color-muted: #6b7280;
  --color-border: #232323;
  --color-accent: #3b82f6;
  --color-accent-2: #f97316;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#1a1a1a',
    ink: '#9ca3af',
    muted: '#6b7280',
    line: '#232323',
    accent: '#3b82f6',
    accent2: '#f97316',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Show the selected segment in solid blue (#3b82f6)
- **Do:** Group settings in dark cards with thin dividers
- **Do:** Keep labels in muted grey (#9ca3af)
- **Don't:** Don't use blue for inactive segments
- **Don't:** Don't add heavy shadows to the cards
- **Don't:** Don't use the theme swatches as accents outside the settings row

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
