# Design system — Abaya Est Fashion Landing Page Template

`SN-W02699` · beauty-fashion · dark mode · Sinera Atlas theme `dwell` · language `en`

## Direction

Modest fashion storefront with a near-black brown hero (#120705). The large cream serif headline, with an italic second line, runs across a diagonal split where a lighter panel cuts the dark field. Small tracked uppercase labels and a circular outlined CTA keep the chrome minimal, so the page reads as an editorial, dark-toned fashion site.

**Mood:** editorial, dark, elegant, minimal

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#120705` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#f4f0e8` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#d53527` | Primary action and highlights |
| Second accent | `#213497` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#d53527` · `#d58d3f` · `#161514` · `#120705` · `#180706` · `#e9e2d6` · `#f4f0e8` · `#f4e4d1` · `#1b1411`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** DM Sans
- **Body:** DM Sans
- **Loaded families:** DM Sans, DM Serif Display
- **Scale (largest breakpoint):** h3 24px · body 12px
- **Weights in use:** medium, normal, semibold
- **Letter spacing:** `tracking-tight`, `tracking-[0.16em]`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px)
- **Content width:** `max-w-5xl`, `max-w-6xl`
- **Section padding:** `py-[14vw]`, `py-[10vw]`
- **Common gaps:** `gap-4`, `gap-8`, `gap-2`

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Product grid (`product-grid`)
5. Feature grid (`features`)
6. Process / steps (`how-it-works`)
7. Articles (`blog-articles`)
8. Testimonials (`testimonials`)
9. Newsletter signup (`newsletter`)
10. Footer (`footer`)
11. Sidebar (`sidebar`)

## Motion, effects and stack

- **Effects:** gradient fills, blend modes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #120705;
  --color-surface: #ffffff;
  --color-text: #f4f0e8;
  --color-border: #ffffff;
  --color-accent: #d53527;
  --color-accent-2: #213497;
  --font-display: "DM Sans", sans-serif;
  --font-body: "DM Sans", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#120705',
    surface: '#ffffff',
    ink: '#f4f0e8',
    line: '#ffffff',
    accent: '#d53527',
    accent2: '#213497',
  },
  fontFamily: { display: ['DM Sans'], sans: ['DM Sans'] },
} }
```

## Do and don't

- **Do:** Set the hero on the near-black brown (#120705) with cream (#f4f0e8) serif headlines.
- **Do:** Use a classical serif for large headlines, with the second line in italic.
- **Do:** Keep the CTA as a thin outlined circle; it is the only shape in the hero.
- **Don't:** Don't set the hero on the beige ground (#e9e2d6); the ground is dark brown.
- **Don't:** Don't use the red (#d53527) or blue as hero colours; keep the hero to brown and cream.
- **Don't:** Don't set labels in DM Sans when the headline is a serif.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
