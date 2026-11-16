# Design system — Nexus Creative Mind Management Landing Page Template

`SN-W00580` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A black landing page with an editorial, calm hero: a very large serif headline where the word Connect carries a blue-to-cyan gradient fill, the only colour on the first screen. A small pill badge sits above, and a solid white button pairs with a dark outline over a soft glow.

**Mood:** editorial, calm, dark, gradient-accented, glowing

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#2c2c2c` | Cards, panels, raised areas |
| Text | `#f4f4f5` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#3b82f6` | Primary action and highlights |
| Second accent | `#22d3ee` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#a1a1aa` · `#3b82f6` · `#d4d4d8` · `#000000` · `#06b6d4` · `#22d3ee` · `#9333ea` · `#facc15` · `#71717a`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 18px · body 14px
- **Weights in use:** semibold, medium, normal
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-lg` (8px)
- **Shadows:** `shadow-lg`, `shadow-2xl`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-32`, `py-24`
- **Common gaps:** `gap-3`, `gap-2`, `gap-4`

**Primary button**

```html
<a class="p-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-white transition-colors hover-lift">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Logo cloud (`logo-cloud`)
4. Feature grid (`features`)
5. Testimonials (`testimonials`)
6. Call to action (`cta`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #2c2c2c;
  --color-text: #f4f4f5;
  --color-muted: #71717a;
  --color-border: #ffffff;
  --color-accent: #3b82f6;
  --color-accent-2: #22d3ee;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#2c2c2c',
    ink: '#f4f4f5',
    muted: '#71717a',
    line: '#ffffff',
    accent: '#3b82f6',
    accent2: '#22d3ee',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use the blue-to-cyan gradient (#3b82f6 to #22d3ee) on one highlighted headline word only.
- **Do:** Keep the primary button solid white and the secondary a dark outline.
- **Do:** Let the blurred glow sit behind the hero, never behind text blocks.
- **Don't:** Don't set the whole headline in the gradient; only the highlighted word takes it.
- **Don't:** Don't add yellow (#facc15) to the first screen.
- **Don't:** Don't set the headline in a sans-serif; it is a serif.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
