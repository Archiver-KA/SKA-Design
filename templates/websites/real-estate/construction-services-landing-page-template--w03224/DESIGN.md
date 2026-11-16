# Design system — Construction Services Landing Page Template

`SN-W03224` · real-estate · dark mode · Sinera Atlas theme `dwell` · language `pl`

## Direction

A dark, sans-led trade page on a deep navy-black ground (#0f0f1a) with bold white headline lines and a single amber (#c8860a) primary button. Amber is reserved for the call to action, the phone number in the header and a thin rule under the eyebrow. Secondary actions are grey outlined buttons, and the layout is left-aligned with a short tagline beneath the headline.

**Mood:** bold, direct, dark, trade-focused

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0f0f1a` | Page ground |
| Surface | `#000000` | Cards, panels, raised areas |
| Text | `#f5f5f0` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#c8860a` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#f5f5f0` · `#000000` · `#0f0f1a` · `#1a1a2e` · `#c8860a` · `#050508`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Montserrat
- **Body:** Inter
- **Loaded families:** Inter, Montserrat
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 20px · body 14px
- **Weights in use:** bold, medium, extrabold
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-md` (6px)
- **Shadows:** `shadow-lg`, `shadow-gold-500/10`, `shadow-md`
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Common gaps:** `gap-2`, `gap-3`, `gap-6`

**Primary button**

```html
<a class="shimmer bg-gold-500 text-white px-5 py-2.5 rounded-md text-sm font-semibold hover:bg-gold-600 transition shadow-[0_0_15px_rgba(200,134,10,0.2)] hover:shadow-[0_0_20px_rgba(200,134,10,0.4)]">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Marquee (`marquee`)
4. Stats band (`stats`)
5. Feature grid (`features`)
6. Gallery / portfolio (`gallery-portfolio`)
7. Map / location (`map-location`)
8. FAQ (`faq`)
9. Call to action (`cta`)
10. Contact form (`contact-form`)
11. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #0f0f1a;
  --color-surface: #000000;
  --color-text: #f5f5f0;
  --color-border: #ffffff;
  --color-accent: #c8860a;
  --font-display: "Montserrat", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0f0f1a',
    surface: '#000000',
    ink: '#f5f5f0',
    line: '#ffffff',
    accent: '#c8860a',
  },
  fontFamily: { display: ['Montserrat'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headlines in bold white sans, stacked on two or three lines, left-aligned.
- **Do:** Use the amber (#c8860a) for the primary button, the phone number and small rules.
- **Do:** Keep secondary actions as grey outlined buttons beside the amber one.
- **Don't:** Don't use amber for body text or for large background areas.
- **Don't:** Don't add a light section ground; the first screen is dark throughout.
- **Don't:** Don't centre the headline block; the layout reads from the left edge.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
