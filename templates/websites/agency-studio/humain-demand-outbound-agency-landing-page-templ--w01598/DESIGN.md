# Design system — Humain Demand Outbound Agency Landing Page Template

`SN-W01598` · agency-studio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A dark, green-tinged B2B conversion page on near-black (#050505). A large white serif headline carries a mint (#00ffc4) italic phrase that marks the promise, and the mint is the only accent on the page. The primary button is a deep green pill with light text, and small green status badges plus a floating testimonial card add social proof on a centred, symmetrical layout.

**Mood:** confident, dark, b2b, precise

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#050505` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#00ffc4` | Primary action and highlights |
| Second accent | `#facc15` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#00ffc4` · `#171717` · `#737373` · `#d4d4d4` · `#a3a3a3` · `#000000` · `#050505` · `#525252` · `#047857`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display, Geist, Roboto, Montserrat, Poppins
- **Scale (largest breakpoint):** h1 72px · h2 60px · h3 18px · body 14px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-xl` (12px)
- **Shadows:** `shadow-lg`, `shadow-sm`, `shadow-2xl`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Common gaps:** `gap-3`, `gap-2`, `gap-1`

**Primary button**

```html
<a class="group relative bg-[#00ffc4] hover:bg-[#059669] hover:text-white text-black text-xl font-bold px-10 py-5 rounded-full shadow-[0_0_40px_rgba(0,255,196,0.3)] hover:shadow-[0_0_60px_rgba(0,255,196,0.5)] transition-all flex items-center gap-3 justify-center mx-auto">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Call to action (`cta`)
4. Testimonials (`testimonials`)
5. FAQ (`faq`)
6. Gallery / portfolio (`gallery-portfolio`)
7. Footer (`footer`)
8. Feature grid (`features`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #050505;
  --color-surface: #ffffff;
  --color-text: #ffffff;
  --color-muted: #737373;
  --color-border: #ffffff;
  --color-accent: #00ffc4;
  --color-accent-2: #facc15;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#050505',
    surface: '#ffffff',
    ink: '#ffffff',
    muted: '#737373',
    line: '#ffffff',
    accent: '#00ffc4',
    accent2: '#facc15',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use mint (#00ffc4) only for the italic phrase in the headline and for small status badges
- **Do:** Keep the page on near-black with white headline text
- **Do:** Set the primary CTA as a rounded-full pill with one arrow
- **Don't:** Don't use mint as a section background fill
- **Don't:** Don't set body copy in mint
- **Don't:** Don't stack more than one floating proof card on one screen

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
