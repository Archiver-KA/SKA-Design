# Design system — AI Watermark Remover Landing Page 

`SN-W00188` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

Dark product page with a near-black ground (#0b0f14) and a white headline whose second line fades to grey, centred above a before-and-after image comparison. The primary button is a warm orange (#f97316) pill with a soft glow beneath it, and the secondary is a plain text button. A small tag above the headline names the new model.

**Mood:** dark, clean, product-first, warm-accent

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0b0f14` | Page ground |
| Surface | `#0b0f14` | Cards, panels, raised areas |
| Text | `#f5f5f5` | Headings and primary copy |
| Muted text | `#a8a29e` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#f97316` | Primary action and highlights |
| Second accent | `#22c55e` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#f97316` · `#a8a29e` · `#0b0f14` · `#000000` · `#e7e5e4` · `#d6d3d1` · `#f87171` · `#ea580c` · `#fdba74`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 18px · body 14px
- **Weights in use:** medium, normal, semibold
- **Letter spacing:** `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded` (4px)
- **Shadows:** `shadow-lg`, `shadow-[0_0_15px_rgba(255,255,255,0.15)]`, `shadow-orange-500/25`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-24`, `py-20`
- **Common gaps:** `gap-3`, `gap-2`, `gap-8`

**Primary button**

```html
<a class="text-[#0B0F14] px-4 py-2 rounded-full text-sm font-medium transition-colors shadow-[0_0_15px_rgba(255,255,255,0.15)] font-sans bg-white hover:bg-stone-200">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Gallery / portfolio (`gallery-portfolio`)
4. Feature grid (`features`)
5. Call to action (`cta`)
6. FAQ (`faq`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #0b0f14;
  --color-surface: #0b0f14;
  --color-text: #f5f5f5;
  --color-muted: #a8a29e;
  --color-border: #ffffff;
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
    background: '#0b0f14',
    surface: '#0b0f14',
    ink: '#f5f5f5',
    muted: '#a8a29e',
    line: '#ffffff',
    accent: '#f97316',
    accent2: '#22c55e',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use the orange (#f97316) for the primary button and the status tag only
- **Do:** Set the headline in sans-serif white, with the second line in grey
- **Do:** Show the before-and-after image comparison as the main visual below the hero
- **Don't:** Don't use orange for body text or large fills; it is reserved for actions
- **Don't:** Don't switch the page to a light background; the hero is dark
- **Don't:** Don't drop the soft glow under the primary button; it is part of the action style

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
