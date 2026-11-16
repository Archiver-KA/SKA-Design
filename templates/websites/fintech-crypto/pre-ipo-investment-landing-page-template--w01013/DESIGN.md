# Design system — Pre-IPO Investment Landing Page Template

`SN-W01013` · fintech-crypto · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark, urgent offer page on black (#000000), with a large white sans-serif headline and the key phrase in cyan (#00b7eb). Small outlined pill badges above the headline use red, yellow and blue to signal urgency and accreditation. The page is high-contrast and countdown-driven, with cyan reserved for the headline phrase and the offer figures.

**Mood:** urgent, high-contrast, financial, dark, energetic

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#4b5563` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#4b5563` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#00b7eb` | Primary action and highlights |
| Second accent | `#22c55e` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#00b7eb` · `#000000` · `#22c55e` · `#6b7280` · `#9ca3af` · `#ef4444` · `#4b5563` · `#1f2937` · `#f87171`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 96px · h2 36px · h3 18px · body 12px
- **Weights in use:** medium, semibold, normal
- **Letter spacing:** `tracking-wide`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-sm` (2px)
- **Shadows:** `shadow-[0_0_40px_rgba(0,183,235,0.4)]`, `shadow-[0_0_15px_rgba(34,197,94,0.3)]`, `shadow-[0_0_15px_rgba(0,183,235,0.8)]`
- **Content width:** `max-w-6xl`, `max-w-7xl`
- **Common gaps:** `gap-2`, `gap-6`, `gap-3`

**Primary button**

```html
<a class="group relative inline-flex items-center justify-center gap-3 bg-[#00b7eb] hover:bg-[#00d4ff] text-black text-lg md:text-xl font-semibold py-6 px-12 rounded-full transition-all duration-300 hover:scale-[1.02] shadow-[0_0_40px_rgba(0,183,235,0.4)]">…</a>
```

## Page structure

Blocks in page order:

1. 3D / canvas scene (`3d-canvas`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Product grid (`product-grid`)
5. Stats band (`stats`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Spline 3D
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #4b5563;
  --color-text: #ffffff;
  --color-muted: #4b5563;
  --color-border: #ffffff;
  --color-accent: #00b7eb;
  --color-accent-2: #22c55e;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#4b5563',
    ink: '#ffffff',
    muted: '#4b5563',
    line: '#ffffff',
    accent: '#00b7eb',
    accent2: '#22c55e',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the key headline phrase in cyan (#00b7eb) and keep the rest white.
- **Do:** Use small outlined pill badges above the headline to flag urgency.
- **Do:** Keep the hero centred above a single 3D element.
- **Don't:** Don't use cyan for body copy.
- **Don't:** Don't set the offer headline in a light weight.
- **Don't:** Don't use green as an accent in the hero.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
