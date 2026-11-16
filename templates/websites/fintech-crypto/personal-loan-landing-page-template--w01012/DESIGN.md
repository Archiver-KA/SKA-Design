# Design system — Personal Loan Landing Page Template

`SN-W01012` · fintech-crypto · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A light lender landing page on white, with a blue (#2563eb) accent for the headline phrase, the calculator's Apply action and key figures. The main hero action is a green pill beside the blue calculator, so the hero carries two action colours. Rounded cards hold the EMI calculator, and the layout reads as clear, trustworthy and transaction-led.

**Mood:** clear, trustworthy, transactional, friendly, light

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#eff6ff` | Cards, panels, raised areas |
| Text | `#475569` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#f1f5f9` | Hairlines, dividers, outlines |
| Accent | `#2563eb` | Primary action and highlights |

Palette by frequency of use: `#2563eb` · `#ffffff` · `#0f172a` · `#475569` · `#3b82f6` · `#f1f5f9` · `#64748b` · `#94a3b8` · `#cbd5e1` · `#eff6ff`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Poppins
- **Body:** Inter
- **Loaded families:** Inter, Poppins, Geist, Roboto, Montserrat, Playfair Display
- **Scale (largest breakpoint):** h1 60px · h2 30px · h3 20px · body 12px
- **Weights in use:** bold, medium, semibold
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-lg` (8px)
- **Shadows:** `shadow-sm`, `shadow-lg`, `shadow-xl`
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Section padding:** `py-20`
- **Common gaps:** `gap-2`, `gap-4`, `gap-8`

**Primary button**

```html
<a class="block w-full text-center py-4 rounded-xl font-semibold transition shadow-lg shadow-blue-500/25 text-white bg-blue-600 hover:bg-blue-700">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Logo cloud (`logo-cloud`)
4. Services (`services`)
5. Booking form (`booking`)
6. FAQ (`faq`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #eff6ff;
  --color-text: #475569;
  --color-muted: #64748b;
  --color-border: #f1f5f9;
  --color-accent: #2563eb;
  --font-display: "Poppins", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#eff6ff',
    ink: '#475569',
    muted: '#64748b',
    line: '#f1f5f9',
    accent: '#2563eb',
  },
  fontFamily: { display: ['Poppins'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the key headline phrase in blue (#2563eb) and keep the rest near-black.
- **Do:** Use the blue solid button for the calculator's apply action.
- **Do:** Keep calculators and offers in rounded cards on white.
- **Don't:** Don't use the green pill outside the hero.
- **Don't:** Don't add a dark band to the hero.
- **Don't:** Don't set body copy in blue.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
