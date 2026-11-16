# Design system — Financial Community Landing Page Template

`SN-W00931` · fintech-crypto · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A light, friendly community hero on near-white, with a bold near-black sans headline in which the word CLUB sits inside a mint speech bubble. A soft yellow primary button and an outlined secondary button sit below a short centred subtitle. The tone is conversational and approachable, with rounded corners and pale gradients kept well behind the content.

**Mood:** friendly, light, conversational, approachable

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#f9fafb` | Cards, panels, raised areas |
| Text | `#111827` | Headings and primary copy |
| Muted text | `#4b5563` | Secondary copy, captions |
| Border | `#f3f4f6` | Hairlines, dividers, outlines |
| Accent | `#84c69d` | Primary action and highlights |
| Second accent | `#2563eb` | Supporting highlights |

Palette by frequency of use: `#111827` · `#4b5563` · `#f3f4f6` · `#f9fafb` · `#ffffff` · `#e5e7eb` · `#1f2937` · `#9ca3af` · `#2563eb` · `#6b7280`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** system sans-serif
- **Body:** system sans-serif
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 20px · body 14px
- **Weights in use:** medium, normal
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-2xl` (16px), `rounded-3xl` (24px), `rounded-full` (9999px)
- **Shadows:** `shadow-md`, `shadow-sm`, `shadow-xl`
- **Content width:** `max-w-6xl`, `max-w-4xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-6`, `gap-2`, `gap-4`

**Primary button**

```html
<a class="w-full sm:w-auto px-8 py-4 bg-[#FDE047] text-gray-900 rounded-lg font-medium tracking-tight hover:bg-yellow-400 transition-colors border border-yellow-500 shadow-sm">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. Bento grid (`bento-grid`)
3. Team (`team`)
4. Call to action (`cta`)
5. Feature grid (`features`)
6. Testimonials (`testimonials`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #f9fafb;
  --color-text: #111827;
  --color-muted: #4b5563;
  --color-border: #f3f4f6;
  --color-accent: #84c69d;
  --color-accent-2: #2563eb;
  --font-display: "system sans-serif", serif;
  --font-body: "system sans-serif", serif;
  --radius: 16px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#f9fafb',
    ink: '#111827',
    muted: '#4b5563',
    line: '#f3f4f6',
    accent: '#84c69d',
    accent2: '#2563eb',
  },
  fontFamily: { display: ['system sans-serif'], sans: ['system sans-serif'] },
} }
```

## Do and don't

- **Do:** Set the key word in a mint rounded speech bubble
- **Do:** Use the soft yellow for the primary button only
- **Do:** Keep the subtitle short and centred in grey
- **Don't:** Don't use more than two saturated colours in the hero
- **Don't:** Don't place body copy on the pale gradients
- **Don't:** Don't use sharp corners on buttons; the shapes are rounded

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
