# Design system — Multi-Segment Career Guidance Landing Page Template

`SN-W03510` · education · light mode · Sinera Atlas theme `calm` · language `tr`

## Direction

A calm, editorial career page on a warm off-white ground (#faf6f1) with a large dark headline in Inter. The emphasis word is set in forest green (#4a7c59), and the same green marks the primary action. White panels with fine grey borders and soft rounded corners hold the supporting content, so the page feels informative rather than promotional.

**Mood:** calm, warm, organised, approachable

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#faf6f1` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#27272a` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#e4e4e7` | Hairlines, dividers, outlines |
| Accent | `#4a7c59` | Primary action and highlights |
| Second accent | `#7fb069` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#18181b` · `#e4e4e7` · `#71717a` · `#4a7c59` · `#fafafa` · `#f4f4f5` · `#c17b54` · `#27272a` · `#3f3f46`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 48px · h2 20px · h3 16px · body 12px
- **Weights in use:** medium, semibold, light
- **Letter spacing:** `tracking-tighter`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-3xl` (24px)
- **Shadows:** `shadow-sm`, `shadow-[0_2px_12px_rgba(0,0,0,0.02)]`, `shadow-[0_8px_24px_rgba(0,0,0,0.06)]`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-2`, `gap-4`, `gap-6`

**Primary button**

```html
<a class="bg-[#C17B54] text-white px-5 py-2 rounded-full text-xs font-medium hover:bg-[#A8673F] hover:scale-105 transition-all duration-300 shadow-sm flex items-center gap-2">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Services (`services`)
4. Call to action (`cta`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #faf6f1;
  --color-surface: #ffffff;
  --color-text: #27272a;
  --color-muted: #71717a;
  --color-border: #e4e4e7;
  --color-accent: #4a7c59;
  --color-accent-2: #7fb069;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#faf6f1',
    surface: '#ffffff',
    ink: '#27272a',
    muted: '#71717a',
    line: '#e4e4e7',
    accent: '#4a7c59',
    accent2: '#7fb069',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the emphasis word in forest green (#4a7c59) inside each headline
- **Do:** Use the green for the primary action and no other buttons
- **Do:** Hold supporting content in white panels with a fine grey border
- **Don't:** Don't use the green for body copy or links in running text
- **Don't:** Don't introduce a second bright colour on the cream ground
- **Don't:** Don't use heavy shadows on the white panels

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
