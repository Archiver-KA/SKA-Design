# Design system — Packit Jacket E-commerce Landing Page Template

`SN-W01288` · ecommerce · light mode · Sinera Atlas theme `market` · language `en`

## Direction

A loud, high-contrast product page built on electric lime (#dfff00) with black type and a black-and-white photograph. Headlines are enormous, heavy uppercase sans letters that run off the edges of the hero and are cropped by the frame. The palette stays to lime, black and white, with a red (#dc2626) accent kept for small highlights.

**Mood:** loud, high-contrast, playful, bold, graphic

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#f9fafb` | Cards, panels, raised areas |
| Text | `#18181b` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#e4e4e7` | Hairlines, dividers, outlines |
| Accent | `#dfff00` | Primary action and highlights |
| Second accent | `#dc2626` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#dfff00` · `#000000` · `#f4f4f5` · `#27272a` · `#18181b` · `#f3f4f6` · `#52525b` · `#e4e4e7` · `#f9fafb`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** a serif face
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 288px · h2 30px · h3 24px · body 18px
- **Weights in use:** semibold, medium, bold
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded` (4px), `rounded-2xl` (16px), `rounded-xl` (12px)
- **Shadows:** `shadow-sm`, `shadow-lg`
- **Content width:** `max-w-7xl`, `max-w-5xl`
- **Section padding:** `py-24`, `py-16`
- **Common gaps:** `gap-12`, `gap-24`, `gap-6`

**Primary button**

```html
<a class="bg-white px-8 py-3 rounded-full text-sm font-semibold tracking-tight hover:shadow-lg transition-all">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Marquee (`marquee`)
4. Product grid (`product-grid`)
5. Feature grid (`features`)
6. Logo cloud (`logo-cloud`)
7. Comparison (`comparison`)
8. FAQ (`faq`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #f9fafb;
  --color-text: #18181b;
  --color-muted: #71717a;
  --color-border: #e4e4e7;
  --color-accent: #dfff00;
  --color-accent-2: #dc2626;
  --font-display: "a serif face", serif;
  --font-body: "Inter", sans-serif;
  --radius: 4px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#f9fafb',
    ink: '#18181b',
    muted: '#71717a',
    line: '#e4e4e7',
    accent: '#dfff00',
    accent2: '#dc2626',
  },
  fontFamily: { display: ['a serif face'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use lime (#dfff00) as the hero ground with black type on it
- **Do:** Set the hero headline in heavy uppercase sans, sized to bleed off the frame
- **Do:** Keep the photograph black and white, cropped tall and centred
- **Don't:** Don't set the display headline in a serif; keep it a heavy sans.
- **Don't:** Don't use lime for body copy or small text on white
- **Don't:** Don't soften the hero edges; the lime panel runs full-bleed

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
