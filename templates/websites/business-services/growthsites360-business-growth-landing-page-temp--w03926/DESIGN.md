# Design system — GrowthSites360 Business Growth Landing Page Template

`SN-W03926` · business-services · light mode · Sinera Atlas theme `route` · language `en`

## Direction

A light, cool page on a pale blue-grey ground, where a heavy sans headline stacks three short statements and the last one turns bright blue (#2f7bff). A white card on the right shows a simplified wireframe, which makes the product concrete. A solid blue primary button sits beside a white secondary, and a dark navy button closes the navigation. The tone is brisk, commercial and reassuring.

**Mood:** brisk, commercial, reassuring, cool, clear

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f5f8fc` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#1e293b` | Headings and primary copy |
| Muted text | `#475569` | Secondary copy, captions |
| Border | `#f1f5f9` | Hairlines, dividers, outlines |
| Accent | `#2f7bff` | Primary action and highlights |
| Second accent | `#2ed47a` | Supporting highlights |

Palette by frequency of use: `#2f7bff` · `#ffffff` · `#475569` · `#334155` · `#071426` · `#94a3b8` · `#e2e8f0` · `#f1f5f9` · `#2ed47a` · `#cbd5e1`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 60px · h2 36px · h3 20px · body 14px
- **Weights in use:** medium, semibold, light
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-xl` (12px), `rounded-full` (9999px), `rounded-2xl` (16px)
- **Shadows:** `shadow-sm`, `shadow-lg`, `shadow-md`
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Section padding:** `py-32`, `py-24`
- **Common gaps:** `gap-3`, `gap-2`, `gap-4`

**Primary button**

```html
<a class="bg-[#2F7BFF] text-white text-base font-medium px-8 py-3.5 rounded-xl hover:bg-blue-600 hover:shadow-xl hover:shadow-[#2F7BFF]/30 transition-all duration-300 flex justify-center items-center gap-2">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Gallery / portfolio (`gallery-portfolio`)
5. Stats band (`stats`)
6. Pricing (`pricing`)
7. FAQ (`faq`)
8. Contact form (`contact-form`)
9. Footer (`footer`)
10. Modal / overlay (`modal-overlay`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), GSAP
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #f5f8fc;
  --color-surface: #ffffff;
  --color-text: #1e293b;
  --color-muted: #475569;
  --color-border: #f1f5f9;
  --color-accent: #2f7bff;
  --color-accent-2: #2ed47a;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 12px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f5f8fc',
    surface: '#ffffff',
    ink: '#1e293b',
    muted: '#475569',
    line: '#f1f5f9',
    accent: '#2f7bff',
    accent2: '#2ed47a',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the closing line of the headline in blue (#2f7bff) and keep the earlier lines in near-black.
- **Do:** Use the solid blue button for the primary booking action and a white outlined button for the secondary action.
- **Do:** Place the product illustration on a white card with a soft border, to the right of the hero.
- **Don't:** Don't use blue for body text; it is reserved for the closing line and buttons.
- **Don't:** Don't place dark backgrounds behind the hero copy.
- **Don't:** Don't use the navy button as a primary action; it is for navigation only.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
