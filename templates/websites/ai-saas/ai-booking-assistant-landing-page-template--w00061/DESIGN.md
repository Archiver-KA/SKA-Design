# Design system — AI Booking Assistant Landing Page Template

`SN-W00061` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A near-black page with a large white sans headline, a violet glow at the top centre and a rounded pill badge above the title. A white primary button and a dark outlined secondary sit under the copy. Below the hero, a dark app window mockup sits partly out of view, which gives a product-first look.

**Mood:** product-first, dark, clean, soft glow

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Surface | `#262626` | Cards, panels, raised areas |
| Text | `#d4d4d4` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#6366f1` | Primary action and highlights |
| Second accent | `#22c55e` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#262626` · `#0a0a0a` · `#a3a3a3` · `#171717` · `#6366f1` · `#737373` · `#e5e5e5` · `#f5f5f5` · `#22c55e`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 18px · body 14px
- **Weights in use:** medium, light, semibold
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-lg` (8px)
- **Shadows:** `shadow-[0_0_15px_rgba(255,255,255,0.3)]`, `shadow-2xl`, `shadow-lg`
- **Content width:** `max-w-6xl`, `max-w-[85%]`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-2`, `gap-3`, `gap-6`

**Primary button**

```html
<a class="bg-neutral-100 hover:bg-neutral-200 text-neutral-950 text-xs font-medium px-4 py-2 rounded-full transition-all duration-300">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Testimonials (`testimonials`)
4. Integrations (`integrations`)
5. Newsletter signup (`newsletter`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #0a0a0a;
  --color-surface: #262626;
  --color-text: #d4d4d4;
  --color-muted: #737373;
  --color-border: #ffffff;
  --color-accent: #6366f1;
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
    background: '#0a0a0a',
    surface: '#262626',
    ink: '#d4d4d4',
    muted: '#737373',
    line: '#ffffff',
    accent: '#6366f1',
    accent2: '#22c55e',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the violet glow behind the top of the hero only
- **Do:** Use white for the headline and grey for the subline
- **Do:** Show the product as a dark window mockup under the hero
- **Don't:** Don't use the glow behind body copy
- **Don't:** Don't use light backgrounds for the hero
- **Don't:** Don't use square corners on the badge

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
