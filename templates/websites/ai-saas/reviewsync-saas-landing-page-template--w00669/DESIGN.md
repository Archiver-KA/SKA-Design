# Design system — ReviewSync SaaS Landing Page Template

`SN-W00669` · ai-saas · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A clean, light SaaS page with a near-black bold headline, where the second line 'One CMS.' is set in teal (#14b8a6) as the single accent. A teal filled button leads, with a grey outlined button beside it, and the product is shown as white cards with a dark panel for contrast. The tone is friendly and direct, and spacing does most of the work.

**Mood:** clean, friendly, direct, bright

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#0f172a` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#f1f5f9` | Hairlines, dividers, outlines |
| Accent | `#14b8a6` | Primary action and highlights |
| Second accent | `#e2e8f0` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#14b8a6` · `#0f172a` · `#f1f5f9` · `#64748b` · `#e2e8f0` · `#334155` · `#475569` · `#0d9488` · `#f8fafc`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 60px · h2 30px · h3 18px · body 14px
- **Weights in use:** medium, semibold, normal
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded` (4px), `rounded-full` (9999px), `rounded-2xl` (16px)
- **Shadows:** `shadow-sm`, `shadow-lg`, `shadow-teal-900/5`
- **Content width:** `max-w-6xl`, `max-w-4xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="h-12 px-8 rounded-full font-medium text-sm transition-all shadow-lg flex items-center gap-2 text-white bg-teal-500 hover:bg-teal-500 shadow-teal-600/20">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Logo cloud (`logo-cloud`)
4. Gallery / portfolio (`gallery-portfolio`)
5. Feature grid (`features`)
6. Code / terminal (`code-terminal`)
7. Pricing (`pricing`)
8. Testimonials (`testimonials`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #ffffff;
  --color-text: #0f172a;
  --color-muted: #64748b;
  --color-border: #f1f5f9;
  --color-accent: #14b8a6;
  --color-accent-2: #e2e8f0;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 4px;
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
    accent: '#14b8a6',
    accent2: '#e2e8f0',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the second headline line in teal (#14b8a6) and keep the first line near-black
- **Do:** Use the teal filled button as the primary action, with a grey outlined button beside it
- **Do:** Show product screens as white cards, with one dark panel for contrast
- **Don't:** Don't use the pale blue (#dbeafe) as a page ground; the page is white
- **Don't:** Don't add gradients to the headline; the teal is flat
- **Don't:** Don't set the subline in a heavy weight; it stays regular grey

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
