# Design system — Fantasy Game Landing Page Template

`SN-W03698` · entertainment · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

Near-black stage with white display type set very large and tightly leaded in a bold italic serif. The headline is split between a small outlined-feeling phrase on the left and a large bold line on the right, while supporting copy is a plain sans in light grey. The page is strictly black and white, and the gold accent (#c28e3a) is reserved for emphasis, which keeps the mood epic and editorial.

**Mood:** epic, dramatic, editorial, monochrome

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#18181b` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#9ca3af` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#c28e3a` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#c28e3a` · `#d1d5db` · `#000000` · `#18181b` · `#27272a` · `#9ca3af` · `#6b7280` · `#e5e7eb` · `#151515`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Monda
- **Body:** Monda
- **Loaded families:** Cinzel, Monda
- **Scale (largest breakpoint):** h1 128px · h2 48px · h3 30px · body 20px
- **Weights in use:** medium, bold, semibold
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-lg` (8px)
- **Shadows:** `shadow-2xl`, `shadow-xl`, `shadow-lg`
- **Content width:** `max-w-7xl`, `max-w-6xl`
- **Section padding:** `py-32`, `py-24`
- **Common gaps:** `gap-3`, `gap-6`, `gap-5`

**Primary button**

```html
<a class="clip-card-btn px-8 py-2.5 bg-[#c28e3a] text-zinc-900 text-base font-semibold uppercase tracking-wider hover:bg-[#d4a045] transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Product grid (`product-grid`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #18181b;
  --color-text: #ffffff;
  --color-muted: #9ca3af;
  --color-border: #ffffff;
  --color-accent: #c28e3a;
  --font-display: "Monda", sans-serif;
  --font-body: "Monda", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#18181b',
    ink: '#ffffff',
    muted: '#9ca3af',
    line: '#ffffff',
    accent: '#c28e3a',
  },
  fontFamily: { display: ['Monda'], sans: ['Monda'] },
} }
```

## Do and don't

- **Do:** Set display headlines large in bold italic serif, with tight leading
- **Do:** Keep the page to black and white, with gold only for emphasis
- **Do:** Place short supporting copy in a plain sans beside the headline
- **Don't:** Don't set headlines in a sans-serif
- **Don't:** Don't add colour to the navigation bar
- **Don't:** Don't add extra cards or badges to the hero beyond the single role chip

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
