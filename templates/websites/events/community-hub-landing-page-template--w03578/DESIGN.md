# Design system — Community Hub Landing Page Template

`SN-W03578` · events · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

Community Hub presents its feed as a layered app interface, with frosted translucent panels, blurred grey sidebars and cards, and indigo and violet highlights. The white page ground sits behind the panels, so they read as glass. Inter carries all the text in one family. The look is product-like and dense with cards, and it relies on soft blur rather than hard borders.

**Mood:** layered, glassy, community, dense, techy

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#f8fafc` | Cards, panels, raised areas |
| Text | `#111111` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#6366f1` | Primary action and highlights |
| Second accent | `#10b981` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#f1f5f9` · `#f8fafc` · `#94a3b8` · `#cbd5e1` · `#e2e8f0` · `#c084fc` · `#6366f1` · `#a5b4fc` · `#06b6d4`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h2 24px · h3 16px · body 12px
- **Weights in use:** medium, semibold
- **Letter spacing:** `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-xl` (12px)
- **Shadows:** `shadow`, `shadow-sm`
- **Content width:** `max-w-[1400px]`
- **Common gaps:** `gap-3`, `gap-4`, `gap-1.5`

**Primary button**

```html
<a class="inline-flex items-center gap-2 rounded-lg bg-indigo-500/90 px-3 py-2 text-xs font-medium text-white shadow-sm ring-1 ring-inset ring-indigo-300/40 hover:bg-indigo-500">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Feature grid (`features`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills
- **Libraries:** Tailwind CSS (CDN), Unicorn Studio (WebGL scenes)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #f8fafc;
  --color-text: #111111;
  --color-border: #ffffff;
  --color-accent: #6366f1;
  --color-accent-2: #10b981;
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
    surface: '#f8fafc',
    ink: '#111111',
    line: '#ffffff',
    accent: '#6366f1',
    accent2: '#10b981',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use translucent frosted panels with backdrop blur for sidebars and cards
- **Do:** Use indigo (#6366f1) for the primary accent and gradient icon badges
- **Do:** Keep all text in Inter and show hierarchy with weight and size
- **Don't:** Don't use solid opaque panels where the glass effect is expected
- **Don't:** Don't add hard heavy borders to the cards
- **Don't:** Don't mix in a second display typeface

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
