# Design system — Executive Coaching Landing Page Template

`SN-W03464` · education · dark mode · Sinera Atlas theme `calm` · language `en`

## Direction

A dark, warm coaching page on a near-black ground (#0c0b0f) with a large cream headline set in Instrument Serif, with an italic ampersand for character. Gold (#c9a46c) is the only accent, used for the navigation button and the primary call to action, while the body is set in a clean sans. Square-cornered panels and hairline dividers give a restrained, premium tone.

**Mood:** premium, warm, restrained, editorial, dark

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0c0b0f` | Page ground |
| Surface | `#14131a` | Cards, panels, raised areas |
| Text | `#f2f0ed` | Headings and primary copy |
| Muted text | `#8c8a94` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#c9a46c` | Primary action and highlights |
| Second accent | `#ef4444` | Supporting highlights |

Palette by frequency of use: `#c9a46c` · `#ffffff` · `#8c8a94` · `#0c0b0f` · `#f2f0ed` · `#14131a` · `#ef4444` · `#f87171`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Instrument Serif
- **Body:** Outfit
- **Loaded families:** Instrument Serif, Outfit
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 20px · body 14px
- **Weights in use:** light, medium, bold
- **Letter spacing:** `tracking-wide`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-none` (0), `rounded-sm` (2px)
- **Shadows:** `shadow-[0_0_10px_rgba(201,164,108,0.3)]`, `shadow-2xl`, `shadow-[0_0_30px_rgba(201,164,108,0.3)]`
- **Content width:** `max-w-[1200px]`, `max-w-[200px]`
- **Section padding:** `py-24`, `py-36`
- **Common gaps:** `gap-3`, `gap-2`, `gap-4`

**Primary button**

```html
<a class="hidden md:flex items-center gap-2 text-sm font-medium text-page bg-gold px-5 py-2.5 hover:bg-white transition-colors duration-300">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Logo cloud (`logo-cloud`)
4. Testimonials (`testimonials`)
5. Services (`services`)
6. Stats band (`stats`)
7. Timeline (`timeline`)
8. FAQ (`faq`)
9. Call to action (`cta`)
10. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #0c0b0f;
  --color-surface: #14131a;
  --color-text: #f2f0ed;
  --color-muted: #8c8a94;
  --color-border: #ffffff;
  --color-accent: #c9a46c;
  --color-accent-2: #ef4444;
  --font-display: "Instrument Serif", serif;
  --font-body: "Outfit", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0c0b0f',
    surface: '#14131a',
    ink: '#f2f0ed',
    muted: '#8c8a94',
    line: '#ffffff',
    accent: '#c9a46c',
    accent2: '#ef4444',
  },
  fontFamily: { display: ['Instrument Serif'], sans: ['Outfit'] },
} }
```

## Do and don't

- **Do:** Set headlines in Instrument Serif in cream (#f2f0ed)
- **Do:** Use gold (#c9a46c) for the primary button and one highlight per section
- **Do:** Keep panels square-cornered and divide them with hairline rules
- **Don't:** Don't add a second bright accent beside the gold
- **Don't:** Don't set body copy in the serif; it stays in the sans
- **Don't:** Don't use white backgrounds for sections; the dark ground carries the page

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
