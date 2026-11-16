# Design system — Neuro Training Landing Page Template

`SN-W03514` · education · light mode · Sinera Atlas theme `calm` · language `de`

## Direction

A large, confident headline set in Inter with heavy dark type, where one word is shown as teal outline type (#32b2a4) instead of a solid fill. Teal pill buttons carry the calls to action, and the rest of the page is plain off-white with generous space, so the type does nearly all the work. The outline word is the recognisable signature.

**Mood:** bold, clean, clinical, confident

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fdfcfb` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#111827` | Headings and primary copy |
| Muted text | `#4b5563` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#32b2a4` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#32b2a4` · `#111827` · `#4b5563` · `#6b7280` · `#f3f4f6` · `#000000` · `#9ca3af` · `#289287` · `#e5e7eb`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Outfit
- **Scale (largest breakpoint):** h1 120px · h2 60px · h3 30px · body 20px
- **Weights in use:** medium, light, normal
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-[2.5rem]` (2.5rem), `rounded-[3rem]` (3rem)
- **Shadows:** `shadow-sm`, `shadow-lg`, `shadow-[0_10px_40px_rgba(0,0,0,0.05)]`
- **Content width:** `max-w-[90rem]`, `max-w-2xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-3`, `gap-6`, `gap-8`

**Primary button**

```html
<a class="inline-flex items-center justify-center px-8 py-3.5 rounded-full text-white bg-[#32B2A4] hover:bg-[#289287] text-base font-medium transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Pricing (`pricing`)
5. Call to action (`cta`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #fdfcfb;
  --color-surface: #ffffff;
  --color-text: #111827;
  --color-muted: #4b5563;
  --color-border: #ffffff;
  --color-accent: #32b2a4;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fdfcfb',
    surface: '#ffffff',
    ink: '#111827',
    muted: '#4b5563',
    line: '#ffffff',
    accent: '#32b2a4',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the key word of each headline in teal outline type (#32b2a4)
- **Do:** Use the teal (#32b2a4) pill button for primary actions and the navigation call to action
- **Do:** Keep the off-white ground free of decorative shapes
- **Don't:** Don't set the teal word as a solid fill; the outline is the signature
- **Don't:** Don't use teal for body copy
- **Don't:** Don't reduce the headline below display size

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
