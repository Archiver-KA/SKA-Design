# Design system — AI Strategy Consulting Landing Page Template

`SN-W01427` · agency-studio · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A white page with violet glows at the edges, and a heavy sans headline in near-black where the phrase 'catalyze growth' is set in violet. The layout is split: copy and two buttons on the left, a soft-lit wireframe browser on the right with a small efficiency badge overlapping it. The white ground keeps the page bright.

**Mood:** bright, split, violet, product-led, clean

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#171717` | Cards, panels, raised areas |
| Text | `#171717` | Headings and primary copy |
| Muted text | `#171717` | Secondary copy, captions |
| Border | `#e5e5e5` | Hairlines, dividers, outlines |
| Accent | `#5c4cff` | Primary action and highlights |
| Second accent | `#00e5a8` | Supporting highlights |

Palette by frequency of use: `#5c4cff` · `#ffffff` · `#171717` · `#e5e5e5` · `#525252` · `#00e5a8` · `#fafafa` · `#737373` · `#d280ff` · `#ffb266`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Plus Jakarta Sans, Space Grotesk
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 20px · body 14px
- **Weights in use:** medium, semibold, light
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded` (4px)
- **Shadows:** `shadow-sm`, `shadow-lg`, `shadow-2xl`
- **Content width:** `max-w-[1200px]`, `max-w-[160px]`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-1.5`, `gap-4`

**Primary button**

```html
<a class="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-[#5C4CFF] text-white text-sm font-medium hover:bg-[#4A3DE5] transition-all hover:-translate-y-0.5 hover:shadow-lg shadow-sm">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. Logo cloud (`logo-cloud`)
3. Stats band (`stats`)
4. Comparison (`comparison`)
5. Product grid (`product-grid`)
6. Services (`services`)
7. Integrations (`integrations`)
8. Process / steps (`how-it-works`)
9. Articles (`blog-articles`)
10. FAQ (`faq`)
11. Call to action (`cta`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #171717;
  --color-text: #171717;
  --color-muted: #171717;
  --color-border: #e5e5e5;
  --color-accent: #5c4cff;
  --color-accent-2: #00e5a8;
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
    surface: '#171717',
    ink: '#171717',
    muted: '#171717',
    line: '#e5e5e5',
    accent: '#5c4cff',
    accent2: '#00e5a8',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the phrase 'catalyze growth' in violet (#5c4cff) and keep the rest of the headline near-black.
- **Do:** Keep the violet glows at the page edges, behind the copy and the browser card.
- **Do:** Use the solid violet button for the primary action, beside a plain secondary.
- **Don't:** Don't use the dark mode tokens; the ground is white.
- **Don't:** Don't put violet text over the glow; it is for one phrase.
- **Don't:** Don't remove the floating efficiency badge; it is the hero's product cue.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
