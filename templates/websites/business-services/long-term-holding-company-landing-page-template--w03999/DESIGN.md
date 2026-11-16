# Design system — Long-Term Holding Company Landing Page Template

`SN-W03999` · business-services · light mode · Sinera Atlas theme `route` · language `en`

## Direction

A quiet holding-company page on an off-white ground, with a large serif headline in dark navy. One italic phrase, 'long term', is the only emphasis, and the buttons are solid navy with a plain outline secondary. Small spaced labels above the headline and generous space keep the page composed and unhurried.

**Mood:** quiet, composed, refined, patient, classic

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fafaf9` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#000000` | Headings and primary copy |
| Muted text | `#0f172a` | Secondary copy, captions |
| Border | `#f1f5f9` | Hairlines, dividers, outlines |
| Accent | `#0f172a` | Primary action and highlights |
| Second accent | `#14b8a6` | Supporting highlights |

Palette by frequency of use: `#0f172a` · `#64748b` · `#ffffff` · `#94a3b8` · `#e2e8f0` · `#f1f5f9` · `#fafaf9` · `#475569` · `#1e293b` · `#0d9488`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** var(--font-sans)
- **Loaded families:** Inter, Playfair Display
- **Scale (largest breakpoint):** h1 96px · h2 36px · h3 20px · body 14px
- **Weights in use:** light, bold, medium
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-lg` (8px)
- **Shadows:** `shadow-xl`, `shadow-sm`, `shadow-slate-200/50`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-20`, `py-24`
- **Common gaps:** `gap-2`, `gap-3`, `gap-8`

**Primary button**

```html
<a class="text-[13px] font-bold tracking-widest uppercase bg-slate-900 text-white px-6 py-3 rounded-full hover:bg-slate-800 transition-all hover:scale-[1.02]">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Integrations (`integrations`)
5. Gallery / portfolio (`gallery-portfolio`)
6. Process / steps (`how-it-works`)
7. Logo cloud (`logo-cloud`)
8. Testimonials (`testimonials`)
9. About (`about`)
10. Contact form (`contact-form`)
11. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN), GSAP, Three.js, Lenis smooth scroll
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #fafaf9;
  --color-surface: #ffffff;
  --color-text: #000000;
  --color-muted: #0f172a;
  --color-border: #f1f5f9;
  --color-accent: #0f172a;
  --color-accent-2: #14b8a6;
  --font-display: "Playfair Display", serif;
  --font-body: "var(--font-sans)", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fafaf9',
    surface: '#ffffff',
    ink: '#000000',
    muted: '#0f172a',
    line: '#f1f5f9',
    accent: '#0f172a',
    accent2: '#14b8a6',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['var(--font-sans)'] },
} }
```

## Do and don't

- **Do:** Set headlines in a serif, with one italic phrase per hero
- **Do:** Use navy (#0f172a) for the primary button and the headline colour
- **Do:** Keep labels above headings in small, widely spaced capitals
- **Don't:** Don't use more than one italic phrase per heading
- **Don't:** Don't set the page on a grey background; keep it off-white
- **Don't:** Don't add photography to the hero; the type leads

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
