# Design system — Wangflow-portal

`SN-W01728` · agency-studio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A dark, glossy creator-business page with a near-black ground [#111113] and a large white headline that fades to grey in its second line. Floating glass chips with small labels sit behind the headline, adding depth without colour. The primary button is a white pill and the secondary is a dark outlined pill, and the stats below use the same white and grey contrast.

**Mood:** glossy, dark, premium, layered, confident

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#111113` | Page ground |
| Surface | `#111113` | Cards, panels, raised areas |
| Text | `#111111` | Headings and primary copy |
| Muted text | `#ffffff` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#eab308` | Primary action and highlights |
| Second accent | `#e2e8f0` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#94a3b8` · `#111113` · `#cbd5e1` · `#151518` · `#facc15` · `#10b981` · `#eab308` · `#3b82f6` · `#e2e8f0`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 88px · h2 60px · h3 30px · body 18px
- **Weights in use:** semibold, medium, normal
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-3xl` (24px), `rounded-[2rem]` (2rem)
- **Shadows:** `shadow-inner`, `shadow-xl`, `shadow-[0_10px_30px_rgba(234,179,8,0.15)]`
- **Content width:** `max-w-6xl`, `max-w-2xl`
- **Common gaps:** `gap-2`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="w-full sm:w-auto px-10 py-4 rounded-full bg-transparent border border-white/15 text-white font-semibold text-lg hover:bg-white/5 transition-all flex items-center justify-center">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Pricing (`pricing`)
3. Stats band (`stats`)
4. Testimonials (`testimonials`)
5. Booking form (`booking`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Unicorn Studio (WebGL scenes)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #111113;
  --color-surface: #111113;
  --color-text: #111111;
  --color-muted: #ffffff;
  --color-border: #ffffff;
  --color-accent: #eab308;
  --color-accent-2: #e2e8f0;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#111113',
    surface: '#111113',
    ink: '#111111',
    muted: '#ffffff',
    line: '#ffffff',
    accent: '#eab308',
    accent2: '#e2e8f0',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in white with the second line fading to grey
- **Do:** Use translucent glass chips with small labels to add depth behind the hero copy
- **Do:** Make the primary button a white pill and the secondary a dark outlined pill
- **Don't:** Don't add a bright accent to the hero; the page is white and grey
- **Don't:** Don't set headlines in a serif face
- **Don't:** Don't use square cards; the chips are rounded

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
