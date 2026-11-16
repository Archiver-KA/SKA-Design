# Design system — Casa Real Estate Landing Page Template

`SN-W03209` · real-estate · light mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A light, product-led real estate app page with a near-white ground and a large two-tone headline: black first line, mid-grey second. Soft mint-green glows fade in at the top, and dark app-store buttons sit below the copy. Green is limited to the badge and the atmosphere, while the layout centres on the app-store calls to action.

**Mood:** clean, fresh, modern, app-led

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#18181b` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#f4f4f5` | Hairlines, dividers, outlines |
| Accent | `#10b981` | Primary action and highlights |
| Second accent | `#f97316` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#18181b` · `#f4f4f5` · `#10b981` · `#71717a` · `#e4e4e7` · `#a1a1aa` · `#fafafa` · `#27272a` · `#f97316`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 96px · h2 36px · h3 24px · body 14px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-lg` (8px)
- **Shadows:** `shadow-xl`, `shadow-sm`, `shadow-lg`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-4`, `gap-1`

**Primary button**

```html
<a class="group flex items-center gap-3 bg-zinc-900 text-white px-5 py-3 rounded-xl hover:bg-zinc-800 hover:-translate-y-0.5 transition-all duration-200 shadow-xl shadow-zinc-900/10 border border-zinc-800">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Case studies (`case-studies`)
4. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #ffffff;
  --color-text: #18181b;
  --color-muted: #71717a;
  --color-border: #f4f4f5;
  --color-accent: #10b981;
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
    background: '#ffffff',
    surface: '#ffffff',
    ink: '#18181b',
    muted: '#71717a',
    line: '#f4f4f5',
    accent: '#10b981',
    accent2: '#f97316',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in large sans-serif, black first line and grey second
- **Do:** Use dark app-store buttons as the primary calls to action
- **Do:** Keep the green (#10b981) to the badge and the soft background glow
- **Don't:** Don't use the mint as a solid background fill
- **Don't:** Don't add more than one accent colour
- **Don't:** Don't set headlines in a serif

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
