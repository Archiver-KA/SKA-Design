# Design system — Persian Invoice Customizer Template

`SN-W00625` · ai-saas · light mode · Sinera Atlas theme `circuit` · language `fa`

## Direction

A quiet tool interface for building printable invoices: a white control panel on a pale grey page, with a live A4 preview on the left. Teal (#049999) appears only in the selected colour swatch and the active toggle, so it reads as state rather than decoration. Vazirmatn at 16px labels the controls, and the whole layout runs right-to-left.

**Mood:** functional, quiet, rtl, tool-like, tidy

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f9fafb` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#1f2937` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#f3f4f6` | Hairlines, dividers, outlines |
| Accent | `#049999` | Primary action and highlights |
| Second accent | `#4d3772` | Supporting highlights |

Palette by frequency of use: `#111827` · `#ffffff` · `#6b7280` · `#374151` · `#e5e7eb` · `#f3f4f6` · `#9ca3af` · `#049999` · `#4d3772` · `#d1d5db`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Vazirmatn
- **Body:** Vazirmatn
- **Loaded families:** Vazirmatn
- **Scale (largest breakpoint):** h1 16px · h2 14px · h3 24px · body 12px
- **Weights in use:** medium, semibold
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-md` (6px), `rounded-lg` (8px)
- **Shadows:** `shadow-sm`, `shadow-[4px_0_24px_rgba(0,0,0,0.02)]`, `shadow-lg`
- **Content width:** `max-w-[210mm]`
- **Common gaps:** `gap-2`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-gray-600 bg-white border border-gray-200 rounded-md hover:bg-gray-50 transition-colors shadow-sm">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. Contact form (`contact-form`)
3. Testimonials (`testimonials`)
4. Navigation bar (`navbar`)
5. Stats band (`stats`)

## Motion, effects and stack

- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #f9fafb;
  --color-surface: #ffffff;
  --color-text: #1f2937;
  --color-muted: #6b7280;
  --color-border: #f3f4f6;
  --color-accent: #049999;
  --color-accent-2: #4d3772;
  --font-display: "Vazirmatn", sans-serif;
  --font-body: "Vazirmatn", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f9fafb',
    surface: '#ffffff',
    ink: '#1f2937',
    muted: '#6b7280',
    line: '#f3f4f6',
    accent: '#049999',
    accent2: '#4d3772',
  },
  fontFamily: { display: ['Vazirmatn'], sans: ['Vazirmatn'] },
} }
```

## Do and don't

- **Do:** Keep the layout right-to-left, with the preview on the left and controls on the right
- **Do:** Use teal (#049999) only for the selected state and the active swatch
- **Do:** Set labels in Vazirmatn at 16px on white panels
- **Don't:** Don't add display-size headings inside the tool; the chrome stays small
- **Don't:** Don't use teal for decoration or large fills
- **Don't:** Don't mirror the invoice table into left-to-right order; keep Persian reading order

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
