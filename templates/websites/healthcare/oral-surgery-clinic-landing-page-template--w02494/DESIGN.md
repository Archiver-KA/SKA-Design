# Design system — Oral Surgery Clinic Landing Page Template

`SN-W02494` · healthcare · dark mode · Sinera Atlas theme `calm` · language `en`

## Direction

A photo-backed hero under a dark green-grey overlay that runs from deep on the left to pale on the right, with a white bold sans headline. The second headline line is set in a pale green-to-yellow gradient, the only colour on the page. A solid white button and an outlined button sit under the copy, which keeps the clinical tone plain.

**Mood:** clinical, steady, photographic, plain

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#18181b` | Page ground |
| Surface | `#f4f4f5` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#e4e4e7` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#ffffff` · `#71717a` · `#18181b` · `#e4e4e7` · `#f4f4f5` · `#d4d4d8` · `#52525b` · `#000000` · `#fafafa` · `#a1a1aa`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 30px · h3 20px · body 14px
- **Weights in use:** medium, light, semibold
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-xl` (12px)
- **Shadows:** `shadow-[0_8px_30px_rgb(0,0,0,0.04)]`, `shadow-sm`, `shadow-md`
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-8`, `gap-4`

**Primary button**

```html
<a class="hidden md:inline-flex h-10 items-center justify-center rounded-lg bg-pine-700 px-6 text-sm font-medium text-white shadow-sm transition-all hover:bg-pine-800 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-pine-500 focus:ring-offset-2">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Feature grid (`features`)
5. Team (`team`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #18181b;
  --color-surface: #f4f4f5;
  --color-text: #ffffff;
  --color-muted: #71717a;
  --color-border: #e4e4e7;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#18181b',
    surface: '#f4f4f5',
    ink: '#ffffff',
    muted: '#71717a',
    line: '#e4e4e7',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headlines in bold Inter, white over the dark hero overlay
- **Do:** Use the pale green-to-yellow gradient only on the second headline line
- **Do:** Pair one solid white button with one outlined button under the hero copy
- **Don't:** Don't place hero copy over the pale right side of the overlay
- **Don't:** Don't use the gradient for body text or buttons
- **Don't:** Don't use the light grey surface (#f4f4f5) as a hero ground; copy would lose contrast

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
