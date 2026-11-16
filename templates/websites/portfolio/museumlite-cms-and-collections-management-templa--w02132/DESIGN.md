# Design system — MuseumLite CMS & Collections Management Template

`SN-W02132` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A dark admin dashboard on near-black (#09090b) with a zinc-grey sidebar and stacked tables and cards. Indigo (#6366f1) marks the primary actions and the active nav item, and emerald (#10b981) appears only as small status dots. Panels and table rows are separated by thin grey borders rather than shadows, and dense data uses muted grey text, so the page reads as a working tool for collections management.

**Mood:** functional, dark, dense, technical, calm

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#09090b` | Page ground |
| Surface | `#18181b` | Cards, panels, raised areas |
| Text | `#a1a1aa` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#27272a` | Hairlines, dividers, outlines |
| Accent | `#6366f1` | Primary action and highlights |
| Second accent | `#10b981` | Supporting highlights |

Palette by frequency of use: `#27272a` · `#18181b` · `#71717a` · `#a1a1aa` · `#e4e4e7` · `#6366f1` · `#d4d4d8` · `#ffffff` · `#3f3f46` · `#09090b`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h2 24px · h3 14px · body 12px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-wider`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded` (4px), `rounded-md` (6px), `rounded-lg` (8px)
- **Shadows:** `shadow-lg`, `shadow-sm`, `shadow-2xl`
- **Content width:** `max-w-4xl`, `max-w-3xl`
- **Common gaps:** `gap-2`, `gap-4`, `gap-3`

**Primary button**

```html
<a class="flex items-center gap-2 bg-zinc-900 text-zinc-300 hover:text-white border border-zinc-800 hover:border-zinc-700 px-3 py-1.5 rounded-md text-xs font-medium transition-all">…</a>
```

## Page structure

Blocks in page order:

1. Sidebar (`sidebar`)
2. Navigation bar (`navbar`)
3. Stats band (`stats`)
4. Product grid (`product-grid`)
5. Call to action (`cta`)
6. Bento grid (`bento-grid`)
7. Comparison (`comparison`)
8. Map / location (`map-location`)
9. Feature grid (`features`)
10. Contact form (`contact-form`)
11. Gallery / portfolio (`gallery-portfolio`)
12. Modal / overlay (`modal-overlay`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #09090b;
  --color-surface: #18181b;
  --color-text: #a1a1aa;
  --color-muted: #71717a;
  --color-border: #27272a;
  --color-accent: #6366f1;
  --color-accent-2: #10b981;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 4px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#09090b',
    surface: '#18181b',
    ink: '#a1a1aa',
    muted: '#71717a',
    line: '#27272a',
    accent: '#6366f1',
    accent2: '#10b981',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use indigo (#6366f1) for the primary button and the active sidebar item only.
- **Do:** Use emerald (#10b981) for status dots and positive states, not for buttons.
- **Do:** Separate panels and table rows with thin zinc borders (#27272a) rather than shadows.
- **Don't:** Don't use indigo for body text or table data.
- **Don't:** Don't loosen the row density; the template depends on compact tables.
- **Don't:** Don't add gradients or glow to the cards; the panels are flat.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
