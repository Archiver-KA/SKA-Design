# Design system — Brand Strategy Blueprint Landing Page Template

`SN-W00253` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark, high-contrast landing hero: a near-black warm ground, a white bold Inter headline, and the key phrase in red-orange (#f44913), which also fills the primary button. Above the fold the orange is the only colour, so it reads as the single signal for the call to action, and the rest is white and grey type on black. A soft orange glow sits behind the lower section to add warmth without extra shapes.

**Mood:** bold, warm, high contrast, direct

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#111827` | Page ground |
| Surface | `#dcfce7` | Cards, panels, raised areas |
| Text | `#111827` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#f3f4f6` | Hairlines, dividers, outlines |
| Accent | `#f44913` | Primary action and highlights |
| Second accent | `#16a34a` | Supporting highlights |

Palette by frequency of use: `#111827` · `#ffffff` · `#f44913` · `#f3f4f6` · `#9ca3af` · `#d1d5db` · `#6b7280` · `#16a34a` · `#dcfce7` · `#f9fafb`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 60px · h2 36px · h3 24px · body 18px
- **Weights in use:** semibold, medium, bold
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-2xl` (16px)
- **Shadows:** `shadow-sm`, `shadow-lg`, `shadow-xl`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-32`, `py-24`
- **Common gaps:** `gap-4`, `gap-3`, `gap-6`

**Primary button**

```html
<a class="inline-block bg-[#F44913] hover:bg-orange-600 text-white font-semibold text-xl px-10 py-5 rounded-lg transition-all shadow-[0_0_40px_-10px_rgba(244,73,19,0.5)] w-full md:w-auto">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Testimonials (`testimonials`)
4. Services (`services`)
5. Logo cloud (`logo-cloud`)
6. Pricing (`pricing`)
7. FAQ (`faq`)
8. Product grid (`product-grid`)
9. Footer (`footer`)

## Motion, effects and stack

- **Libraries:** Tailwind CSS (CDN), Three.js, AOS scroll reveal
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #111827;
  --color-surface: #dcfce7;
  --color-text: #111827;
  --color-muted: #6b7280;
  --color-border: #f3f4f6;
  --color-accent: #f44913;
  --color-accent-2: #16a34a;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#111827',
    surface: '#dcfce7',
    ink: '#111827',
    muted: '#6b7280',
    line: '#f3f4f6',
    accent: '#f44913',
    accent2: '#16a34a',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use #f44913 for the primary button and the one highlighted phrase in each headline
- **Do:** Set headlines in bold Inter, white on near-black
- **Do:** Keep the guarantee and checkout reassurance lines small and grey beneath the button
- **Don't:** Don't use the orange for body text or large background fills
- **Don't:** Don't add more than one orange button per screen
- **Don't:** Don't replace the soft glow with hard drop shadows

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
