# Design system — ATech Vortex Agency Landing Page Template

`SN-W01438` · agency-studio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A pure black ground ([#000000]) with indigo ([#6366f1]) kept for the nav button and the status pill. The headline is heavy Inter, with the lower line rendered as a silver gradient that gives depth without shadows. A floating glass pill navigation and a dark primary button set the hierarchy.

**Mood:** dark, gradient-led, technical, restrained, high-contrast

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#374151` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#6366f1` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#6366f1` · `#000000` · `#818cf8` · `#4f46e5` · `#312e81` · `#a5b4fc` · `#a855f7` · `#c084fc` · `#60a5fa`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 18px · body 14px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-tighter`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-lg` (8px)
- **Shadows:** `shadow-lg`, `shadow-[0_0_15px_rgba(255,255,255,0.05)]`, `shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-24`, `py-12`
- **Common gaps:** `gap-2`, `gap-3`, `gap-1`

**Primary button**

```html
<a class="inline-flex items-center gap-2 text-sm font-medium border border-indigo-500 rounded-lg px-5 py-2.5 hover:bg-indigo-500 transition font-geist shadow-lg text-white bg-indigo-600 shadow-indigo-900/20">…</a>
```

## Page structure

Blocks in page order:

1. 3D / canvas scene (`3d-canvas`)
2. Hero (`hero`)
3. Marquee (`marquee`)
4. Services (`services`)
5. Feature grid (`features`)
6. Case studies (`case-studies`)
7. Code / terminal (`code-terminal`)
8. Stats band (`stats`)
9. Testimonials (`testimonials`)
10. Pricing (`pricing`)
11. FAQ (`faq`)
12. Contact form (`contact-form`)
13. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #374151;
  --color-text: #ffffff;
  --color-border: #ffffff;
  --color-accent: #6366f1;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#374151',
    ink: '#ffffff',
    line: '#ffffff',
    accent: '#6366f1',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use indigo (#6366f1) for the nav button and the status pill only
- **Do:** Set the hero in heavy Inter with the second line in grey gradient
- **Do:** Keep the navigation as a floating glass pill
- **Don't:** Don't set indigo text on the black ground for body copy
- **Don't:** Don't use a light background for the hero
- **Don't:** Don't put more than one gradient headline in a section

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
