# Design system — Dzyen Studio Agency Landing Page Template

`SN-W01559` · agency-studio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A black ground with heavy white Inter headlines and one lime (#a3e635) word in the headline, repeated in the lime call-to-action button. The form panel is a dark card with flat fields and a lime range slider, so the screen is a single lime-and-black pairing. Lime works as the signal colour for the one thing to notice, and nothing else competes with it.

**Mood:** high-contrast, electric, bold, futuristic, focused

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#171717` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#a3e635` | Primary action and highlights |
| Second accent | `#ef4444` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#a3e635` · `#737373` · `#a3a3a3` · `#000000` · `#84cc16` · `#171717` · `#262626` · `#d4d4d4` · `#e5e5e5`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 20px · body 16px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-2xl` (16px)
- **Shadows:** `shadow-2xl`, `shadow`, `shadow-lg`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-4`, `gap-6`

**Primary button**

```html
<a class="bg-lime-400 text-black px-8 py-4 rounded-full text-base font-medium hover:bg-lime-500 transition-colors flex items-center gap-2">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Marquee (`marquee`)
4. Logo cloud (`logo-cloud`)
5. Services (`services`)
6. Gallery / portfolio (`gallery-portfolio`)
7. Process / steps (`how-it-works`)
8. Stats band (`stats`)
9. Testimonials (`testimonials`)
10. FAQ (`faq`)
11. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #171717;
  --color-text: #ffffff;
  --color-muted: #737373;
  --color-border: #ffffff;
  --color-accent: #a3e635;
  --color-accent-2: #ef4444;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#171717',
    ink: '#ffffff',
    muted: '#737373',
    line: '#ffffff',
    accent: '#a3e635',
    accent2: '#ef4444',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use the lime (#a3e635) for the highlighted headline word and the primary button only
- **Do:** Set the form on a dark card (#171717) with flat fields
- **Do:** Keep headlines in Inter at heavy weight and display size
- **Don't:** Don't use lime as a background fill for large areas
- **Don't:** Don't add a second bright accent such as red beside the lime
- **Don't:** Don't set the page on a light ground, since the design depends on black

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
