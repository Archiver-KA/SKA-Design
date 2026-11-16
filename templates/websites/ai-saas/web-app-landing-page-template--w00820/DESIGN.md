# Design system — Web App Landing Page Template

`SN-W00820` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark hero built on a sky gradient that moves from deep indigo to an orange horizon, with a very large Inter headline in white and pale blue. The buttons stay neutral: a solid white pill for the primary action and a text link for the secondary, so the gradient carries all the colour. Glass-style panels and a product window below the fold add depth without a second accent.

**Mood:** atmospheric, gradient-led, bold, product-focused

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0f172a` | Page ground |
| Surface | `#020412` | Cards, panels, raised areas |
| Text | `#f5f5f5` | Headings and primary copy |
| Muted text | `#ffffff` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#e2e8f0` | Primary action and highlights |
| Second accent | `#10b981` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#64748b` · `#94a3b8` · `#6366f1` · `#e2e8f0` · `#0f172a` · `#cbd5e1` · `#f1f5f9` · `#10b981` · `#f8fafc`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** var(--font-inter)
- **Body:** var(--font-inter)
- **Loaded families:** Inter, Manrope, Newsreader, Google Sans Flex, Oswald, DM Sans
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 14px · body 14px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-lg` (8px)
- **Shadows:** `shadow-sm`, `shadow-2xl`, `shadow-lg`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Common gaps:** `gap-2`, `gap-4`, `gap-1.5`

**Primary button**

```html
<a class="hover:bg-white/15 transition-all text-white font-manrope bg-white/10 border border-white/10 rounded-full py-1.5 px-4">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Modal / overlay (`modal-overlay`)
3. Hero (`hero`)
4. Call to action (`cta`)
5. Marquee (`marquee`)
6. FAQ (`faq`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #0f172a;
  --color-surface: #020412;
  --color-text: #f5f5f5;
  --color-muted: #ffffff;
  --color-border: #ffffff;
  --color-accent: #e2e8f0;
  --color-accent-2: #10b981;
  --font-display: "var(--font-inter)", sans-serif;
  --font-body: "var(--font-inter)", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0f172a',
    surface: '#020412',
    ink: '#f5f5f5',
    muted: '#ffffff',
    line: '#ffffff',
    accent: '#e2e8f0',
    accent2: '#10b981',
  },
  fontFamily: { display: ['var(--font-inter)'], sans: ['var(--font-inter)'] },
} }
```

## Do and don't

- **Do:** Set the hero headline in Inter at 72px, centred, in white
- **Do:** Use one solid white pill for the primary action and a text link for the secondary
- **Do:** Let the sky gradient carry the colour; do not place flat accent fills over it
- **Don't:** Don't add a second bright accent colour to the hero
- **Don't:** Don't make the primary action an outlined button
- **Don't:** Don't use the glass blur on text blocks, only on panels

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
