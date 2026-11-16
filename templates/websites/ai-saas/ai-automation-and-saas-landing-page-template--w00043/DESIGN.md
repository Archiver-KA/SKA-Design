# Design system — AI Automation & SaaS Landing Page Template

`SN-W00043` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `ro`

## Direction

A dark, near-black page (#050505) with a large white sans headline, and a blue-to-violet gradient on the closing phrase so colour carries the emphasis rather than the layout. The hero pairs the dark ground with a 3D object and a small chat card, and the buttons are white pills. Blue (#168bff) marks the key phrase and violet (#8b3dff) is the secondary glow.

**Mood:** dark, bold, techy, high contrast

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#050505` | Page ground |
| Surface | `#000000` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#168bff` | Primary action and highlights |
| Second accent | `#8b3dff` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#168bff` · `#000000` · `#8b3dff` · `#050505` · `#050506` · `#0b0b0d`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, JetBrains Mono
- **Scale (largest breakpoint):** h3 20px · body 14px
- **Weights in use:** semibold, medium
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-2xl` (16px)
- **Shadows:** `shadow-[0_0_40px_-10px_rgba(139,61,255,0.35)]`, `shadow-[0_30px_80px_-30px_rgba(0,0,0,0.6)]`, `shadow-2xl`
- **Content width:** `max-w-[1600px]`, `max-w-4xl`
- **Section padding:** `py-28`
- **Common gaps:** `gap-2`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="hidden lg:flex fixed top-6 right-6 z-40 items-center gap-2 border border-white/10 bg-white/[0.03] backdrop-blur-sm px-3 py-2 rounded-full font-mono-nx text-[10px] tracking-widest text-white/50 hover:text-white hover:border-white/30 transition">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Marquee (`marquee`)
5. Feature grid (`features`)
6. Product grid (`product-grid`)
7. Contact form (`contact-form`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, custom keyframes
- **Libraries:** Tailwind CSS (CDN), GSAP, Three.js, Spline 3D
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #050505;
  --color-surface: #000000;
  --color-text: #ffffff;
  --color-border: #ffffff;
  --color-accent: #168bff;
  --color-accent-2: #8b3dff;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#050505',
    surface: '#000000',
    ink: '#ffffff',
    line: '#ffffff',
    accent: '#168bff',
    accent2: '#8b3dff',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the key phrase of each hero in the blue (#168bff) gradient
- **Do:** Keep the page ground at #050505 with white text
- **Do:** Use white pill buttons for the main calls to action
- **Don't:** Don't use light section backgrounds
- **Don't:** Don't use violet (#8b3dff) for body text or small labels
- **Don't:** Don't set the headline in a serif face

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
