# Design system — Harrison & Co. Home Improvement Landing Page Template

`SN-W02040` · portfolio · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

An editorial stance on a warm cream ground (#f5f0e9) with a large Cormorant Garamond headline set in dark ink (#171411). Interface chrome is kept quiet: near-black pill buttons and flat surfaces, with Manrope for body copy. The warm kitchen photography supplies the colour, so the page itself stays neutral and lets the image carry the mood.

**Mood:** editorial, warm, refined, quiet, photographic

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f5f0e9` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#171411` | Headings and primary copy |
| Muted text | `#7d7267` | Secondary copy, captions |
| Border | `#171411` | Hairlines, dividers, outlines |
| Accent | `#171411` | Primary action and highlights |

Palette by frequency of use: `#171411` · `#ffffff` · `#d8c9b8` · `#7d7267` · `#9a744d` · `#f5f0e9` · `#eee5da` · `#171614` · `#78716c` · `#a67b4f`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Cormorant Garamond
- **Body:** Manrope
- **Loaded families:** Cormorant Garamond, Manrope, Newsreader
- **Scale (largest breakpoint):** h1 72px · h2 62px · h3 24px · body 14px
- **Weights in use:** medium, normal, semibold
- **Letter spacing:** `tracking-[-0.055em]`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-[12px]` (12px), `rounded-[1.25rem]` (1.25rem)
- **Shadows:** `shadow-premium`, `shadow-lg`, `shadow-stone-900/20`
- **Content width:** `max-w-[520px]`, `max-w-[1180px]`
- **Section padding:** `py-20`, `py-28`
- **Common gaps:** `gap-3`, `gap-4`, `gap-6`

**Primary button**

```html
<a class="group inline-flex items-center justify-center gap-3 rounded-full bg-[#171614] px-6 py-4 text-sm font-medium text-white shadow-lg shadow-stone-900/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#171411]">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Stats band (`stats`)
4. Services (`services`)
5. Case studies (`case-studies`)
6. Testimonials (`testimonials`)
7. FAQ (`faq`)
8. Contact form (`contact-form`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #f5f0e9;
  --color-surface: #ffffff;
  --color-text: #171411;
  --color-muted: #7d7267;
  --color-border: #171411;
  --color-accent: #171411;
  --font-display: "Cormorant Garamond", serif;
  --font-body: "Manrope", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f5f0e9',
    surface: '#ffffff',
    ink: '#171411',
    muted: '#7d7267',
    line: '#171411',
    accent: '#171411',
  },
  fontFamily: { display: ['Cormorant Garamond'], sans: ['Manrope'] },
} }
```

## Do and don't

- **Do:** Set headlines in Cormorant Garamond at large size with tight line spacing.
- **Do:** Use near-black (#171411) pill buttons for every primary action.
- **Do:** Let photography carry the colour; keep the page itself to cream, ink and taupe.
- **Don't:** Don't introduce a bright accent colour; the palette stops at cream, ink and taupe.
- **Don't:** Don't set body copy in the serif; Manrope is for text.
- **Don't:** Don't add drop shadows to cards or buttons.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
