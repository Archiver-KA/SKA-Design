# Design system — SubTrack Pro WhatsApp SaaS Landing Page Template

`SN-W00749` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark hero on near-black (#09090b) with a bold white Inter headline and one emerald (#10b981) line, WhatsApp, that carries the product message. A faint green pill tag sits above, and the buttons are a white pill beside an outline pill. Nothing else in the hero is coloured, so the green word is the focal point.

**Mood:** dark, direct, fresh, focused

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#09090b` | Page ground |
| Surface | `#18181b` | Cards, panels, raised areas |
| Text | `#e4e4e7` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#10b981` | Primary action and highlights |
| Second accent | `#ef4444` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#18181b` · `#10b981` · `#a1a1aa` · `#71717a` · `#27272a` · `#34d399` · `#09090b` · `#d4d4d8` · `#3f3f46`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 96px · h2 36px · h3 20px · body 14px
- **Weights in use:** medium, semibold, light
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-lg` (8px), `rounded-full` (9999px), `rounded-2xl` (16px)
- **Shadows:** `shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]`, `shadow-lg`, `shadow-emerald-900/20`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-3`, `gap-2`, `gap-1`

**Primary button**

```html
<a class="text-xs font-semibold bg-white text-zinc-950 px-4 py-2 rounded-full hover:bg-zinc-200 transition-all shadow-[0_0_20px_-5px_rgba(255,255,255,0.3)]">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Process / steps (`how-it-works`)
5. Pricing (`pricing`)
6. Testimonials (`testimonials`)
7. FAQ (`faq`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #09090b;
  --color-surface: #18181b;
  --color-text: #e4e4e7;
  --color-muted: #71717a;
  --color-border: #ffffff;
  --color-accent: #10b981;
  --color-accent-2: #ef4444;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 8px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#09090b',
    surface: '#18181b',
    ink: '#e4e4e7',
    muted: '#71717a',
    line: '#ffffff',
    accent: '#10b981',
    accent2: '#ef4444',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in Inter bold, with one key phrase in emerald (#10b981)
- **Do:** Keep the eyebrow tag as a faint green pill above the headline
- **Do:** Place a white primary pill next to an outline secondary
- **Don't:** Don't colour more than one phrase in the hero
- **Don't:** Don't use a light background for hero sections
- **Don't:** Don't use the red accent (#ef4444) in the hero

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
