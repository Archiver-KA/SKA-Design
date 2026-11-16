# Design system — STEMM Coaching Landing Page Template

`SN-W03538` · education · light mode · Sinera Atlas theme `calm` · language `en`

## Direction

STEMM Coaching is a light, professional page with a calm, editorial feel. Headlines are large serif type in deep navy (#1b3a4b), and the key phrase of each headline switches to gold (#d4a843) for emphasis. Gold and navy carry the buttons, which have rounded corners, and soft blurred glows sit behind the hero. The design reads as credible and measured rather than promotional.

**Mood:** editorial, calm, professional, warm-gold, light

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f7f9fb` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#1a1a2e` | Headings and primary copy |
| Muted text | `#475569` | Secondary copy, captions |
| Border | `#f1f5f9` | Hairlines, dividers, outlines |
| Accent | `#d4a843` | Primary action and highlights |
| Second accent | `#1b3a4b` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#d4a843` · `#1b3a4b` · `#475569` · `#64748b` · `#e2e8f0` · `#f7f9fb` · `#f1f5f9` · `#27ae60` · `#cbd5e1`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display
- **Scale (largest breakpoint):** h1 60px · h2 48px · h3 24px · body 14px
- **Weights in use:** bold, medium, semibold
- **Letter spacing:** `tracking-[0.2em]`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-2xl` (16px)
- **Shadows:** `shadow-lg`, `shadow-xl`, `shadow-sm`
- **Content width:** `max-w-[1400px]`, `max-w-3xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-3`, `gap-2`, `gap-4`

**Primary button**

```html
<a class="hidden sm:flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#D4A843] hover:bg-[#c49a30] text-white text-sm font-semibold shadow-lg shadow-[#D4A843]/20 transition-all transform hover:-translate-y-0.5">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Services (`services`)
5. Timeline (`timeline`)
6. Dashboard preview (`dashboard-preview`)
7. Call to action (`cta`)
8. Contact form (`contact-form`)
9. Testimonials (`testimonials`)
10. Booking form (`booking`)
11. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #f7f9fb;
  --color-surface: #ffffff;
  --color-text: #1a1a2e;
  --color-muted: #475569;
  --color-border: #f1f5f9;
  --color-accent: #d4a843;
  --color-accent-2: #1b3a4b;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f7f9fb',
    surface: '#ffffff',
    ink: '#1a1a2e',
    muted: '#475569',
    line: '#f1f5f9',
    accent: '#d4a843',
    accent2: '#1b3a4b',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the key phrase of each headline in gold (#d4a843)
- **Do:** Use navy (#1b3a4b) for headline text and the dark CTA button
- **Do:** Keep the hero on a light background with soft blurred glows only
- **Don't:** Don't set headlines in a heavy sans-serif that competes with the serif
- **Don't:** Don't use gold for body text or small labels
- **Don't:** Don't add saturated colours beyond gold and navy

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
