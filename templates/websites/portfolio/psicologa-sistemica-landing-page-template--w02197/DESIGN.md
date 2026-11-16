# Design system — Psicóloga Sistémica Landing Page Template

`SN-W02197` · portfolio · light mode · Sinera Atlas theme `workshop` · language `es`

## Direction

Warm and gentle light page: a white ground (#ffffff) with near-black headlines and an italic dusty-rose (#b86e8a) word for emphasis. A pale pink (#fbc2d1) pill is the primary button, and a soft rounded photo sits to the right with a light blurred glow behind it. The palette stays soft and calm, and the rose is used only for the emphasis word and the button.

**Mood:** warm, gentle, soft, calm, feminine

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#fafafa` | Cards, panels, raised areas |
| Text | `#1c1917` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#f5f5f5` | Hairlines, dividers, outlines |
| Accent | `#b86e8a` | Primary action and highlights |

Palette by frequency of use: `#171717` · `#ffffff` · `#737373` · `#fafafa` · `#f5f5f5` · `#a3a3a3` · `#b86e8a` · `#fbc2d1` · `#262626` · `#525252`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display, Geist, Roboto, Montserrat, Poppins
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 18px · body 14px
- **Weights in use:** medium, light, semibold
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-[2rem]` (2rem), `rounded-[2.5rem]` (2.5rem)
- **Shadows:** `shadow-xl`, `shadow-sm`, `shadow-lg`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-20`
- **Common gaps:** `gap-4`, `gap-6`, `gap-12`

**Primary button**

```html
<a class="inline-flex items-center justify-center px-8 py-4 bg-[#FBC2D1] text-neutral-900 text-sm font-medium rounded-full hover:bg-[#ffcfdc] transition-all shadow-[0_10px_30px_-10px_rgba(251,194,209,0.6)]">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Call to action (`cta`)
4. Bento grid (`bento-grid`)
5. FAQ (`faq`)
6. Footer (`footer`)
7. Modal / overlay (`modal-overlay`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #fafafa;
  --color-text: #1c1917;
  --color-muted: #737373;
  --color-border: #f5f5f5;
  --color-accent: #b86e8a;
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
    surface: '#fafafa',
    ink: '#1c1917',
    muted: '#737373',
    line: '#f5f5f5',
    accent: '#b86e8a',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use dusty rose (#b86e8a) in italic for one emphasis word per headline
- **Do:** Make the primary button pale pink (#fbc2d1) with dark text
- **Do:** Keep the photo in a large rounded frame with generous radius
- **Don't:** Don't use the pale pink as a page background
- **Don't:** Don't set body copy in pink
- **Don't:** Don't add sharp corners to the photo or buttons

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
