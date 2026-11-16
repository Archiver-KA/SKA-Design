# Design system — Outbound Email SaaS Landing Page Template

`SN-W00620` · ai-saas · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A light SaaS page where a violet (#7a63ff) gradient runs through headline keywords and the demo heading, while the rest is navy-black (#0f172a) on white. The hero leads straight into a live-looking dashboard card, so the product explains the page. Plus Jakarta Sans gives the headlines a geometric weight, with Inter for body text.

**Mood:** clean, product-first, airy, violet-gradient, trustworthy

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fdfbf9` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#0f172a` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#f1f5f9` | Hairlines, dividers, outlines |
| Accent | `#7a63ff` | Primary action and highlights |
| Second accent | `#10b981` | Supporting highlights |

Palette by frequency of use: `#7a63ff` · `#0f172a` · `#ffffff` · `#e2e8f0` · `#1e293b` · `#64748b` · `#94a3b8` · `#cbd5e1` · `#475569` · `#f1f5f9`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Plus Jakarta Sans
- **Body:** Inter
- **Loaded families:** Inter, Plus Jakarta Sans
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 18px · body 14px
- **Weights in use:** bold, semibold, medium
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-lg` (8px)
- **Shadows:** `shadow-sm`, `shadow-xl`, `shadow-lg`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-12`
- **Common gaps:** `gap-2`, `gap-6`, `gap-8`

**Primary button**

```html
<a class="inline-flex items-center justify-center rounded-full bg-slate-900 px-4 py-2 text-[13px] font-semibold text-white shadow-sm hover:bg-slate-800 hover:shadow-md transition-all active:scale-95">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Marquee (`marquee`)
4. Feature grid (`features`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #fdfbf9;
  --color-surface: #ffffff;
  --color-text: #0f172a;
  --color-muted: #64748b;
  --color-border: #f1f5f9;
  --color-accent: #7a63ff;
  --color-accent-2: #10b981;
  --font-display: "Plus Jakarta Sans", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fdfbf9',
    surface: '#ffffff',
    ink: '#0f172a',
    muted: '#64748b',
    line: '#f1f5f9',
    accent: '#7a63ff',
    accent2: '#10b981',
  },
  fontFamily: { display: ['Plus Jakarta Sans'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use violet (#7a63ff) on headline keywords and the primary accent only
- **Do:** Show the dashboard directly under the hero headline
- **Do:** Set headlines in Plus Jakarta Sans and body text in Inter
- **Don't:** Don't add a second strong colour; the page stays violet and navy
- **Don't:** Don't use heavy drop shadows around the dashboard card
- **Don't:** Don't put the gradient on body copy; it belongs to headline words

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
