# Design system — Fitness SaaS Landing Page Template

`SN-W02607` · sports-fitness · dark mode · Sinera Atlas theme `calm` · language `en`

## Direction

A dark SaaS landing page for a training app. A near-black ground (#0a0a0a) carries a large white Inter headline, a grey subline and a white primary button. Green (#10b981) marks live status and positive change, such as the weekly change tag, and the product mockup sits in a dark grey card, so the page uses dark surfaces and one green signal to show product data.

**Mood:** dark, product-led, clean, data-driven, restrained

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Surface | `#262626` | Cards, panels, raised areas |
| Text | `#e5e5e5` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#262626` | Hairlines, dividers, outlines |
| Accent | `#10b981` | Primary action and highlights |
| Second accent | `#6366f1` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#262626` · `#a3a3a3` · `#737373` · `#0a0a0a` · `#10b981` · `#171717` · `#d4d4d4` · `#404040` · `#e5e5e5`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 20px · body 14px
- **Weights in use:** medium, semibold
- **Letter spacing:** `tracking-tight`, `tracking-normal`

## Shape, spacing and layout

- **Corner radius:** `rounded-[2px]` (2px), `rounded-full` (9999px), `rounded` (4px)
- **Shadows:** `shadow-2xl`, `shadow-[0_0_15px_rgba(255,255,255,0.2)]`, `shadow-xl`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-3`, `gap-4`, `gap-6`

**Primary button**

```html
<a class="px-4 py-2 rounded-full bg-white text-neutral-950 text-xs font-semibold hover:bg-neutral-200 transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Testimonials (`testimonials`)
5. Pricing (`pricing`)
6. FAQ (`faq`)
7. Call to action (`cta`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills
- **Libraries:** Tailwind CSS (CDN), Unicorn Studio (WebGL scenes)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #0a0a0a;
  --color-surface: #262626;
  --color-text: #e5e5e5;
  --color-muted: #737373;
  --color-border: #262626;
  --color-accent: #10b981;
  --color-accent-2: #6366f1;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 2px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0a0a0a',
    surface: '#262626',
    ink: '#e5e5e5',
    muted: '#737373',
    line: '#262626',
    accent: '#10b981',
    accent2: '#6366f1',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the hero headline in large white Inter, with a grey subline below.
- **Do:** Use the green (#10b981) only for status and positive change figures.
- **Do:** Show product screenshots in dark grey panels (#262626).
- **Don't:** Don't use green as a large fill for buttons or sections.
- **Don't:** Don't add a light section; the page stays on near-black.
- **Don't:** Don't use the indigo (#6366f1) as a second accent in the hero.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
