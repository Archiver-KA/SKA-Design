# Design system — Skills and Services Showcase

`SN-W04096` · business-services · light mode · Sinera Atlas theme `route` · language `en`

## Direction

A soft, light section with a pink-to-coral gradient on the key words of the heading and a pale mesh of pink and lavender behind it. Three white service cards each carry a square gradient icon in a different hue, with small pastel tags naming the tools. The palette is warm and friendly, and the cards keep the content orderly.

**Mood:** friendly, warm, creative, soft, orderly

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#fee2e2` | Cards, panels, raised areas |
| Text | `#1f2937` | Headings and primary copy |
| Muted text | `#4b5563` | Secondary copy, captions |
| Border | `#f3f4f6` | Hairlines, dividers, outlines |
| Accent | `#ec4899` | Primary action and highlights |
| Second accent | `#ffedd5` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#ec4899` · `#4b5563` · `#1f2937` · `#fb923c` · `#f3f4f6` · `#be185d` · `#fce7f3` · `#f3e8ff` · `#7e22ce`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** system sans-serif
- **Body:** system sans-serif
- **Scale (largest breakpoint):** h2 48px · h3 20px · body 20px
- **Weights in use:** medium, bold

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-xl` (12px)
- **Shadows:** `shadow-lg`, `shadow-md`, `shadow-sm`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Common gaps:** `gap-2`, `gap-8`

**Primary button**

```html
<a class="px-4 py-2 bg-gradient-to-r from-pink-500 to-orange-400 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-200">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Services (`services`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** inline SVG

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #fee2e2;
  --color-text: #1f2937;
  --color-muted: #4b5563;
  --color-border: #f3f4f6;
  --color-accent: #ec4899;
  --color-accent-2: #ffedd5;
  --font-display: "system sans-serif", serif;
  --font-body: "system sans-serif", serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#fee2e2',
    ink: '#1f2937',
    muted: '#4b5563',
    line: '#f3f4f6',
    accent: '#ec4899',
    accent2: '#ffedd5',
  },
  fontFamily: { display: ['system sans-serif'], sans: ['system sans-serif'] },
} }
```

## Do and don't

- **Do:** Set the highlighted heading words in a pink-to-coral gradient led by pink (#ec4899)
- **Do:** Give each service card a square gradient icon and a row of pastel tags
- **Do:** Keep the cards white with rounded corners on the pale background
- **Don't:** Don't apply the gradient to body copy
- **Don't:** Don't add more than one highlighted phrase to the heading
- **Don't:** Don't fill the cards with dark colour; they stay white on the soft background

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
