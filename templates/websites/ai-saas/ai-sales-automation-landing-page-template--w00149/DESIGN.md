# Design system — AI Sales Automation Landing Page Template

`SN-W00149` · ai-saas · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

Light, airy sales-automation page on a pale blue-grey gradient with a bold near-black sans headline, its second clause faded to grey. The product is shown as a frosted glass window with a live-activity list whose status pills are green and blue. A floating navigation bar sits at the top, and the whole page feels soft and software-native.

**Mood:** soft, software-native, airy, modern

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#000000` | Cards, panels, raised areas |
| Text | `#1d1d1f` | Headings and primary copy |
| Muted text | `#1d1d1f` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#007aff` | Primary action and highlights |
| Second accent | `#22c55e` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#1d1d1f` · `#86868b` · `#000000` · `#007aff` · `#22c55e` · `#3b82f6` · `#ff5f57` · `#febc2e` · `#28c840`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 20px · body 12px
- **Weights in use:** bold, semibold, medium
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-xl` (12px)
- **Shadows:** `shadow-sm`, `shadow-lg`, `shadow-xl`
- **Content width:** `max-w-6xl`, `max-w-2xl`
- **Section padding:** `py-12`
- **Common gaps:** `gap-2`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="group px-8 py-4 rounded-full bg-[#007AFF] text-white font-medium text-[15px] transition-all hover:bg-[#0071eb] hover:scale-[1.02] shadow-[0_0_30px_rgba(0,122,255,0.4)] hover:shadow-[0_0_50px_rgba(0,122,255,0.5)] flex items-center gap-2">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Schedule (`schedule-agenda`)
5. Bento grid (`bento-grid`)
6. Stats band (`stats`)
7. Call to action (`cta`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), AOS scroll reveal
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #000000;
  --color-text: #1d1d1f;
  --color-muted: #1d1d1f;
  --color-border: #ffffff;
  --color-accent: #007aff;
  --color-accent-2: #22c55e;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#000000',
    ink: '#1d1d1f',
    muted: '#1d1d1f',
    line: '#ffffff',
    accent: '#007aff',
    accent2: '#22c55e',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in a bold sans in #1d1d1f, with the second clause in grey
- **Do:** Frame the product as a frosted glass window with a live list inside
- **Do:** Use the green and blue status pills for list states only
- **Don't:** Don't use the status colours in headlines or buttons
- **Don't:** Don't add heavy borders around the glass panels
- **Don't:** Don't set the hero on a dark background

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
