# Design system — Digital Trust Journal Template

`SN-W03759` · news-blog · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A near-black hero with a very large, heavy uppercase sans-serif headline. The second line is filled with a silver-to-gold metallic gradient, and yellow [#ffd700] appears only in the square logo mark. A solid white button sits beside an outlined secondary button, and small spaced uppercase labels frame the edges of the page.

**Mood:** bold, dark, authoritative, metallic, editorial

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#000000` | Headings and primary copy |
| Border | `#262626` | Hairlines, dividers, outlines |
| Accent | `#ffd700` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#ffd700` · `#262626` · `#000000` · `#0a0a0a` · `#111111` · `#404040`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 128px · h2 60px · h3 20px · body 14px
- **Weights in use:** bold, medium, light
- **Letter spacing:** `tracking-widest`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-none` (0), `rounded-full` (9999px)
- **Shadows:** `shadow-2xl`
- **Content width:** `max-w-[1440px]`, `max-w-2xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-3`, `gap-2`, `gap-4`

**Primary button**

```html
<a class="px-6 py-3 bg-white text-black text-xs font-bold uppercase tracking-widest hover:bg-brand transition-colors duration-200">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Testimonials (`testimonials`)
4. Stats band (`stats`)
5. Articles (`blog-articles`)
6. Feature grid (`features`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #0a0a0a;
  --color-surface: #ffffff;
  --color-text: #000000;
  --color-border: #262626;
  --color-accent: #ffd700;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 0;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0a0a0a',
    surface: '#ffffff',
    ink: '#000000',
    line: '#262626',
    accent: '#ffd700',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in very large heavy uppercase sans-serif, with the second line in a metallic gradient
- **Do:** Use yellow (#ffd700) only for the logo mark
- **Do:** Pair a solid white button with an outlined button of the same height
- **Don't:** Don't apply the metallic gradient to body copy or buttons
- **Don't:** Don't add yellow to buttons or large areas
- **Don't:** Don't use light weights for the headline

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
