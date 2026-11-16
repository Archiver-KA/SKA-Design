# Design system — Interior Design Landing Page Template

`SN-W03256` · real-estate · dark mode · Sinera Atlas theme `dwell` · language `en`

## Direction

Editorial and minimal, on a near-black ground (#0d0d0d) with an off-white headline set very large in a tightly tracked sans. Supporting text is small and spaced, and the buttons are quiet dark pills, so the headline does nearly all the work. Gold (#c8a96a) appears only in small labels, which keeps the luxury tone without adding colour to the layout.

**Mood:** editorial, minimal, luxurious, quiet

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0d0d0d` | Page ground |
| Surface | `#111111` | Cards, panels, raised areas |
| Text | `#f5f5f5` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#c8a96a` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#0d0d0d` · `#c8a96a` · `#f5f5f5` · `#111111`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 30px · body 14px
- **Weights in use:** medium, light
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-sm` (2px), `rounded-full` (9999px)
- **Content width:** `max-w-7xl`, `max-w-5xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-3`, `gap-4`, `gap-8`

**Primary button**

```html
<a class="group flex items-center gap-3 bg-white/5 border border-white/10 px-8 py-4 rounded-full text-sm font-medium hover:bg-white hover:text-[#0D0D0D] transition-all duration-500 backdrop-blur-sm">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Product grid (`product-grid`)
5. Feature grid (`features`)
6. Marquee (`marquee`)
7. Call to action (`cta`)
8. Testimonials (`testimonials`)
9. Articles (`blog-articles`)
10. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), GSAP, Lenis smooth scroll
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #0d0d0d;
  --color-surface: #111111;
  --color-text: #f5f5f5;
  --color-border: #ffffff;
  --color-accent: #c8a96a;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 2px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0d0d0d',
    surface: '#111111',
    ink: '#f5f5f5',
    line: '#ffffff',
    accent: '#c8a96a',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headlines in Inter at large size with tight tracking.
- **Do:** Use the gold (#c8a96a) only for small eyebrow labels above headings.
- **Do:** Centre the hero with generous vertical space above the headline.
- **Don't:** Don't fill buttons with gold; they stay dark and quiet.
- **Don't:** Don't introduce a decorative or serif face next to the sans.
- **Don't:** Don't set body copy in pure white on the black ground at full size.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
