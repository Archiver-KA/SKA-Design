# Design system — PreTest Mock Interview Landing Page Template

`SN-W03523` · education · light mode · Sinera Atlas theme `calm` · language `en`

## Direction

A light, practical mentor-marketplace page on white, with a heavy Inter headline in near-black. The second line fades into pale grey, which softens the message, and a solid orange button is the only saturated fill. Floating candidate and feedback cards around the hero use small green and orange markers, giving the layout a lively but orderly feel.

**Mood:** practical, lively, clean, orderly

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#f9fafb` | Cards, panels, raised areas |
| Text | `#111827` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#f3f4f6` | Hairlines, dividers, outlines |
| Accent | `#f97316` | Primary action and highlights |
| Second accent | `#22c55e` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#f97316` · `#6b7280` · `#111827` · `#f3f4f6` · `#d1d5db` · `#f9fafb` · `#9ca3af` · `#e5e7eb` · `#4b5563`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 88px · h2 48px · h3 18px · body 14px
- **Weights in use:** bold, semibold, medium
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-lg` (8px)
- **Shadows:** `shadow-sm`, `shadow-lg`, `shadow-[0_4px_12px_rgba(0,0,0,0.05)]`
- **Content width:** `max-w-7xl`, `max-w-screen-xl`
- **Section padding:** `py-12`
- **Common gaps:** `gap-3`, `gap-2`, `gap-16`

**Primary button**

```html
<a class="group bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold px-6 py-3.5 rounded-full shadow-[0_1px_2px_rgba(249,115,22,0.3)] transition-all flex items-center justify-center gap-2">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Marquee (`marquee`)
4. Bento grid (`bento-grid`)
5. Stats band (`stats`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #f9fafb;
  --color-text: #111827;
  --color-muted: #6b7280;
  --color-border: #f3f4f6;
  --color-accent: #f97316;
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
    background: '#ffffff',
    surface: '#f9fafb',
    ink: '#111827',
    muted: '#6b7280',
    line: '#f3f4f6',
    accent: '#f97316',
    accent2: '#22c55e',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in heavy Inter in near-black, with the second line in faded grey
- **Do:** Use the solid orange (#f97316) button as the only solid fill in the hero
- **Do:** Keep the green (#22c55e) to small status ticks and progress bars
- **Don't:** Don't use orange as a background for text blocks
- **Don't:** Don't add more than one solid button colour in a section
- **Don't:** Don't use the faded grey for body copy; it is for display text only

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
