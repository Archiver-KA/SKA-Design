# Design system — HVAC and Sanitary Services Landing Page Template

`SN-W03932` · business-services · dark mode · Sinera Atlas theme `route` · language `fr`

## Direction

A dark navy hero sits under a light grey top bar, which splits the page into a neutral header and a night-toned body. Orange (#f97316) is the one accent, used on the primary quote buttons, a small tag and the key figure. A heavy white sans headline carries the message, and a translucent card on the right puts the years of experience in a large number. The tone is confident and direct.

**Mood:** confident, direct, night-toned, bold, trustworthy

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#020617` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#f97316` | Primary action and highlights |
| Second accent | `#e2e8f0` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#020617` · `#94a3b8` · `#334155` · `#f97316` · `#ea580c` · `#e2e8f0` · `#0f172a` · `#475569` · `#fb923c`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** DM Sans
- **Body:** DM Sans
- **Loaded families:** DM Sans, Manrope
- **Scale (largest breakpoint):** h1 60px · h2 36px · h3 14px · body 12px
- **Weights in use:** semibold, medium
- **Letter spacing:** `tracking-tight`, `tracking-[0.18em]`

## Shape, spacing and layout

- **Corner radius:** `rounded-xl` (12px), `rounded-2xl` (16px), `rounded-lg` (8px)
- **Shadows:** `shadow-sm`, `shadow-xl`, `shadow-slate-900/8`
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Section padding:** `py-20`, `py-28`
- **Common gaps:** `gap-2`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="hidden items-center gap-2 rounded-xl bg-orange-500 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-orange-500/20 transition duration-300 hover:-translate-y-0.5 hover:bg-orange-600 sm:flex">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Services (`services`)
4. Feature grid (`features`)
5. Logo cloud (`logo-cloud`)
6. Testimonials (`testimonials`)
7. Call to action (`cta`)
8. Contact form (`contact-form`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #020617;
  --color-surface: #ffffff;
  --color-text: #ffffff;
  --color-border: #ffffff;
  --color-accent: #f97316;
  --color-accent-2: #e2e8f0;
  --font-display: "DM Sans", sans-serif;
  --font-body: "DM Sans", sans-serif;
  --radius: 12px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#020617',
    surface: '#ffffff',
    ink: '#ffffff',
    line: '#ffffff',
    accent: '#f97316',
    accent2: '#e2e8f0',
  },
  fontFamily: { display: ['DM Sans'], sans: ['DM Sans'] },
} }
```

## Do and don't

- **Do:** Set the headline in heavy white sans on the dark navy ground (#020617).
- **Do:** Use the orange (#f97316) only for the primary quote buttons, the small tag and the key figure.
- **Do:** Place the key figure in a translucent card on the right with a short supporting line.
- **Don't:** Don't use orange for body text or long copy.
- **Don't:** Don't put light backgrounds behind the hero; the dark ground carries the page.
- **Don't:** Don't add a second accent colour.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
