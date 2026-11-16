# Design system — Bio-Technical Detox Product Landing Page Template

`SN-W01112` · ecommerce · dark mode · Sinera Atlas theme `market` · language `en`

## Direction

A dark, clinical detox page has a near-black ground with very large white Inter headlines, stacked in white and grey. The bright green (#00ff94) is reserved for the status pill and key data, giving the page a technical, lab-report feel. Bracketed uppercase labels in a bordered tab bar and small caps captions carry the notebook tone, so the page reads as science rather than wellness.

**Mood:** clinical, technical, high contrast, futuristic

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#050505` | Page ground |
| Surface | `#18181b` | Cards, panels, raised areas |
| Text | `#f0f2f5` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#27272a` | Hairlines, dividers, outlines |
| Accent | `#00ff94` | Primary action and highlights |
| Second accent | `#ef4444` | Supporting highlights |

Palette by frequency of use: `#00ff94` · `#27272a` · `#ffffff` · `#050505` · `#71717a` · `#18181b` · `#3f3f46` · `#a1a1aa` · `#52525b` · `#000000`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, JetBrains Mono
- **Scale (largest breakpoint):** h1 128px · h2 48px · h3 20px · body 12px
- **Weights in use:** bold, medium, semibold
- **Letter spacing:** `tracking-widest`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-sm` (2px)
- **Shadows:** `shadow-2xl`, `shadow-[0_0_20px_rgba(239,68,68,0.2)]`
- **Content width:** `max-w-7xl`
- **Section padding:** `py-32`
- **Common gaps:** `gap-4`, `gap-2`, `gap-3`

**Primary button**

```html
<a class="px-6 py-2 text-[10px] font-mono hover:bg-zinc-800 hover:text-white text-zinc-400 transition-all uppercase tracking-widest border border-transparent hover:border-zinc-700">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Feature grid (`features`)
5. Pricing (`pricing`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #050505;
  --color-surface: #18181b;
  --color-text: #f0f2f5;
  --color-muted: #71717a;
  --color-border: #27272a;
  --color-accent: #00ff94;
  --color-accent-2: #ef4444;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#050505',
    surface: '#18181b',
    ink: '#f0f2f5',
    muted: '#71717a',
    line: '#27272a',
    accent: '#00ff94',
    accent2: '#ef4444',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headlines in Inter at very large size, stacked in white and grey
- **Do:** Use the green (#00ff94) only for the status pill and key highlights
- **Do:** Put navigation labels in bracketed uppercase inside a bordered bar.
- **Don't:** Don't use the red (#ef4444) as a decorative colour.
- **Don't:** Don't soften the headline with rounded or script type
- **Don't:** Don't fill large areas with the green accent

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
