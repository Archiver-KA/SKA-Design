# Design system — Tattoo Studio Landing Page Template

`SN-W02252` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A stark black studio page where a large white serif headline carries the design and the subtitle is set in grey italic. The ground is pure black (#000000) with white type, and solid white and thin outline pill buttons sit side by side. Small, widely tracked uppercase navigation and a row of tiny trust labels give it the feel of an editorial print page, and the white serif over the grey italic line is what makes it recognisable.

**Mood:** stark, editorial, refined, monochrome, quiet

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#e5e7eb` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#facc15` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#6b7280` · `#000000` · `#facc15` · `#121212` · `#e5e7eb` · `#9ca3af` · `#111111` · `#d1d5db` · `#080808`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** var(--font-body)
- **Body:** var(--font-body)
- **Loaded families:** Playfair Display, Inter
- **Scale (largest breakpoint):** h1 96px · h2 36px · h3 24px · body 14px
- **Weights in use:** light, bold, medium
- **Letter spacing:** `tracking-widest`, `tracking-[0.15em]`

## Shape, spacing and layout

- **Corner radius:** `rounded-sm` (2px), `rounded-full` (9999px)
- **Shadows:** `shadow-2xl`
- **Content width:** `max-w-[1400px]`, `max-w-[1800px]`
- **Section padding:** `py-20`, `py-16`
- **Common gaps:** `gap-3`, `gap-0.5`, `gap-4`

**Primary button**

```html
<a class="bg-white text-black px-8 py-4 text-[11px] uppercase tracking-[0.15em] font-semibold hover:bg-gray-200 transition-colors text-center min-h-[50px] flex items-center justify-center">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Modal / overlay (`modal-overlay`)
3. Hero (`hero`)
4. Testimonials (`testimonials`)
5. Contact form (`contact-form`)
6. Team (`team`)
7. Feature grid (`features`)
8. Call to action (`cta`)
9. FAQ (`faq`)
10. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #e5e7eb;
  --color-text: #ffffff;
  --color-muted: #6b7280;
  --color-border: #ffffff;
  --color-accent: #facc15;
  --font-display: "var(--font-body)", sans-serif;
  --font-body: "var(--font-body)", sans-serif;
  --radius: 2px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#e5e7eb',
    ink: '#ffffff',
    muted: '#6b7280',
    line: '#ffffff',
    accent: '#facc15',
  },
  fontFamily: { display: ['var(--font-body)'], sans: ['var(--font-body)'] },
} }
```

## Do and don't

- **Do:** Set the headline in a large white serif, with the subtitle in grey italic.
- **Do:** Use the solid white pill for the primary action and a thin outline for the secondary.
- **Do:** Keep nav and labels in small uppercase with wide tracking.
- **Don't:** Don't introduce a colour accent; the page is black, white and grey.
- **Don't:** Don't set the page on a white ground; the hero is black throughout.
- **Don't:** Don't enlarge the trust labels; they stay as a tiny row under the buttons.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
