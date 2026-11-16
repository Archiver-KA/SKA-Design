# Design system — Fintech SaaS Landing Page Template

`SN-W00963` · fintech-crypto · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A warm off-white page (#f9f9f8) with near-black type and near-black primary buttons, so the colour is almost entirely neutral. The hero shows a dark code block as the product, which signals a developer audience without adding colour. Headlines are large, tight sans-serif, and copy is short and set in a muted grey.

**Mood:** neutral, developer-led, clean, precise, restrained

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f9f9f8` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#111111` | Headings and primary copy |
| Muted text | `#666666` | Secondary copy, captions |
| Border | `#000000` | Hairlines, dividers, outlines |
| Accent | `#2e907b` | Primary action and highlights |
| Second accent | `#8c62ea` | Supporting highlights |

Palette by frequency of use: `#111111` · `#000000` · `#666666` · `#ffffff` · `#f9f9f8` · `#2e907b` · `#888888` · `#8c62ea` · `#333333` · `#5d72e9`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Syne
- **Scale (largest breakpoint):** h1 72px · h2 40px · h3 18px · body 14px
- **Weights in use:** medium, normal
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded` (4px)
- **Shadows:** `shadow-sm`, `shadow-[0_8px_30px_rgb(0,0,0,0.04)]`, `shadow-[0_20px_40px_rgb(0,0,0,0.06)]`
- **Content width:** `max-w-[75rem]`, `max-w-[32rem]`
- **Section padding:** `py-[8rem]`, `py-[6rem]`
- **Common gaps:** `gap-2`, `gap-8`, `gap-4`

**Primary button**

```html
<a class="hidden md:inline-flex items-center justify-center h-10 px-5 rounded-full bg-[#111111] text-white text-sm font-normal hover:bg-[#333333] transition-colors shadow-sm">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Marquee (`marquee`)
4. Gallery / portfolio (`gallery-portfolio`)
5. Feature grid (`features`)
6. Pricing (`pricing`)
7. Team (`team`)
8. Newsletter signup (`newsletter`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #f9f9f8;
  --color-surface: #ffffff;
  --color-text: #111111;
  --color-muted: #666666;
  --color-border: #000000;
  --color-accent: #2e907b;
  --color-accent-2: #8c62ea;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f9f9f8',
    surface: '#ffffff',
    ink: '#111111',
    muted: '#666666',
    line: '#000000',
    accent: '#2e907b',
    accent2: '#8c62ea',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use near-black buttons with white text as the primary action.
- **Do:** Show the product as a dark code block in the hero.
- **Do:** Keep headlines tight and large in black on the off-white ground.
- **Don't:** Don't add a bright accent to the primary buttons.
- **Don't:** Don't use the teal (#2e907b) for body copy.
- **Don't:** Don't set the code panel in a light colour.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
