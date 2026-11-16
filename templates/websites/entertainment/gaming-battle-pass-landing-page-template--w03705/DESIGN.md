# Design system — Gaming Battle Pass Landing Page Template

`SN-W03705` · entertainment · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

Black page with a monospaced headline set in light grey, where the final word is picked out in amber (#f59e0b). Small status and metadata lines sit above and below in uppercase mono, and the buttons are rectangular with a thin amber border on a dark fill. The result reads like a live terminal readout, with amber kept to the one key word and the primary action.

**Mood:** technical, precise, gamer, restrained

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#525252` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#f59e0b` | Primary action and highlights |
| Second accent | `#f43f5e` | Supporting highlights |

Palette by frequency of use: `#f59e0b` · `#fbbf24` · `#525252` · `#000000` · `#737373` · `#fef3c7` · `#ffffff` · `#a855f7` · `#3b82f6` · `#f43f5e`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** JetBrains Mono
- **Body:** JetBrains Mono
- **Loaded families:** JetBrains Mono, Share Tech Mono
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 14px · body 12px
- **Weights in use:** semibold, bold, medium
- **Letter spacing:** `tracking-wider`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-lg` (8px), `rounded` (4px), `rounded-full` (9999px)
- **Content width:** `max-w-5xl`
- **Section padding:** `py-20`
- **Common gaps:** `gap-2.5`, `gap-2`, `gap-3`

**Primary button**

```html
<a class="text-xs font-semibold px-4 py-2 rounded border border-amber-500/40 transition-all hover:bg-amber-500/10 hover:border-amber-400/60 uppercase tracking-wider">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Pricing (`pricing`)
4. Listings (`listings`)
5. About (`about`)
6. Call to action (`cta`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #000000;
  --color-text: #ffffff;
  --color-muted: #525252;
  --color-border: #ffffff;
  --color-accent: #f59e0b;
  --color-accent-2: #f43f5e;
  --font-display: "JetBrains Mono", sans-serif;
  --font-body: "JetBrains Mono", sans-serif;
  --radius: 8px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    ink: '#ffffff',
    muted: '#525252',
    line: '#ffffff',
    accent: '#f59e0b',
    accent2: '#f43f5e',
  },
  fontFamily: { display: ['JetBrains Mono'], sans: ['JetBrains Mono'] },
} }
```

## Do and don't

- **Do:** Set headlines in JetBrains Mono, with one key word in amber (#f59e0b)
- **Do:** Use uppercase mono for status lines and metadata above headlines
- **Do:** Give primary buttons a dark fill with a thin amber border
- **Don't:** Don't set body paragraphs in full mono
- **Don't:** Don't use amber on more than one element per section
- **Don't:** Don't round buttons beyond a small radius

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
