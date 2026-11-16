# Design system — AI Marketing Agency Landing Page Template

`SN-W01413` · agency-studio · dark mode · Sinera Atlas theme `workshop` · language `pt-br`

## Direction

A black page where the headline is set in a heavy white sans, and the middle phrase drops into a bright blue (#0a84ff) at the centre of the message. The eyebrow is a small pill with a blue dot, and the primary button is solid white beside a dark outlined secondary. The black ground and one saturated blue give it a crisp, high-contrast tone.

**Mood:** crisp, high-contrast, dark, bold, tech

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#111216` | Cards, panels, raised areas |
| Text | `#d4d4d4` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#0a84ff` | Primary action and highlights |
| Second accent | `#10b981` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#000000` · `#a3a3a3` · `#0a84ff` · `#262626` · `#737373` · `#111216` · `#404040` · `#4cc9ff` · `#d4d4d4`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 96px · h2 30px · h3 18px · body 14px
- **Weights in use:** semibold, medium, bold
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-2xl` (16px)
- **Shadows:** `shadow-lg`, `shadow-[0_8px_32px_rgba(0,0,0,0.5)]`, `shadow-sm`
- **Content width:** `max-w-7xl`, `max-w-5xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-3`, `gap-2`, `gap-8`

**Primary button**

```html
<a class="block w-full py-3 bg-[#0A84FF] rounded-lg text-center text-white text-sm hover:bg-[#0066CC] font-semibold transition-colors shadow-lg shadow-blue-900/50">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Services (`services`)
4. Feature grid (`features`)
5. Call to action (`cta`)
6. Bento grid (`bento-grid`)
7. Pricing (`pricing`)
8. FAQ (`faq`)
9. Contact form (`contact-form`)
10. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #111216;
  --color-text: #d4d4d4;
  --color-muted: #737373;
  --color-border: #ffffff;
  --color-accent: #0a84ff;
  --color-accent-2: #10b981;
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
    surface: '#111216',
    ink: '#d4d4d4',
    muted: '#737373',
    line: '#ffffff',
    accent: '#0a84ff',
    accent2: '#10b981',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the middle phrase of the headline in blue (#0a84ff) and keep the first and last lines white.
- **Do:** Make the primary button solid white with dark text, beside a dark outlined secondary.
- **Do:** Keep the ground pure black with one blue accent per screen.
- **Don't:** Don't add a second accent hue; the green status dot is the only other colour.
- **Don't:** Don't use blue for body text or for the buttons.
- **Don't:** Don't set the headline in a light weight; it is heavy.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
