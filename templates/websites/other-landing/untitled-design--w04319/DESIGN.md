# Design system — Untitled Design

`SN-W04319` · other-landing · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A light hero on white that fades into a large soft gradient of violet, blue and pale teal toward the right edge. The headline is set in deep navy [#172554], with the place name picked out in green, and the body copy is a muted blue. A dark filled pill serves as the primary action beside a lighter outline button, so the call to action is easy to find.

**Mood:** soft, trustworthy, local, airy, warm

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#ecfeff` | Cards, panels, raised areas |
| Text | `#0f172a` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#172554` | Primary action and highlights |
| Second accent | `#86efac` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#172554` · `#2563eb` · `#bfdbfe` · `#86efac` · `#93c5fd` · `#0891b2` · `#0e7490` · `#ecfeff` · `#3b82f6`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Geist
- **Body:** Geist
- **Loaded families:** Geist, JetBrains Mono
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 18px · body 14px
- **Weights in use:** medium, light
- **Letter spacing:** `tracking-tight`, `tracking-[0.18em]`

## Shape, spacing and layout

- **Corner radius:** `rounded-lg` (8px), `rounded-full` (9999px), `rounded-md` (6px)
- **Shadows:** `shadow-sm`, `shadow-lg`, `shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]`
- **Content width:** `max-w-[90rem]`, `max-w-2xl`
- **Section padding:** `py-20`, `py-28`
- **Common gaps:** `gap-2`, `gap-4`, `gap-6`

**Primary button**

```html
<a class="magnetic inline-flex items-center gap-2 rounded-full border border-cyan-200/80 bg-white/65 px-4 py-2.5 text-sm font-medium text-cyan-700 backdrop-blur-md transition hover:border-cyan-400 hover:bg-white sm:px-5">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Process / steps (`how-it-works`)
4. Services (`services`)
5. Feature grid (`features`)
6. Map / location (`map-location`)
7. FAQ (`faq`)
8. Contact form (`contact-form`)
9. Stats band (`stats`)
10. Articles (`blog-articles`)
11. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN), GSAP, Lenis smooth scroll
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #ecfeff;
  --color-text: #0f172a;
  --color-border: #ffffff;
  --color-accent: #172554;
  --color-accent-2: #86efac;
  --font-display: "Geist", sans-serif;
  --font-body: "Geist", sans-serif;
  --radius: 8px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#ecfeff',
    ink: '#0f172a',
    line: '#ffffff',
    accent: '#172554',
    accent2: '#86efac',
  },
  fontFamily: { display: ['Geist'], sans: ['Geist'] },
} }
```

## Do and don't

- **Do:** Set the headline in deep navy (#172554) with the place name in green
- **Do:** Use the dark filled pill for the primary call to action only
- **Do:** Keep the gradient at the right edge of the hero and clear of the text
- **Don't:** Don't place body copy over the saturated part of the gradient
- **Don't:** Don't add a second filled button beside the primary one
- **Don't:** Don't set the place name in navy; it takes the green

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
