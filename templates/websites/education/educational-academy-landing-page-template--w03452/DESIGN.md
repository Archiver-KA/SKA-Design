# Design system — Educational Academy Landing Page Template

`SN-W03452` · education · light mode · Sinera Atlas theme `calm` · language `en`

## Direction

A bright academy page on a pale yellow-cream ground, with a bold sans headline in near-black and a second line in lime green [#84cc16]. A solid near-black button and an outlined one sit below, and a floating card in soft mint and white holds a small status pill. The mood is fresh and welcoming, with the green doing most of the emphasis.

**Mood:** fresh, welcoming, bright, youthful

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f8fafc` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#475569` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#f1f5f9` | Hairlines, dividers, outlines |
| Accent | `#84cc16` | Primary action and highlights |
| Second accent | `#fef3c7` | Supporting highlights |

Palette by frequency of use: `#0f172a` · `#ffffff` · `#64748b` · `#99f6e4` · `#84cc16` · `#65a30d` · `#334155` · `#475569` · `#f1f5f9` · `#fef3c7`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Noto Nastaliq Urdu
- **Scale (largest breakpoint):** h1 72px · h2 30px · h3 18px · body 12px
- **Weights in use:** medium, semibold
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-xl` (12px)
- **Shadows:** `shadow-xl`, `shadow-sm`, `shadow-teal-100/50`
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="px-8 py-4 rounded-xl bg-lime-500 text-white font-semibold hover:bg-lime-600 transition-all shadow-xl shadow-lime-500/20 flex items-center justify-center gap-2 transform hover:-translate-y-1 active:scale-95">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Feature grid (`features`)
5. Services (`services`)
6. Contact form (`contact-form`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #f8fafc;
  --color-surface: #ffffff;
  --color-text: #475569;
  --color-muted: #64748b;
  --color-border: #f1f5f9;
  --color-accent: #84cc16;
  --color-accent-2: #fef3c7;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f8fafc',
    surface: '#ffffff',
    ink: '#475569',
    muted: '#64748b',
    line: '#f1f5f9',
    accent: '#84cc16',
    accent2: '#fef3c7',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the second headline line in lime green (#84cc16) on the light background
- **Do:** Use the near-black button for the primary action and an outlined one for the secondary
- **Do:** Use the darker green (#65a30d) for small green text, where lime would be hard to read
- **Don't:** Don't set small text in lime; it lacks contrast on white
- **Don't:** Don't use lime for large background areas
- **Don't:** Don't add a second bright accent beside the green

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
