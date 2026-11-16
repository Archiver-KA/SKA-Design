# Design system — Pizza Restaurant Landing Page Template

`SN-W02956` · food-beverage · light mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A bright, food-led pizza page on a white ground with a stacked hero headline in three tones: near-black, grey, then red (#dc2626) for the last line. Red pill buttons carry the main action and the nav call-to-action, and a large photograph of a sliced pizza sits on the right. The red is the single colour, so it reads as appetite and urgency without extra decoration.

**Mood:** bold, appetising, direct, energetic

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#f9fafb` | Cards, panels, raised areas |
| Text | `#1f2937` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#f3f4f6` | Hairlines, dividers, outlines |
| Accent | `#dc2626` | Primary action and highlights |
| Second accent | `#facc15` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#111827` · `#6b7280` · `#dc2626` · `#f3f4f6` · `#1f2937` · `#f9fafb` · `#fee2e2` · `#9ca3af` · `#facc15`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 30px · h3 20px · body 14px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-lg` (8px)
- **Shadows:** `shadow-xl`, `shadow-lg`, `shadow-sm`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-16`
- **Common gaps:** `gap-2`, `gap-4`, `gap-3`

**Primary button**

```html
<a class="inline-flex justify-center items-center gap-2 bg-red-600 text-white text-base font-medium px-8 py-3.5 rounded-full hover:bg-red-700 transition-all shadow-md hover:shadow-xl hover:-translate-y-1 w-full sm:w-auto">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Services (`services`)
4. Menu list (`menu-list`)
5. Testimonials (`testimonials`)
6. Map / location (`map-location`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #f9fafb;
  --color-text: #1f2937;
  --color-muted: #6b7280;
  --color-border: #f3f4f6;
  --color-accent: #dc2626;
  --color-accent-2: #facc15;
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
    surface: '#f9fafb',
    ink: '#1f2937',
    muted: '#6b7280',
    line: '#f3f4f6',
    accent: '#dc2626',
    accent2: '#facc15',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Stack the hero headline in three lines, with the last line in red (#dc2626)
- **Do:** Use red pill buttons for the primary action and outline pills for the secondary
- **Do:** Frame the food photograph large and let it bleed off the right edge
- **Don't:** Don't use red for body text or background areas
- **Don't:** Don't add a second bright colour; the yellow in the palette is not used in the hero
- **Don't:** Don't set the headline in a serif

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
