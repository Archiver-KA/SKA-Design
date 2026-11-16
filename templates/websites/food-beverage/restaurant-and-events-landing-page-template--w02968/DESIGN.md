# Design system — Restaurant & Events Landing Page Template

`SN-W02968` · food-beverage · light mode · Sinera Atlas theme `dwell` · language `fr`

## Direction

A forest-themed hero with a very large white display headline laid over a light grey-to-white gradient on a terrace photograph. The gradient is so pale that the white text nearly disappears, so the look is airy and quiet but has a legibility problem. Emerald green (#059669) is the single accent on the primary button, beside a pale grey outlined secondary button.

**Mood:** airy, quiet, natural, sparse

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fafafa` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#18181b` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#e4e4e7` | Hairlines, dividers, outlines |
| Accent | `#059669` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#18181b` · `#71717a` · `#059669` · `#52525b` · `#047857` · `#34d399` · `#e4e4e7` · `#fafafa` · `#a1a1aa`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 96px · h2 36px · h3 18px · body 14px
- **Weights in use:** semibold, medium, light
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-3xl` (24px)
- **Shadows:** `shadow-sm`, `shadow-lg`, `shadow-emerald-900/10`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-16`
- **Common gaps:** `gap-4`, `gap-6`, `gap-16`

**Primary button**

```html
<a class="px-8 py-3.5 bg-emerald-600 text-white rounded-full text-sm font-semibold hover:bg-emerald-500 transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Booking form (`booking`)
5. Contact form (`contact-form`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #fafafa;
  --color-surface: #ffffff;
  --color-text: #18181b;
  --color-muted: #71717a;
  --color-border: #e4e4e7;
  --color-accent: #059669;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fafafa',
    surface: '#ffffff',
    ink: '#18181b',
    muted: '#71717a',
    line: '#e4e4e7',
    accent: '#059669',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use emerald (#059669) only for the primary action button.
- **Do:** Keep the hero headline at the large display size with generous space around it.
- **Do:** Darken the photograph with a gradient so the white headline stays readable.
- **Don't:** Don't place white headline text on the light part of the gradient.
- **Don't:** Don't use the green as a fill for large sections.
- **Don't:** Don't add a second accent colour next to the emerald.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
