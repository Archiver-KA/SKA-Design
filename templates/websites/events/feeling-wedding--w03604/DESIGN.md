# Design system — Feeling Wedding

`SN-W03604` · events · light mode · Sinera Atlas theme `workshop` · language `vi`

## Direction

The wedding studio page opens on a full-bleed photograph of gold rings on a soft, pale background. The title is a white serif set over the image, with a small tracked kicker above and an italic quoted line below. Outline buttons are white with thin borders, so the photograph does most of the work. A gold accent (#cba153) appears in small details, and the page keeps a light, luminous tone.

**Mood:** refined, luminous, romantic, soft, photographic

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fcfbf9` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#18181b` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#cba153` | Primary action and highlights |

Palette by frequency of use: `#cba153` · `#ffffff` · `#000000` · `#a1a1aa` · `#71717a` · `#52525b` · `#f4f4f5` · `#18181b` · `#e4e4e7` · `#f8f6f3`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Cormorant Garamond
- **Body:** Cormorant Garamond
- **Loaded families:** Cormorant Garamond, Montserrat
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 24px · body 12px
- **Weights in use:** light, medium
- **Letter spacing:** `tracking-widest`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px)
- **Shadows:** `shadow-xl`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-24`, `py-40`
- **Common gaps:** `gap-3`, `gap-8`, `gap-6`

**Primary button**

```html
<a class="px-8 py-3 text-xs tracking-widest uppercase font-light border border-white/30 transition-all duration-700 hover:bg-white hover:text-black">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Gallery / portfolio (`gallery-portfolio`)
5. Services (`services`)
6. Process / steps (`how-it-works`)
7. Call to action (`cta`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #fcfbf9;
  --color-surface: #ffffff;
  --color-text: #18181b;
  --color-muted: #71717a;
  --color-border: #ffffff;
  --color-accent: #cba153;
  --font-display: "Cormorant Garamond", serif;
  --font-body: "Cormorant Garamond", serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fcfbf9',
    surface: '#ffffff',
    ink: '#18181b',
    muted: '#71717a',
    line: '#ffffff',
    accent: '#cba153',
  },
  fontFamily: { display: ['Cormorant Garamond'], sans: ['Cormorant Garamond'] },
} }
```

## Do and don't

- **Do:** Set the title in a white serif over the full-bleed photograph
- **Do:** Use thin white outline buttons on the photograph
- **Do:** Keep the gold accent (#cba153) for small details only
- **Don't:** Don't place solid dark panels over the photograph
- **Don't:** Don't set the kicker or quotes in a heavy weight
- **Don't:** Don't use the gold for large backgrounds or body text

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
