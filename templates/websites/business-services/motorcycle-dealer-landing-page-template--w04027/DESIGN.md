# Design system — Motorcycle Dealer Landing Page Template

`SN-W04027` · business-services · dark mode · Sinera Atlas theme `route` · language `en`

## Direction

A stark, dark page built around a very large light-grey monospace headline set in uppercase with full stops. Lime (#ccff00) is reserved for labels, coordinates and the active marker, and everything else is black or grey. Square corners, thin rules and a floating bottom bar give it the feel of a technical readout.

**Mood:** stark, technical, severe, precise

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#080808` | Page ground |
| Text | `#e0e0e0` | Headings and primary copy |
| Muted text | `#555555` | Secondary copy, captions |
| Border | `#333333` | Hairlines, dividers, outlines |
| Accent | `#ccff00` | Primary action and highlights |

Palette by frequency of use: `#ccff00` · `#333333` · `#555555` · `#000000` · `#e0e0e0` · `#080808` · `#111111` · `#222222` · `#ffffff` · `#888888`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** JetBrains Mono
- **Body:** JetBrains Mono
- **Loaded families:** JetBrains Mono, Syne
- **Scale (largest breakpoint):** h1 128px · h2 60px · h3 48px · body 16px
- **Weights in use:** bold, extrabold, light
- **Letter spacing:** `tracking-widest`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-none` (0)
- **Shadows:** `shadow-2xl`
- **Content width:** `max-w-4xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-4`, `gap-0`, `gap-2`

**Primary button**

```html
<a class="bg-[#CCFF00] text-black border border-[#CCFF00] px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-transparent hover:text-[#CCFF00] transition-colors duration-300">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Listings (`listings`)
4. Contact form (`contact-form`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** blend modes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #080808;
  --color-text: #e0e0e0;
  --color-muted: #555555;
  --color-border: #333333;
  --color-accent: #ccff00;
  --font-display: "JetBrains Mono", sans-serif;
  --font-body: "JetBrains Mono", sans-serif;
  --radius: 0;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#080808',
    ink: '#e0e0e0',
    muted: '#555555',
    line: '#333333',
    accent: '#ccff00',
  },
  fontFamily: { display: ['JetBrains Mono'], sans: ['JetBrains Mono'] },
} }
```

## Do and don't

- **Do:** Use lime (#ccff00) only for labels, coordinates and the active marker
- **Do:** Set the hero headline in large uppercase monospace with full stops
- **Do:** Keep corners square and divide sections with thin rules
- **Don't:** Don't use lime as a large fill or background
- **Don't:** Don't round buttons or panels
- **Don't:** Don't add soft shadows or gradients

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
