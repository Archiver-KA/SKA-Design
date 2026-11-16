# Design system — Conscious Coaching Product Landing Page Template

`SN-W03430` · education · light mode · Sinera Atlas theme `calm` · language `en`

## Direction

A quiet, serif-led page on warm off-white [#fafaf9], with a large Cormorant Garamond headline in near-black and a single solid black button for the main action. The navigation is spread across more items, and a faint circular line drawing sits behind the hero. Colour is almost absent, so the type, spacing and restraint make the page feel contemplative.

**Mood:** refined, quiet, monochrome, spacious

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fafaf9` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#292524` | Headings and primary copy |
| Muted text | `#78716c` | Secondary copy, captions |
| Border | `#f5f5f4` | Hairlines, dividers, outlines |
| Accent | `#1c1917` | Primary action and highlights |

Palette by frequency of use: `#1c1917` · `#78716c` · `#ffffff` · `#d6d3d1` · `#e7e5e4` · `#fafaf9` · `#f5f5f4` · `#292524` · `#57534e` · `#a8a29e`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Cormorant Garamond
- **Body:** Inter
- **Loaded families:** Cormorant Garamond, Inter, Geist, Roboto, Montserrat, Poppins
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 24px · body 14px
- **Weights in use:** medium, bold, light
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-sm` (2px), `rounded` (4px)
- **Shadows:** `shadow-sm`, `shadow-2xl`, `shadow-xl`
- **Content width:** `max-w-7xl`, `max-w-5xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-3`, `gap-4`, `gap-6`

**Primary button**

```html
<a class="bg-gold-600 text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-gold-500 transition-colors text-center">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Integrations (`integrations`)
4. Feature grid (`features`)
5. Call to action (`cta`)
6. Testimonials (`testimonials`)
7. Pricing (`pricing`)
8. Newsletter signup (`newsletter`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #fafaf9;
  --color-surface: #ffffff;
  --color-text: #292524;
  --color-muted: #78716c;
  --color-border: #f5f5f4;
  --color-accent: #1c1917;
  --font-display: "Cormorant Garamond", serif;
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
    ink: '#292524',
    muted: '#78716c',
    line: '#f5f5f4',
    accent: '#1c1917',
  },
  fontFamily: { display: ['Cormorant Garamond'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in Cormorant Garamond at large size, in near-black (#292524)
- **Do:** Use a single solid black button for the main action
- **Do:** Keep the palette near-monochrome on warm off-white (#fafaf9)
- **Don't:** Don't add bright accent colours to the hero
- **Don't:** Don't set the headline in a sans-serif
- **Don't:** Don't add a second button of equal weight beside the main action

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
