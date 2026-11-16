# Design system — Executive Search Landing Page Template

`SN-W00377` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A near-black finance page with a white and grey headline set in Manrope, its final line picked out in gold (#ffd369). Gold is the only accent and appears on the primary button, a small label row and a status tag, which keeps the tone sober and premium. The layout is a left column of copy and a dark framed image on the right, with a small quality card overlapping the frame.

**Mood:** sober, premium, dark, financial, restrained

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#050505` | Page ground |
| Surface | `#333333` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#ffd369` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#a3a3a3` · `#737373` · `#d4d4d4` · `#404040` · `#ffd369` · `#050505` · `#333333` · `#555555` · `#000000`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Manrope
- **Body:** Manrope
- **Loaded families:** Manrope
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 18px · body 14px
- **Weights in use:** normal, semibold, medium
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-lg` (8px), `rounded-full` (9999px), `rounded-xl` (12px)
- **Shadows:** `shadow-2xl`, `shadow-[0_0_25px_-5px_rgba(242,201,76,0.4)]`, `shadow-black`
- **Content width:** `max-w-4xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-12`
- **Common gaps:** `gap-4`, `gap-2`, `gap-8`

**Primary button**

```html
<a class="px-8 py-4 bg-gold-gradient text-charcoal-900 font-medium rounded-lg hover:shadow-[0_0_25px_-5px_rgba(242,201,76,0.4)] transition-all duration-300 text-center flex items-center justify-center gap-2">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Services (`services`)
4. Timeline (`timeline`)
5. Process / steps (`how-it-works`)
6. Map / location (`map-location`)
7. Contact form (`contact-form`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #050505;
  --color-surface: #333333;
  --color-text: #ffffff;
  --color-muted: #737373;
  --color-border: #ffffff;
  --color-accent: #ffd369;
  --font-display: "Manrope", sans-serif;
  --font-body: "Manrope", sans-serif;
  --radius: 8px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#050505',
    surface: '#333333',
    ink: '#ffffff',
    muted: '#737373',
    line: '#ffffff',
    accent: '#ffd369',
  },
  fontFamily: { display: ['Manrope'], sans: ['Manrope'] },
} }
```

## Do and don't

- **Do:** Set the headline in Manrope at display size: white first line, grey middle line, gold final line (#ffd369).
- **Do:** Use the gold (#ffd369) for the primary button and one highlight phrase per headline.
- **Do:** Keep the image frame dark with thin rules, and let a small status card overlap its lower corner.
- **Don't:** Don't use gold for body text; body copy is grey (#a3a3a3).
- **Don't:** Don't switch to a light background; the ground is near-black.
- **Don't:** Don't add a third accent colour; the page is charcoal, white, grey and gold.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
