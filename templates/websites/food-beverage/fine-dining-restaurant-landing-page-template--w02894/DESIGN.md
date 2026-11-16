# Design system — Fine Dining Restaurant Landing Page Template

`SN-W02894` · food-beverage · light mode · Sinera Atlas theme `dwell` · language `fr`

## Direction

A bold, poster-like hero set in heavy uppercase black sans, with the key words in orange (#ea580c) so the headline carries the colour. The ground is off-white and a photograph of a sliced pizza sits in a rounded frame with a small white stat card on top. It is loud and direct: strong weight, tight line spacing, one orange highlight per phrase, and a black pill for the main action.

**Mood:** bold, poster-like, loud, direct, flat

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fafaf9` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#171717` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#ea580c` | Primary action and highlights |
| Second accent | `#2563eb` | Supporting highlights |

Palette by frequency of use: `#171717` · `#ffffff` · `#ea580c` · `#737373` · `#fafaf9` · `#f97316` · `#f5f5f5` · `#f5f5f4` · `#a3a3a3` · `#262626`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Space Grotesk, Inter
- **Scale (largest breakpoint):** h1 96px · h2 60px · h3 24px · body 14px
- **Weights in use:** bold, medium, semibold
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-3xl` (24px)
- **Shadows:** `shadow-lg`, `shadow-sm`, `shadow-xl`
- **Content width:** `max-w-7xl`, `max-w-5xl`
- **Section padding:** `py-24`, `py-12`
- **Common gaps:** `gap-2`, `gap-6`, `gap-8`

**Primary button**

```html
<a class="bg-orange-600 text-white text-sm font-bold px-6 py-3 rounded-xl hover:bg-neutral-900 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-2">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Menu list (`menu-list`)
5. Call to action (`cta`)
6. Map / location (`map-location`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #fafaf9;
  --color-surface: #ffffff;
  --color-text: #171717;
  --color-muted: #737373;
  --color-border: #ffffff;
  --color-accent: #ea580c;
  --color-accent-2: #2563eb;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fafaf9',
    surface: '#ffffff',
    ink: '#171717',
    muted: '#737373',
    line: '#ffffff',
    accent: '#ea580c',
    accent2: '#2563eb',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headlines in heavy uppercase sans with tight leading.
- **Do:** Colour one or two words per headline in orange (#ea580c), not whole lines.
- **Do:** Use a black pill for the main call to action and keep it the only dark fill.
- **Don't:** Don't set body copy in uppercase; only headlines and buttons are capitalised.
- **Don't:** Don't add gradients or glow shapes; the page is flat colour and photo.
- **Don't:** Don't use blue as a second accent.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
