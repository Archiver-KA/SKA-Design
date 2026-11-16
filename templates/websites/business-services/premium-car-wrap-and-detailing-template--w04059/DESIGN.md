# Design system — Premium Car Wrap and Detailing Template

`SN-W04059` · business-services · dark mode · Sinera Atlas theme `route` · language `cs`

## Direction

A high-contrast dark design built on pure black, with bold uppercase Inter headlines that switch between white and lime (#ccff00) mid-line. Lime is the single accent: it marks the second half of each headline, the header button and the primary call to action, so colour does the work that size would do elsewhere. Thin white navigation and wide black space keep the layout sharp and automotive.

**Mood:** high-contrast, bold, automotive, sharp, minimal

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#0a0a0a` | Cards, panels, raised areas |
| Text | `#d1d5db` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#ccff00` | Primary action and highlights |
| Second accent | `#f87171` | Supporting highlights |

Palette by frequency of use: `#ccff00` · `#ffffff` · `#000000` · `#6b7280` · `#9ca3af` · `#d1d5db` · `#0a0a0a` · `#ffff00` · `#ededed` · `#f87171`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Oswald
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 20px · body 14px
- **Weights in use:** light, medium, bold
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-md` (6px), `rounded-none` (0)
- **Shadows:** `shadow-[0_0_20px_rgba(204,255,0,0.15)]`, `shadow-[0_0_15px_rgba(204,255,0,0.35)]`, `shadow-[0_0_30px_rgba(204,255,0,0.5)]`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-6`, `gap-2`, `gap-8`

**Primary button**

```html
<a class="w-full bg-[#CCFF00] text-black text-xs uppercase tracking-widest px-6 py-4 font-medium hover:bg-white transition-colors text-center">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Bento grid (`bento-grid`)
5. Stats band (`stats`)
6. Feature grid (`features`)
7. Gallery / portfolio (`gallery-portfolio`)
8. About (`about`)
9. Contact form (`contact-form`)
10. FAQ (`faq`)
11. Call to action (`cta`)
12. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #0a0a0a;
  --color-text: #d1d5db;
  --color-muted: #6b7280;
  --color-border: #ffffff;
  --color-accent: #ccff00;
  --color-accent-2: #f87171;
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
    surface: '#0a0a0a',
    ink: '#d1d5db',
    muted: '#6b7280',
    line: '#ffffff',
    accent: '#ccff00',
    accent2: '#f87171',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headlines in uppercase Inter at a heavy weight, switching the second half of the line to lime (#ccff00)
- **Do:** Reserve lime (#ccff00) for the primary button and the key headline words
- **Do:** Keep the background pure black (#000000) with near-black panels (#0a0a0a) above it
- **Don't:** Don't use grey or pale fills for primary buttons; the solid lime button is the main colour block
- **Don't:** Don't add a second bright accent beside the lime; red (#f87171) appears only in small secondary notes
- **Don't:** Don't set lime text on light backgrounds, where its contrast drops

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
