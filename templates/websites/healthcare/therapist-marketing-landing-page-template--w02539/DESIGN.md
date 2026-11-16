# Design system — Therapist Marketing Landing Page Template

`SN-W02539` · healthcare · light mode · Sinera Atlas theme `calm` · language `en`

## Direction

A conversion-focused B2B page on a white ground, with a dark slate headline whose final clause turns indigo (#4f46e5). The same indigo fills the primary button and carries the single emphasis, while the secondary button is an outline. The stance is plain and sales-led, with generous space and a small pale pill above the headline doing the only decorative work.

**Mood:** sales-led, plain, focused, clean

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#0f172a` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#f1f5f9` | Hairlines, dividers, outlines |
| Accent | `#4f46e5` | Primary action and highlights |
| Second accent | `#f87171` | Supporting highlights |

Palette by frequency of use: `#0f172a` · `#f1f5f9` · `#ffffff` · `#64748b` · `#4f46e5` · `#e0e7ff` · `#f8fafc` · `#475569` · `#94a3b8` · `#4338ca`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 48px · h2 48px · h3 20px · body 14px
- **Weights in use:** medium, semibold, normal
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-3xl` (24px)
- **Shadows:** `shadow-sm`, `shadow-xl`, `shadow-indigo-100/50`
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-2`, `gap-8`, `gap-3`

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Testimonials (`testimonials`)
4. Feature grid (`features`)
5. Process / steps (`how-it-works`)
6. FAQ (`faq`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #ffffff;
  --color-text: #0f172a;
  --color-muted: #64748b;
  --color-border: #f1f5f9;
  --color-accent: #4f46e5;
  --color-accent-2: #f87171;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#ffffff',
    ink: '#0f172a',
    muted: '#64748b',
    line: '#f1f5f9',
    accent: '#4f46e5',
    accent2: '#f87171',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use indigo (#4f46e5) for the headline's final clause and the primary button only
- **Do:** Keep the secondary button as a white outline with dark text
- **Do:** Set the badge above the headline as a small pale pill
- **Don't:** Don't add gradient backgrounds to the hero; the ground is plain white
- **Don't:** Don't use indigo for body text
- **Don't:** Don't add a second highlight colour to the headline

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
