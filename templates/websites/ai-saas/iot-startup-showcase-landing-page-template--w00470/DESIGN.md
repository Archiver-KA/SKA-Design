# Design system — IoT Startup Showcase Landing Page Template

`SN-W00470` · ai-saas · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A stark, editorial deal-flow page on an off-white ground (#f8f8f7), with near-black, heavy uppercase headlines at very large size. Outlined type sets the middle phrase of each headline, and a single vermilion red (#ff3300) marks the key items and small status tags. Corners are square and dividers are hairline black, so the look is blunt and precise rather than soft.

**Mood:** blunt, editorial, stark, precise, high-contrast

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f8f8f7` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#0a0a0a` | Headings and primary copy |
| Muted text | `#5a5a5c` | Secondary copy, captions |
| Border | `#0a0a0a` | Hairlines, dividers, outlines |
| Accent | `#ff3300` | Primary action and highlights |

Palette by frequency of use: `#0a0a0a` · `#ff3300` · `#ffffff` · `#5a5a5c` · `#333333` · `#f8f8f7` · `#111111` · `#1a1a1a`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, JetBrains Mono, Space Grotesk
- **Scale (largest breakpoint):** h1 104px · h2 48px · h3 24px · body 14px
- **Weights in use:** semibold, medium
- **Letter spacing:** `tracking-widest`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-none` (0), `rounded-full` (9999px)
- **Shadows:** `shadow-[4px_4px_0px_#0A0A0A]`, `shadow-sm`, `shadow-[0_0_50px_rgba(0,0,0,0.8)]`
- **Content width:** `max-w-[90rem]`, `max-w-[45ch]`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-3`, `gap-4`, `gap-2`

**Primary button**

```html
<a class="btn-angular relative group overflow-hidden bg-[#FF3300] text-white px-8 py-5 flex items-center gap-4">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Marquee (`marquee`)
5. Feature grid (`features`)
6. Stats band (`stats`)
7. Call to action (`cta`)
8. Testimonials (`testimonials`)
9. Code / terminal (`code-terminal`)
10. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #f8f8f7;
  --color-surface: #ffffff;
  --color-text: #0a0a0a;
  --color-muted: #5a5a5c;
  --color-border: #0a0a0a;
  --color-accent: #ff3300;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 0;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f8f8f7',
    surface: '#ffffff',
    ink: '#0a0a0a',
    muted: '#5a5a5c',
    line: '#0a0a0a',
    accent: '#ff3300',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headlines in heavy uppercase, with outlined text on the middle phrase
- **Do:** Use vermilion (#ff3300) for status tags and one highlight per section
- **Do:** Keep corners square and dividers as hairline black rules
- **Don't:** Don't round corners on buttons or cards
- **Don't:** Don't use drop shadows
- **Don't:** Don't set body copy in uppercase

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
