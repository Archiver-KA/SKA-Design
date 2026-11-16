# Design system — Brutalist Web Agency Landing Page Template

`SN-W01459` · agency-studio · light mode · Sinera Atlas theme `workshop` · language `et`

## Direction

A white ground ([#ffffff]) with black ([#000000]) type and a lime ([#d3ff24]) label and nav call-to-action. Edges are square with no radius, and a dotted grid sits behind the hero. The headline is a heavy sans at large size, stacked in three lines and boxed by a thick black frame.

**Mood:** brutalist, graphic, stark, blunt, high-contrast

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Text | `#000000` | Headings and primary copy |
| Border | `#000000` | Hairlines, dividers, outlines |
| Accent | `#d3ff24` | Primary action and highlights |

Palette by frequency of use: `#000000` · `#ffffff` · `#d3ff24`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 96px · h2 72px · h3 20px · body 14px
- **Weights in use:** bold, medium
- **Letter spacing:** `tracking-widest`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-none` (0)
- **Shadows:** `shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]`, `shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]`, `shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]`
- **Content width:** `max-w-2xl`, `max-w-7xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-4`, `gap-1`, `gap-8`

**Primary button**

```html
<a class="inline-flex items-center justify-center px-6 py-3 text-xs font-bold uppercase tracking-widest bg-[#D3FF24] text-black border-2 border-black hover:bg-black hover:text-[#D3FF24] transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Marquee (`marquee`)
3. Hero (`hero`)
4. Feature grid (`features`)
5. Newsletter signup (`newsletter`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-text: #000000;
  --color-border: #000000;
  --color-accent: #d3ff24;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 0;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    ink: '#000000',
    line: '#000000',
    accent: '#d3ff24',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use lime (#d3ff24) for the call-to-action and the label chips only
- **Do:** Keep every edge square, with no radius
- **Do:** Set headlines in heavy Inter at large size, stacked in three lines
- **Don't:** Don't use soft shadows
- **Don't:** Don't soften the black borders
- **Don't:** Don't set lime text on white, it will not read

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
