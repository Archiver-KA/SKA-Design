# Design system — Artist Portfolio Landing Page Template

`SN-W01813` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `es`

## Direction

Gallery and editorial: a dark ground (#0b0b0d) with a full-bleed painting behind a large white serif headline, where the word transforman is set in italic. The hero centres its text with two outlined buttons below. The artwork supplies the only colour, while the interface stays black, white and grey, so it works as a quiet frame for the art.

**Mood:** gallery, elegant, dark, quiet

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0b0b0d` | Page ground |
| Surface | `#1a1a1c` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#8a8a8a` | Secondary copy, captions |
| Border | `#242427` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#ffffff` · `#8a8a8a` · `#242427` · `#000000` · `#0b0b0d` · `#b8b8b8` · `#1a1a1c` · `#333333` · `#3a3a3e`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Cormorant Garamond
- **Body:** Inter
- **Loaded families:** Cormorant Garamond, Inter, Geist, Roboto, Montserrat, Poppins
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 18px · body 14px
- **Weights in use:** medium, light
- **Letter spacing:** `tracking-widest`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px)
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-3`, `gap-8`, `gap-6`

**Primary button**

```html
<a class="w-full sm:w-auto px-8 py-3 bg-white text-black text-sm uppercase tracking-widest hover:bg-[#B8B8B8] transition-colors duration-300 font-medium">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Gallery / portfolio (`gallery-portfolio`)
5. Product grid (`product-grid`)
6. Contact form (`contact-form`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN), AOS scroll reveal
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #0b0b0d;
  --color-surface: #1a1a1c;
  --color-text: #ffffff;
  --color-muted: #8a8a8a;
  --color-border: #242427;
  --font-display: "Cormorant Garamond", serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0b0b0d',
    surface: '#1a1a1c',
    ink: '#ffffff',
    muted: '#8a8a8a',
    line: '#242427',
  },
  fontFamily: { display: ['Cormorant Garamond'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headlines in white serif with one italic word
- **Do:** Let the artwork supply the colour and keep the interface neutral
- **Do:** Use outlined buttons over the photograph for calls to action
- **Don't:** Don't add an accent colour to the interface
- **Don't:** Don't place the headline over a busy part of the painting without darkening it
- **Don't:** Don't set headlines in a sans-serif face

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
