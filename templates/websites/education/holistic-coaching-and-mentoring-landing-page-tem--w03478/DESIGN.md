# Design system — Holistic Coaching and Mentoring Landing Page Template

`SN-W03478` · education · light mode · Sinera Atlas theme `calm` · language `pl`

## Direction

A calm, minimal coaching page on white, with a warm cream surface (#faf6ef) and dark brown text (#1c1712). The gold accent (#a8761a) carries the primary button, the active navigation link and the short rule under headlines, and headlines are set large in a plain sans. Soft gold-tinted glows sit behind the hero to add warmth without decoration.

**Mood:** calm, minimal, warm, grounded, gentle

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#faf6ef` | Cards, panels, raised areas |
| Text | `#1c1712` | Headings and primary copy |
| Muted text | `#6b6258` | Secondary copy, captions |
| Border | `#faf6ef` | Hairlines, dividers, outlines |
| Accent | `#a8761a` | Primary action and highlights |

Palette by frequency of use: `#1c1712` · `#a8761a` · `#e6dccb` · `#6b6258` · `#ffffff` · `#c8901f` · `#faf6ef` · `#3a322a` · `#e07b2e` · `#5c7a4a`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Manrope
- **Scale (largest breakpoint):** h1 60px · h2 48px · h3 24px · body 16px
- **Weights in use:** light, medium, normal
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-sm` (2px), `rounded-full` (9999px), `rounded-xl` (12px)
- **Shadows:** `shadow-[0px_8px_24px_rgba(28,23,18,0.04)]`, `shadow-[0px_16px_48px_rgba(28,23,18,0.08)]`, `shadow-[0px_8px_24px_rgba(28,23,18,0.08)]`
- **Content width:** `max-w-[1200px]`, `max-w-2xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-4`, `gap-3`, `gap-8`

**Primary button**

```html
<a class="inline-flex items-center justify-center bg-[#C8901F] text-[#1C1712] rounded-full px-7 py-3 text-sm font-medium hover:bg-[#A8761A] transition-colors duration-[250ms] focus-visible:ring-2 focus-visible:ring-[#A8761A] focus-visible:ring-offset-2 focus-visible:outline-none">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. FAQ (`faq`)
5. Call to action (`cta`)
6. Newsletter signup (`newsletter`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), blend modes, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #faf6ef;
  --color-text: #1c1712;
  --color-muted: #6b6258;
  --color-border: #faf6ef;
  --color-accent: #a8761a;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 2px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#faf6ef',
    ink: '#1c1712',
    muted: '#6b6258',
    line: '#faf6ef',
    accent: '#a8761a',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use gold (#a8761a) for primary buttons and the short rule under headlines
- **Do:** Set headlines in the sans at large size in dark brown (#1c1712)
- **Do:** Keep the hero on white, with only soft gold glows behind it
- **Don't:** Don't use gold for body copy
- **Don't:** Don't add extra accent colours
- **Don't:** Don't use hard-edged shadows on cards

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
