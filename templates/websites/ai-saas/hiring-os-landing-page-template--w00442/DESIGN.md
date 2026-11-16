# Design system — Hiring OS Landing Page Template

`SN-W00442` · ai-saas · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A light, playful product page on an off-white ground, with a near-black headline whose closing phrase, Every time., is set in orange (#f97316). Tilted, flat, colour-blocked shapes float around the hero, including an orange card, a green toggle and a blue panel, which make the page lively without any photography. The solid black button keeps the action firm against the bright shapes.

**Mood:** playful, light, lively, confident, graphic

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fafafa` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#18181b` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#f4f4f5` | Hairlines, dividers, outlines |
| Accent | `#f97316` | Primary action and highlights |
| Second accent | `#10b981` | Supporting highlights |

Palette by frequency of use: `#18181b` · `#ffffff` · `#f97316` · `#71717a` · `#f4f4f5` · `#27272a` · `#a1a1aa` · `#fafafa` · `#e4e4e7` · `#fdba74`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 128px · h2 48px · h3 24px · body 14px
- **Weights in use:** medium, normal
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-2xl` (16px), `rounded-full` (9999px), `rounded` (4px)
- **Shadows:** `shadow-sm`, `shadow-xl`, `shadow-lg`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-32`
- **Common gaps:** `gap-2`, `gap-6`, `gap-3`

**Primary button**

```html
<a class="group relative inline-flex items-center gap-2 bg-white text-zinc-900 text-base font-medium px-8 py-4 rounded-full shadow-lg hover:bg-zinc-100 transition-all mb-6">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Gallery / portfolio (`gallery-portfolio`)
4. Team (`team`)
5. Process / steps (`how-it-works`)
6. Stats band (`stats`)
7. Contact form (`contact-form`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #fafafa;
  --color-surface: #ffffff;
  --color-text: #18181b;
  --color-muted: #71717a;
  --color-border: #f4f4f5;
  --color-accent: #f97316;
  --color-accent-2: #10b981;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 16px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fafafa',
    surface: '#ffffff',
    ink: '#18181b',
    muted: '#71717a',
    line: '#f4f4f5',
    accent: '#f97316',
    accent2: '#10b981',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use orange (#f97316) for the closing headline phrase only
- **Do:** Place flat, tilted colour blocks around the hero as decoration, one per corner
- **Do:** Keep the primary button solid black
- **Don't:** Don't add drop shadows to the floating shapes; they stay flat
- **Don't:** Don't use the green toggle (#10b981) as a button colour
- **Don't:** Don't set the paragraph in orange; it is grey

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
