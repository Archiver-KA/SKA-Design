# Design system — Canapa Labs Hemp Manufacturing Landing Page Template

`SN-W03850` · business-services · light mode · Sinera Atlas theme `route` · language `en`

## Direction

The first screen is a plain white state with a centred lower-case wordmark and a thin rule, so little of the design shows at this stage. The style comes from a light ground, dark slate type, a green accent and rounded corners. Motion relies on smooth scrolling and gradient fills, which gives the page a clean, science-led feel.

**Mood:** clean, minimal, science-led, light

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#f8fafc` | Cards, panels, raised areas |
| Text | `#0f172a` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#64748b` | Hairlines, dividers, outlines |
| Accent | `#10b981` | Primary action and highlights |

Palette by frequency of use: `#10b981` · `#64748b` · `#0f172a` · `#ffffff` · `#f8fafc` · `#000000` · `#f3f4f6`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Outfit
- **Body:** Inter
- **Loaded families:** Inter, Outfit
- **Scale (largest breakpoint):** h2 48px · h3 24px · body 14px
- **Weights in use:** bold, medium, semibold
- **Letter spacing:** `tracking-widest`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-[2rem]` (2rem), `rounded-2xl` (16px)
- **Shadows:** `shadow-black/5`, `shadow-2xl`, `shadow-xl`
- **Content width:** `max-w-[1800px]`, `max-w-[1400px]`
- **Section padding:** `py-32`, `py-20`
- **Common gaps:** `gap-2`, `gap-6`, `gap-4`

**Primary button**

```html
<a class="px-6 py-2 rounded-full text-xs font-medium uppercase tracking-widest text-neutral hover:text-dark hover:bg-white transition-all duration-300">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Marquee (`marquee`)
4. Process / steps (`how-it-works`)
5. Feature grid (`features`)
6. Contact form (`contact-form`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN), GSAP, Lenis smooth scroll
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #f8fafc;
  --color-text: #0f172a;
  --color-muted: #64748b;
  --color-border: #64748b;
  --color-accent: #10b981;
  --font-display: "Outfit", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#f8fafc',
    ink: '#0f172a',
    muted: '#64748b',
    line: '#64748b',
    accent: '#10b981',
  },
  fontFamily: { display: ['Outfit'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the ground white (#ffffff) with dark slate type (#0f172a).
- **Do:** Use the green (#10b981) for calls to action and small highlights only.
- **Do:** Keep the wordmark small and centred.
- **Don't:** Don't add dark sections without a clear reason.
- **Don't:** Don't use heavy shadows; the style is flat.
- **Don't:** Don't set body copy in pure black; use the slate text colour.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
