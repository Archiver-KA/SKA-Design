# Design system — VANTAGE Design Systems Landing Page Template

`SN-W02273` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A high-contrast agency page on a near-black ground (#050505), with a large bold white sans headline whose second line is set in acid lime (#ccff00). Both buttons are hard-edged, one a skewed lime block and the other a dark grey block, so the controls feel as blunt as the headline. Lime is the single accent, and the lime second line over the black ground is what makes it recognisable.

**Mood:** brutalist, high-contrast, bold, futuristic, confident

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#050505` | Page ground |
| Surface | `#111111` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#1a1a1a` | Hairlines, dividers, outlines |
| Accent | `#ccff00` | Primary action and highlights |

Palette by frequency of use: `#ccff00` · `#1a1a1a` · `#050505` · `#ffffff` · `#111111` · `#333333` · `#6b7280` · `#9ca3af` · `#222222` · `#d1d5db`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, JetBrains Mono, Clash Display
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 20px · body 16px
- **Weights in use:** medium, bold, normal
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-sm` (2px), `rounded-none` (0)
- **Shadows:** `shadow-2xl`
- **Content width:** `max-w-screen-2xl`, `max-w-5xl`
- **Section padding:** `py-32`
- **Common gaps:** `gap-2`, `gap-4`, `gap-6`

**Primary button**

```html
<a class="clip-btn bg-[#CCFF00] text-[#050505] px-12 py-5 font-bold hover:scale-105 transition-transform flex items-center gap-2 w-full sm:w-auto justify-center">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Marquee (`marquee`)
5. Stats band (`stats`)
6. Feature grid (`features`)
7. Process / steps (`how-it-works`)
8. Case studies (`case-studies`)
9. Testimonials (`testimonials`)
10. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #050505;
  --color-surface: #111111;
  --color-text: #ffffff;
  --color-muted: #6b7280;
  --color-border: #1a1a1a;
  --color-accent: #ccff00;
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
    surface: '#111111',
    ink: '#ffffff',
    muted: '#6b7280',
    line: '#1a1a1a',
    accent: '#ccff00',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the second headline line in the lime (#ccff00) at the same size as the first.
- **Do:** Use the lime for the primary button and the one highlight per section.
- **Do:** Keep buttons hard-edged, with the primary as a skewed lime block.
- **Don't:** Don't use the lime for body text; it is reserved for headlines and the primary action.
- **Don't:** Don't round the buttons; the square edges are part of the style.
- **Don't:** Don't add drop shadows; depth comes from the black and grey blocks.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
