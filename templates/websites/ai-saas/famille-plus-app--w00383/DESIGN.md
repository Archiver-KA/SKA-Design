# Design system — Famille Plus App

`SN-W00383` · ai-saas · light mode · Sinera Atlas theme `circuit` · language `fr`

## Direction

A white landing page with a dark navy headline set in Inter, where the second line is a blue-to-indigo gradient. The primary action is a solid indigo (#4f46e5) pill, and two dark phone mockups sit under the copy as the visual. The tone is bright and friendly but controlled, with pill shapes throughout and soft glows behind the phones.

**Mood:** friendly, bright, controlled, app-led, soft

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#f8fafc` | Cards, panels, raised areas |
| Text | `#0f172a` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#e0e7ff` | Hairlines, dividers, outlines |
| Accent | `#4f46e5` | Primary action and highlights |
| Second accent | `#fef3c7` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#0f172a` · `#64748b` · `#e2e8f0` · `#1e293b` · `#94a3b8` · `#4f46e5` · `#e0e7ff` · `#f59e0b` · `#475569`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 18px · body 14px
- **Weights in use:** bold, semibold, medium
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-lg` (8px)
- **Shadows:** `shadow-[0_2px_8px_rgba(0,0,0,0.04)]`, `shadow-sm`, `shadow-2xl`
- **Content width:** `max-w-6xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-12`
- **Common gaps:** `gap-3`, `gap-2`, `gap-4`

**Primary button**

```html
<a class="flex items-center justify-center p-1.5 rounded-full border border-slate-200 hover:bg-slate-50 hover:border-indigo-200 transition-all active:scale-95">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Call to action (`cta`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #f8fafc;
  --color-text: #0f172a;
  --color-muted: #64748b;
  --color-border: #e0e7ff;
  --color-accent: #4f46e5;
  --color-accent-2: #fef3c7;
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
    surface: '#f8fafc',
    ink: '#0f172a',
    muted: '#64748b',
    line: '#e0e7ff',
    accent: '#4f46e5',
    accent2: '#fef3c7',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the second headline line in a blue-to-indigo gradient, and the first line in dark navy (#0f172a).
- **Do:** Use the indigo (#4f46e5) only for the primary pill button and the active nav item.
- **Do:** Show the product as dark phone mockups under the hero copy.
- **Don't:** Don't use the gradient on body text; it is for the headline's second line.
- **Don't:** Don't add a second button colour; the page has one indigo action.
- **Don't:** Don't switch to a dark hero; the top half is white.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
