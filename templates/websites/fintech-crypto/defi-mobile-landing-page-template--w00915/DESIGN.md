# Design system — DeFi Mobile Landing Page Template

`SN-W00915` · fintech-crypto · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A light, airy DeFi mobile hero on near-white, with bold near-black Inter headlines and a single blue [#2563eb] pill as the action. The second headline line is set in grey. Small white cards float over the hero with a label and a bold value for latency and audit status, and a faint phone-app mock sits between them. Shadows are minimal and space does most of the lifting.

**Mood:** clean, light, technical, airy

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#111827` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#f3f4f6` | Hairlines, dividers, outlines |
| Accent | `#2563eb` | Primary action and highlights |
| Second accent | `#99f6e4` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#6b7280` · `#111827` · `#000000` · `#f3f4f6` · `#f9fafb` · `#dbeafe` · `#e5e7eb` · `#010101` · `#989898`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Manrope
- **Body:** Manrope
- **Loaded families:** Manrope, Quicksand
- **Scale (largest breakpoint):** h1 72px · h2 60px · h3 18px · body 14px
- **Weights in use:** semibold, medium, bold
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-[2rem]` (2rem)
- **Shadows:** `shadow-[0_2px_20px_-4px_rgba(0,0,0,0.04)]`, `shadow-[0_8px_30px_rgba(0,0,0,0.04)]`, `shadow-lg`
- **Content width:** `max-w-7xl`, `max-w-[500px]`
- **Common gaps:** `gap-8`, `gap-x-8`, `gap-y-8`

**Primary button**

```html
<a class="bg-blue-600 text-white px-8 py-3 rounded-full text-base font-medium hover:bg-blue-700 transition-all shadow-[0_4px_14px_0_rgba(37,99,235,0.39)] active:scale-95">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Integrations (`integrations`)
4. Process / steps (`how-it-works`)
5. Newsletter signup (`newsletter`)
6. Footer (`footer`)
7. Modal / overlay (`modal-overlay`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN), Unicorn Studio (WebGL scenes)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #ffffff;
  --color-text: #111827;
  --color-muted: #6b7280;
  --color-border: #f3f4f6;
  --color-accent: #2563eb;
  --color-accent-2: #99f6e4;
  --font-display: "Manrope", sans-serif;
  --font-body: "Manrope", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#ffffff',
    ink: '#111827',
    muted: '#6b7280',
    line: '#f3f4f6',
    accent: '#2563eb',
    accent2: '#99f6e4',
  },
  fontFamily: { display: ['Manrope'], sans: ['Manrope'] },
} }
```

## Do and don't

- **Do:** Use the blue (#2563eb) for the primary button only
- **Do:** Set the second headline line in grey below a near-black first line
- **Do:** Float status cards in white with a small label and a bold value
- **Don't:** Don't use the pale blue (#dbeafe) as a page background; the ground is near-white
- **Don't:** Don't add heavy shadows to floating cards; they are lifted by space alone
- **Don't:** Don't set headline text in blue; headlines are near-black

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
