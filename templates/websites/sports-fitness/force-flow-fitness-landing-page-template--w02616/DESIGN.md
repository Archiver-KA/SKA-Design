# Design system — Force Flow Fitness Landing Page Template

`SN-W02616` · sports-fitness · dark mode · Sinera Atlas theme `calm` · language `en`

## Direction

A dark technical product page with one hot orange. Heavy uppercase grotesque headlines stack in three lines, with the middle word in orange (#ff4b12) and the rest in white, over a near-black ground with hairline grid lines and tiny vertical labels that read like blueprint annotations. A scrolling ticker runs at the top.

**Mood:** technical, blueprint, high-contrast, uppercase, precise

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0b0c0e` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#8b9098` | Secondary copy, captions |
| Border | `#8b9098` | Hairlines, dividers, outlines |
| Accent | `#ff4b12` | Primary action and highlights |

Palette by frequency of use: `#ff4b12` · `#ffffff` · `#8b9098` · `#0b0c0e` · `#111316` · `#edeae3` · `#000000` · `#25282c` · `#101216` · `#17191d`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Archivo
- **Body:** Archivo
- **Loaded families:** Archivo, Inter Tight, JetBrains Mono
- **Scale (largest breakpoint):** h2 72px · h3 20px · body 18px
- **Weights in use:** medium
- **Letter spacing:** `tracking-tight`, `tracking-[-.08em]`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px)
- **Shadows:** `shadow-[1rem_0_0_rgba(255,255,255,.07)]`
- **Content width:** `max-w-[100rem]`, `max-w-[62ch]`
- **Section padding:** `py-[5.5rem]`, `py-40`
- **Common gaps:** `gap-4`, `gap-6`, `gap-5`

**Primary button**

```html
<a class="primary-btn hidden border border-[#FF4B12] bg-[#FF4B12] px-4 py-3 mono text-[#0B0C0E] sm:block">…</a>
```

## Page structure

Blocks in page order:

1. Sidebar (`sidebar`)
2. Marquee (`marquee`)
3. Navigation bar (`navbar`)
4. Hero (`hero`)
5. Gallery / portfolio (`gallery-portfolio`)
6. Feature grid (`features`)
7. 3D / canvas scene (`3d-canvas`)
8. Stats band (`stats`)
9. Comparison (`comparison`)
10. Schedule (`schedule-agenda`)
11. FAQ (`faq`)
12. Call to action (`cta`)
13. Footer (`footer`)
14. Cart / checkout (`cart-checkout`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), blend modes, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #0b0c0e;
  --color-surface: #ffffff;
  --color-text: #ffffff;
  --color-muted: #8b9098;
  --color-border: #8b9098;
  --color-accent: #ff4b12;
  --font-display: "Archivo", sans-serif;
  --font-body: "Archivo", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0b0c0e',
    surface: '#ffffff',
    ink: '#ffffff',
    muted: '#8b9098',
    line: '#8b9098',
    accent: '#ff4b12',
  },
  fontFamily: { display: ['Archivo'], sans: ['Archivo'] },
} }
```

## Do and don't

- **Do:** Set headlines in heavy uppercase Archivo, with one orange word per headline.
- **Do:** Use orange (#ff4b12) for the button, the key word and the small labels only.
- **Do:** Draw dividers and grid lines as hairlines on the near-black ground.
- **Don't:** Don't use an orange ground; orange is for one word, the labels and the button.
- **Don't:** Don't set body copy in orange.
- **Don't:** Don't remove the hairline annotation lines; they carry the technical look.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
