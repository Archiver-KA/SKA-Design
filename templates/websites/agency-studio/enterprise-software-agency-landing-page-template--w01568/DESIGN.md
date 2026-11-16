# Design system — Enterprise Software Agency Landing Page Template

`SN-W01568` · agency-studio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A pure black ground with a two-line white headline whose second line fades into a silver gradient on 'Digital Products.' The primary action is a solid white pill and the secondary a dark pill with a thin border, while the navigation's booking button is a deep indigo (#312e81). The page is monochrome apart from that indigo, so the gradient type carries the look.

**Mood:** monochrome, sleek, gradient-led, technical, focused

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#374151` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#312e81` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#6366f1` · `#000000` · `#818cf8` · `#4f46e5` · `#312e81` · `#a5b4fc` · `#a855f7` · `#60a5fa` · `#3b82f6`.

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
6. Dashboard preview (`dashboard-preview`)
7. Code / terminal (`code-terminal`)
8. Case studies (`case-studies`)
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
  --color-accent: #312e81;
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
    accent: '#312e81',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in a bold sans, with the second line in a silver gradient
- **Do:** Use the white pill for the primary button and the dark bordered pill for secondary
- **Do:** Keep indigo (#312e81) to the booking button and small status badges
- **Don't:** Don't use indigo as a page background
- **Don't:** Don't apply the metallic gradient to body text
- **Don't:** Don't add bright hues to the hero; the page is black and silver

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
