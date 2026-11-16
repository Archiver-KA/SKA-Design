# Design system — Crypto Mining Comparison Landing Page Template

`SN-W00901` · fintech-crypto · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A black page with a large white sans headline in three lines, where the brand word TEXITcoin is set in a gold gradient (#d4af37). The primary button is a gold fill and the secondary a white-outlined ghost, and the eyebrow sits in a thin gold-outlined pill. Gold is the only colour, used on the brand word and the actions, while the body copy stays quiet and light grey.

**Mood:** dark, premium, gold-accented, sober, bold

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#333333` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#d4af37` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#000000` · `#050505` · `#333333` · `#d4af37`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** JetBrains Mono
- **Body:** Inter
- **Loaded families:** Inter, JetBrains Mono
- **Scale (largest breakpoint):** h1 96px · h2 14px · h3 60px · body 18px
- **Weights in use:** medium, semibold, light
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-lg` (8px), `rounded-sm` (2px), `rounded-full` (9999px)
- **Shadows:** `shadow-[0_0_20px_rgba(212,175,55,0.2)]`, `shadow-[0_0_30px_rgba(212,175,55,0.15)]`, `shadow-[0_0_40px_rgba(184,115,51,0.3)]`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-32`
- **Common gaps:** `gap-3`, `gap-8`, `gap-2`

**Primary button**

```html
<a class="flex items-center gap-2 bg-gradient-to-r from-copper to-brand text-black px-6 py-3 text-sm font-medium uppercase tracking-wide hover:opacity-90 transition-opacity duration-300 rounded-sm shadow-[0_0_20px_rgba(212,175,55,0.2)]">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Marquee (`marquee`)
4. Comparison (`comparison`)
5. Bento grid (`bento-grid`)
6. Pricing (`pricing`)
7. FAQ (`faq`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #333333;
  --color-text: #ffffff;
  --color-border: #ffffff;
  --color-accent: #d4af37;
  --font-display: "JetBrains Mono", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 8px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#333333',
    ink: '#ffffff',
    line: '#ffffff',
    accent: '#d4af37',
  },
  fontFamily: { display: ['JetBrains Mono'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the brand word in the headline in gold (#d4af37) and keep the rest white
- **Do:** Make the primary button a gold fill and the secondary a white outline
- **Do:** Use a thin gold-outlined pill for the eyebrow label
- **Don't:** Don't use gold for body copy or long lines of text
- **Don't:** Don't add a second accent colour in the hero
- **Don't:** Don't put gold on large background areas

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
