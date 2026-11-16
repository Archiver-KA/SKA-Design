# Design system — Best Shilajit Brands in Pakistan 2026-27 | Top 10 Ranked

`SN-W04162` · other-landing · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark photographic hero, with a heavy white sans-serif headline stacked over the left side of a dim, desaturated image. Small navigation sits along the top, and the supporting copy and pill buttons sit in a column on the right over a translucent glass panel. Scale contrast is the key: a very large headline against small, quiet supporting text.

**Mood:** bold, cinematic, high-contrast, dark

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Surface | `#000000` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#f8fafc` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#ffffff` · `#000000` · `#0a0a0a` · `#f8fafc`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist
- **Scale (largest breakpoint):** h1 128px · h2 48px · body 14px
- **Weights in use:** medium, normal, semibold
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-xl` (12px)
- **Shadows:** `shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]`
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Section padding:** `py-16`
- **Common gaps:** `gap-2`, `gap-3`, `gap-6`

**Primary button**

```html
<a class="hidden sm:inline-flex items-center gap-2 text-sm font-medium text-white/90 border border-white/10 rounded-full px-4 py-2 hover:bg-white/10 transition animate-on-scroll">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Logo cloud (`logo-cloud`)
4. Team (`team`)
5. Feature grid (`features`)
6. Call to action (`cta`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #0a0a0a;
  --color-surface: #000000;
  --color-text: #ffffff;
  --color-muted: #f8fafc;
  --color-border: #ffffff;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0a0a0a',
    surface: '#000000',
    ink: '#ffffff',
    muted: '#f8fafc',
    line: '#ffffff',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the headline very large in Inter with tight line spacing.
- **Do:** Place the headline over the darker left side of the image.
- **Do:** Use white outlined pill buttons for calls to action.
- **Don't:** Don't add bright colour; the palette is black and white.
- **Don't:** Don't place body text directly on the photograph without the dark overlay.
- **Don't:** Don't reduce the headline below its large size.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
