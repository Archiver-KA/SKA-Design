# Design system — Zoho IT Services Landing Page Template

`SN-W04140` · business-services · light mode · Sinera Atlas theme `route` · language `en`

## Direction

A light, clean IT services page with a bold dark navy headline (#0f172a) in which the product name is set in blue. A dark filled button and a white outlined button sit under the text, and the message is centred above a dark card. Blue is limited to the highlighted phrase, while the rest of the page stays neutral.

**Mood:** clean, corporate, neutral, centred, clear

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#f8fafc` | Cards, panels, raised areas |
| Text | `#475569` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#f1f5f9` | Hairlines, dividers, outlines |
| Accent | `#0f172a` | Primary action and highlights |
| Second accent | `#ef4444` | Supporting highlights |

Palette by frequency of use: `#0f172a` · `#ffffff` · `#f8fafc` · `#475569` · `#e2e8f0` · `#64748b` · `#f1f5f9` · `#334155` · `#1e293b` · `#94a3b8`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 36px · h2 30px · h3 20px · body 14px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-2xl` (16px), `rounded-full` (9999px), `rounded-lg` (8px)
- **Shadows:** `shadow-sm`, `shadow-lg`, `shadow-md`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-24`, `py-20`
- **Common gaps:** `gap-8`, `gap-4`, `gap-12`

**Primary button**

```html
<a class="nav-link px-4 py-2 text-sm font-medium text-white bg-slate-900 rounded-full hover:bg-slate-800 transition-all shadow-sm">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Integrations (`integrations`)
5. Call to action (`cta`)
6. About (`about`)
7. Logo cloud (`logo-cloud`)
8. Team (`team`)
9. Services (`services`)
10. FAQ (`faq`)
11. Contact form (`contact-form`)
12. Map / location (`map-location`)
13. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #f8fafc;
  --color-text: #475569;
  --color-muted: #64748b;
  --color-border: #f1f5f9;
  --color-accent: #0f172a;
  --color-accent-2: #ef4444;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 16px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#f8fafc',
    ink: '#475569',
    muted: '#64748b',
    line: '#f1f5f9',
    accent: '#0f172a',
    accent2: '#ef4444',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the highlighted phrase in blue on the dark navy headline (#0f172a)
- **Do:** Use a dark filled button for the primary action and a white outline for the secondary
- **Do:** Keep the page on white with light slate sections (#f8fafc)
- **Don't:** Don't use blue for body text
- **Don't:** Don't add more than one highlighted phrase per headline
- **Don't:** Don't set headlines in light weights

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
