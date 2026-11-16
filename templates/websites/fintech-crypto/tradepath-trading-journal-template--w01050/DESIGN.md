# Design system — TradePath Trading Journal Template

`SN-W01050` · fintech-crypto · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark trading dashboard sits on a near-black ground (#09090b), with a left sidebar and a row of metric cards under a large page title. Gains such as Total P&L read in emerald (#34d399), and the cards are lifted only by a slightly lighter panel fill and thin borders. The row of stat tiles under the performance chart keeps numbers large and labels small.

**Mood:** dark, analytical, dense, functional

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#09090b` | Page ground |
| Surface | `#18181b` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#34d399` | Primary action and highlights |
| Second accent | `#ef4444` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#10b981` · `#71717a` · `#27272a` · `#18181b` · `#a1a1aa` · `#3f3f46` · `#34d399` · `#52525b` · `#ef4444`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 24px · h2 20px · h3 14px · body 14px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-xl` (12px), `rounded-lg` (8px), `rounded-full` (9999px)
- **Shadows:** `shadow-lg`, `shadow-[0_0_20px_-5px_rgba(16,185,129,0.1)]`, `shadow-inner`
- **Content width:** `max-w-[90vw]`
- **Common gaps:** `gap-4`, `gap-2`, `gap-3`

**Primary button**

```html
<a class="btn-hover px-5 py-2.5 rounded-xl bg-emerald-600 text-white text-sm font-medium hover:bg-emerald-500 transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)] border border-emerald-400/30 glow-text-white">…</a>
```

## Page structure

Blocks in page order:

1. Sidebar (`sidebar`)
2. Hero (`hero`)
3. Contact form (`contact-form`)
4. Modal / overlay (`modal-overlay`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #09090b;
  --color-surface: #18181b;
  --color-text: #ffffff;
  --color-muted: #71717a;
  --color-border: #ffffff;
  --color-accent: #34d399;
  --color-accent-2: #ef4444;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 12px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#09090b',
    surface: '#18181b',
    ink: '#ffffff',
    muted: '#71717a',
    line: '#ffffff',
    accent: '#34d399',
    accent2: '#ef4444',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the ground at #09090b and cards at #18181b with thin borders
- **Do:** Show gains in emerald (#34d399) and keep everything else neutral
- **Do:** Keep numbers large and labels in small muted grey (#71717a)
- **Don't:** Don't set the page ground in green; it stays near-black.
- **Don't:** Don't use light cards in the dashboard; the whole page is dark
- **Don't:** Don't use a bright fill for the active sidebar item; it is a thin tinted row

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
