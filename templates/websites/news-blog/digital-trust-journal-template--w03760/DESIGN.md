# Design system — Digital Trust Journal Template

`SN-W03760` · news-blog · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A calm, pale grey-green page [#ebedea] with white panels and a floating white navigation bar. The headline is a very large serif in dark charcoal, and its middle phrase is set in steel blue [#4ba3e3]. The intro is a grey serif paragraph, and the primary button is a near-black pill with an outlined pill beside it, so the page feels measured and printed.

**Mood:** calm, printed, measured, muted, credible

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ebedea` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#2d322f` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#4ba3e3` | Primary action and highlights |

Palette by frequency of use: `#4ba3e3` · `#ffffff` · `#2d322f` · `#1e2420` · `#ebedea` · `#f4f6f3`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Geist
- **Body:** Geist
- **Loaded families:** Geist, Playfair Display
- **Scale (largest breakpoint):** h1 96px · h2 60px · h3 30px · body 16px
- **Weights in use:** normal, medium
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-3xl` (24px)
- **Shadows:** `shadow-[0_8px_30px_rgba(45,50,47,0.04)]`, `shadow-[0_20px_40px_rgba(75,163,227,0.08)]`, `shadow-sm`
- **Content width:** `max-w-[1400px]`, `max-w-[1000px]`
- **Section padding:** `py-32`, `py-20`
- **Common gaps:** `gap-2`, `gap-6`, `gap-4`

**Primary button**

```html
<a class="w-full bg-[#4ba3e3] text-white rounded-full py-4 text-sm font-medium uppercase tracking-widest hover:bg-white hover:text-[#1e2420] transition-colors mt-4 flex justify-center items-center gap-2">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Logo cloud (`logo-cloud`)
5. Articles (`blog-articles`)
6. Newsletter signup (`newsletter`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #ebedea;
  --color-surface: #ffffff;
  --color-text: #2d322f;
  --color-border: #ffffff;
  --color-accent: #4ba3e3;
  --font-display: "Geist", sans-serif;
  --font-body: "Geist", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ebedea',
    surface: '#ffffff',
    ink: '#2d322f',
    line: '#ffffff',
    accent: '#4ba3e3',
  },
  fontFamily: { display: ['Geist'], sans: ['Geist'] },
} }
```

## Do and don't

- **Do:** Set the headline in a large serif, with the key phrase in steel blue (#4ba3e3)
- **Do:** Keep the page ground pale grey-green (#ebedea) and the surfaces white
- **Do:** Use a near-black pill for the primary button and an outlined pill beside it
- **Don't:** Don't use the steel blue for body copy
- **Don't:** Don't set the intro paragraph in a bold weight
- **Don't:** Don't add drop shadows beyond the soft floating navigation

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
