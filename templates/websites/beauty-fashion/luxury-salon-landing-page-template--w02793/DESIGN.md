# Design system — Luxury Salon Landing Page Template

`SN-W02793` · beauty-fashion · dark mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A dark-navy salon hero: a desaturated styling-station photograph under a navy overlay, with a white serif headline and grey italic second line. Cyan (#00d7e7) carries the eyebrow, the solid primary button and the nav booking button, with an outlined secondary beside it. The hero ground is navy.

**Mood:** cool, polished, crisp, modern, dark

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0f172a` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#00d7e7` | Primary action and highlights |
| Second accent | `#c9a24d` | Supporting highlights |

Palette by frequency of use: `#00d7e7` · `#0f172a` · `#ffffff` · `#94a3b8` · `#e2e8f0` · `#c9a24d` · `#475569` · `#f8fafc` · `#64748b` · `#334155`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 20px · body 14px
- **Weights in use:** light, medium, semibold
- **Letter spacing:** `tracking-wide`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded` (4px)
- **Shadows:** `shadow-lg`, `shadow-2xl`, `shadow-sm`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-16`
- **Common gaps:** `gap-4`, `gap-2`, `gap-3`

**Primary button**

```html
<a class="hidden md:inline-flex items-center gap-2 px-6 py-2 bg-[#00D7E7] text-[#0F172A] text-sm font-medium tracking-wide hover:brightness-110 transition-all duration-300 shadow-[0_0_15px_rgba(0,215,231,0.3)]">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Services (`services`)
5. Gallery / portfolio (`gallery-portfolio`)
6. Testimonials (`testimonials`)
7. Map / location (`map-location`)
8. Contact form (`contact-form`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #0f172a;
  --color-surface: #ffffff;
  --color-text: #ffffff;
  --color-muted: #64748b;
  --color-border: #ffffff;
  --color-accent: #00d7e7;
  --color-accent-2: #c9a24d;
  --font-display: "Playfair Display", serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0f172a',
    surface: '#ffffff',
    ink: '#ffffff',
    muted: '#64748b',
    line: '#ffffff',
    accent: '#00d7e7',
    accent2: '#c9a24d',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use cyan (#00d7e7) for the eyebrow, the primary button and the nav booking button only.
- **Do:** Set the headline in white serif, with the second line in grey italic.
- **Do:** Put a navy overlay over the photograph so white text reads.
- **Don't:** Don't set body copy in cyan.
- **Don't:** Don't use a light background behind the hero.
- **Don't:** Don't add a second brand colour beside cyan.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
