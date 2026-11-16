# Design system — Telvox AI Voice Agent Landing Page Template

`SN-W00772` · ai-saas · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A white hero with a large, centred Inter Tight headline in two tones: the first line near-black and the second in mid-grey. A near-black pill button sits beside an outline secondary, and a dark dashboard mockup is set low on the page. Colour is absent from the hero, so the product screen and the black buttons carry the contrast.

**Mood:** clean, neutral, product-led, centred

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#f9fafb` | Cards, panels, raised areas |
| Text | `#4b5563` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#22c55e` | Primary action and highlights |
| Second accent | `#c084fc` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#111827` · `#6b7280` · `#9ca3af` · `#f3f4f6` · `#4b5563` · `#f9fafb` · `#000000` · `#d1d5db` · `#e5e7eb`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter Tight
- **Body:** Inter Tight
- **Loaded families:** Inter Tight
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 24px · body 14px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded` (4px)
- **Shadows:** `shadow-lg`, `shadow-2xl`, `shadow-sm`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="px-5 py-2 rounded-full bg-gray-900 text-white text-sm font-medium hover:bg-gray-800 transition-all shadow-lg shadow-gray-900/10">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Booking form (`booking`)
4. Stats band (`stats`)
5. Schedule (`schedule-agenda`)
6. Process / steps (`how-it-works`)
7. Team (`team`)
8. Integrations (`integrations`)
9. Code / terminal (`code-terminal`)
10. Pricing (`pricing`)
11. Call to action (`cta`)
12. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #f9fafb;
  --color-text: #4b5563;
  --color-muted: #6b7280;
  --color-border: #ffffff;
  --color-accent: #22c55e;
  --color-accent-2: #c084fc;
  --font-display: "Inter Tight", sans-serif;
  --font-body: "Inter Tight", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#f9fafb',
    ink: '#4b5563',
    muted: '#6b7280',
    line: '#ffffff',
    accent: '#22c55e',
    accent2: '#c084fc',
  },
  fontFamily: { display: ['Inter Tight'], sans: ['Inter Tight'] },
} }
```

## Do and don't

- **Do:** Set the headline in Inter Tight at large size, centred, with the second line in grey
- **Do:** Use a near-black pill for the primary button and an outline pill beside it
- **Do:** Place the dark dashboard mockup below the copy as the hero visual
- **Don't:** Don't add a colour fill to the hero; the page stays white and grey
- **Don't:** Don't set the second headline line in near-black
- **Don't:** Don't use the green accent (#22c55e) on buttons; it does not show in the hero

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
