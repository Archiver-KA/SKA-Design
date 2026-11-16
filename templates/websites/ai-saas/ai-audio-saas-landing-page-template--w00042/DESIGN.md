# Design system — AI Audio SaaS Landing Page Template

`SN-W00042` · ai-saas · light mode · Sinera Atlas theme `circuit` · language `pt-br`

## Direction

A light, quiet base with a white ground and Outfit display type, paired with Inter body text. A single emerald accent (#10b981) marks the brand mark, and the design is minimal and modest.

**Mood:** minimal, light, quiet, sparse

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
- **Common gaps:** `gap-6`, `gap-4`, `gap-2`

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
5. Bento grid (`bento-grid`)
6. Contact form (`contact-form`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN), GSAP, Lenis smooth scroll
- **Icons:** Lucide, Iconify

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

- **Do:** Keep the base white (#ffffff) with near-black text (#0f172a)
- **Do:** Use emerald (#10b981) only for the brand accent
- **Do:** Set headlines in Outfit and body text in Inter
- **Don't:** Don't add a dark theme; the page ground is white
- **Don't:** Don't use more than one accent colour
- **Don't:** Don't set headlines in Inter; they are set in Outfit

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
