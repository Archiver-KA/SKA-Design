# Design system — IoT Investor Platform Landing Page Template

`SN-W00986` · fintech-crypto · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark, centred IoT hero on a near-black ground (#0a0a0a) with large white sans-serif headlines set in tight leading. The one colour is a warm yellow (#eab308), used on the primary button; the secondary button is a dark grey fill. Small letter-spaced grey labels frame the headline, which keeps the page direct and product-led.

**Mood:** direct, high-contrast, minimal, technical, confident

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Text | `#ffffff` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#eab308` | Primary action and highlights |
| Second accent | `#10b981` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#000000` · `#fafafa` · `#eab308` · `#111111` · `#0a0a0a` · `#f5f5f7` · `#f9fafb` · `#050505` · `#ca8a04`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 60px · h3 60px · body 18px
- **Weights in use:** light, medium, normal
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-2xl` (16px), `rounded-full` (9999px), `rounded-md` (6px)
- **Shadows:** `shadow-[0_8px_24px_rgba(0,0,0,0.04)]`, `shadow-sm`, `shadow-[0_2px_10px_rgba(0,0,0,0.01)]`
- **Content width:** `max-w-7xl`, `max-w-[900px]`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-6`, `gap-4`, `gap-3`

**Primary button**

```html
<a class="px-8 py-3.5 rounded-md bg-[#eab308] text-white text-lg font-light hover:bg-[#ca8a04] transition-colors flex items-center gap-2">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. Marquee (`marquee`)
3. Map / location (`map-location`)
4. FAQ (`faq`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), GSAP, Three.js
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #0a0a0a;
  --color-text: #ffffff;
  --color-border: #ffffff;
  --color-accent: #eab308;
  --color-accent-2: #10b981;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 16px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0a0a0a',
    ink: '#ffffff',
    line: '#ffffff',
    accent: '#eab308',
    accent2: '#10b981',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use the yellow (#eab308) only for the primary call to action.
- **Do:** Set headlines in the sans-serif display face at large size with tight leading.
- **Do:** Keep the hero centred, with small letter-spaced labels above the headline.
- **Don't:** Don't introduce a second bright colour into the hero.
- **Don't:** Don't use a serif face for headings.
- **Don't:** Don't place a light background behind the hero copy.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
