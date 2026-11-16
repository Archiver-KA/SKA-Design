# Design system — AI Video Clipping Landing Page Template

`SN-W00175` · ai-saas · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

Light landing page on a white ground with a heavy black sans-serif headline and an orange bar (#f97316) under the key phrase. The primary action is a pink-to-orange gradient button on a glowing input bar, which makes the single input the centre of the hero. Pill labels and generous rounding keep the tone friendly and direct.

**Mood:** bold, warm, energetic, direct

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#f9fafb` | Cards, panels, raised areas |
| Text | `#000000` | Headings and primary copy |
| Muted text | `#374151` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#f97316` | Primary action and highlights |
| Second accent | `#ec4899` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#000000` · `#f97316` · `#ec4899` · `#374151` · `#111827` · `#e5e7eb` · `#1f2937` · `#4b5563` · `#f9fafb`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 96px · h2 60px · h3 18px · body 14px
- **Weights in use:** bold, medium, semibold
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-3xl` (24px)
- **Shadows:** `shadow-lg`, `shadow-sm`, `shadow-xl`
- **Content width:** `max-w-5xl`, `max-w-4xl`
- **Section padding:** `py-24`, `py-16`
- **Common gaps:** `gap-3`, `gap-2`, `gap-8`

**Primary button**

```html
<a class="hover:text-black transition-colors text-sm font-semibold text-gray-500 hover:bg-gray-50 px-3 py-1.5 rounded-lg">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Gallery / portfolio (`gallery-portfolio`)
4. Video / media (`video-media`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #f9fafb;
  --color-text: #000000;
  --color-muted: #374151;
  --color-border: #ffffff;
  --color-accent: #f97316;
  --color-accent-2: #ec4899;
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
    ink: '#000000',
    muted: '#374151',
    line: '#ffffff',
    accent: '#f97316',
    accent2: '#ec4899',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use the orange-to-pink gradient (#f97316 to #ec4899) on the primary action and the input glow
- **Do:** Underline one key phrase per headline with an orange bar (#f97316)
- **Do:** Set headlines in heavy black sans-serif at large size
- **Don't:** Don't use green or teal for accents; the page is warm
- **Don't:** Don't put the headline itself in a gradient; the gradient belongs to the button
- **Don't:** Don't square off the input bar; it is a rounded pill

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
