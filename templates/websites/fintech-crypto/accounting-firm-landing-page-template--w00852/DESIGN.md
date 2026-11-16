# Design system — Accounting Firm Landing Page Template

`SN-W00852` · fintech-crypto · dark mode · Sinera Atlas theme `circuit` · language `sv`

## Direction

A dark navy hero with a split layout: a large white Inter headline on the left, with Redovisning in green (#10b981), and a dark contact form card on the right. Green is the single accent, used for the highlight and the primary button. The form sits on a slightly lighter panel with thin borders.

**Mood:** trustworthy, dark, structured, local

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0f172a` | Page ground |
| Surface | `#f8fafc` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#10b981` | Primary action and highlights |
| Second accent | `#e2e8f0` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#0f172a` · `#10b981` · `#64748b` · `#059669` · `#34d399` · `#94a3b8` · `#f1f5f9` · `#cbd5e1` · `#475569`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 72px · h2 30px · h3 24px · body 14px
- **Weights in use:** semibold, medium, light
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded` (4px), `rounded-full` (9999px), `rounded-lg` (8px)
- **Shadows:** `shadow-[0_8px_30px_rgb(0,0,0,0.04)]`, `shadow-xl`, `shadow-sm`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-20`
- **Common gaps:** `gap-2`, `gap-4`, `gap-6`

**Primary button**

```html
<a class="bg-white/10 hover:bg-white/20 text-white text-sm font-medium px-5 py-2.5 rounded transition-all border border-white/10">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Process / steps (`how-it-works`)
5. Logo cloud (`logo-cloud`)
6. Call to action (`cta`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #0f172a;
  --color-surface: #f8fafc;
  --color-text: #ffffff;
  --color-muted: #64748b;
  --color-border: #ffffff;
  --color-accent: #10b981;
  --color-accent-2: #e2e8f0;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 4px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0f172a',
    surface: '#f8fafc',
    ink: '#ffffff',
    muted: '#64748b',
    line: '#ffffff',
    accent: '#10b981',
    accent2: '#e2e8f0',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use the green (#10b981) for one highlighted headline word and the primary button
- **Do:** Place the enquiry form on a dark card with thin borders on the right
- **Do:** Set the headline in Inter at 72px in white with stacked lines
- **Don't:** Don't set the hero on a white background
- **Don't:** Don't use the green for form labels or body text
- **Don't:** Don't add a second accent beside the green

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
