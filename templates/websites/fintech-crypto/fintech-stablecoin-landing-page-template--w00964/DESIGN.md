# Design system — FinTech Stablecoin Landing Page Template

`SN-W00964` · fintech-crypto · light mode · Sinera Atlas theme `circuit` · language `ru`

## Direction

A near-white page with a faint blue haze and a few small dots as the only decoration, which keeps the ground quiet. Blue (#315efb) is the one saturated colour and appears on the header button and the highlight. The hero text sits on a neutral ground with one blue call to action, and the copy is in Russian.

**Mood:** quiet, clean, blue, high-trust, minimal

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#f9fafb` | Cards, panels, raised areas |
| Text | `#111827` | Headings and primary copy |
| Muted text | `#4b5563` | Secondary copy, captions |
| Border | `#f3f4f6` | Hairlines, dividers, outlines |
| Accent | `#315efb` | Primary action and highlights |
| Second accent | `#4ade80` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#315efb` · `#111827` · `#eff6ff` · `#4b5563` · `#f3f4f6` · `#f9fafb` · `#dbeafe` · `#e5e7eb` · `#9ca3af`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 20px · body 18px
- **Weights in use:** medium, semibold, normal
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-3xl` (24px)
- **Shadows:** `shadow-sm`, `shadow-md`, `shadow-[0_8px_30px_-4px_rgba(49,94,251,0.12)]`
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-4`, `gap-6`

**Primary button**

```html
<a class="inline-flex items-center justify-center rounded-full bg-[#315EFB] px-6 py-2.5 text-base font-medium text-white hover:bg-blue-700 transition-all duration-300 hover:shadow-md hover:shadow-blue-500/20 hover:-translate-y-0.5 btn-glow">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Feature grid (`features`)
5. Bento grid (`bento-grid`)
6. FAQ (`faq`)
7. Call to action (`cta`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #f9fafb;
  --color-text: #111827;
  --color-muted: #4b5563;
  --color-border: #f3f4f6;
  --color-accent: #315efb;
  --color-accent-2: #4ade80;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#f9fafb',
    ink: '#111827',
    muted: '#4b5563',
    line: '#f3f4f6',
    accent: '#315efb',
    accent2: '#4ade80',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use blue (#315efb) for the single primary call to action.
- **Do:** Keep the page ground near-white with a faint blue haze.
- **Do:** Use small dots or thin lines as the only decoration.
- **Don't:** Don't add a second saturated colour.
- **Don't:** Don't place dense imagery behind the hero text.
- **Don't:** Don't use the blue for long text.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
