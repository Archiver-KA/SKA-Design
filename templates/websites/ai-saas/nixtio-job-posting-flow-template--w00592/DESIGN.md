# Design system — Nixtio Job Posting Flow Template

`SN-W00592` · ai-saas · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A plain, form-first wizard on a white ground with near-black type and a single dark navy (#111827) accent. The step heading is large and tight, with a small grey step label above it. Inputs are thin-bordered and the selected chip is a solid dark pill against light grey chips. The page is restrained and functional, so the form itself carries the visual weight.

**Mood:** plain, functional, form-first, neutral, orderly

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#111827` | Headings and primary copy |
| Muted text | `#4b5563` | Secondary copy, captions |
| Border | `#e5e7eb` | Hairlines, dividers, outlines |
| Accent | `#111827` | Primary action and highlights |

Palette by frequency of use: `#111827` · `#e5e7eb` · `#d1d5db` · `#9ca3af` · `#ffffff` · `#4b5563` · `#6b7280` · `#374151` · `#f9fafb` · `#f3f4f6`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 36px · h2 20px · body 14px
- **Weights in use:** medium, normal, semibold
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-md` (6px), `rounded-full` (9999px), `rounded-lg` (8px)
- **Shadows:** `shadow-xl`, `shadow-sm`, `shadow-none`
- **Common gaps:** `gap-3`, `gap-4`, `gap-2`

**Primary button**

```html
<a class="hidden md:block px-4 py-2 rounded-md text-sm font-medium transition-colors bg-gray-900 text-white hover:bg-gray-800">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Footer (`footer`)
4. Modal / overlay (`modal-overlay`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels)
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #ffffff;
  --color-text: #111827;
  --color-muted: #4b5563;
  --color-border: #e5e7eb;
  --color-accent: #111827;
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
    surface: '#ffffff',
    ink: '#111827',
    muted: '#4b5563',
    line: '#e5e7eb',
    accent: '#111827',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the page ground to white (#ffffff) with near-black headings (#111827).
- **Do:** Use the dark navy (#111827) solid pill for the selected option and the primary button.
- **Do:** Draw inputs with thin light grey borders (#e5e7eb) and small grey helper text.
- **Don't:** Don't use the light grey page tone (#f3f4f6) as the ground; the ground is white.
- **Don't:** Don't use dark borders; inputs use thin light grey borders.
- **Don't:** Don't add colour to chips; selected and unselected states differ only in tone.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
