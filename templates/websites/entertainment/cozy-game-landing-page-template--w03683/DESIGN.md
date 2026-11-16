# Design system — Cozy Game Landing Page Template

`SN-W03683` · entertainment · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A soft, rounded page on a pale rose background, set in a rounded sans-serif that suits its friendly tone. One word in the headline takes the coral accent, and the primary button is a dark brown pill beside an outlined white one. The white navigation bar floats over the hero and keeps the top light.

**Mood:** cosy, friendly, soft, playful

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fecdd3` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#292524` | Headings and primary copy |
| Muted text | `#57534e` | Secondary copy, captions |
| Border | `#f5f5f4` | Hairlines, dividers, outlines |
| Accent | `#fb7185` | Primary action and highlights |
| Second accent | `#f59e0b` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#57534e` · `#292524` · `#f5f5f4` · `#fb7185` · `#a8a29e` · `#44403c` · `#f43f5e` · `#fff9f0` · `#78716c`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Nunito
- **Body:** Nunito
- **Loaded families:** Nunito, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 18px · body 12px
- **Weights in use:** bold, semibold, medium
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-3xl` (24px)
- **Shadows:** `shadow-sm`, `shadow-lg`, `shadow-stone-200/50`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Common gaps:** `gap-2`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="px-5 py-2 rounded-full text-sm font-semibold hover:text-rose-500 transition-all hover:shadow-sm text-stone-600 hover:bg-white">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Product grid (`product-grid`)
5. Articles (`blog-articles`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #fecdd3;
  --color-surface: #ffffff;
  --color-text: #292524;
  --color-muted: #57534e;
  --color-border: #f5f5f4;
  --color-accent: #fb7185;
  --color-accent-2: #f59e0b;
  --font-display: "Nunito", sans-serif;
  --font-body: "Nunito", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fecdd3',
    surface: '#ffffff',
    ink: '#292524',
    muted: '#57534e',
    line: '#f5f5f4',
    accent: '#fb7185',
    accent2: '#f59e0b',
  },
  fontFamily: { display: ['Nunito'], sans: ['Nunito'] },
} }
```

## Do and don't

- **Do:** Set headlines in the rounded sans-serif, with one coral word (#fb7185) per headline
- **Do:** Use dark brown pills for primary buttons and white outlined pills for secondary ones
- **Do:** Keep the rose background (#fecdd3) for hero areas only
- **Don't:** Don't use sharp corners on buttons or cards
- **Don't:** Don't add the coral to body text
- **Don't:** Don't set body text in pure black; keep it in brown-grey

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
