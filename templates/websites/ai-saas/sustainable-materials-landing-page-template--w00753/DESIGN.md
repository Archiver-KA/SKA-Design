# Design system — Sustainable Materials Landing Page Template

`SN-W00753` · ai-saas · dark mode · Sinera Atlas theme `route` · language `ko`

## Direction

A flat charcoal hero (#27272a) with a centred, tightly set white headline over two lines of muted grey body text. The hero uses no photograph or accent colour; the nav and buttons are the only controls, with a solid white pill beside a dark outline pill. The result is a plain, product-first page where the headline carries the weight.

**Mood:** plain, product-first, charcoal, quiet

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#27272a` | Page ground |
| Surface | `#09090b` | Cards, panels, raised areas |
| Text | `#f4f4f5` | Headings and primary copy |
| Muted text | `#a8a29e` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#ffffff` · `#a8a29e` · `#e7e5e4` · `#09090b` · `#27272a` · `#d6d3d1` · `#292524` · `#f5f5f4` · `#78716c` · `#52525b`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** A2z
- **Body:** A2z
- **Loaded families:** Aggravo, A2z
- **Scale (largest breakpoint):** h1 60px · h2 36px · h3 16px · body 12px
- **Weights in use:** light, medium
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-3xl` (24px)
- **Shadows:** `shadow-[0_0_40px_rgba(255,255,255,0.02)]`, `shadow-[0_0_30px_rgba(255,255,255,0.05)]`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Common gaps:** `gap-3`, `gap-6`, `gap-1.5`

**Primary button**

```html
<a class="flex gap-2 hover:bg-zinc-300 transition-all text-sm font-medium text-stone-900 bg-zinc-100 rounded-full px-7 py-3 gap-x-2 gap-y-2 items-center justify-center">…</a>
```

## Page structure

Blocks in page order:

1. Video / media (`video-media`)
2. Modal / overlay (`modal-overlay`)
3. Navigation bar (`navbar`)
4. Hero (`hero`)
5. Product grid (`product-grid`)
6. Process / steps (`how-it-works`)
7. Feature grid (`features`)
8. About (`about`)
9. Pricing (`pricing`)
10. FAQ (`faq`)
11. Contact form (`contact-form`)
12. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #27272a;
  --color-surface: #09090b;
  --color-text: #f4f4f5;
  --color-muted: #a8a29e;
  --color-border: #ffffff;
  --font-display: "A2z", sans-serif;
  --font-body: "A2z", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#27272a',
    surface: '#09090b',
    ink: '#f4f4f5',
    muted: '#a8a29e',
    line: '#ffffff',
  },
  fontFamily: { display: ['A2z'], sans: ['A2z'] },
} }
```

## Do and don't

- **Do:** Set the headline in tight white type, centred over the hero
- **Do:** Keep the ground flat charcoal (#27272a) and let the nav sit on a darker bar (#18181b)
- **Do:** Make the primary button a solid white pill and the secondary a dark outline
- **Don't:** Don't add a photograph to this hero; the flat ground is the design
- **Don't:** Don't use a second colour for the buttons
- **Don't:** Don't set body copy in pure white; it is muted grey under the headline

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
