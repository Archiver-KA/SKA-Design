# Design system — Platform Features Showcase

`SN-W04254` · other-landing · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A black features page with a violet gradient on the first word of the headline, which sets the page's tone. Feature cards are dark glass panels with small violet icon chips, and one wide card carries a large glowing lock icon in a purple-lit tile. Sans-serif type is set in white with muted grey body text, so the violet does the emphasis work.

**Mood:** dark, glassy, violet, feature-led

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#9ca3af` | Secondary copy, captions |
| Border | `#374151` | Hairlines, dividers, outlines |
| Accent | `#c084fc` | Primary action and highlights |
| Second accent | `#818cf8` | Supporting highlights |

Palette by frequency of use: `#000000` · `#9ca3af` · `#ffffff` · `#818cf8` · `#c084fc` · `#9f1239` · `#881337` · `#d1d5db` · `#1e40af` · `#fda4af`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** system sans-serif
- **Body:** system sans-serif
- **Scale (largest breakpoint):** h1 60px · h2 36px · h3 20px · body 20px
- **Weights in use:** extralight, medium, light
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-xl` (12px), `rounded-full` (9999px), `rounded-2xl` (16px)
- **Content width:** `max-w-3xl`, `max-w-2xl`
- **Section padding:** `py-16`, `py-24`
- **Common gaps:** `gap-8`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="bg-white text-black font-light rounded-md px-6 py-3 hover:bg-opacity-90 transition-all">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** inline SVG

## Tokens

```css
:root {
  --color-background: #000000;
  --color-text: #ffffff;
  --color-muted: #9ca3af;
  --color-border: #374151;
  --color-accent: #c084fc;
  --color-accent-2: #818cf8;
  --font-display: "system sans-serif", serif;
  --font-body: "system sans-serif", serif;
  --radius: 12px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    ink: '#ffffff',
    muted: '#9ca3af',
    line: '#374151',
    accent: '#c084fc',
    accent2: '#818cf8',
  },
  fontFamily: { display: ['system sans-serif'], sans: ['system sans-serif'] },
} }
```

## Do and don't

- **Do:** Set the first headline word with a violet gradient (#c084fc to #818cf8)
- **Do:** Use violet icon chips on dark glass feature cards
- **Do:** Keep body text muted grey and headings white
- **Don't:** Don't use the violet gradient on body copy
- **Don't:** Don't put light cards on the black ground
- **Don't:** Don't add more than one large glowing icon per section

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
