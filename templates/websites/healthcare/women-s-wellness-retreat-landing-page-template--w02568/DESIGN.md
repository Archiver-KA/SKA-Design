# Design system — Women’s Wellness Retreat Landing Page Template

`SN-W02568` · healthcare · light mode · Sinera Atlas theme `calm` · language `pt-br`

## Direction

A photography-led hero: a full-bleed outdoor group photo under a pale blur and a centred white serif title at display size. Below the title, a small translucent pill button points to the next section. The text is light and sparse, so the imagery carries the mood. The look is airy and cinematic, with the type acting as a quiet caption over the picture.

**Mood:** cinematic, airy, photographic, soft, human

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f5f5f4` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#292524` | Headings and primary copy |
| Muted text | `#57534e` | Secondary copy, captions |
| Border | `#e4e4e7` | Hairlines, dividers, outlines |
| Accent | `#3b82f6` | Primary action and highlights |
| Second accent | `#16a34a` | Supporting highlights |

Palette by frequency of use: `#3b82f6` · `#ffffff` · `#1c1917` · `#fafaf9` · `#e4e4e7` · `#57534e` · `#d6d3d1` · `#f5f5f4` · `#78716c` · `#a8a29e`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** Geist
- **Loaded families:** Geist, Roboto, Montserrat, Poppins, Playfair Display, Instrument Serif
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 30px · body 20px
- **Weights in use:** medium, light, semibold
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-sm` (2px), `rounded-full` (9999px)
- **Shadows:** `shadow-lg`, `shadow-xl`, `shadow-[0_0_15px_rgba(255,255,255,0.8)]`
- **Content width:** `max-w-4xl`, `max-w-6xl`
- **Section padding:** `py-12`
- **Common gaps:** `gap-3`, `gap-8`, `gap-4`

**Primary button**

```html
<a class="w-full md:w-auto px-10 py-5 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-all shadow-lg text-lg font-medium tracking-wide">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. Call to action (`cta`)
3. Stats band (`stats`)
4. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #f5f5f4;
  --color-surface: #ffffff;
  --color-text: #292524;
  --color-muted: #57534e;
  --color-border: #e4e4e7;
  --color-accent: #3b82f6;
  --color-accent-2: #16a34a;
  --font-display: "Playfair Display", serif;
  --font-body: "Geist", sans-serif;
  --radius: 2px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f5f5f4',
    surface: '#ffffff',
    ink: '#292524',
    muted: '#57534e',
    line: '#e4e4e7',
    accent: '#3b82f6',
    accent2: '#16a34a',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['Geist'] },
} }
```

## Do and don't

- **Do:** Use a full-bleed photograph for the hero and keep the title centred over a soft blur
- **Do:** Set the title in the high-contrast serif display face at very large size, as in the 96px hero
- **Do:** Use a translucent pill button for the hero call to action
- **Don't:** Don't place small body text over the photograph; keep copy short and in the title area
- **Don't:** Don't use bold saturated colour blocks in the hero; the picture supplies the colour
- **Don't:** Don't remove the blur or overlay; the white type needs it to stay legible

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
