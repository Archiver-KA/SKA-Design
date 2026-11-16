# Design system — Dr.Anjun Narayan - Neurosurgeon 

`SN-W02371` · healthcare · light mode · Sinera Atlas theme `calm` · language `en`

## Direction

A restrained, clinical-professional hero on a very light grey-white ground. The headline is a high-contrast serif in near-black, with the second line set in a lighter italic grey, and the navy button in the header is the only solid colour. The effect is calm, credible and text-led.

**Mood:** restrained, credible, clinical, text-led, calm

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f8fafc` | Page ground |
| Surface | `#94a3b8` | Cards, panels, raised areas |
| Text | `#0b1b3d` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#f1f5f9` | Hairlines, dividers, outlines |
| Accent | `#0b1b3d` | Primary action and highlights |
| Second accent | `#fbbf24` | Supporting highlights |

Palette by frequency of use: `#0b1b3d` · `#ffffff` · `#64748b` · `#94a3b8` · `#e2e8f0` · `#f8fafc` · `#1e293b` · `#475569` · `#f1f5f9` · `#cbd5e1`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display
- **Scale (largest breakpoint):** h1 60px · h2 30px · h3 30px · body 16px
- **Weights in use:** light, extralight
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-sm` (2px), `rounded-full` (9999px), `rounded-md` (6px)
- **Shadows:** `shadow-slate-200/50`, `shadow-xl`, `shadow-2xl`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-2`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="px-5 py-2.5 bg-[#0B1B3D] text-white hover:bg-slate-800 transition-all duration-300 text-sm font-light uppercase tracking-widest rounded-sm">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Stats band (`stats`)
4. About (`about`)
5. Services (`services`)
6. Feature grid (`features`)
7. Articles (`blog-articles`)
8. FAQ (`faq`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #f8fafc;
  --color-surface: #94a3b8;
  --color-text: #0b1b3d;
  --color-muted: #64748b;
  --color-border: #f1f5f9;
  --color-accent: #0b1b3d;
  --color-accent-2: #fbbf24;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 2px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f8fafc',
    surface: '#94a3b8',
    ink: '#0b1b3d',
    muted: '#64748b',
    line: '#f1f5f9',
    accent: '#0b1b3d',
    accent2: '#fbbf24',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in a high-contrast serif, with the second line in a lighter grey italic.
- **Do:** Keep the hero on the near-white ground (#f8fafc) with the navy (#0b1b3d) for text and the primary button.
- **Do:** Use the navy for the single primary button per section.
- **Don't:** Don't set the hero on navy; the ground is light.
- **Don't:** Don't use the amber (#fbbf24) on this page.
- **Don't:** Don't add decorative shapes behind the headline.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
