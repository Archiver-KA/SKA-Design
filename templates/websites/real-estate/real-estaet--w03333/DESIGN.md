# Design system — real estaet

`SN-W03333` · real-estate · dark mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A dark, cinematic luxury property template. A near-black ground (#0b0b0b) sits behind a full-bleed architectural photograph, with white serif headlines and a single gold (#d4af37) phrase in the title. Translucent glass panels hold the search bar, and gold is the only colour, so it reads as the brand mark.

**Mood:** cinematic, luxurious, dark, restrained

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0b0b0b` | Page ground |
| Surface | `#1f2937` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#9ca3af` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#d4af37` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#9ca3af` · `#000000` · `#d1d5db` · `#6b7280` · `#d4af37` · `#1f2937` · `#0b0b0b` · `#333333` · `#080808`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 20px · body 16px
- **Weights in use:** medium, light
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-lg` (8px)
- **Shadows:** `shadow-[0_8px_30px_rgb(212,175,55,0.15)]`, `shadow-2xl`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-4`, `gap-6`

**Primary button**

```html
<a class="border border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-black px-6 py-2.5 rounded-sm text-base font-medium transition-all duration-300 ease-in-out">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Listings (`listings`)
4. Case studies (`case-studies`)
5. Services (`services`)
6. Testimonials (`testimonials`)
7. Logo cloud (`logo-cloud`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #0b0b0b;
  --color-surface: #1f2937;
  --color-text: #ffffff;
  --color-muted: #9ca3af;
  --color-border: #ffffff;
  --color-accent: #d4af37;
  --font-display: "Playfair Display", serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0b0b0b',
    surface: '#1f2937',
    ink: '#ffffff',
    muted: '#9ca3af',
    line: '#ffffff',
    accent: '#d4af37',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headlines in Playfair Display in white, with one phrase in gold (#d4af37)
- **Do:** Use gold (#d4af37) only for highlights and the primary search action
- **Do:** Place text over photography with a dark overlay so white type stays legible
- **Don't:** Don't introduce a second accent colour beside the gold
- **Don't:** Don't use light section backgrounds; the ground stays near-black
- **Don't:** Don't set body copy in the serif; body text uses Inter

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
