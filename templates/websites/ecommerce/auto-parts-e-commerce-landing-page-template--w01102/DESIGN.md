# Design system — Auto Parts E-commerce Landing Page Template

`SN-W01102` · ecommerce · dark mode · Sinera Atlas theme `market` · language `fa`

## Direction

A dark, right-to-left Persian parts catalogue on near-black, with a heavy white display headline whose second line is dimmed. Red (#e63946) is the single accent, used on the contact pill and the catalogue button. Body copy is a muted grey paragraph, and a large dark placeholder card on the left carries the product imagery.

**Mood:** dark, industrial, clear, focused, rtl

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#171717` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#e5e5e5` | Hairlines, dividers, outlines |
| Accent | `#e63946` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#e63946` · `#171717` · `#a3a3a3` · `#262626` · `#737373` · `#e5e5e5` · `#404040` · `#f5f5f5` · `#d4d4d4`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** a monospace face
- **Body:** Vazirmatn
- **Loaded families:** Vazirmatn
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 18px · body 14px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-2xl` (16px), `rounded-full` (9999px), `rounded-xl` (12px)
- **Shadows:** `shadow-xl`, `shadow-lg`, `shadow-sm`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-1`, `gap-2`, `gap-6`

**Primary button**

```html
<a class="inline-flex items-center gap-3 bg-[#E63946] hover:bg-red-600 text-white px-8 py-4 rounded-full transition-all duration-300 font-medium text-lg group hover:-translate-y-1 shadow-xl shadow-[#E63946]/20 hover:shadow-2xl hover:shadow-[#E63946]/30">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Call to action (`cta`)
5. Bento grid (`bento-grid`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #171717;
  --color-surface: #ffffff;
  --color-text: #ffffff;
  --color-muted: #737373;
  --color-border: #e5e5e5;
  --color-accent: #e63946;
  --font-display: "a monospace face", sans-serif;
  --font-body: "Vazirmatn", sans-serif;
  --radius: 16px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#171717',
    surface: '#ffffff',
    ink: '#ffffff',
    muted: '#737373',
    line: '#e5e5e5',
    accent: '#e63946',
  },
  fontFamily: { display: ['a monospace face'], sans: ['Vazirmatn'] },
} }
```

## Do and don't

- **Do:** Set Persian headlines in a heavy Vazirmatn weight, right-aligned
- **Do:** Use red (#e63946) only for the contact pill and the main catalogue button
- **Do:** Keep the second headline line dimmed grey
- **Don't:** Don't use red for headlines or body text
- **Don't:** Don't flip the layout to left-to-right; keep the right-to-left reading order
- **Don't:** Don't add light panels to the dark hero

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
