# Design system — Encase SaaS Landing Page Template

`SN-W00359` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark developer-tool page on near-black where the headline is three stacked bold lines, with the middle line in grey. The primary button is a bright mint (#00ff94) fill with dark text beside a dark outlined secondary, and a small monospace note sits under the buttons. Mint is the only colour, so the primary action is the single thing that stands out.

**Mood:** bold, developer, dark, sharp

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#121212` | Page ground |
| Surface | `#333333` | Cards, panels, raised areas |
| Text | `#f4f4f5` | Headings and primary copy |
| Muted text | `#a1a1aa` | Secondary copy, captions |
| Border | `#333333` | Hairlines, dividers, outlines |
| Accent | `#00ff94` | Primary action and highlights |
| Second accent | `#60a5fa` | Supporting highlights |

Palette by frequency of use: `#00ff94` · `#f4f4f5` · `#333333` · `#a1a1aa` · `#0a0a0a` · `#121212` · `#555555` · `#60a5fa` · `#1a1a1a` · `#4ade80`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, JetBrains Mono, Clash Display
- **Scale (largest breakpoint):** h3 20px · body 14px
- **Weights in use:** semibold, bold, medium
- **Letter spacing:** `tracking-widest`, `tracking-[-0.03em]`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-xl` (12px)
- **Shadows:** `shadow-[0_10px_40px_rgba(0,255,148,0.05)]`, `shadow-2xl`, `shadow-[0_0_30px_rgba(0,255,148,0.2)]`
- **Content width:** `max-w-[clamp(65rem,90vw,90rem)]`, `max-w-3xl`
- **Section padding:** `py-[clamp(4rem,8vw,8rem)]`, `py-[clamp(1rem,2vw,1.25rem)]`
- **Common gaps:** `gap-3`, `gap-2`, `gap-4`

**Primary button**

```html
<a class="px-6 py-2.5 font-semibold text-[#0A0A0A] bg-[#00FF94] rounded-lg hover:scale-[1.03] active:scale-[0.98] transition-all duration-200">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Marquee (`marquee`)
5. Product grid (`product-grid`)
6. Feature grid (`features`)
7. Video / media (`video-media`)
8. Testimonials (`testimonials`)
9. Pricing (`pricing`)
10. FAQ (`faq`)
11. Call to action (`cta`)
12. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #121212;
  --color-surface: #333333;
  --color-text: #f4f4f5;
  --color-muted: #a1a1aa;
  --color-border: #333333;
  --color-accent: #00ff94;
  --color-accent-2: #60a5fa;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#121212',
    surface: '#333333',
    ink: '#f4f4f5',
    muted: '#a1a1aa',
    line: '#333333',
    accent: '#00ff94',
    accent2: '#60a5fa',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Stack headlines in three bold lines with the middle line in grey
- **Do:** Use mint (#00ff94) only for the primary button
- **Do:** Put a small monospace note under the buttons as reassurance
- **Don't:** Don't use mint for headings or body text
- **Don't:** Don't add a second brand colour
- **Don't:** Don't set headlines in a light weight

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
