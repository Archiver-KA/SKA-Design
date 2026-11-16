# Design system — Aesthetic Clinic Landing Page Template

`SN-W02310` · healthcare · light mode · Sinera Atlas theme `calm` · language `es`

## Direction

An off-white clinic page with a tightly set near-black sans headline over pale grey body text. The primary button is solid near-black with a secondary outline, and the hero pairs the copy with a large framed photograph of a treatment room. Colour is almost absent, so the black buttons and the photography carry the page.

**Mood:** clinical, refined, monochrome, calm, clean

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#faf9f8` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#1c1917` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#e7e5e4` | Hairlines, dividers, outlines |
| Accent | `#1c1917` | Primary action and highlights |
| Second accent | `#fbbf24` | Supporting highlights |

Palette by frequency of use: `#1c1917` · `#ffffff` · `#64748b` · `#e7e5e4` · `#a8a29e` · `#f5f5f4` · `#be123c` · `#fafaf9` · `#fda4af` · `#292524`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 60px · h2 36px · h3 18px · body 14px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-xl` (12px)
- **Shadows:** `shadow-sm`, `shadow-lg`, `shadow-stone-200/50`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-4`, `gap-6`

**Primary button**

```html
<a class="bg-stone-900 text-white text-sm font-medium py-2.5 px-5 rounded-full hover:bg-stone-800 transition-all shadow-sm hover:shadow-md active:scale-95 hidden sm:block">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Stats band (`stats`)
5. Testimonials (`testimonials`)
6. Booking form (`booking`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #faf9f8;
  --color-surface: #ffffff;
  --color-text: #1c1917;
  --color-muted: #64748b;
  --color-border: #e7e5e4;
  --color-accent: #1c1917;
  --color-accent-2: #fbbf24;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#faf9f8',
    surface: '#ffffff',
    ink: '#1c1917',
    muted: '#64748b',
    line: '#e7e5e4',
    accent: '#1c1917',
    accent2: '#fbbf24',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in tight near-black sans at 60px
- **Do:** Use near-black (#1c1917) for primary buttons
- **Do:** Keep the hero photograph large and framed on the right
- **Don't:** Don't add rose or gold fills; the page is near-black on off-white
- **Don't:** Don't set body copy in pure black
- **Don't:** Don't add decorative shapes behind the headline

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
