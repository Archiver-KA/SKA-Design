# Design system — Beauty Skincare Landing Page Template

`SN-W02729` · beauty-fashion · light mode · Sinera Atlas theme `dwell` · language `en`

## Direction

Light, airy skincare page with a high-contrast black serif headline and one word set in warm tan to add emphasis. The ground is off-white with a faint mint wash on the right, and the primary button is a pale tan pill with a dark label. A phone-shaped product mockup with hairline-bordered cards explains the routine without heavy decoration.

**Mood:** clean, airy, editorial, clinical

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#f5faf8` | Cards, panels, raised areas |
| Text | `#0f172a` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#d1ebe5` | Primary action and highlights |
| Second accent | `#818cf8` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#171717` · `#737373` · `#262626` · `#a3a3a3` · `#f5f5f5` · `#d4d4d4` · `#525252` · `#e5e5e5` · `#404040`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display, Geist, Roboto, Montserrat, Poppins
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 18px · body 12px
- **Weights in use:** bold, medium, semibold
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-[2rem]` (2rem)
- **Shadows:** `shadow-sm`, `shadow-lg`, `shadow-[0_25px_60px_-15px_rgba(0,0,0,0.1)]`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-12`
- **Common gaps:** `gap-2`, `gap-6`, `gap-3`

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Stats band (`stats`)
4. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #f5faf8;
  --color-text: #0f172a;
  --color-muted: #737373;
  --color-border: #ffffff;
  --color-accent: #d1ebe5;
  --color-accent-2: #818cf8;
  --font-display: "Playfair Display", serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#f5faf8',
    ink: '#0f172a',
    muted: '#737373',
    line: '#ffffff',
    accent: '#d1ebe5',
    accent2: '#818cf8',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in Playfair Display at very large size, and highlight one word in warm tan
- **Do:** Use pale tan pills with dark labels for primary actions
- **Do:** Keep the product mockup as a phone frame with hairline-bordered cards
- **Don't:** Don't use a saturated colour for the primary button; the palette is neutral
- **Don't:** Don't add shadows to the mockup cards; separation uses hairline borders
- **Don't:** Don't set body copy in the serif; body text is Inter

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
