# Design system — FinTech Prop Trading Landing Page Template

`SN-W00960` · fintech-crypto · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A deep forest-green page (#011c15) with bright white type and a green palette for buttons and highlights. Large display type is set in PP Mori, with glow and blur layers over the green ground. Purple (#a855f7) sits in the palette as a secondary colour.

**Mood:** dark, green, premium, atmospheric, trading

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#011c15` | Page ground |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#011c15` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#34d399` | Primary action and highlights |
| Second accent | `#a855f7` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#8f9ab5` · `#10b981` · `#34d399` · `#a7f3d0` · `#6ee7b7` · `#000000` · `#059669` · `#064e3b` · `#011c15`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** PP Mori
- **Body:** PP Mori
- **Loaded families:** PP Mori
- **Scale (largest breakpoint):** h1 120px · h2 60px · h3 20px · body 16px
- **Weights in use:** medium, bold, semibold
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-[2rem]` (2rem)
- **Shadows:** `shadow-[0_0_20px_rgba(16,185,129,0.3)]`, `shadow-[0_10px_20px_rgba(255,255,255,0.1)]`, `shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8),inset_0_1px_0_rgba(255,255,255,0.1)]`
- **Content width:** `max-w-[1360px]`, `max-w-2xl`
- **Common gaps:** `gap-2`, `gap-4`, `gap-3`

**Primary button**

```html
<a class="bg-white/5 border border-white/5 border-t-white/10 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-white/10 transition-all shadow-[0_4px_10px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.1)]">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Stats band (`stats`)
5. Feature grid (`features`)
6. Call to action (`cta`)
7. Product grid (`product-grid`)
8. Testimonials (`testimonials`)
9. Newsletter signup (`newsletter`)
10. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #011c15;
  --color-text: #ffffff;
  --color-muted: #011c15;
  --color-border: #ffffff;
  --color-accent: #34d399;
  --color-accent-2: #a855f7;
  --font-display: "PP Mori", sans-serif;
  --font-body: "PP Mori", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#011c15',
    ink: '#ffffff',
    muted: '#011c15',
    line: '#ffffff',
    accent: '#34d399',
    accent2: '#a855f7',
  },
  fontFamily: { display: ['PP Mori'], sans: ['PP Mori'] },
} }
```

## Do and don't

- **Do:** Keep the page ground deep green (#011c15) with white headings.
- **Do:** Use the mint green (#34d399) for buttons and highlights only.
- **Do:** Set display headlines in PP Mori at large size.
- **Don't:** Don't use light-page styling on this dark green design.
- **Don't:** Don't add purple (#a855f7) without a clear role.
- **Don't:** Don't use black text on the dark green ground.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
