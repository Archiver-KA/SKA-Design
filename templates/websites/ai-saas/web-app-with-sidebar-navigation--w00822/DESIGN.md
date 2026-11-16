# Design system — Web App with Sidebar Navigation

`SN-W00822` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark application shell: a left sidebar with small grey labels and a purple active state, beside a main pane of image tiles. Indigo (#6366f1) is the only accent, used for the active nav item and the New button. Type is the system sans at small sizes, which keeps the layout dense and tool-like.

**Mood:** dense, app-like, quiet, dark

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#111827` | Page ground |
| Surface | `#1f2937` | Cards, panels, raised areas |
| Text | `#374151` | Headings and primary copy |
| Border | `#374151` | Hairlines, dividers, outlines |
| Accent | `#6366f1` | Primary action and highlights |
| Second accent | `#ef4444` | Supporting highlights |

Palette by frequency of use: `#9ca3af` · `#374151` · `#1f2937` · `#d1d5db` · `#6366f1` · `#f3f4f6` · `#111827` · `#818cf8` · `#ef4444` · `#eab308`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** -apple-system
- **Body:** -apple-system
- **Scale (largest breakpoint):** h1 20px · h2 18px · body 12px
- **Weights in use:** medium

## Shape, spacing and layout

- **Corner radius:** `rounded-lg` (8px), `rounded-md` (6px), `rounded-full` (9999px)
- **Shadows:** `shadow-xl`
- **Content width:** `max-w-5xl`, `max-w-3xl`

**Primary button**

```html
<a class="bg-gray-800 hover:bg-gray-700 p-2 rounded-full">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. Navigation bar (`navbar`)
3. Pricing (`pricing`)
4. Product grid (`product-grid`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** inline SVG

## Tokens

```css
:root {
  --color-background: #111827;
  --color-surface: #1f2937;
  --color-text: #374151;
  --color-border: #374151;
  --color-accent: #6366f1;
  --color-accent-2: #ef4444;
  --font-display: "-apple-system", sans-serif;
  --font-body: "-apple-system", sans-serif;
  --radius: 8px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#111827',
    surface: '#1f2937',
    ink: '#374151',
    line: '#374151',
    accent: '#6366f1',
    accent2: '#ef4444',
  },
  fontFamily: { display: ['-apple-system'], sans: ['-apple-system'] },
} }
```

## Do and don't

- **Do:** Use the indigo (#6366f1) only for the active nav item and the primary New button
- **Do:** Keep sidebar labels small and grey, with section headings in uppercase
- **Do:** Show content as image tiles with a caption and count beneath each
- **Don't:** Don't use a light ground; the shell is dark
- **Don't:** Don't add a second accent colour to the sidebar
- **Don't:** Don't put icon-only items in the sidebar without a label

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
