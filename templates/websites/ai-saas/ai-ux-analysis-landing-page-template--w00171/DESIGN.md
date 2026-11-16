# Design system — AI UX Analysis Landing Page Template

`SN-W00171` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

Dark hero on a near-black ground (#111111) with one saturated action colour, a blue (#4f7cff), used for the primary button. Headlines are large Inter in white, centred, with generous space above and below. A dark product image sits at the bottom edge of the hero, framed by a thin border, so the page reads as a tool rather than a poster.

**Mood:** dark, minimal, product-first, crisp

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#111111` | Page ground |
| Surface | `#111111` | Cards, panels, raised areas |
| Text | `#111111` | Headings and primary copy |
| Muted text | `#444444` | Secondary copy, captions |
| Border | `#333333` | Hairlines, dividers, outlines |
| Accent | `#4f7cff` | Primary action and highlights |
| Second accent | `#ef4444` | Supporting highlights |

Palette by frequency of use: `#4f7cff` · `#333333` · `#ffffff` · `#222222` · `#111111` · `#ef4444` · `#444444` · `#3a64e0` · `#050505` · `#666666`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 18px · body 14px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded` (4px), `rounded-lg` (8px)
- **Shadows:** `shadow-2xl`, `shadow-lg`, `shadow-[0_0_15px_-3px_rgba(79,124,255,0.4)]`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-2`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="hidden sm:inline-flex bg-[#4F7CFF] hover:bg-[#3A64E0] text-white text-xs font-medium px-4 py-2 rounded-full transition-all shadow-[0_0_15px_-3px_rgba(79,124,255,0.4)]">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Logo cloud (`logo-cloud`)
4. Feature grid (`features`)
5. Process / steps (`how-it-works`)
6. Testimonials (`testimonials`)
7. Call to action (`cta`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #111111;
  --color-surface: #111111;
  --color-text: #111111;
  --color-muted: #444444;
  --color-border: #333333;
  --color-accent: #4f7cff;
  --color-accent-2: #ef4444;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#111111',
    surface: '#111111',
    ink: '#111111',
    muted: '#444444',
    line: '#333333',
    accent: '#4f7cff',
    accent2: '#ef4444',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use the blue (#4f7cff) for the primary button and no other fill
- **Do:** Set headlines in heavy Inter, centred, in white
- **Do:** Frame the product image with a thin border at the bottom of the hero
- **Don't:** Don't use the blue as a background or large fill; it is an action colour
- **Don't:** Don't add coloured gradients to headlines; they stay white and grey
- **Don't:** Don't use a light hero ground; the hero is dark from the nav down

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
