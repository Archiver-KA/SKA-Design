# Design system — Wellness & Coaching Services Landing Page Template

`SN-W02552` · healthcare · light mode · Sinera Atlas theme `calm` · language `pl`

## Direction

A warm, editorial coaching page on a cream ground (#faf6ef) with near-black uppercase headlines. The second line carries a gold gradient from brown (#a8761a) to amber (#c8901f), which is the page's signature, and the same gold fills the primary button. The stance is motivational but grounded, with a thin gold rule above the eyebrow label and no imagery in the hero.

**Mood:** motivational, warm, grounded, editorial

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#faf6ef` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#1c1712` | Headings and primary copy |
| Muted text | `#6b6258` | Secondary copy, captions |
| Accent | `#a8761a` | Primary action and highlights |

Palette by frequency of use: `#6b6258` · `#1c1712` · `#a8761a` · `#ffffff` · `#e6dccb` · `#3a322a` · `#faf6ef` · `#c8901f` · `#f2e9da` · `#9c3d14`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Manrope
- **Scale (largest breakpoint):** h1 60px · h2 36px · h3 20px · body 14px
- **Weights in use:** light, medium, normal
- **Letter spacing:** `tracking-tight`, `tracking-[0.18em]`

## Shape, spacing and layout

- **Corner radius:** `rounded-sm` (2px), `rounded-full` (9999px), `rounded-md` (6px)
- **Shadows:** `shadow-[0px_1px_2px_rgba(28,23,18,0.06)]`, `shadow-[0px_8px_24px_rgba(28,23,18,0.08)]`, `shadow-sm`
- **Content width:** `max-w-[1200px]`, `max-w-[600px]`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-2`, `gap-4`, `gap-6`

**Primary button**

```html
<a class="hidden md:inline-flex items-center justify-center bg-[#C8901F] text-[#1C1712] px-6 py-3 rounded-full text-sm font-medium hover:bg-[#A8761A] transition-colors focus-ring shadow-sm">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Call to action (`cta`)
4. Feature grid (`features`)
5. Newsletter signup (`newsletter`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN), AOS scroll reveal
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #faf6ef;
  --color-surface: #ffffff;
  --color-text: #1c1712;
  --color-muted: #6b6258;
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
    background: '#faf6ef',
    surface: '#ffffff',
    ink: '#1c1712',
    muted: '#6b6258',
    accent: '#a8761a',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the second headline line in the brown-to-gold gradient from #a8761a to #c8901f
- **Do:** Use gold (#c8901f) for the primary button with dark text
- **Do:** Put a short gold rule before the small uppercase eyebrow label
- **Don't:** Don't set body copy in gold; body text is dark brown
- **Don't:** Don't apply the gradient to the first headline line
- **Don't:** Don't add imagery to the hero; the page is typographic

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
