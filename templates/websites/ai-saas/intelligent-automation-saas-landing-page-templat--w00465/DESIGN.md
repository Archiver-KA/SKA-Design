# Design system — Intelligent Automation SaaS Landing Page Template

`SN-W00465` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark, industrial-tech landing page with a full-bleed photograph of circuit boards behind the hero and oversized uppercase headlines in heavy white sans. Orange (#fb8d25) is the one accent, used on the ampersand glyph and a progress bar in the translucent dark card. The card holds a short statement and two numbers. The style is bold and engineering-heavy.

**Mood:** bold, engineering-heavy, dark, industrial, uppercase

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Surface | `#171717` | Cards, panels, raised areas |
| Text | `#fafafa` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#fb8d25` | Primary action and highlights |
| Second accent | `#3b82f6` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#fb8d25` · `#0a0a0a` · `#171717` · `#000000` · `#3b82f6` · `#a855f7` · `#60a5fa` · `#c084fc` · `#a3a3a3`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display, Bricolage Grotesque
- **Scale (largest breakpoint):** h2 72px · h3 30px · body 14px
- **Weights in use:** medium, light, bold
- **Letter spacing:** `tracking-widest`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-xl` (12px)
- **Shadows:** `shadow-2xl`, `shadow-[0_0_15px_rgba(251,141,37,0.6)]`, `shadow-[0_0_20px_rgba(255,255,255,0.1)]`
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Section padding:** `py-12`, `py-32`
- **Common gaps:** `gap-2`, `gap-6`, `gap-4`

**Primary button**

```html
<a class="filter-btn px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 text-white/50 hover:text-white hover:bg-white/5">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Stats band (`stats`)
4. Timeline (`timeline`)
5. Feature grid (`features`)
6. Logo cloud (`logo-cloud`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #0a0a0a;
  --color-surface: #171717;
  --color-text: #fafafa;
  --color-border: #ffffff;
  --color-accent: #fb8d25;
  --color-accent-2: #3b82f6;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0a0a0a',
    surface: '#171717',
    ink: '#fafafa',
    line: '#ffffff',
    accent: '#fb8d25',
    accent2: '#3b82f6',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the hero headline in heavy uppercase Inter at very large size
- **Do:** Use orange (#fb8d25) for one accent per section, such as a glyph or a progress bar
- **Do:** Keep the photograph dark behind a translucent card
- **Don't:** Don't use orange for large text blocks
- **Don't:** Don't add gradients over the photograph beyond a dark scrim
- **Don't:** Don't set the headline in a light weight

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
