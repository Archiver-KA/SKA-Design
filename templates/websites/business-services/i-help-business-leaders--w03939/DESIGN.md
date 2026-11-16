# Design system — I help business leaders

`SN-W03939` · business-services · light mode · Sinera Atlas theme `route` · language `en`

## Direction

A quiet editorial personal-brand page on a warm off-white ground (#faf9f7). The large headline is set in Libre Baskerville, with Inter for navigation and supporting copy, so a formal serif meets a clean sans. Terracotta (#c17f59) is the only colour and is kept to the primary button, which gives a calm, reflective tone suited to an advisor.

**Mood:** calm, editorial, warm, restrained, reflective

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#faf9f7` | Page ground |
| Surface | `#2d3436` | Cards, panels, raised areas |
| Text | `#111111` | Headings and primary copy |
| Muted text | `#2d3436` | Secondary copy, captions |
| Border | `#f5f5f4` | Hairlines, dividers, outlines |
| Accent | `#c17f59` | Primary action and highlights |

Palette by frequency of use: `#c17f59` · `#2d3436` · `#ffffff` · `#57534e` · `#e7e5e4` · `#faf9f7` · `#78716c` · `#f5f5f4` · `#a8a29e` · `#7d9f85`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Libre Baskerville
- **Body:** Inter
- **Loaded families:** Inter, Libre Baskerville
- **Scale (largest breakpoint):** h1 60px · h2 36px · h3 18px · body 14px
- **Weights in use:** medium, semibold, light
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-2xl` (16px), `rounded-xl` (12px), `rounded-full` (9999px)
- **Shadows:** `shadow-sm`, `shadow-lg`, `shadow-terracotta/20`
- **Content width:** `max-w-6xl`, `max-w-2xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-12`, `gap-6`, `gap-3`

**Primary button**

```html
<a class="inline-flex items-center justify-center px-8 py-3.5 bg-terracotta text-white rounded-full font-medium hover:bg-[#a66d4c] transition-colors duration-300 shadow-sm shadow-terracotta/20 group">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Case studies (`case-studies`)
4. Services (`services`)
5. About (`about`)
6. Newsletter signup (`newsletter`)
7. Timeline (`timeline`)
8. Contact form (`contact-form`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** gradient fills, blend modes, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #faf9f7;
  --color-surface: #2d3436;
  --color-text: #111111;
  --color-muted: #2d3436;
  --color-border: #f5f5f4;
  --color-accent: #c17f59;
  --font-display: "Libre Baskerville", serif;
  --font-body: "Inter", sans-serif;
  --radius: 16px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#faf9f7',
    surface: '#2d3436',
    ink: '#111111',
    muted: '#2d3436',
    line: '#f5f5f4',
    accent: '#c17f59',
  },
  fontFamily: { display: ['Libre Baskerville'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headlines in Libre Baskerville at regular weight, large and left aligned
- **Do:** Use terracotta (#c17f59) for the primary call to action only
- **Do:** Keep the page ground warm off-white (#faf9f7) with dark charcoal text
- **Don't:** Don't add a second brand colour or bright gradients
- **Don't:** Don't centre long paragraphs; keep copy in a narrow left column
- **Don't:** Don't use heavy shadows on the photograph frame; keep it flat

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
