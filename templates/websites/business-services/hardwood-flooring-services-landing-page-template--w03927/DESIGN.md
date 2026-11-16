# Design system — Hardwood Flooring Services Landing Page Template

`SN-W03927` · business-services · light mode · Sinera Atlas theme `route` · language `en`

## Direction

A warm off-white page where a Playfair-style serif headline sits in deep green (#1a2e1a), with the closing word set in italic. DM Sans handles navigation and body copy, which keeps the serif as the single expressive element. Deep green solid buttons carry the main actions, and a faint mottled wash gives the ground a natural, paper-like quality. The tone is craft-led and understated.

**Mood:** craft-led, understated, natural, warm, refined

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f9f8f6` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#1a2e1a` | Headings and primary copy |
| Muted text | `#7d9171` | Secondary copy, captions |
| Border | `#1a2e1a` | Hairlines, dividers, outlines |
| Accent | `#1a2e1a` | Primary action and highlights |

Palette by frequency of use: `#1a2e1a` · `#c5a065` · `#ffffff` · `#f9f8f6` · `#7d9171` · `#c4cfc0` · `#000000` · `#e5e7eb`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** DM Sans
- **Loaded families:** DM Sans, Playfair Display
- **Scale (largest breakpoint):** h1 96px · h2 36px · h3 20px · body 14px
- **Weights in use:** medium, light, semibold
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-sm` (2px), `rounded-full` (9999px), `rounded` (4px)
- **Shadows:** `shadow-lg`, `shadow-forest/5`, `shadow-2xl`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-32`, `py-24`
- **Common gaps:** `gap-2`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="bg-forest text-cream px-8 py-4 rounded-sm text-sm font-medium hover:bg-forest/90 transition-all shadow-xl shadow-forest/10 flex items-center justify-center gap-2 group">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Services (`services`)
4. Gallery / portfolio (`gallery-portfolio`)
5. About (`about`)
6. Newsletter signup (`newsletter`)
7. FAQ (`faq`)
8. Contact form (`contact-form`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #f9f8f6;
  --color-surface: #ffffff;
  --color-text: #1a2e1a;
  --color-muted: #7d9171;
  --color-border: #1a2e1a;
  --color-accent: #1a2e1a;
  --font-display: "Playfair Display", serif;
  --font-body: "DM Sans", sans-serif;
  --radius: 2px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f9f8f6',
    surface: '#ffffff',
    ink: '#1a2e1a',
    muted: '#7d9171',
    line: '#1a2e1a',
    accent: '#1a2e1a',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['DM Sans'] },
} }
```

## Do and don't

- **Do:** Set headlines in Playfair Display in deep green (#1a2e1a), with the final word in italic.
- **Do:** Use the solid deep green button for the project action and outlined buttons for gallery links.
- **Do:** Keep the ground warm off-white (#f9f8f6) with a light mottled wash behind the hero.
- **Don't:** Don't add gold accents to the hero; it uses deep green only.
- **Don't:** Don't set body copy in italic; italic is for the headline's last word.
- **Don't:** Don't use bright colours; the page stays green, cream and grey.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
