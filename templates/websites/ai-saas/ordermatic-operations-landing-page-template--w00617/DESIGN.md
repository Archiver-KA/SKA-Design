# Design system — Ordermatic Operations Landing Page Template

`SN-W00617` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark operations page where lime (#a3e635) does the emphasis work: one headline word and the primary button. The product appears as a phone mockup with green chat bubbles and a kitchen-display card. The page sits on a near-black ground (#0a0a0a).

**Mood:** dark, direct, product-led, lime-accented, conversational

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Text | `#ffffff` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#a3e635` | Primary action and highlights |
| Second accent | `#10b981` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#a8a29e` · `#84cc16` · `#a3e635` · `#78716c` · `#bef264` · `#0a0a0a` · `#10b981` · `#d6d3d1` · `#000000`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, JetBrains Mono, Geist, Roboto, Montserrat, Poppins
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 24px · body 18px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-xl` (12px)
- **Shadows:** `shadow-2xl`, `shadow-lg`, `shadow-emerald-900/20`
- **Content width:** `max-w-7xl`, `max-w-[85%]`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-3`, `gap-2`, `gap-4`

**Primary button**

```html
<a class="hidden md:inline-flex px-5 py-2.5 rounded-full text-sm font-semibold transition-all bg-[#bef264] hover:bg-[#a3e635] shadow-[0_0_20px_-5px_rgba(190,242,100,0.3)] text-black tracking-tight">…</a>
```

## Page structure

Blocks in page order:

1. 3D / canvas scene (`3d-canvas`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Logo cloud (`logo-cloud`)
5. Feature grid (`features`)
6. Testimonials (`testimonials`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Three.js, Unicorn Studio (WebGL scenes), AOS scroll reveal
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #0a0a0a;
  --color-text: #ffffff;
  --color-border: #ffffff;
  --color-accent: #a3e635;
  --color-accent-2: #10b981;
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
    ink: '#ffffff',
    line: '#ffffff',
    accent: '#a3e635',
    accent2: '#10b981',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use lime (#a3e635) for one headline word and the primary button only
- **Do:** Show the product as a phone mockup with chat bubbles
- **Do:** Set headlines in Inter at display size on the dark ground
- **Don't:** Don't treat the page as light; it has a dark ground
- **Don't:** Don't use lime as a large background fill; it stays on type and buttons
- **Don't:** Don't swap the phone mockup for stock photography; the chat screen is the illustration

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
