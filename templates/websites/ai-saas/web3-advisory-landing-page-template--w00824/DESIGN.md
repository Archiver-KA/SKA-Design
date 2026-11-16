# Design system — Web3 Advisory Landing Page Template

`SN-W00824` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A near-black Web3 hero with a faint grid behind it and a large white Inter headline. The word Web3 is set in a serif italic, the only typographic contrast. Two pill buttons, one solid white and one outlined, sit under light grey copy. Colour is almost absent, so the look is restrained and technical.

**Mood:** restrained, technical, dark, precise

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#020617` | Page ground |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#334155` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#1e293b` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#38bdf8` · `#94a3b8` · `#020617` · `#64748b` · `#0b101e` · `#000000` · `#0f172a` · `#cbd5e1` · `#1e293b`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 20px · body 14px
- **Weights in use:** semibold, medium
- **Letter spacing:** `tracking-widest`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-xl` (12px)
- **Content width:** `max-w-7xl`, `max-w-5xl`
- **Section padding:** `py-32`
- **Common gaps:** `gap-3`, `gap-2`, `gap-8`

**Primary button**

```html
<a class="inline-flex items-center justify-center px-10 py-5 bg-[#38bdf8] text-black text-base font-semibold rounded-full hover:bg-[#7dd3fc] hover:-translate-y-1 transition-all duration-300">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Services (`services`)
5. Call to action (`cta`)
6. Team (`team`)
7. Contact form (`contact-form`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #020617;
  --color-text: #ffffff;
  --color-muted: #334155;
  --color-border: #ffffff;
  --color-accent: #1e293b;
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
    ink: '#ffffff',
    muted: '#334155',
    line: '#ffffff',
    accent: '#1e293b',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the hero on #020617 with white headline type and grey supporting copy
- **Do:** Set one word per headline in a serif italic for contrast, as with 'Web3'
- **Do:** Use a solid white pill for the primary action and an outlined pill beside it
- **Don't:** Don't add bright accent colours to the hero
- **Don't:** Don't use the serif italic on more than one word per headline
- **Don't:** Don't drop the faint background grid behind the hero

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
