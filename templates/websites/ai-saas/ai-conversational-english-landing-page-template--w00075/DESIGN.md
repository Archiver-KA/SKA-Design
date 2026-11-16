# Design system — AI Conversational English Landing Page Template

`SN-W00075` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark charcoal page carries a large white sans headline, where the key words are set in amber. A pale green primary button sits top right, and a dark voice-interaction panel with a recording label fills the right column. Four stats sit in a row below, each with a coloured figure, so the page reads as a data-led product.

**Mood:** dark, warm, data-led, clear

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#18181b` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#b2a5fe` | Primary action and highlights |
| Second accent | `#b2a5fe` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#9ef0a0` · `#18181b` · `#a1a1aa` · `#b2a5fe` · `#e4e9e5` · `#71717a` · `#27272a` · `#52525b` · `#000000`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 88px · h2 48px · h3 24px · body 14px
- **Weights in use:** medium, light, semibold
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-3xl` (24px), `rounded-[2rem]` (2rem)
- **Shadows:** `shadow-xl`, `shadow-2xl`, `shadow-lg`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Common gaps:** `gap-4`, `gap-2`, `gap-3`

**Primary button**

```html
<a class="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#9EF0A0] text-[#18181B] text-sm font-semibold hover:bg-[#8BE08D] transition-all">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Gallery / portfolio (`gallery-portfolio`)
4. Testimonials (`testimonials`)
5. Call to action (`cta`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #18181b;
  --color-surface: #ffffff;
  --color-text: #ffffff;
  --color-muted: #71717a;
  --color-border: #ffffff;
  --color-accent: #b2a5fe;
  --color-accent-2: #b2a5fe;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#18181b',
    surface: '#ffffff',
    ink: '#ffffff',
    muted: '#71717a',
    line: '#ffffff',
    accent: '#b2a5fe',
    accent2: '#b2a5fe',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the key phrase of the headline in amber
- **Do:** Keep the charcoal page ground with white headlines
- **Do:** Show stats as a row of large figures with small labels below
- **Don't:** Don't use the pale green button colour for body text
- **Don't:** Don't switch to a light page treatment
- **Don't:** Don't put more than four stats in the row

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
