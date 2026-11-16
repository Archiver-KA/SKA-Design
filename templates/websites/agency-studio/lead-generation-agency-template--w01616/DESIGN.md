# Design system — Lead Generation Agency Template

`SN-W01616` · agency-studio · dark mode · Sinera Atlas theme `workshop` · language `pl`

## Direction

A dark, centred Meta-ads page on near-black (#18181b) with a diffuse red glow behind the hero. Red (#ef4444) marks the promised result in the headline and fills the single primary button, and the rest of the headline stays white in Inter. A grey subline and a small pill label above the headline keep the block tight, and the first screen has no imagery.

**Mood:** direct, dark, promotional, focused

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#18181b` | Page ground |
| Surface | `#18181b` | Cards, panels, raised areas |
| Text | `#f5f5f5` | Headings and primary copy |
| Muted text | `#a1a1aa` | Secondary copy, captions |
| Border | `#27272a` | Hairlines, dividers, outlines |
| Accent | `#ef4444` | Primary action and highlights |

Palette by frequency of use: `#ef4444` · `#27272a` · `#18181b` · `#a1a1aa` · `#ffffff` · `#d4d4d8` · `#dc2626` · `#71717a` · `#f4f4f5` · `#09090b`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 60px · h2 36px · h3 20px · body 16px
- **Weights in use:** semibold, medium
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-2xl` (16px), `rounded-full` (9999px), `rounded-lg` (8px)
- **Shadows:** `shadow-red-900/10`, `shadow-2xl`, `shadow-xl`
- **Content width:** `max-w-2xl`, `max-w-5xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-3`, `gap-4`, `gap-2`

**Primary button**

```html
<a class="w-full sm:w-auto px-8 py-4 bg-red-600 hover:bg-red-700 text-white rounded-lg font-medium transition-colors flex items-center justify-center gap-2">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. Bento grid (`bento-grid`)
3. Feature grid (`features`)
4. Call to action (`cta`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #18181b;
  --color-surface: #18181b;
  --color-text: #f5f5f5;
  --color-muted: #a1a1aa;
  --color-border: #27272a;
  --color-accent: #ef4444;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 16px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#18181b',
    surface: '#18181b',
    ink: '#f5f5f5',
    muted: '#a1a1aa',
    line: '#27272a',
    accent: '#ef4444',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in Inter, white, with the result figure in red (#ef4444)
- **Do:** Use red for the primary button and the figure only
- **Do:** Keep the glow behind the hero and the page on near-black (#18181b)
- **Don't:** Don't combine the deeper red (#dc2626) and the brighter red (#ef4444) in one block
- **Don't:** Don't set grey copy in pure white
- **Don't:** Don't add imagery above the headline

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
