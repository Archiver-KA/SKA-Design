# Design system — Verdant SaaS Data Intelligence Template

`SN-W00802` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark, forest-photo hero for an analytics platform. A dim green-black photograph sits behind a translucent glass navigation bar, and the headline is large white type with the word 'grows' set in italic lime (#c2e455). Lime is the only accent, used on the primary button and the italic word, and the glass panels give the page its depth.

**Mood:** natural, dark, calm, glassy

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#050806` | Page ground |
| Surface | `#111612` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#c2e455` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#111612` · `#000000` · `#050806` · `#c2e455` · `#d6f866`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, PT Serif
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 18px · body 20px
- **Weights in use:** semibold, medium
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-3xl` (24px), `rounded` (4px)
- **Shadows:** `shadow-[0_0_20px_rgba(214,248,102,0.2)]`, `shadow-[0_0_30px_rgba(214,248,102,0.25)]`, `shadow-[0_0_40px_rgba(214,248,102,0.4)]`
- **Content width:** `max-w-4xl`, `max-w-6xl`
- **Common gaps:** `gap-2`, `gap-4`, `gap-1`

**Primary button**

```html
<a class="bg-brand-green hover:bg-[#c2e455] text-black text-sm font-medium px-5 py-2 rounded-full transition-all flex items-center gap-1.5 shadow-[0_0_20px_rgba(214,248,102,0.2)]">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Testimonials (`testimonials`)
5. Call to action (`cta`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #050806;
  --color-surface: #111612;
  --color-text: #ffffff;
  --color-border: #ffffff;
  --color-accent: #c2e455;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#050806',
    surface: '#111612',
    ink: '#ffffff',
    line: '#ffffff',
    accent: '#c2e455',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the one italic word of the headline in lime (#c2e455)
- **Do:** Place the navigation bar on a translucent glass panel over the photo
- **Do:** Keep lime for the primary button and the highlight word
- **Don't:** Don't use lime for large fills
- **Don't:** Don't replace the photo ground with flat black on the hero
- **Don't:** Don't add shadows under the glass panels

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
