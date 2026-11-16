# Design system — Lead Magnet Landing Page Template for Teacher Career Guide

`SN-W03493` · education · light mode · Sinera Atlas theme `calm` · language `fr`

## Direction

A focused lead-capture page on white, with a near-black Inter headline in which the key word is underlined in orange (#f97316). A tall ebook cover mock-up on a grid background, with an orange title, sits beside the form. The email field is a white input with a thin border, and an orange button carries the single action.

**Mood:** focused, clean, direct, encouraging, simple

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#f9fafb` | Cards, panels, raised areas |
| Text | `#4b5563` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#f3f4f6` | Hairlines, dividers, outlines |
| Accent | `#f97316` | Primary action and highlights |

Palette by frequency of use: `#111827` · `#ffffff` · `#f97316` · `#6b7280` · `#9ca3af` · `#e5e7eb` · `#ea580c` · `#f3f4f6` · `#4b5563` · `#ffedd5`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 60px · h2 48px · h3 30px · body 18px
- **Weights in use:** medium, semibold, black
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-2xl` (16px)
- **Shadows:** `shadow-sm`, `shadow-lg`, `shadow-orange-500/20`
- **Content width:** `max-w-6xl`, `max-w-2xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-4`, `gap-16`

**Primary button**

```html
<a class="group w-full flex items-center justify-center gap-2 py-4 px-8 border border-transparent rounded-xl shadow-lg shadow-orange-500/20 text-lg font-medium text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-all duration-200">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. Feature grid (`features`)
3. Footer (`footer`)

## Motion, effects and stack

- **Effects:** gradient fills, CSS animations, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #f9fafb;
  --color-text: #4b5563;
  --color-muted: #6b7280;
  --color-border: #f3f4f6;
  --color-accent: #f97316;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#f9fafb',
    ink: '#4b5563',
    muted: '#6b7280',
    line: '#f3f4f6',
    accent: '#f97316',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Underline the key word of the headline in orange (#f97316)
- **Do:** Use the orange button for the single email action
- **Do:** Keep the form to one white field and one button
- **Don't:** Don't add more than one call to action above the fold
- **Don't:** Don't use orange for body text
- **Don't:** Don't put a second form on the page

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
