# Design system — Adventure Travel Membership Landing Page Template

`SN-W03014` · travel · light mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A monochrome, photographic hero: a grey gradient over a pale landscape, with a large white serif headline in sentence case and a tiny spaced uppercase eyebrow above it. The navigation is transparent over the photo with a white pill button, and a round outlined play control sits at the right. The first screen has no colour, so the mood depends on type scale and restraint.

**Mood:** quiet, cinematic, monochrome, premium

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f9fafb` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#1c1917` | Headings and primary copy |
| Muted text | `#78716c` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#d4af37` | Primary action and highlights |
| Second accent | `#22c55e` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#1c1917` · `#78716c` · `#d4af37` · `#a8a29e` · `#f5f5f4` · `#000000` · `#0a0a0a` · `#d6d3d1` · `#57534e`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Manrope, Playfair Display, Instrument Serif
- **Scale (largest breakpoint):** h1 96px · h2 60px · h3 30px · body 14px
- **Weights in use:** normal, medium, semibold
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-2xl` (16px)
- **Shadows:** `shadow-sm`, `shadow-2xl`, `shadow-[0_20px_50px_-10px_rgba(0,0,0,0.2)]`
- **Content width:** `max-w-[1400px]`, `max-w-2xl`
- **Section padding:** `py-32`
- **Common gaps:** `gap-3`, `gap-8`, `gap-2`

**Primary button**

```html
<a class="bg-white text-black px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-stone-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.3)] font-sans">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Stats band (`stats`)
5. About (`about`)
6. Articles (`blog-articles`)
7. Pricing (`pricing`)
8. Testimonials (`testimonials`)
9. Call to action (`cta`)
10. FAQ (`faq`)
11. Newsletter signup (`newsletter`)
12. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #f9fafb;
  --color-surface: #ffffff;
  --color-text: #1c1917;
  --color-muted: #78716c;
  --color-border: #ffffff;
  --color-accent: #d4af37;
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
    background: '#f9fafb',
    surface: '#ffffff',
    ink: '#1c1917',
    muted: '#78716c',
    line: '#ffffff',
    accent: '#d4af37',
    accent2: '#22c55e',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headlines in the white serif at large size, in sentence case
- **Do:** Keep the hero monochrome and let the photograph's grey tones carry the colour
- **Do:** Use a white pill for the main navigation action and an outline circle for video
- **Don't:** Don't add saturated colour to the hero; the first screen is grey and white
- **Don't:** Don't set headlines in sans-serif; the first screen uses serif
- **Don't:** Don't set small text over bright photo areas; the eyebrow needs contrast

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
