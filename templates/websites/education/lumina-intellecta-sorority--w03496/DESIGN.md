# Design system — Lumina Intellecta Sorority

`SN-W03496` · education · light mode · Sinera Atlas theme `calm` · language `en`

## Direction

A literary, high-contrast landing page set in Cormorant Garamond at display size. A deep crimson hero panel (#a01830) sits on a warm cream page ground (#faf9f6), and the serif carries the voice through large roman headlines with one italic accent word. Crimson is kept for the hero and the primary moment, while the rest of the page stays quiet and paper-like.

**Mood:** editorial, warm, elegant, bold

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#faf9f6` | Page ground |
| Surface | `#a01830` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#d6d3cd` | Secondary copy, captions |
| Border | `#d6d3cd` | Hairlines, dividers, outlines |
| Accent | `#881337` | Primary action and highlights |

Palette by frequency of use: `#a01830` · `#ffffff` · `#faf9f6` · `#78716c` · `#292524` · `#d6d3cd` · `#881337` · `#a8a29e` · `#eae8e4` · `#0f0505`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Cormorant Garamond
- **Body:** Cormorant Garamond
- **Loaded families:** Cormorant Garamond, Manrope
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 24px · body 14px
- **Weights in use:** medium, light, semibold
- **Letter spacing:** `tracking-widest`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-[2rem]` (2rem), `rounded-xl` (12px)
- **Shadows:** `shadow-sm`, `shadow-[0_20px_40px_rgba(160,24,48,0.1)]`, `shadow-2xl`
- **Content width:** `max-w-7xl`, `max-w-6xl`
- **Common gaps:** `gap-x-12`, `gap-8`, `gap-2`

**Primary button**

```html
<a class="w-full py-3 rounded-xl border border-[#D6D3CD] text-[#292524] text-sm font-medium hover:bg-[#A01830] hover:border-[#A01830] transition-all hover:text-white">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. About (`about`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #faf9f6;
  --color-surface: #a01830;
  --color-text: #ffffff;
  --color-muted: #d6d3cd;
  --color-border: #d6d3cd;
  --color-accent: #881337;
  --font-display: "Cormorant Garamond", serif;
  --font-body: "Cormorant Garamond", serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#faf9f6',
    surface: '#a01830',
    ink: '#ffffff',
    muted: '#d6d3cd',
    line: '#d6d3cd',
    accent: '#881337',
  },
  fontFamily: { display: ['Cormorant Garamond'], sans: ['Cormorant Garamond'] },
} }
```

## Do and don't

- **Do:** Set headlines in Cormorant Garamond at large sizes with one italic word for emphasis
- **Do:** Use the crimson (#a01830) only for the hero panel and the primary action
- **Do:** Keep the page ground warm cream (#faf9f6) with pill-shaped buttons and tags
- **Don't:** Don't set body copy in a sans-serif; keep the serif across the page
- **Don't:** Don't add a second saturated colour alongside the crimson
- **Don't:** Don't use hard-edged rectangular cards; use rounded-full or rounded-[2rem] shapes

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
