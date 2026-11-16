# Design system — Marqait Marketing Automation Landing Page Template

`SN-W01639` · agency-studio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A dark navy page with a centred hero where the second line of the headline is set in an italic serif-like light blue (#60a5fa), contrasting with white sans-serif type above it. The look is calm and night-mode, with translucent navigation and rounded pill buttons. Blue is the only accent, used for the highlighted phrase and the active nav item.

**Mood:** calm, nocturnal, contrasting, refined, focused

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0f172a` | Page ground |
| Surface | `#f8fafc` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#f1f5f9` | Hairlines, dividers, outlines |
| Accent | `#60a5fa` | Primary action and highlights |
| Second accent | `#e9d5ff` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#2563eb` · `#64748b` · `#0f172a` · `#94a3b8` · `#dbeafe` · `#f1f5f9` · `#60a5fa` · `#3b82f6` · `#1e293b`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display
- **Scale (largest breakpoint):** h1 96px · h2 60px · h3 48px · body 14px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-2xl` (16px)
- **Shadows:** `shadow-sm`, `shadow-md`, `shadow-lg`
- **Content width:** `max-w-7xl`, `max-w-6xl`
- **Section padding:** `py-32`, `py-24`
- **Common gaps:** `gap-2`, `gap-3`, `gap-1.5`

**Primary button**

```html
<a class="px-5 py-1.5 rounded-full bg-blue-600 text-white text-sm font-medium shadow-lg shadow-blue-500/20 hover:scale-105 transition-transform duration-300">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Stats band (`stats`)
5. Process / steps (`how-it-works`)
6. FAQ (`faq`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN), AOS scroll reveal
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #0f172a;
  --color-surface: #f8fafc;
  --color-text: #ffffff;
  --color-muted: #64748b;
  --color-border: #f1f5f9;
  --color-accent: #60a5fa;
  --color-accent-2: #e9d5ff;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
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
    line: '#f1f5f9',
    accent: '#60a5fa',
    accent2: '#e9d5ff',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in white Inter, and highlight one phrase in #60a5fa italic
- **Do:** Keep the primary button white with dark text and a pill radius
- **Do:** Use translucent dark navigation with a blue active pill
- **Don't:** Don't treat the page as light; the background is dark navy (#0f172a)
- **Don't:** Don't use the solid blue (#2563eb) for body text on the dark background
- **Don't:** Don't add extra accent colours beyond the blue highlight

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
