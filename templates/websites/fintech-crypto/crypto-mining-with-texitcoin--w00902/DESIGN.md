# Design system — Crypto Mining with TEXITcoin

`SN-W00902` · fintech-crypto · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A black page with a large white uppercase sans headline in three lines, where the brand word TEXITCOIN is set in a gold gradient. The primary button is a gold fill with an arrow, the secondary a white outline, and the eyebrow a thin dark monospace pill. A ticker of outlined uppercase words runs along the bottom edge, divided by small bronze crosses (#8a4d33). Gold and bronze are the only accents, which keeps the page sombre.

**Mood:** dark, sombre, uppercase, gold-accented, structured

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#050505` | Page ground |
| Surface | `#000000` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#9ca3af` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#8a4d33` | Primary action and highlights |
| Second accent | `#22c55e` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#3e1c11` · `#9ca3af` · `#000000` · `#6b7280` · `#050505` · `#8a4d33` · `#4b5563` · `#d1d5db` · `#22c55e`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** JetBrains Mono
- **Body:** Inter
- **Loaded families:** Inter, JetBrains Mono, Geist, Roboto, Montserrat, Poppins
- **Scale (largest breakpoint):** h1 72px · h2 12px · h3 48px · body 14px
- **Weights in use:** semibold, medium, bold
- **Letter spacing:** `tracking-tighter`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded` (4px), `rounded-sm` (2px)
- **Shadows:** `shadow-[0_0_20px_rgba(243,198,119,0.2)]`, `shadow-[0_0_30px_rgba(243,198,119,0.4)]`, `shadow-[0_0_15px_rgba(243,198,119,0.3)]`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-3`, `gap-2`, `gap-4`

**Primary button**

```html
<a class="hidden md:flex items-center gap-2 bg-gradient-to-r from-brand-bronze via-brand-gold to-brand-bronze text-black px-5 py-2 text-xs font-semibold uppercase tracking-wide hover:opacity-90 transition-opacity duration-300 rounded-sm">…</a>
```

## Page structure

Blocks in page order:

1. Logo cloud (`logo-cloud`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Marquee (`marquee`)
5. Comparison (`comparison`)
6. Bento grid (`bento-grid`)
7. Process / steps (`how-it-works`)
8. Pricing (`pricing`)
9. FAQ (`faq`)
10. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #050505;
  --color-surface: #000000;
  --color-text: #ffffff;
  --color-muted: #9ca3af;
  --color-border: #ffffff;
  --color-accent: #8a4d33;
  --color-accent-2: #22c55e;
  --font-display: "JetBrains Mono", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#050505',
    surface: '#000000',
    ink: '#ffffff',
    muted: '#9ca3af',
    line: '#ffffff',
    accent: '#8a4d33',
    accent2: '#22c55e',
  },
  fontFamily: { display: ['JetBrains Mono'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the brand word in gold gradient and the rest of the headline in white caps
- **Do:** Use the outlined-word ticker along the bottom edge as a divider
- **Do:** Keep the eyebrow as a thin dark monospace pill
- **Don't:** Don't use the green (#22c55e) in any hero element; it does not show here
- **Don't:** Don't use gold for body copy
- **Don't:** Don't set the ticker in solid fills; keep the words outlined

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
