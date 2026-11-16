# Design system — Family Productivity App Landing Page Template

`SN-W00384` · ai-saas · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A warm editorial hero with a dark espresso-black serif headline set in Fraunces at large size, over a warm tan photographic ground. Peach (#fca564) appears only as the active nav item and one accent in the product mock, and the tablet shows pastel cards in peach, blue and lavender. The contrast between the heavy serif and the soft pastel interface gives the page its character.

**Mood:** warm, editorial, soft, homely, pastel

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fdfcf8` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#1c1917` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#fca564` | Primary action and highlights |
| Second accent | `#e4d3fa` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#fca564` · `#1c1917` · `#4a4238` · `#6b7280` · `#fdfcf8` · `#9ca3af` · `#ebe5de` · `#000000` · `#1f2937`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Fraunces
- **Body:** Inter
- **Loaded families:** Fraunces, Inter
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 24px · body 18px
- **Weights in use:** medium, bold, semibold
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-[2rem]` (2rem)
- **Shadows:** `shadow-sm`, `shadow-xl`, `shadow-2xl`
- **Content width:** `max-w-7xl`, `max-w-5xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-4`, `gap-3`, `gap-2`

**Primary button**

```html
<a class="px-5 py-2.5 rounded-full bg-[#FCA564] text-[#291B0F] font-medium text-sm transition-transform hover:-translate-y-0.5 shadow-sm">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Sign-in form (`auth-form`)
3. Navigation bar (`navbar`)
4. Hero (`hero`)
5. Schedule (`schedule-agenda`)
6. Feature grid (`features`)
7. Call to action (`cta`)
8. Testimonials (`testimonials`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN), AOS scroll reveal
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #fdfcf8;
  --color-surface: #ffffff;
  --color-text: #1c1917;
  --color-muted: #6b7280;
  --color-border: #ffffff;
  --color-accent: #fca564;
  --color-accent-2: #e4d3fa;
  --font-display: "Fraunces", serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fdfcf8',
    surface: '#ffffff',
    ink: '#1c1917',
    muted: '#6b7280',
    line: '#ffffff',
    accent: '#fca564',
    accent2: '#e4d3fa',
  },
  fontFamily: { display: ['Fraunces'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in Fraunces at large size in near-black (#1c1917), aligned to the left.
- **Do:** Use the peach (#fca564) for the active navigation item and one accent in the product mock.
- **Do:** Place the product tablet on the right with soft pastel cards in peach, blue and lavender.
- **Don't:** Don't set the headline in Inter; the serif is what gives the page its warmth.
- **Don't:** Don't make the background pure white; the warm tan ground is part of the look.
- **Don't:** Don't add a cool blue backdrop; the warm tones carry the page.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
