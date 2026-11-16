# Design system — SkinPock Digital Collectibles Landing Page Template

`SN-W01321` · ecommerce · dark mode · Sinera Atlas theme `market` · language `en`

## Direction

A dark, gallery-like marketplace page on near-black (#0f0f0f) with white display type, where the second half of the headline fades into a grey gradient. Tilted dark cards on the right act as the product display, and one card in a gold tone is the only colour on the first screen. The white pill button is the primary action against the black ground.

**Mood:** dark, gallery-like, minimal, bold

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0f0f0f` | Page ground |
| Surface | `#1a1a1a` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#a3a3a3` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#ffffff` | Primary action and highlights |
| Second accent | `#a855f7` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#737373` · `#000000` · `#1a1a1a` · `#0f0f0f` · `#a3a3a3` · `#d4d4d4` · `#e5e5e5` · `#050505` · `#ef4444`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 30px · h3 18px · body 12px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-3xl` (24px), `rounded-[20px]` (20px)
- **Shadows:** `shadow-2xl`, `shadow-[0_0_30px_rgba(255,255,255,0.05)]`, `shadow-[0_0_20px_rgba(255,255,255,0.1)]`
- **Content width:** `max-w-[1400px]`
- **Section padding:** `py-24`, `py-12`
- **Common gaps:** `gap-1`, `gap-3`, `gap-8`

**Primary button**

```html
<a class="bg-white text-black text-sm font-semibold px-6 py-2.5 rounded-full hover:bg-neutral-200 transition shadow-[0_0_20px_rgba(255,255,255,0.1)]">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Product grid (`product-grid`)
4. Marquee (`marquee`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #0f0f0f;
  --color-surface: #1a1a1a;
  --color-text: #ffffff;
  --color-muted: #a3a3a3;
  --color-border: #ffffff;
  --color-accent: #ffffff;
  --color-accent-2: #a855f7;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0f0f0f',
    surface: '#1a1a1a',
    ink: '#ffffff',
    muted: '#a3a3a3',
    line: '#ffffff',
    accent: '#ffffff',
    accent2: '#a855f7',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the ground near-black (#0f0f0f) with white display type
- **Do:** Fade the second headline lines into a grey gradient for emphasis
- **Do:** Present products as tilted dark cards, and keep any highlighted card as the single colour
- **Don't:** Don't use light section backgrounds; the page depends on the black ground
- **Don't:** Don't show more than one colour-highlighted card in a view
- **Don't:** Don't add drop shadows to the cards; they separate from the ground by tone

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
