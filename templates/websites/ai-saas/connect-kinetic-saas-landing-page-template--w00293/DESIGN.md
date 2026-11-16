# Design system — Connect Kinetic SaaS Landing Page Template

`SN-W00293` · ai-saas · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A light, airy landing page on a near-white ground [#fbf9f8] with a soft pale teal-blue wash behind the hero. The headline is heavy dark Inter, and the emphasised phrase is set in dark green [#006d3d], which is the page's secondary accent. The primary call to action is a deep blue [#005d8f] pill, so the blue carries action and the green carries emphasis.

**Mood:** light, airy, clean, professional

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fbf9f8` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#1b1c1c` | Headings and primary copy |
| Muted text | `#707881` | Secondary copy, captions |
| Border | `#d8dee5` | Hairlines, dividers, outlines |
| Accent | `#005d8f` | Primary action and highlights |
| Second accent | `#006d3d` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#005d8f` · `#1b1c1c` · `#707881` · `#d8dee5` · `#f5f3f3` · `#006d3d` · `#e7f4ff` · `#e9f8ef` · `#004f7a`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 48px · h2 30px · h3 18px · body 14px
- **Weights in use:** semibold, medium
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-[0.5rem]` (0.5rem), `rounded-[1rem]` (1rem)
- **Shadows:** `shadow-sm`, `shadow-xl`, `shadow-[#005d8f]/20`
- **Content width:** `max-w-[80rem]`, `max-w-2xl`
- **Section padding:** `py-12`, `py-16`
- **Common gaps:** `gap-3`, `gap-2`, `gap-4`

**Primary button**

```html
<a class="rounded-full bg-[#005d8f] px-4 py-2 text-sm font-medium text-white shadow-sm shadow-[#005d8f]/20 transition hover:bg-[#004f7a]">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Process / steps (`how-it-works`)
4. Testimonials (`testimonials`)
5. FAQ (`faq`)
6. Pricing (`pricing`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** gradient fills, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN), AOS scroll reveal
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #fbf9f8;
  --color-surface: #ffffff;
  --color-text: #1b1c1c;
  --color-muted: #707881;
  --color-border: #d8dee5;
  --color-accent: #005d8f;
  --color-accent-2: #006d3d;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fbf9f8',
    surface: '#ffffff',
    ink: '#1b1c1c',
    muted: '#707881',
    line: '#d8dee5',
    accent: '#005d8f',
    accent2: '#006d3d',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the primary button in deep blue (#005d8f) as a pill
- **Do:** Use dark green (#006d3d) for one emphasised headline phrase per section
- **Do:** Keep the page on a near-white ground with white cards on top
- **Don't:** Don't use the green for buttons; it is for emphasis only
- **Don't:** Don't set the headline in a light weight; the display type is heavy
- **Don't:** Don't put the product mockup on a dark panel; it sits on the light wash

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
