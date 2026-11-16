# Design system — Fashion Studio Landing Page Template

`SN-W02747` · beauty-fashion · light mode · Sinera Atlas theme `dwell` · language `en`

## Direction

Light, airy atelier page with a large serif headline that shifts from deep slate into a purple-tinted grey across its two words. Below it sit a white outlined button and a dark navy filled button, and the stats row uses small serif numerals. The result is refined and couture in tone, with the colour kept inside slate and violet.

**Mood:** refined, airy, couture, soft-gradient

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#f8fafc` | Cards, panels, raised areas |
| Text | `#1e293b` | Headings and primary copy |
| Muted text | `#475569` | Secondary copy, captions |
| Border | `#cbd5e1` | Hairlines, dividers, outlines |
| Accent | `#0f172a` | Primary action and highlights |
| Second accent | `#d97706` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#475569` · `#e2e8f0` · `#64748b` · `#0f172a` · `#1e293b` · `#94a3b8` · `#cbd5e1` · `#334155` · `#f8fafc`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 128px · h2 72px · h3 30px · body 14px
- **Weights in use:** medium, light, semibold
- **Letter spacing:** `tracking-wider`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-3xl` (24px), `rounded-2xl` (16px)
- **Shadows:** `shadow-lg`, `shadow-xl`, `shadow-2xl`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-20`, `py-16`
- **Common gaps:** `gap-3`, `gap-8`, `gap-2`

**Primary button**

```html
<a class="group glass border rounded-2xl px-10 py-5 font-medium hover-lift magnetic flex items-center gap-3 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/90 border-slate-200/60 text-slate-800">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Logo cloud (`logo-cloud`)
4. About (`about`)
5. Product grid (`product-grid`)
6. Process / steps (`how-it-works`)
7. Dashboard preview (`dashboard-preview`)
8. Testimonials (`testimonials`)
9. Newsletter signup (`newsletter`)
10. Footer (`footer`)

## Motion, effects and stack

- **Effects:** gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #f8fafc;
  --color-text: #1e293b;
  --color-muted: #475569;
  --color-border: #cbd5e1;
  --color-accent: #0f172a;
  --color-accent-2: #d97706;
  --font-display: "Inter", sans-serif;
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
    ink: '#1e293b',
    muted: '#475569',
    line: '#cbd5e1',
    accent: '#0f172a',
    accent2: '#d97706',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline large in a serif, with a slate-to-violet tonal shift across the words
- **Do:** Use a deep navy filled button (#0f172a) for the main booking action
- **Do:** Set the stats row in small serif numerals with uppercase grey labels
- **Don't:** Don't add bright saturated colour; the gradient stays within slate and violet
- **Don't:** Don't set the headline in a heavy weight; the look relies on the light serif
- **Don't:** Don't place the stats on dark bands; they sit on the white ground

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
