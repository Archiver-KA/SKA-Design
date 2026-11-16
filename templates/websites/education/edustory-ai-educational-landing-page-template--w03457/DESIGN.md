# Design system — EduStory AI Educational Landing Page Template

`SN-W03457` · education · dark mode · Sinera Atlas theme `calm` · language `en`

## Direction

A dark, cinematic landing page for a creative tool. The hero headline carries a gradient fill that runs across the second line in teal and green, set on a near-black ground (#030712) with soft glowing shapes behind it. Cards and panels use translucent surfaces and rounded corners, so the page reads as a lit stage for the product.

**Mood:** cinematic, luminous, playful, polished, dark

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#030712` | Page ground |
| Surface | `#111827` | Cards, panels, raised areas |
| Text | `#f3f4f6` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#10b981` | Primary action and highlights |
| Second accent | `#facc15` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#9ca3af` · `#1f2937` · `#111827` · `#374151` · `#facc15` · `#d1d5db` · `#6b7280` · `#000000` · `#10b981`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 96px · h2 60px · h3 18px · body 12px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-xl` (12px)
- **Shadows:** `shadow-xl`, `shadow-lg`, `shadow-[0_8px_16px_-4px_rgba(151,65,252,0.2)]`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-20`, `py-16`
- **Common gaps:** `gap-2`, `gap-4`, `gap-1`

**Primary button**

```html
<a class="liquid-glass-button relative inline-flex items-center justify-center h-10 px-6 rounded-xl text-white/90 font-medium text-sm cursor-pointer outline-none overflow-hidden bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-xl border border-white/15 shadow-lg hover:scale-105 hover:shadow-xl hover:-translate-y-0.5 active:scale-98 active:translate-y-px transition-all duration-300 ease-out">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Feature grid (`features`)
5. Process / steps (`how-it-works`)
6. Bento grid (`bento-grid`)
7. About (`about`)
8. Listings (`listings`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #030712;
  --color-surface: #111827;
  --color-text: #f3f4f6;
  --color-muted: #6b7280;
  --color-border: #ffffff;
  --color-accent: #10b981;
  --color-accent-2: #facc15;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#030712',
    surface: '#111827',
    ink: '#f3f4f6',
    muted: '#6b7280',
    line: '#ffffff',
    accent: '#10b981',
    accent2: '#facc15',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the emphasis words of the hero headline with a teal-to-green gradient fill
- **Do:** Place feature cards on the #111827 surface with rounded-2xl corners
- **Do:** Use blurred glow shapes only behind the hero, not behind the cards
- **Don't:** Don't use light backgrounds for sections; the dark ground is the base
- **Don't:** Don't fill cards with solid bright colour; keep them translucent
- **Don't:** Don't use more than one gradient direction in a headline

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
