# Design system — Barbershop Booking Landing Page Template

`SN-W00247` · ai-saas · light mode · Sinera Atlas theme `circuit` · language `fr`

## Direction

A light, mobile-first booking page: a white ground, Plus Jakarta Sans set bold and tight in dark slate (#0f172a) with a grey body (#64748b), and a large dark phone mockup as the hero visual. A pill badge and small outlined buttons are the only shape accents beside the phone. The layout is open and quiet, leaving the phone screen to do the selling rather than adding colour to the type.

**Mood:** clean, mobile-first, quiet, modern

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Text | `#475569` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#0f172a` | Primary action and highlights |
| Second accent | `#1e293b` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#0f172a` · `#64748b` · `#475569` · `#f1f5f9` · `#94a3b8` · `#cbd5e1` · `#000000` · `#facc15` · `#020617`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Plus Jakarta Sans
- **Body:** Plus Jakarta Sans
- **Loaded families:** Plus Jakarta Sans, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 18px · body 14px
- **Weights in use:** semibold, bold, medium
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-3xl` (24px)
- **Shadows:** `shadow-lg`, `shadow-sm`, `shadow-xl`
- **Content width:** `max-w-3xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-6`, `gap-3`

**Primary button**

```html
<a class="px-4 py-2 text-sm font-medium text-slate-600 hover:text-fady-primary transition-colors rounded-full hover:bg-fady-light/20">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Awards / press (`awards-press`)
4. Testimonials (`testimonials`)
5. Feature grid (`features`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-text: #475569;
  --color-muted: #64748b;
  --color-border: #ffffff;
  --color-accent: #0f172a;
  --color-accent-2: #1e293b;
  --font-display: "Plus Jakarta Sans", sans-serif;
  --font-body: "Plus Jakarta Sans", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    ink: '#475569',
    muted: '#64748b',
    line: '#ffffff',
    accent: '#0f172a',
    accent2: '#1e293b',
  },
  fontFamily: { display: ['Plus Jakarta Sans'], sans: ['Plus Jakarta Sans'] },
} }
```

## Do and don't

- **Do:** Set headlines in Plus Jakarta Sans bold in dark slate (#0f172a)
- **Do:** Show the product as a large dark phone mockup on the right of the hero
- **Do:** Use outlined pill shapes for badges and secondary buttons
- **Don't:** Don't add yellow (#facc15) to text; it does not appear in the first screen
- **Don't:** Don't crowd the hero with extra cards beside the phone
- **Don't:** Don't add more colours to the hero; the page is slate on white

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
