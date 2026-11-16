# Design system — Real Estate Legal Consulting Landing Page Template

`SN-W03360` · real-estate · dark mode · Sinera Atlas theme `dwell` · language `vi`

## Direction

A bold, high-contrast advisory page on deep navy (#0b2545) with a centred white bold sans-serif headline set in three lines. Red (#d9383a) is the primary action colour, used for the filled button beside an outlined secondary button. The navigation is a light grey pill card floating over the navy, and a row of small proof points sits beneath the buttons.

**Mood:** urgent, bold, authoritative, direct

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0b2545` | Page ground |
| Text | `#f5f5f5` | Headings and primary copy |
| Muted text | `#ffffff` | Secondary copy, captions |
| Border | `#f1f5f9` | Hairlines, dividers, outlines |
| Accent | `#d9383a` | Primary action and highlights |
| Second accent | `#c5a880` | Supporting highlights |

Palette by frequency of use: `#0b2545` · `#ffffff` · `#c5a880` · `#e2e8f0` · `#475569` · `#d9383a` · `#f9f6f0` · `#1e293b` · `#f8fafc` · `#94a3b8`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Nunito
- **Body:** Nunito
- **Loaded families:** Lexend, Nunito
- **Scale (largest breakpoint):** h1 60px · h2 48px · h3 20px · body 16px
- **Weights in use:** semibold, bold, medium
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-xl` (12px)
- **Shadows:** `shadow-lg`, `shadow-sm`, `shadow-2xl`
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-4`, `gap-3`

**Primary button**

```html
<a class="px-4 py-1.5 text-xs font-semibold text-white bg-[#0B2545] border border-[#0B2545] rounded shadow-sm hover:bg-[#13315C]">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Product grid (`product-grid`)
5. FAQ (`faq`)
6. Call to action (`cta`)
7. Footer (`footer`)
8. Contact form (`contact-form`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #0b2545;
  --color-text: #f5f5f5;
  --color-muted: #ffffff;
  --color-border: #f1f5f9;
  --color-accent: #d9383a;
  --color-accent-2: #c5a880;
  --font-display: "Nunito", sans-serif;
  --font-body: "Nunito", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0b2545',
    ink: '#f5f5f5',
    muted: '#ffffff',
    line: '#f1f5f9',
    accent: '#d9383a',
    accent2: '#c5a880',
  },
  fontFamily: { display: ['Nunito'], sans: ['Nunito'] },
} }
```

## Do and don't

- **Do:** Use red (#d9383a) for the primary button and nothing else
- **Do:** Keep the hero on deep navy (#0b2545) with white headlines
- **Do:** Pair the filled primary button with an outlined secondary button of equal height
- **Don't:** Don't use red for headlines or body text
- **Don't:** Don't put a light background behind the headline
- **Don't:** Don't add a third strong colour to the buttons

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
