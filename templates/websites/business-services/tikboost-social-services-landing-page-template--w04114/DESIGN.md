# Design system — TikBoost Social Services Landing Page Template

`SN-W04114` · business-services · dark mode · Sinera Atlas theme `route` · language `en`

## Direction

A black, high-energy page with a bold white sans-serif headline, where the second line runs through a cyan-to-violet gradient. The primary button is solid white beside a dark outline button, and a row of small uppercase grey labels under the hero signals trust. The look is sharp and digital, with the gradient as the only colour in the hero.

**Mood:** high-energy, sharp, digital, dark, bold

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#3f3f46` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#06b6d4` | Primary action and highlights |
| Second accent | `#eab308` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#000000` · `#71717a` · `#06b6d4` · `#a1a1aa` · `#facc15` · `#eab308` · `#22c55e` · `#52525b` · `#22d3ee`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 30px · h3 20px · body 14px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-lg` (8px), `rounded-full` (9999px), `rounded-xl` (12px)
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-24`, `py-12`
- **Common gaps:** `gap-2`, `gap-4`, `gap-6`

**Primary button**

```html
<a class="w-full sm:w-auto px-8 py-3.5 bg-white text-black font-medium rounded-lg hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2 group">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Services (`services`)
4. Product grid (`product-grid`)
5. Contact form (`contact-form`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #3f3f46;
  --color-text: #ffffff;
  --color-muted: #71717a;
  --color-border: #ffffff;
  --color-accent: #06b6d4;
  --color-accent-2: #eab308;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 8px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#3f3f46',
    ink: '#ffffff',
    muted: '#71717a',
    line: '#ffffff',
    accent: '#06b6d4',
    accent2: '#eab308',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in bold white with the second line in the cyan gradient
- **Do:** Use a solid white primary button beside a dark outline button
- **Do:** Keep trust labels small, uppercase and widely tracked in grey
- **Don't:** Don't use the gradient for body copy or small labels
- **Don't:** Don't add a light background to the hero
- **Don't:** Don't use more than one gradient in a section

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
