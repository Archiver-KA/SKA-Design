# Design system — Korean Head Spa Landing Page Template

`SN-W02764` · beauty-fashion · light mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A spa template built on warm neutrals: a dark brown bar (#3e2c22) carries the announcement strip, the nav booking button and the primary call to action, while the page itself stays off-white. The hero stacks a large sans headline with an italic serif line for the last phrase, and a grey gradient overlay keeps the white text legible over the photograph.

**Mood:** calm, warm, restrained, editorial, soft

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fafaf9` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#57534e` | Headings and primary copy |
| Muted text | `#7d8f7d` | Secondary copy, captions |
| Border | `#e7e5e4` | Hairlines, dividers, outlines |
| Accent | `#3e2c22` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#7d8f7d` · `#1c1917` · `#78716c` · `#e7e5e4` · `#f5f5f4` · `#fafaf9` · `#57534e` · `#f4f7f4` · `#a8a29e`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 20px · body 14px
- **Weights in use:** medium, normal, bold
- **Letter spacing:** `tracking-wide`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-2xl` (16px)
- **Shadows:** `shadow-sm`, `shadow-xl`, `shadow-lg`
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Section padding:** `py-24`, `py-16`
- **Common gaps:** `gap-2`, `gap-4`, `gap-8`

**Primary button**

```html
<a class="bg-[#4A3B32] text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-[#3E2C22] transition-all flex items-center gap-2">…</a>
```

## Page structure

Blocks in page order:

1. Announcement bar (`announcement-bar`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Services (`services`)
5. About (`about`)
6. Product grid (`product-grid`)
7. Process / steps (`how-it-works`)
8. Articles (`blog-articles`)
9. Booking form (`booking`)
10. FAQ (`faq`)
11. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #fafaf9;
  --color-surface: #ffffff;
  --color-text: #57534e;
  --color-muted: #7d8f7d;
  --color-border: #e7e5e4;
  --color-accent: #3e2c22;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fafaf9',
    surface: '#ffffff',
    ink: '#57534e',
    muted: '#7d8f7d',
    line: '#e7e5e4',
    accent: '#3e2c22',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use the dark brown (#3e2c22) only for the announcement bar, nav button and primary buttons.
- **Do:** Set the hero headline in large sans with one italic serif line as the final phrase.
- **Do:** Keep the page ground off-white (#fafaf9) and place white cards on it.
- **Don't:** Don't introduce saturated colours; the palette stays brown and grey.
- **Don't:** Don't place hero text over a light area without the grey gradient overlay.
- **Don't:** Don't drop the italic serif line; it is the main typographic signature.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
