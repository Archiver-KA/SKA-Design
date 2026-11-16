# Design system — AI QA SaaS Landing Page Template

`SN-W00135` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

Warm charcoal product page on #1c1c1e with a large white headline whose key phrase, purpose-driven, is set in gold (#e8b84b). Gold is the single accent and appears on the primary button, the stat figures and that phrase, while a black code terminal panel sits beside the hero text. The page reads as serious and craft-minded.

**Mood:** serious, warm, crafted, technical

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#1c1c1e` | Page ground |
| Surface | `#2c2c2e` | Cards, panels, raised areas |
| Text | `#f2f2f7` | Headings and primary copy |
| Muted text | `#8e8e93` | Secondary copy, captions |
| Border | `#3a3a3c` | Hairlines, dividers, outlines |
| Accent | `#e8b84b` | Primary action and highlights |
| Second accent | `#3ecf8e` | Supporting highlights |

Palette by frequency of use: `#545456` · `#8e8e93` · `#e8b84b` · `#3ecf8e` · `#f2f2f7` · `#6e6e73` · `#3a3a3c` · `#2c2c2e` · `#333336` · `#48484a`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** system sans-serif
- **Body:** system sans-serif
- **Scale (largest breakpoint):** h1 48px · h2 30px · body 12px
- **Weights in use:** medium, semibold, normal
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-[14px]` (14px)
- **Shadows:** `shadow-[0_0_7px_#3ecf8e]`, `shadow-[0_0_0_1px_#E8B84B,0_12px_48px_rgba(232,184,75,0.1)]`, `shadow-[0_0_28px_rgba(232,184,75,0.12)]`
- **Content width:** `max-w-[1080px]`, `max-w-[260px]`
- **Section padding:** `py-14`, `py-20`
- **Common gaps:** `gap-2.5`, `gap-1.5`, `gap-3`

**Primary button**

```html
<a class="inline-flex items-center gap-1.5 text-sm font-semibold px-3.5 py-1.5 rounded-lg bg-[#E8B84B] text-white hover:bg-[#d4a43e] transition-all">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Stats band (`stats`)
4. Process / steps (`how-it-works`)
5. Feature grid (`features`)
6. Code / terminal (`code-terminal`)
7. Comparison (`comparison`)
8. Pricing (`pricing`)
9. Call to action (`cta`)
10. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #1c1c1e;
  --color-surface: #2c2c2e;
  --color-text: #f2f2f7;
  --color-muted: #8e8e93;
  --color-border: #3a3a3c;
  --color-accent: #e8b84b;
  --color-accent-2: #3ecf8e;
  --font-display: "system sans-serif", serif;
  --font-body: "system sans-serif", serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#1c1c1e',
    surface: '#2c2c2e',
    ink: '#f2f2f7',
    muted: '#8e8e93',
    line: '#3a3a3c',
    accent: '#e8b84b',
    accent2: '#3ecf8e',
  },
  fontFamily: { display: ['system sans-serif'], sans: ['system sans-serif'] },
} }
```

## Do and don't

- **Do:** Set the key phrase of the headline in gold (#e8b84b) and the rest in white
- **Do:** Use gold for the primary button and the stat figures only
- **Do:** Frame the code terminal as a black panel with a window bar beside the hero text
- **Don't:** Don't use gold for body text
- **Don't:** Don't introduce green or red accents on the hero
- **Don't:** Don't lighten the background to white; the page stays charcoal

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
