# Design system — AI E-commerce Landing Page Template

`SN-W01076` · ecommerce · dark mode · Sinera Atlas theme `market` · language `es`

## Direction

A night-mode SaaS landing page on deep navy (#020617) with a soft indigo glow behind the hero. The headline fades from white to lavender across its last lines, so the colour lives in the type rather than in the buttons. Body copy is cool grey and the numbered benefits are plain text, which keeps the page calm and technical.

**Mood:** calm, technical, dark, modern, soft

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#020617` | Page ground |
| Surface | `#020617` | Cards, panels, raised areas |
| Text | `#f5f5f5` | Headings and primary copy |
| Muted text | `#94a3b8` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#6366f1` | Primary action and highlights |
| Second accent | `#22c55e` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#6366f1` · `#cbd5e1` · `#94a3b8` · `#020617` · `#1e293b` · `#334155` · `#64748b` · `#4f46e5` · `#818cf8`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 24px · body 12px
- **Weights in use:** medium, semibold, light
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-2xl` (16px)
- **Shadows:** `shadow-sm`, `shadow-[0_0_20px_rgba(255,255,255,0.3)]`, `shadow-2xl`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-20`
- **Common gaps:** `gap-4`, `gap-2`, `gap-6`

**Primary button**

```html
<a class="w-full bg-slate-800 text-slate-500 font-medium py-4 rounded-lg cursor-not-allowed transition-all duration-300 flex items-center justify-center gap-2 group">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Testimonials (`testimonials`)
5. Contact form (`contact-form`)
6. FAQ (`faq`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #020617;
  --color-surface: #020617;
  --color-text: #f5f5f5;
  --color-muted: #94a3b8;
  --color-border: #ffffff;
  --color-accent: #6366f1;
  --color-accent-2: #22c55e;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#020617',
    surface: '#020617',
    ink: '#f5f5f5',
    muted: '#94a3b8',
    line: '#ffffff',
    accent: '#6366f1',
    accent2: '#22c55e',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use the white-to-lavender gradient only on the last headline lines
- **Do:** Keep the background deep navy (#020617) with a soft indigo glow, not a flat fill
- **Do:** Set body copy in cool grey (#94a3b8)
- **Don't:** Don't use indigo (#6366f1) as a page background
- **Don't:** Don't set body text in pure white
- **Don't:** Don't add bright coloured buttons next to the gradient headline

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
