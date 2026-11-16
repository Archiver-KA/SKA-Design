# Design system — Personal Trainer Landing Page Template

`SN-W02664` · sports-fitness · dark mode · Sinera Atlas theme `calm` · language `pt-BR`

## Direction

A dark navy trainer page on #0d1b2e with a small orange (#f56e0f) contact button as the one warm colour. The wordmark is set in a serif, which contrasts with the small sans-serif nav. The overall tone is quiet and corporate.

**Mood:** quiet, navy, corporate, restrained, dark

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0d1b2e` | Page ground |
| Surface | `#000000` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#8b9ab5` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#f56e0f` | Primary action and highlights |
| Second accent | `#1e3050` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#f56e0f` · `#8b9ab5` · `#0d1b2e` · `#1e3050` · `#162336` · `#000000` · `#111111`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Barlow
- **Body:** Barlow
- **Loaded families:** Barlow, Bebas Neue
- **Scale (largest breakpoint):** h1 110px · h2 60px · h3 24px · body 18px
- **Weights in use:** medium, light
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-2xl` (16px)
- **Shadows:** `shadow-[0_0_8px_#F56E0F]`, `shadow-lg`, `shadow-[#F56E0F]/20`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-4`, `gap-3`, `gap-1`

**Primary button**

```html
<a class="hidden md:flex bg-[#F56E0F] text-white text-base font-medium uppercase px-6 py-2.5 rounded-lg hover:scale-105 hover:brightness-110 transition-all duration-200">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Call to action (`cta`)
5. Product grid (`product-grid`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #0d1b2e;
  --color-surface: #000000;
  --color-text: #ffffff;
  --color-muted: #8b9ab5;
  --color-border: #ffffff;
  --color-accent: #f56e0f;
  --color-accent-2: #1e3050;
  --font-display: "Barlow", sans-serif;
  --font-body: "Barlow", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0d1b2e',
    surface: '#000000',
    ink: '#ffffff',
    muted: '#8b9ab5',
    line: '#ffffff',
    accent: '#f56e0f',
    accent2: '#1e3050',
  },
  fontFamily: { display: ['Barlow'], sans: ['Barlow'] },
} }
```

## Do and don't

- **Do:** Use #0d1b2e as the page ground and #f56e0f for the primary contact button.
- **Do:** Set the brand wordmark in a serif and the navigation in a small sans-serif.
- **Do:** Keep the orange to one button or highlight per view.
- **Don't:** Don't add large orange fills; the design is navy with one warm accent.
- **Don't:** Don't add a second warm accent; the orange is the only one.
- **Don't:** Don't use the lighter navy (#1e3050) for text.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
