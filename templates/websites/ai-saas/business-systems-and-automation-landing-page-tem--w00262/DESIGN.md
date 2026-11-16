# Design system — Business Systems & Automation Landing Page Template

`SN-W00262` · ai-saas · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A light, energetic business-coaching hero: a white ground with a dark (#2b2b2b) headline whose key claim is set in bold orange (#e87722) across most of the left column. A flywheel diagram in orange tints with a dark centre sits in a white rounded card on the right, so the orange carries both the headline and the illustration. Large sans type and the rounded card keep the layout friendly rather than corporate.

**Mood:** energetic, warm, bold, friendly

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#f5f5f5` | Cards, panels, raised areas |
| Text | `#2b2b2b` | Headings and primary copy |
| Border | `#2b2b2b` | Hairlines, dividers, outlines |
| Accent | `#e87722` | Primary action and highlights |

Palette by frequency of use: `#2b2b2b` · `#ffffff` · `#e87722` · `#c45e10` · `#f5f5f5` · `#000000`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 60px · h2 48px · h3 20px · body 14px
- **Weights in use:** semibold, medium, bold
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-[2rem]` (2rem), `rounded-2xl` (16px)
- **Shadows:** `shadow-sm`, `shadow-[#2b2b2b]/10`, `shadow-lg`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-20`, `py-24`
- **Common gaps:** `gap-3`, `gap-2`, `gap-5`

**Primary button**

```html
<a class="inline-flex items-center justify-center gap-2 rounded-full bg-[#e87722] px-5 py-3 text-sm font-semibold text-white shadow-sm shadow-[#e87722]/25 transition hover:bg-[#c45e10]">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Pricing (`pricing`)
5. Services (`services`)
6. Testimonials (`testimonials`)
7. Integrations (`integrations`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #f5f5f5;
  --color-text: #2b2b2b;
  --color-border: #2b2b2b;
  --color-accent: #e87722;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#f5f5f5',
    ink: '#2b2b2b',
    line: '#2b2b2b',
    accent: '#e87722',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the claim lines in bold orange (#e87722) and the rest in dark #2b2b2b
- **Do:** Use the orange tints for the flywheel and keep its centre dark
- **Do:** Keep the diagram in a rounded white card on the white ground
- **Don't:** Don't use orange for body text; it is for the claim and the diagram
- **Don't:** Don't add a second brand colour beside the orange
- **Don't:** Don't set the headline in a light weight; it is heavy sans throughout

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
