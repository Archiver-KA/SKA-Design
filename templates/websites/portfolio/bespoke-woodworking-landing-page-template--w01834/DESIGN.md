# Design system — Bespoke Woodworking Landing Page Template

`SN-W01834` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

Artisan hero: a photograph of wood cabinetry under a pale white wash carries a large white sans headline with one italic serif word, and two buttons sit below it. A green chat button floats in the lower right corner. The look is warm and crafted, with the wood tone supplying the colour and the UI kept quiet.

**Mood:** artisan, crafted, warm, airy

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#1c1917` | Page ground |
| Surface | `#000000` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#f5f5f4` | Secondary copy, captions |
| Border | `#000000` | Hairlines, dividers, outlines |
| Accent | `#25d366` | Primary action and highlights |

Palette by frequency of use: `#000000` · `#f5f5f4` · `#57534e` · `#292524` · `#78716c` · `#ffffff` · `#a8a29e` · `#1c1917` · `#e7e5e4` · `#44403c`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 18px · body 14px
- **Weights in use:** medium, semibold, light
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-lg` (8px)
- **Shadows:** `shadow-sm`, `shadow-lg`, `shadow-xl`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-6`, `gap-4`, `gap-16`

**Primary button**

```html
<a class="fixed bottom-6 right-6 z-50 bg-[#25D366] p-4 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center group text-black">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Services (`services`)
5. Gallery / portfolio (`gallery-portfolio`)
6. Process / steps (`how-it-works`)
7. Logo cloud (`logo-cloud`)
8. Contact form (`contact-form`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN), GSAP
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #1c1917;
  --color-surface: #000000;
  --color-text: #ffffff;
  --color-muted: #f5f5f4;
  --color-border: #000000;
  --color-accent: #25d366;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#1c1917',
    surface: '#000000',
    ink: '#ffffff',
    muted: '#f5f5f4',
    line: '#000000',
    accent: '#25d366',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use the wood photograph under a light wash as the hero background
- **Do:** Set the headline in white sans with one italic serif word
- **Do:** Keep the chat button in its own corner, away from the headline
- **Don't:** Don't use the chat green for headings
- **Don't:** Don't place white headline text over the lightest part of the photo
- **Don't:** Don't add heavy colour to the UI; the wood supplies the warmth

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
