# Design system — Adventure Travel Landing Page Template

`SN-W03012` · travel · dark mode · Sinera Atlas theme `dwell` · language `pt-br`

## Direction

A dark charcoal hero with an oversized uppercase sans headline in white, where the second word is set in burnt orange (#d97706). The ground is a warm dark brown rather than black, and the orange carries both the headline and the primary action. Small uppercase tags and square-edged labels give it a rugged, expedition feel.

**Mood:** rugged, warm, bold, expedition

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#2c2a26` | Page ground |
| Surface | `#2c2a26` | Cards, panels, raised areas |
| Text | `#f5f5f5` | Headings and primary copy |
| Muted text | `#ffffff` | Secondary copy, captions |
| Border | `#2c2a26` | Hairlines, dividers, outlines |
| Accent | `#d97706` | Primary action and highlights |

Palette by frequency of use: `#2c2a26` · `#ffffff` · `#a63c06` · `#6b7280` · `#9ca3af` · `#e8e6e1` · `#000000` · `#d97706` · `#d1d5db`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Manrope
- **Body:** Manrope
- **Loaded families:** Anton, Manrope, Permanent Marker
- **Scale (largest breakpoint):** h1 160px · h2 128px · h3 60px · body 14px
- **Weights in use:** bold, medium, black
- **Letter spacing:** `tracking-widest`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-none` (0), `rounded-full` (9999px)
- **Shadows:** `shadow-[8px_8px_0px_0px_rgba(166,60,6,1)]`, `shadow-lg`, `shadow-xl`
- **Content width:** `max-w-[1400px]`
- **Section padding:** `py-24`, `py-16`
- **Common gaps:** `gap-2`, `gap-4`, `gap-6`

**Primary button**

```html
<a class="bg-[#A63C06] text-white px-6 py-3 font-display tracking-widest text-sm hover:bg-white hover:text-[#2C2A26] transition-colors duration-300 clip-path-button shadow-lg">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Gallery / portfolio (`gallery-portfolio`)
5. Product grid (`product-grid`)
6. Listings (`listings`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #2c2a26;
  --color-surface: #2c2a26;
  --color-text: #f5f5f5;
  --color-muted: #ffffff;
  --color-border: #2c2a26;
  --color-accent: #d97706;
  --font-display: "Manrope", sans-serif;
  --font-body: "Manrope", sans-serif;
  --radius: 0;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#2c2a26',
    surface: '#2c2a26',
    ink: '#f5f5f5',
    muted: '#ffffff',
    line: '#2c2a26',
    accent: '#d97706',
  },
  fontFamily: { display: ['Manrope'], sans: ['Manrope'] },
} }
```

## Do and don't

- **Do:** Set the headline in heavy uppercase sans, with the second word in orange (#d97706)
- **Do:** Keep the ground warm charcoal (#2c2a26), not black
- **Do:** Use the orange for the primary button and the headline accent only
- **Don't:** Don't use the burnt orange (#a63c06) as a background; it is an accent here
- **Don't:** Don't round the small tags; they stay square
- **Don't:** Don't set paragraphs in pure white; use off-white text

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
