# Design system — IEP Advocacy Services Landing Page Template

`SN-W03940` · business-services · light mode · Sinera Atlas theme `route` · language `en`

## Direction

A serif-led advocacy page: Playfair Display at large size sets the hero, with one word in warm gold italic for emphasis. The page sits on a pale ground under a dark navigation bar, and a dark photograph in rounded corners carries the visual weight. Inter handles navigation and body text, so the formal serif and clean sans give an authoritative but approachable tone.

**Mood:** authoritative, warm, approachable, editorial, trustworthy

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#f8fafc` | Cards, panels, raised areas |
| Text | `#475569` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#f1f5f9` | Hairlines, dividers, outlines |
| Accent | `#e2e8f0` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#475569` · `#94a3b8` · `#cbd5e1` · `#262626` · `#e2e8f0` · `#f1f5f9` · `#64748b` · `#404040` · `#f8fafc`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display, Geist, Roboto, Montserrat, Poppins
- **Scale (largest breakpoint):** h1 60px · h2 30px · h3 18px · body 14px
- **Weights in use:** semibold, medium, bold
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded` (4px), `rounded-full` (9999px), `rounded-lg` (8px)
- **Shadows:** `shadow-sm`, `shadow-md`, `shadow-lg`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-6`, `gap-4`

**Primary button**

```html
<a class="bg-brand-gold hover:bg-brand-goldhover text-brand-dark text-sm font-medium px-5 py-2.5 rounded shadow-sm transition-all transform hover:-translate-y-0.5">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Stats band (`stats`)
4. Process / steps (`how-it-works`)
5. Logo cloud (`logo-cloud`)
6. Testimonials (`testimonials`)
7. About (`about`)
8. Services (`services`)
9. Listings (`listings`)
10. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #f8fafc;
  --color-text: #475569;
  --color-muted: #64748b;
  --color-border: #f1f5f9;
  --color-accent: #e2e8f0;
  --font-display: "Playfair Display", serif;
  --font-body: "Inter", sans-serif;
  --radius: 4px;
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
    accent: '#e2e8f0',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headlines in Playfair Display at large size, with one gold italic word per headline
- **Do:** Use Inter for navigation, buttons and body copy
- **Do:** Frame photographs with rounded corners and no border
- **Don't:** Don't set headlines in a sans-serif face
- **Don't:** Don't add a second accent colour beside the gold
- **Don't:** Don't set small text in the gold on light backgrounds

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
