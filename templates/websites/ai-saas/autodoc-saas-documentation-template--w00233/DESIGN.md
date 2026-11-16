# Design system — Autodoc SaaS Documentation Template

`SN-W00233` · ai-saas · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A light, functional product page on white with a documentation heading, an empty-state card and a row of deployment cards below. A step bar of numbered tabs runs across the top, and the status chips (Ready, Scanning, Needs review) use soft tints. Indigo (#4f46e5) is the only accent and marks actions and the active step rather than decorating the page.

**Mood:** functional, clear, neutral, tool-like

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#262626` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#e5e5e5` | Hairlines, dividers, outlines |
| Accent | `#4f46e5` | Primary action and highlights |
| Second accent | `#dc2626` | Supporting highlights |

Palette by frequency of use: `#e5e5e5` · `#ffffff` · `#a3a3a3` · `#4f46e5` · `#171717` · `#fafafa` · `#f5f5f5` · `#737373` · `#525252` · `#262626`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Plus Jakarta Sans
- **Body:** Plus Jakarta Sans
- **Loaded families:** Plus Jakarta Sans
- **Scale (largest breakpoint):** h1 24px · h2 14px · h3 16px · body 12px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded` (4px)
- **Shadows:** `shadow-sm`, `shadow-md`, `shadow-indigo-200`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Common gaps:** `gap-2`, `gap-4`, `gap-3`

**Primary button**

```html
<a class="bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition-all duration-200 inline-flex items-center gap-2 shadow-sm shadow-indigo-100">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Sign-in form (`auth-form`)
4. Product grid (`product-grid`)
5. Process / steps (`how-it-works`)
6. Contact form (`contact-form`)
7. Stats band (`stats`)
8. FAQ (`faq`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #ffffff;
  --color-text: #262626;
  --color-muted: #737373;
  --color-border: #e5e5e5;
  --color-accent: #4f46e5;
  --color-accent-2: #dc2626;
  --font-display: "Plus Jakarta Sans", sans-serif;
  --font-body: "Plus Jakarta Sans", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#ffffff',
    ink: '#262626',
    muted: '#737373',
    line: '#e5e5e5',
    accent: '#4f46e5',
    accent2: '#dc2626',
  },
  fontFamily: { display: ['Plus Jakarta Sans'], sans: ['Plus Jakarta Sans'] },
} }
```

## Do and don't

- **Do:** Use indigo (#4f46e5) for the primary action and the active step only
- **Do:** Show states as soft tinted chips (Ready, Scanning, Needs review)
- **Do:** Keep empty states as a centred card with a light border and one button
- **Don't:** Don't use indigo as a background for panels
- **Don't:** Don't add decorative illustrations to the empty state
- **Don't:** Don't set the status chips in saturated fills

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
