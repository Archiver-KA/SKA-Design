# Design system — Online Quran Academy Landing Page Template

`SN-W03517` · education · dark mode · Sinera Atlas theme `calm` · language `en`

## Direction

A deep green hero (#011812) with a darkened photograph behind the text and a warm gold accent (#fbbf24) on the key phrase. Manrope sets the headline in large weights, and the gold phrase gives the religious focus a clear emphasis. A solid amber button leads the page, and low-contrast trust points along the lower edge keep the mood calm and reverent.

**Mood:** reverent, calm, deep green, warm

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#011812` | Page ground |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#475569` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#fbbf24` | Primary action and highlights |
| Second accent | `#10b981` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#f59e0b` · `#fbbf24` · `#011812` · `#94a3b8` · `#cbd5e1` · `#64748b` · `#10b981` · `#022019` · `#78350f`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Manrope
- **Body:** Manrope
- **Loaded families:** Manrope
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 18px · body 14px
- **Weights in use:** medium, light, semibold
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-xl` (12px)
- **Shadows:** `shadow-amber-900/20`, `shadow-2xl`, `shadow-lg`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-2.5`, `gap-4`

**Primary button**

```html
<a class="w-full sm:w-auto px-8 py-4 bg-amber-500 text-[#011812] rounded-lg font-bold hover:bg-amber-400 transition-all hover:translate-y-[-2px] shadow-[0_0_20px_-5px_rgba(212,175,55,0.4)]">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Stats band (`stats`)
4. Pricing (`pricing`)
5. Schedule (`schedule-agenda`)
6. Testimonials (`testimonials`)
7. Contact form (`contact-form`)
8. FAQ (`faq`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #011812;
  --color-text: #ffffff;
  --color-muted: #475569;
  --color-border: #ffffff;
  --color-accent: #fbbf24;
  --color-accent-2: #10b981;
  --font-display: "Manrope", sans-serif;
  --font-body: "Manrope", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#011812',
    ink: '#ffffff',
    muted: '#475569',
    line: '#ffffff',
    accent: '#fbbf24',
    accent2: '#10b981',
  },
  fontFamily: { display: ['Manrope'], sans: ['Manrope'] },
} }
```

## Do and don't

- **Do:** Set the key headline phrase in gold (#fbbf24) and keep the rest of the headline white
- **Do:** Use the solid amber primary button for the main action and one outlined button beside it
- **Do:** Keep the deep green (#011812) as the ground under every section
- **Don't:** Don't use gold for body text or small labels
- **Don't:** Don't place a light background behind the hero text
- **Don't:** Don't add bright, saturated colours to the green ground

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
