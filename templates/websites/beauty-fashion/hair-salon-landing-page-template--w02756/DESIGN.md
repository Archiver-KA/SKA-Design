# Design system — Hair Salon Landing Page Template

`SN-W02756` · beauty-fashion · dark mode · Sinera Atlas theme `dwell` · language `de`

## Direction

Dark hero with a large white serif headline in which one phrase is set in bright orange (#f97316). The hero actions are white pills, and the header is a dark bar with plain text links. Orange appears only in the headline phrase and a small status pill, so it reads as a single signal on black.

**Mood:** dark, editorial, focused, warm-accent

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Surface | `#171717` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#a3a3a3` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#f97316` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#f97316` · `#a3a3a3` · `#171717` · `#0a0a0a` · `#d4d4d4` · `#000000` · `#737373` · `#525252` · `#fb923c`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Outfit
- **Body:** Outfit
- **Loaded families:** Outfit, Playfair Display, Geist
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 24px · body 16px
- **Weights in use:** medium, bold, light
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-3xl` (24px)
- **Shadows:** `shadow-2xl`, `shadow-lg`, `shadow-white/20`
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Section padding:** `py-24`, `py-12`
- **Common gaps:** `gap-3`, `gap-1`, `gap-2`

**Primary button**

```html
<a class="px-6 py-2.5 rounded-full text-base font-medium transition-all duration-300 font-geist bg-white hover:text-white text-neutral-950 hover:bg-orange-500">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Stats band (`stats`)
4. Services (`services`)
5. Gallery / portfolio (`gallery-portfolio`)
6. Call to action (`cta`)
7. Feature grid (`features`)
8. Testimonials (`testimonials`)
9. Contact form (`contact-form`)
10. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #0a0a0a;
  --color-surface: #171717;
  --color-text: #ffffff;
  --color-muted: #a3a3a3;
  --color-border: #ffffff;
  --color-accent: #f97316;
  --font-display: "Outfit", sans-serif;
  --font-body: "Outfit", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0a0a0a',
    surface: '#171717',
    ink: '#ffffff',
    muted: '#a3a3a3',
    line: '#ffffff',
    accent: '#f97316',
  },
  fontFamily: { display: ['Outfit'], sans: ['Outfit'] },
} }
```

## Do and don't

- **Do:** Set one phrase of each headline in orange (#f97316)
- **Do:** Use white filled pills for the hero actions
- **Do:** Keep the header a plain dark bar with small text links
- **Don't:** Don't use orange for buttons; it marks the headline phrase and the status pill only
- **Don't:** Don't use a light page ground; the page is near-black
- **Don't:** Don't set the headline in a geometric sans; the headline is a serif

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
