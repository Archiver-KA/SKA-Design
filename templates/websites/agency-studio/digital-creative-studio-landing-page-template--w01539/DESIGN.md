# Design system — Digital Creative Studio Landing Page Template

`SN-W01539` · agency-studio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A black page with a stacked headline in which the first word is solid white and the next two lines are outlined, a split treatment that is the signature. Small monospace labels, a thin status card and a faded numeral give it a technical, studio-log tone. Green appears only as a tiny status dot, so the page is monochrome and the outline does the decorative work.

**Mood:** monochrome, outlined, technical, bold

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#000000` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#334155` | Hairlines, dividers, outlines |
| Accent | `#1e293b` | Primary action and highlights |
| Second accent | `#22c55e` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#64748b` · `#1e293b` · `#334155` · `#0f172a` · `#94a3b8` · `#000000` · `#cbd5e1` · `#475569` · `#ef4444`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist Mono, Geist, Roboto, Montserrat, Poppins
- **Scale (largest breakpoint):** h1 144px · h2 48px · h3 14px · body 10px
- **Weights in use:** bold, light, semibold
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-sm` (2px)
- **Shadows:** `shadow-[0_10px_40px_-10px_rgba(125,211,252,0.6)]`, `shadow-[0_0_10px_rgba(125,211,252,0.5)]`
- **Content width:** `max-w-[1920px]`, `max-w-3xl`
- **Section padding:** `py-24`, `py-40`
- **Common gaps:** `gap-2`, `gap-4`, `gap-3`

**Primary button**

```html
<a class="w-full py-4 bg-brand-accent text-brand-dark text-xs font-bold uppercase tracking-widest hover:bg-white transition-colors mb-3">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Logo cloud (`logo-cloud`)
3. Pricing (`pricing`)
4. Hero (`hero`)
5. Call to action (`cta`)
6. Timeline (`timeline`)
7. Product grid (`product-grid`)
8. Services (`services`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN), Unicorn Studio (WebGL scenes)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #000000;
  --color-text: #ffffff;
  --color-muted: #64748b;
  --color-border: #334155;
  --color-accent: #1e293b;
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
    background: '#000000',
    surface: '#000000',
    ink: '#ffffff',
    muted: '#64748b',
    line: '#334155',
    accent: '#1e293b',
    accent2: '#22c55e',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the first headline line in solid white and the next lines as outline text
- **Do:** Use monospace for labels, the status card and the case number
- **Do:** Keep the status dot green (#22c55e) at a small size only
- **Don't:** Don't use the outline style on body copy or buttons
- **Don't:** Don't add coloured panels; the page uses black and grey only
- **Don't:** Don't place the status card over the headline

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
