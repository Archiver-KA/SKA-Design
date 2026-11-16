# Design system — Friseursalon Landing Page Template

`SN-W02750` · beauty-fashion · light mode · Sinera Atlas theme `dwell` · language `de`

## Direction

Monochrome salon page: a grayscale photograph of a stylist fills the hero, and a bold white sans headline sits across it in two centred lines. The header is a white bar with a black pill booking button, and the hero actions are a white pill and an outlined pill. Removing colour from the photography keeps the page neutral and leaves the type to do the work.

**Mood:** monochrome, clean, modern, photographic

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#f4f4f5` | Cards, panels, raised areas |
| Text | `#52525b` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#e4e4e7` | Hairlines, dividers, outlines |
| Accent | `#18181b` | Primary action and highlights |

Palette by frequency of use: `#18181b` · `#ffffff` · `#f4f4f5` · `#71717a` · `#e4e4e7` · `#c5a059` · `#3f3f46` · `#52525b` · `#fafafa` · `#27272a`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 18px · body 18px
- **Weights in use:** medium, light, semibold
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-2xl` (16px)
- **Shadows:** `shadow-sm`, `shadow-xl`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-3`, `gap-4`, `gap-1`

**Primary button**

```html
<a class="bg-zinc-900 text-white text-xs font-medium px-5 py-2.5 rounded-full hover:bg-zinc-800 transition-colors tracking-wide hidden sm:block">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Services (`services`)
5. Gallery / portfolio (`gallery-portfolio`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #f4f4f5;
  --color-text: #52525b;
  --color-muted: #71717a;
  --color-border: #e4e4e7;
  --color-accent: #18181b;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#f4f4f5',
    ink: '#52525b',
    muted: '#71717a',
    line: '#e4e4e7',
    accent: '#18181b',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in bold sans, white and centred over the grayscale photograph
- **Do:** Use a black pill for the header booking button and white pills for hero actions
- **Do:** Keep hero photography grayscale so the page stays neutral
- **Don't:** Don't add gold (#c5a059); the page stays neutral
- **Don't:** Don't use a coloured photograph in the hero; the look is grayscale
- **Don't:** Don't place body copy over busy parts of the photo without the grey wash behind it

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
