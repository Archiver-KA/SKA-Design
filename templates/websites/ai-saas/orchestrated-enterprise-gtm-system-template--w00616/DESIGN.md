# Design system — Orchestrated Enterprise GTM System Template

`SN-W00616` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark enterprise landing page built on near-black (#05040a) with indigo (#6366f1) kept for the primary action and glow accents. Geist carries a 72px headline, and the product is shown as a dashboard inside translucent glass panels. Depth comes from blurred glow shapes behind the hero rather than from imagery or solid cards.

**Mood:** dark, technical, glassy, enterprise, glowing

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#05040a` | Page ground |
| Surface | `#0a0a12` | Cards, panels, raised areas |
| Text | `#f1f5f9` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#6366f1` | Primary action and highlights |
| Second accent | `#10b981` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#94a3b8` · `#818cf8` · `#6366f1` · `#64748b` · `#05040a` · `#10b981` · `#cbd5e1` · `#34d399` · `#a855f7`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Geist
- **Body:** Geist
- **Loaded families:** Geist, Geist Mono
- **Scale (largest breakpoint):** h1 72px · h2 30px · h3 14px · body 12px
- **Weights in use:** medium, light, bold
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded` (4px)
- **Shadows:** `shadow-2xl`, `shadow-lg`, `shadow-indigo-900/20`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Common gaps:** `gap-2`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="inline-flex h-8 items-center justify-center rounded-full border border-white/10 bg-white/5 px-4 text-xs font-medium text-white transition hover:bg-white/10 hover:border-white/20 focus:outline-none focus:ring-2 focus:ring-indigo-500/50">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Pricing (`pricing`)
4. Bento grid (`bento-grid`)
5. Stats band (`stats`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #05040a;
  --color-surface: #0a0a12;
  --color-text: #f1f5f9;
  --color-muted: #64748b;
  --color-border: #ffffff;
  --color-accent: #6366f1;
  --color-accent-2: #10b981;
  --font-display: "Geist", sans-serif;
  --font-body: "Geist", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#05040a',
    surface: '#0a0a12',
    ink: '#f1f5f9',
    muted: '#64748b',
    line: '#ffffff',
    accent: '#6366f1',
    accent2: '#10b981',
  },
  fontFamily: { display: ['Geist'], sans: ['Geist'] },
} }
```

## Do and don't

- **Do:** Set headlines in Geist at 72px on the near-black background (#05040a)
- **Do:** Use indigo (#6366f1) for primary actions and one highlight per section
- **Do:** Put dashboard previews inside translucent glass panels with backdrop blur
- **Don't:** Don't use a light hero; the page stays dark from top to bottom
- **Don't:** Don't draw heavy solid borders; keep dividers faint
- **Don't:** Don't use the green (#10b981) on buttons; it marks live status only

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
