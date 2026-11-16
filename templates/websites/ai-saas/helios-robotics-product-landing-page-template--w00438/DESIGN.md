# Design system — Helios Robotics Product Landing Page Template

`SN-W00438` · ai-saas · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A saturated yellow page where the whole first screen is given to the colour: a short navy headline on the left, a solid navy pill button, and a navy nav button, with nothing else. The yellow (#facc15) is the ground rather than an accent, so the identity rests on one colour and on restraint.

**Mood:** bold, minimal, warm, product-focused, restrained

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#facc15` | Page ground |
| Surface | `#1f2937` | Cards, panels, raised areas |
| Text | `#111827` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#111827` | Hairlines, dividers, outlines |
| Accent | `#facc15` | Primary action and highlights |

Palette by frequency of use: `#111827` · `#ffffff` · `#1f2937` · `#facc15` · `#f9fafb` · `#6b7280` · `#fcd34d` · `#f59e0b` · `#9ca3af` · `#374151`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 96px · h2 30px · h3 24px · body 18px
- **Weights in use:** medium, normal, semibold
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-[2rem]` (2rem), `rounded-[2.5rem]` (2.5rem)
- **Shadows:** `shadow-xl`, `shadow-sm`, `shadow-inner`
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Section padding:** `py-12`
- **Common gaps:** `gap-12`, `gap-6`, `gap-x-y-6`

**Primary button**

```html
<a class="w-full md:w-auto px-8 py-4 bg-gray-900 text-white rounded-full font-medium text-lg hover:bg-gray-800 transition-all hover:scale-105 shadow-xl">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Product grid (`product-grid`)
4. Footer (`footer`)

## Motion, effects and stack

- **Effects:** gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #facc15;
  --color-surface: #1f2937;
  --color-text: #111827;
  --color-muted: #6b7280;
  --color-border: #111827;
  --color-accent: #facc15;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#facc15',
    surface: '#1f2937',
    ink: '#111827',
    muted: '#6b7280',
    line: '#111827',
    accent: '#facc15',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use the yellow (#facc15) as the page ground, not as a button or accent fill
- **Do:** Set text and buttons in navy (#111827) with solid pill shapes
- **Do:** Keep the headline short, in a tight sans, at the left of the first screen
- **Don't:** Don't add a second bright colour to the yellow ground
- **Don't:** Don't leave the right half of the hero empty
- **Don't:** Don't set text in yellow on the yellow ground

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
