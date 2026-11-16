# Design system — Luxury Automotive Dealer Landing Page Template

`SN-W04003` · business-services · dark mode · Sinera Atlas theme `route` · language `en`

## Direction

A dark, showroom-style hero with a large white serif headline in roman type over a full-bleed photograph of a red sports car. The eyebrow line is set in gold (#d4af37) above the title, and the nav is small and minimal. The image does most of the work, and the gold is the only accent, which keeps the page premium rather than loud.

**Mood:** premium, dark, cinematic, restrained, luxurious

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#050505` | Page ground |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#d4af37` | Primary action and highlights |
| Second accent | `#25d366` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#737373` · `#a3a3a3` · `#525252` · `#262626` · `#2a2a2a` · `#d4af37` · `#050505` · `#e5e5e5` · `#0a0a0a`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display
- **Scale (largest breakpoint):** h1 96px · h2 30px · h3 20px · body 12px
- **Weights in use:** medium, semibold, light
- **Letter spacing:** `tracking-wide`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-sm` (2px), `rounded` (4px), `rounded-lg` (8px)
- **Shadows:** `shadow-2xl`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-24`, `py-12`
- **Common gaps:** `gap-2`, `gap-1`, `gap-6`

**Primary button**

```html
<a class="px-3 py-1.5 text-xs font-medium border border-lux-gold text-lux-gold rounded hover:bg-lux-gold hover:text-lux-black transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Listings (`listings`)
4. Pricing (`pricing`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #050505;
  --color-text: #ffffff;
  --color-muted: #737373;
  --color-border: #ffffff;
  --color-accent: #d4af37;
  --color-accent-2: #25d366;
  --font-display: "Playfair Display", serif;
  --font-body: "Inter", sans-serif;
  --radius: 2px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#050505',
    ink: '#ffffff',
    muted: '#737373',
    line: '#ffffff',
    accent: '#d4af37',
    accent2: '#25d366',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use gold (#d4af37) only for the eyebrow line and the key label
- **Do:** Set headlines in a large serif in white, centred over the photograph
- **Do:** Keep the photograph dark enough that white text stays legible
- **Don't:** Don't put gold on large fills or long body text
- **Don't:** Don't use bright colours in the nav bar
- **Don't:** Don't set the headline in sans-serif

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
