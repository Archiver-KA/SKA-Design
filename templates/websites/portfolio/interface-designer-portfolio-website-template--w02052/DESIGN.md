# Design system — Interface Designer Portfolio Website Template

`SN-W02052` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A sleek near-black portfolio (#050505) with a very large, tightly tracked Inter headline in white over two lines and small, quiet supporting copy. Orange (#f97316) is kept to the availability badge, while the buttons are a white fill and a dark ghost button with an icon. The oversized headline with negative tracking is the recognisable element.

**Mood:** sleek, minimal, dark, confident, product-focused

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#050505` | Page ground |
| Surface | `#1c1917` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#78716c` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#f97316` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#78716c` · `#1c1917` · `#000000` · `#a8a29e` · `#e7e5e4` · `#0a0a0a` · `#050505` · `#3f3f46` · `#f97316`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 96px · h2 24px · h3 18px · body 14px
- **Weights in use:** medium, light, normal
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-lg` (8px), `rounded-full` (9999px), `rounded-2xl` (16px)
- **Shadows:** `shadow-2xl`
- **Content width:** `max-w-5xl`, `max-w-4xl`
- **Section padding:** `py-32`
- **Common gaps:** `gap-2`, `gap-6`, `gap-8`

**Primary button**

```html
<a class="px-6 py-3 rounded-lg text-sm font-medium transition-colors flex items-center gap-2 bg-white text-black hover:bg-stone-200">…</a>
```

## Page structure

Blocks in page order:

1. 3D / canvas scene (`3d-canvas`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Stats band (`stats`)
5. Case studies (`case-studies`)
6. Dashboard preview (`dashboard-preview`)
7. Call to action (`cta`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #050505;
  --color-surface: #1c1917;
  --color-text: #ffffff;
  --color-muted: #78716c;
  --color-border: #ffffff;
  --color-accent: #f97316;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 8px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#050505',
    surface: '#1c1917',
    ink: '#ffffff',
    muted: '#78716c',
    line: '#ffffff',
    accent: '#f97316',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in Inter at display size with tight tracking, white on near-black.
- **Do:** Use orange (#f97316) only for the availability badge and small status markers.
- **Do:** Pair a white primary button with a dark ghost secondary button that carries an icon.
- **Don't:** Don't use orange for large buttons or headline text.
- **Don't:** Don't add background imagery behind the headline.
- **Don't:** Don't use light section backgrounds; the page stays dark.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
