# Design system — Importism SaaS Landing Page Template

`SN-W00456` · ai-saas · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A retro, print-inspired BI page with a warm cream ground (#efeadd), charcoal type and a brick red (#c24b46) for one italic highlight word in the headline. Everything is set in JetBrains Mono, so the page reads like a ledger or terminal. Stripes of red, orange and yellow run across the top, and the form card sits on a yellow offset block. The mood is nostalgic but purposeful.

**Mood:** retro, print-inspired, purposeful, warm, technical

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#efeadd` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#2d3235` | Headings and primary copy |
| Muted text | `#5a5f63` | Secondary copy, captions |
| Border | `#2d3235` | Hairlines, dividers, outlines |
| Accent | `#c24b46` | Primary action and highlights |
| Second accent | `#efeadd` | Supporting highlights |

Palette by frequency of use: `#2d3235` · `#ffffff` · `#c24b46` · `#5a5f63` · `#efeadd` · `#e8b056` · `#1d8f6d` · `#d1d5db` · `#f3f4f6` · `#d67035`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** JetBrains Mono
- **Body:** JetBrains Mono
- **Loaded families:** JetBrains Mono, Space Grotesk
- **Scale (largest breakpoint):** h1 30px · h2 72px · h3 24px · body 18px
- **Weights in use:** semibold, bold, medium
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded` (4px)
- **Shadows:** `shadow-[4px_4px_0px_0px_#2d3235]`, `shadow-[2px_2px_0px_0px_#2d3235]`, `shadow-[8px_8px_0px_0px_#e8b056]`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-3`, `gap-4`, `gap-2`

**Primary button**

```html
<a class="bg-[#1d8f6d] text-white text-lg px-8 py-4 border-2 border-[#2d3235] retro-shadow-hard hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_#2d3235] transition-all font-semibold flex items-center justify-center gap-3">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. Call to action (`cta`)
3. Integrations (`integrations`)
4. Pricing (`pricing`)
5. Product grid (`product-grid`)
6. Footer (`footer`)

## Motion, effects and stack

- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #efeadd;
  --color-surface: #ffffff;
  --color-text: #2d3235;
  --color-muted: #5a5f63;
  --color-border: #2d3235;
  --color-accent: #c24b46;
  --color-accent-2: #efeadd;
  --font-display: "JetBrains Mono", sans-serif;
  --font-body: "JetBrains Mono", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#efeadd',
    surface: '#ffffff',
    ink: '#2d3235',
    muted: '#5a5f63',
    line: '#2d3235',
    accent: '#c24b46',
    accent2: '#efeadd',
  },
  fontFamily: { display: ['JetBrains Mono'], sans: ['JetBrains Mono'] },
} }
```

## Do and don't

- **Do:** Set every line in JetBrains Mono, including headings
- **Do:** Use brick red (#c24b46) only for one italic highlight word per headline
- **Do:** Keep the top colour stripes at full width
- **Don't:** Don't use rounded corners on panels; keep them square
- **Don't:** Don't introduce a second typeface
- **Don't:** Don't set body text in brick red on the cream ground

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
