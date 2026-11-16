# Design system — Scalvenge Marketing Agency

`SN-W01689` · agency-studio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A near-black marketing page with a bold uppercase white headline, where the phrase 'paid ads & automation' takes a green-to-blue gradient (#34d399 to #3b82f6). Blue fills the primary button and green marks the secondary emphasis. The type is heavy and loud, and the rest of the page uses dark grey panels.

**Mood:** loud, energetic, dark, direct

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Surface | `#171717` | Cards, panels, raised areas |
| Text | `#d4d4d4` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#34d399` | Primary action and highlights |
| Second accent | `#3b82f6` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#a3a3a3` · `#34d399` · `#737373` · `#171717` · `#3b82f6` · `#0a0a0a` · `#d4d4d4` · `#60a5fa` · `#10b981`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 20px · body 14px
- **Weights in use:** medium, normal, semibold
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-2xl` (16px)
- **Shadows:** `shadow-[0_0_8px_rgba(52,211,153,0.8)]`, `shadow-sm`, `shadow-[0_0_15px_rgba(59,130,246,0.5)]`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-20`
- **Common gaps:** `gap-2`, `gap-6`, `gap-1.5`

**Primary button**

```html
<a class="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-emerald-500 text-white px-8 py-3.5 rounded-full text-base font-medium hover:opacity-90 transition-opacity shadow-sm flex items-center justify-center gap-2">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Logo cloud (`logo-cloud`)
4. Testimonials (`testimonials`)
5. Process / steps (`how-it-works`)
6. About (`about`)
7. Pricing (`pricing`)
8. FAQ (`faq`)
9. Booking form (`booking`)
10. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #0a0a0a;
  --color-surface: #171717;
  --color-text: #d4d4d4;
  --color-muted: #737373;
  --color-border: #ffffff;
  --color-accent: #34d399;
  --color-accent-2: #3b82f6;
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
    surface: '#171717',
    ink: '#d4d4d4',
    muted: '#737373',
    line: '#ffffff',
    accent: '#34d399',
    accent2: '#3b82f6',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the headline uppercase and heavy, with the key phrase in the green-to-blue gradient.
- **Do:** Use blue (#3b82f6) for the primary button and green (#34d399) for emphasis.
- **Do:** Set body copy in light grey (#a3a3a3) on near-black (#0a0a0a).
- **Don't:** Don't set long body text in uppercase.
- **Don't:** Don't add a third gradient colour to the headline.
- **Don't:** Don't use the green-to-blue gradient for body text.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
