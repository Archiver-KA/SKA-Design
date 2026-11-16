# Design system — Maritime Advisory Landing Page Template

`SN-W01632` · agency-studio · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A restrained, white institutional page with a deep navy (#0f172a) Playfair Display headline, set large and left-aligned above a short grey lead-in. The only call to action is a small uppercase text link with an arrow, so there is no button, colour or photograph in the first screen and the typography and white space carry the authority. A short rule and an uppercase date line mark the structure.

**Mood:** authoritative, restrained, editorial, quiet

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#cbd5e1` | Cards, panels, raised areas |
| Text | `#0f172a` | Headings and primary copy |
| Muted text | `#475569` | Secondary copy, captions |
| Border | `#0f172a` | Hairlines, dividers, outlines |
| Accent | `#0f172a` | Primary action and highlights |

Palette by frequency of use: `#0f172a` · `#475569` · `#64748b` · `#e2e8f0` · `#cbd5e1` · `#94a3b8` · `#ffffff` · `#f1f5f9` · `#334155` · `#f8fafc`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display, Geist, Roboto, Montserrat, Poppins
- **Scale (largest breakpoint):** h1 96px · h2 60px · h3 24px · body 14px
- **Weights in use:** medium, light, normal
- **Letter spacing:** `tracking-widest`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** none used — square corners
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-12`, `gap-6`, `gap-2`

**Primary button**

```html
<a class="inline-block text-xs font-medium uppercase tracking-widest text-slate-900 border border-slate-300 px-6 py-3 hover:bg-slate-900 hover:text-white transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Bento grid (`bento-grid`)
4. Services (`services`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels)
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #cbd5e1;
  --color-text: #0f172a;
  --color-muted: #475569;
  --color-border: #0f172a;
  --color-accent: #0f172a;
  --font-display: "Playfair Display", serif;
  --font-body: "Inter", sans-serif;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#cbd5e1',
    ink: '#0f172a',
    muted: '#475569',
    line: '#0f172a',
    accent: '#0f172a',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in Playfair Display, navy (#0f172a), large and left-aligned
- **Do:** Use a text link with an arrow as the call to action instead of a filled button
- **Do:** Mark the eyebrow line with a short rule and uppercase grey text
- **Don't:** Don't add colour to the hero; the navy is the only ink
- **Don't:** Don't round corners; the page is square and flat
- **Don't:** Don't set the lead paragraph in the serif

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
