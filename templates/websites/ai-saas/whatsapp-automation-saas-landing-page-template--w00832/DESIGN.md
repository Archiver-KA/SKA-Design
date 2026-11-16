# Design system — WhatsApp Automation SaaS Landing Page Template

`SN-W00832` · ai-saas · light mode · Sinera Atlas theme `circuit` · language `id`

## Direction

A light, conversion-led hero on white with a dark navy headline and one teal (#0d9488) highlight phrase running through the second line. The primary button is solid teal and the secondary is a plain text action. Mock chat cards and a status chip on the right use white with thin borders, so the teal stays the only colour and the page looks calm and organised.

**Mood:** calm, organised, clear, light

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#f8fafc` | Cards, panels, raised areas |
| Text | `#475569` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#f1f5f9` | Hairlines, dividers, outlines |
| Accent | `#0d9488` | Primary action and highlights |
| Second accent | `#e2e8f0` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#0d9488` · `#0f172a` · `#64748b` · `#f1f5f9` · `#e2e8f0` · `#14b8a6` · `#f8fafc` · `#94a3b8` · `#475569`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Plus Jakarta Sans
- **Body:** Plus Jakarta Sans
- **Loaded families:** Plus Jakarta Sans
- **Scale (largest breakpoint):** h1 60px · h2 30px · h3 18px · body 14px
- **Weights in use:** semibold, medium, bold
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-2xl` (16px)
- **Shadows:** `shadow-sm`, `shadow-md`, `shadow-lg`
- **Content width:** `max-w-7xl`, `max-w-[80%]`
- **Section padding:** `py-20`
- **Common gaps:** `gap-2`, `gap-4`, `gap-3`

**Primary button**

```html
<a class="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-teal-600 text-white rounded-full font-medium hover:bg-teal-700 hover:shadow-lg hover:shadow-teal-600/20 transition-all duration-300">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Listings (`listings`)
5. Video / media (`video-media`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), CSS animations, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN), GSAP
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #f8fafc;
  --color-text: #475569;
  --color-muted: #64748b;
  --color-border: #f1f5f9;
  --color-accent: #0d9488;
  --color-accent-2: #e2e8f0;
  --font-display: "Plus Jakarta Sans", sans-serif;
  --font-body: "Plus Jakarta Sans", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#f8fafc',
    ink: '#475569',
    muted: '#64748b',
    line: '#f1f5f9',
    accent: '#0d9488',
    accent2: '#e2e8f0',
  },
  fontFamily: { display: ['Plus Jakarta Sans'], sans: ['Plus Jakarta Sans'] },
} }
```

## Do and don't

- **Do:** Use the teal (#0d9488) for the highlight phrase and the primary button only
- **Do:** Set headlines in Plus Jakarta Sans with the highlight on a single line
- **Do:** Show product mockups as white cards with thin borders and small status chips
- **Don't:** Don't add a second accent colour to the hero
- **Don't:** Don't fill the whole hero with teal
- **Don't:** Don't use drop shadows heavier than the card borders

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
