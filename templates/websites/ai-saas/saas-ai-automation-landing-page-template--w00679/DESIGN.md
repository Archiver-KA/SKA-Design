# Design system — SaaS AI Automation Landing Page Template

`SN-W00679` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark, centred SaaS hero with a large white sans headline in two lines and a grey, light-weight subline, all on a near-black ground. Below the copy, a dark product window shows a billing record, with a small blue highlight on a discount and muted status tags. The page reads as a precise, enterprise-grade tool, and the hero relies on the screen to show the product.

**Mood:** enterprise, dark, precise, quiet

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0c0d0f` | Page ground |
| Surface | `#e5e7eb` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#7e828a` | Secondary copy, captions |
| Border | `#2e2e32` | Hairlines, dividers, outlines |
| Accent | `#3b82f6` | Primary action and highlights |
| Second accent | `#22c55e` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#b0b3b8` · `#2e2e32` · `#7e828a` · `#3b82f6` · `#15171b` · `#60a5fa` · `#0c0d0f` · `#4a4d54` · `#22c55e`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 20px · body 14px
- **Weights in use:** medium, normal, bold
- **Letter spacing:** `tracking-wider`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded` (4px), `rounded-lg` (8px)
- **Shadows:** `shadow-2xl`, `shadow-sm`, `shadow-[0_0_15px_rgba(0,0,0,0.5)]`
- **Content width:** `max-w-[1200px]`, `max-w-4xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-2`, `gap-3`, `gap-2.5`

**Primary button**

```html
<a class="bg-white text-black text-sm font-normal px-4 py-2 rounded-full hover:bg-gray-200 transition-colors font-geist">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Marquee (`marquee`)
4. Feature grid (`features`)
5. Schedule (`schedule-agenda`)
6. Gallery / portfolio (`gallery-portfolio`)
7. Stats band (`stats`)
8. Pricing (`pricing`)
9. Testimonials (`testimonials`)
10. Call to action (`cta`)
11. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Unicorn Studio (WebGL scenes)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #0c0d0f;
  --color-surface: #e5e7eb;
  --color-text: #ffffff;
  --color-muted: #7e828a;
  --color-border: #2e2e32;
  --color-accent: #3b82f6;
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
    background: '#0c0d0f',
    surface: '#e5e7eb',
    ink: '#ffffff',
    muted: '#7e828a',
    line: '#2e2e32',
    accent: '#3b82f6',
    accent2: '#22c55e',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in white on near-black (#0c0d0f), with a grey subline
- **Do:** Use blue (#3b82f6) only for small highlights inside the product window; the nav CTA is white
- **Do:** Show the product as a full-width dark window directly under the hero copy
- **Don't:** Don't set the page on a white ground; it is dark throughout the first screen
- **Don't:** Don't add a second bright colour to the window; status tags stay muted
- **Don't:** Don't centre the product window; it runs full width below the copy

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
