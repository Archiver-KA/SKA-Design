# Design system — Taxi Service Assistant Landing Page Template

`SN-W04111` · business-services · light mode · Sinera Atlas theme `route` · language `fr`

## Direction

Frosted glass is the main device: a translucent white card sits centred over a blurred city photograph, with small dark translucent tiles at the corners. Yellow (#fbbf24) appears only in the brand mark, the top button and small status accents. The photograph provides the energy, and the interface stays calm and neutral over it.

**Mood:** glassy, calm, layered, urban, light

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f4f4f5` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#27272a` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#fbbf24` | Primary action and highlights |
| Second accent | `#60a5fa` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#fbbf24` · `#a1a1aa` · `#27272a` · `#18181b` · `#71717a` · `#f59e0b` · `#3f3f46` · `#52525b` · `#f4f4f5`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Quicksand
- **Scale (largest breakpoint):** h2 20px · body 14px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-[40px]` (40px)
- **Shadows:** `shadow-lg`, `shadow-sm`, `shadow-md`
- **Content width:** `max-w-[420px]`
- **Common gaps:** `gap-2`, `gap-1`, `gap-1.5`

**Primary button**

```html
<a class="hidden sm:block px-4 py-2 rounded-full text-xs font-semibold transition shadow-lg tracking-tight text-zinc-900 hover:bg-amber-500 bg-amber-400 shadow-amber-400/20 font-quicksand">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Call to action (`cta`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #f4f4f5;
  --color-surface: #ffffff;
  --color-text: #27272a;
  --color-muted: #71717a;
  --color-border: #ffffff;
  --color-accent: #fbbf24;
  --color-accent-2: #60a5fa;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f4f4f5',
    surface: '#ffffff',
    ink: '#27272a',
    muted: '#71717a',
    line: '#ffffff',
    accent: '#fbbf24',
    accent2: '#60a5fa',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use frosted white cards with rounded corners over blurred imagery
- **Do:** Keep yellow (#fbbf24) for the brand mark and one primary button
- **Do:** Place small dark translucent info tiles at the edges of the page
- **Don't:** Don't place sharp-edged boxes over the photograph
- **Don't:** Don't use yellow for body text
- **Don't:** Don't remove the blur from the background imagery

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
