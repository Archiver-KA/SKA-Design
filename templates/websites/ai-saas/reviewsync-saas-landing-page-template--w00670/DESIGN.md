# Design system — ReviewSync SaaS Landing Page Template

`SN-W00670` · ai-saas · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A light SaaS landing with a near-black bold headline and a blue-to-violet gradient on the second line, 'One CMS.' The primary button is near-black, so the gradient text is the only colour in the hero. Outlined and filled buttons sit below a centred subline, and the page is clean and conversion-focused.

**Mood:** clean, bold, conversion-focused, light

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#0b0f19` | Cards, panels, raised areas |
| Text | `#0b0f19` | Headings and primary copy |
| Muted text | `#0b0f19` | Secondary copy, captions |
| Border | `#e5e7eb` | Hairlines, dividers, outlines |
| Accent | `#2563eb` | Primary action and highlights |
| Second accent | `#22c55e` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#0b0f19` · `#64748b` · `#2563eb` · `#e2e8f0` · `#f3f4f6` · `#f9fafb` · `#e5e7eb` · `#22c55e` · `#9ca3af`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Plus Jakarta Sans
- **Body:** Inter
- **Loaded families:** Inter, Plus Jakarta Sans
- **Scale (largest breakpoint):** h1 96px · h2 36px · h3 18px · body 14px
- **Weights in use:** semibold, bold, medium
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded` (4px), `rounded-lg` (8px)
- **Shadows:** `shadow-sm`, `shadow-lg`, `shadow-md`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-3`, `gap-2`, `gap-8`

**Primary button**

```html
<a class="bg-midnight hover:bg-charcoal text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all shadow-subtle hover:shadow-lg hover:-translate-y-0.5 border border-transparent hover:border-gray-700">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Case studies (`case-studies`)
5. Pricing (`pricing`)
6. Testimonials (`testimonials`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN), AOS scroll reveal
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #0b0f19;
  --color-text: #0b0f19;
  --color-muted: #0b0f19;
  --color-border: #e5e7eb;
  --color-accent: #2563eb;
  --color-accent-2: #22c55e;
  --font-display: "Plus Jakarta Sans", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#0b0f19',
    ink: '#0b0f19',
    muted: '#0b0f19',
    line: '#e5e7eb',
    accent: '#2563eb',
    accent2: '#22c55e',
  },
  fontFamily: { display: ['Plus Jakarta Sans'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the primary button near-black and let the blue gradient headline line be the only colour
- **Do:** Set headlines in a heavy sans with tight line spacing
- **Do:** Pair one filled button with one outlined button in the hero
- **Don't:** Don't make the primary button blue; it is near-black
- **Don't:** Don't set the page on a dark ground; it is white
- **Don't:** Don't add colour gradients to body text

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
