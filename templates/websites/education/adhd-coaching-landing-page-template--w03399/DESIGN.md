# Design system — ADHD Coaching Landing Page Template

`SN-W03399` · education · light mode · Sinera Atlas theme `calm` · language `en`

## Direction

Calm, light coaching page with a serif headline in deep navy, where the second phrase is set in italic violet (#8b5cf6). The first-screen product mock is a white card with a day timeline, a violet progress bar and a small green status, so the page shows the method in use. Buttons pair a dark navy primary with an outlined secondary on the off-white ground.

**Mood:** calm, personal, structured, warm

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fafafa` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#0f172a` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#f1f5f9` | Hairlines, dividers, outlines |
| Accent | `#8b5cf6` | Primary action and highlights |
| Second accent | `#8b5cf6` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#e2e8f0` · `#0f172a` · `#64748b` · `#000000` · `#334155` · `#f1f5f9` · `#8b5cf6` · `#fafafa` · `#94a3b8`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 20px · body 14px
- **Weights in use:** medium, bold, semibold
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-xl` (12px)
- **Shadows:** `shadow-lg`, `shadow-sm`, `shadow-2xl`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="px-5 py-2.5 rounded-full text-sm font-medium transition-all flex items-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-0.5 bg-slate-900 text-white hover:bg-slate-800">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Feature grid (`features`)
5. Testimonials (`testimonials`)
6. Pricing (`pricing`)
7. Booking form (`booking`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN), AOS scroll reveal
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #fafafa;
  --color-surface: #ffffff;
  --color-text: #0f172a;
  --color-muted: #64748b;
  --color-border: #f1f5f9;
  --color-accent: #8b5cf6;
  --color-accent-2: #8b5cf6;
  --font-display: "Playfair Display", serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fafafa',
    surface: '#ffffff',
    ink: '#0f172a',
    muted: '#64748b',
    line: '#f1f5f9',
    accent: '#8b5cf6',
    accent2: '#8b5cf6',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in the serif in deep navy (#0f172a), with the second phrase in italic violet (#8b5cf6).
- **Do:** Use violet for the italic phrase and the progress bars only.
- **Do:** Show the method as a white product card with a timeline and a progress bar beside the headline.
- **Don't:** Don't set the headline in violet; it is for the italic phrase only.
- **Don't:** Don't use a dark background for the hero; the ground stays off-white.
- **Don't:** Don't add more than one status colour to the product card.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
