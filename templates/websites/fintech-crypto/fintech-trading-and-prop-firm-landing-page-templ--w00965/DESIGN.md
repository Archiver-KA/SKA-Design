# Design system — Fintech Trading & Prop Firm Landing Page Template

`SN-W00965` · fintech-crypto · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A black page with a large white display headline whose lines fade down to grey. A row of tall vertical bars in blue and violet glows across the hero and acts as the chart motif. Buttons are violet and the navigation is a dark pill, so the look is dark, trading-led and built around the bars.

**Mood:** dark, trading-led, glowing, bold, data-visual

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#000000` | Cards, panels, raised areas |
| Text | `#f5f5f5` | Headings and primary copy |
| Muted text | `#ffffff` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#84a1ff` | Primary action and highlights |
| Second accent | `#22c55e` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#9ca3af` · `#84a1ff` · `#000000` · `#635bff` · `#d1d5db` · `#372dff` · `#6b7280` · `#22c55e` · `#ef4444`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Poppins, Rubik
- **Scale (largest breakpoint):** h1 80px · h2 36px · h3 20px · body 14px
- **Weights in use:** bold, semibold, medium
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-[20px]` (20px), `rounded-[12px]` (12px)
- **Shadows:** `shadow-[0_0_30px_rgba(132,161,255,0.5)]`, `shadow-lg`, `shadow-2xl`
- **Content width:** `max-w-[1280px]`, `max-w-[280px]`
- **Common gaps:** `gap-1`, `gap-6`, `gap-4`

**Primary button**

```html
<a class="bg-white text-black px-6 py-2.5 rounded-[10px] text-sm font-semibold hover:bg-gray-200 transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Articles (`blog-articles`)
5. Marquee (`marquee`)
6. Stats band (`stats`)
7. Testimonials (`testimonials`)
8. Call to action (`cta`)
9. Timeline (`timeline`)
10. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #000000;
  --color-text: #f5f5f5;
  --color-muted: #ffffff;
  --color-border: #ffffff;
  --color-accent: #84a1ff;
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
    surface: '#000000',
    ink: '#f5f5f5',
    muted: '#ffffff',
    line: '#ffffff',
    accent: '#84a1ff',
    accent2: '#22c55e',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the page ground black (#000000) with white and grey headlines.
- **Do:** Use the blue-violet glow bars as the only chart motif.
- **Do:** Set violet (#635bff) on primary buttons only.
- **Don't:** Don't put the violet (#635bff) behind large body text.
- **Don't:** Don't add a light section between dark ones.
- **Don't:** Don't use the green accent next to the violet buttons.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
