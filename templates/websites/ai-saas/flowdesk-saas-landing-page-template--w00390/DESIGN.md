# Design system — Flowdesk SaaS Landing Page Template

`SN-W00390` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark navy page with a centred white headline in Inter and one word, 'here.', set in lavender (#818cf8). The primary button is a solid violet with a soft purple glow, and the secondary is a dark outline. Below the hero, grey company names form a quiet trust row. The palette is restrained navy, white and lavender, and the violet is kept to the emphasised word and the primary action.

**Mood:** calm, focused, modern, dark, restrained

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0c14` | Page ground |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#818cf8` | Primary action and highlights |
| Second accent | `#34d399` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#94a3b8` · `#818cf8` · `#64748b` · `#34d399` · `#0a0c14` · `#cbd5e1` · `#475569` · `#6366f1` · `#e2e8f0`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Space Grotesk
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 18px · body 12px
- **Weights in use:** semibold, medium, normal
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-lg` (8px), `rounded-full` (9999px), `rounded-xl` (12px)
- **Content width:** `max-w-6xl`, `max-w-2xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-3`, `gap-2.5`

**Primary button**

```html
<a class="w-full sm:w-auto text-white font-medium px-6 py-3 rounded-xl border border-white/10 bg-white/5 backdrop-blur hover:bg-white/10 transition flex items-center justify-center gap-2">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Logo cloud (`logo-cloud`)
4. Feature grid (`features`)
5. Product grid (`product-grid`)
6. Pricing (`pricing`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels)
- **Libraries:** Tailwind CSS (CDN), Three.js, Unicorn Studio (WebGL scenes)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #0a0c14;
  --color-text: #ffffff;
  --color-muted: #64748b;
  --color-border: #ffffff;
  --color-accent: #818cf8;
  --color-accent-2: #34d399;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 8px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0a0c14',
    ink: '#ffffff',
    muted: '#64748b',
    line: '#ffffff',
    accent: '#818cf8',
    accent2: '#34d399',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Highlight one word per headline in lavender (#818cf8), and keep the rest white.
- **Do:** Use the violet button with a soft purple glow only for the primary action.
- **Do:** Set the trust row below the hero in small uppercase grey text, with company names in muted grey.
- **Don't:** Don't use the lavender for body text; it is for the emphasised word and the primary action.
- **Don't:** Don't add a second button colour; the secondary stays dark.
- **Don't:** Don't use a light background; the page is dark navy.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
