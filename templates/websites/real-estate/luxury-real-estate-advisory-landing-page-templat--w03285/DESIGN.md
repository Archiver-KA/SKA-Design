# Design system — Luxury Real Estate Advisory Landing Page Template

`SN-W03285` · real-estate · dark mode · Sinera Atlas theme `dwell` · language `en`

## Direction

Warm and confident: a deep slate ground (#1e293b) holds a large white serif headline in two lines, with the second line in italic gold (#c5a059). A small gold eyebrow sits above it, and the header carries a filled gold button. The green is kept for the WhatsApp action alone, so the gold does the emphasis and the page feels luxurious without much colour.

**Mood:** luxurious, warm, dark, confident

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#1e293b` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#f8fafc` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#f1f5f9` | Hairlines, dividers, outlines |
| Accent | `#c5a059` | Primary action and highlights |
| Second accent | `#c5a059` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#1a1a1a` · `#64748b` · `#f1f5f9` · `#f8fafc` · `#e2e8f0` · `#94a3b8` · `#475569` · `#cbd5e1` · `#1e293b`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 16px · body 12px
- **Weights in use:** medium, light, normal
- **Letter spacing:** `tracking-wider`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded` (4px)
- **Shadows:** `shadow-sm`, `shadow-xl`, `shadow-[0_2px_10px_-3px_rgba(6,81,237,0.05)]`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-1`, `gap-4`, `gap-2`

**Primary button**

```html
<a class="bg-gold/90 hover:bg-gold text-white px-5 py-2.5 rounded text-xs tracking-wide transition-all font-medium backdrop-blur-sm shadow-[0_4px_14px_0_rgba(197,160,89,0.39)] hover:shadow-[0_6px_20px_rgba(197,160,89,0.23)]">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Stats band (`stats`)
4. Services (`services`)
5. Listings (`listings`)
6. Benefits (`benefits`)
7. Testimonials (`testimonials`)
8. Contact form (`contact-form`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #1e293b;
  --color-surface: #ffffff;
  --color-text: #f8fafc;
  --color-muted: #64748b;
  --color-border: #f1f5f9;
  --color-accent: #c5a059;
  --color-accent-2: #c5a059;
  --font-display: "Playfair Display", serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#1e293b',
    surface: '#ffffff',
    ink: '#f8fafc',
    muted: '#64748b',
    line: '#f1f5f9',
    accent: '#c5a059',
    accent2: '#c5a059',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the second headline phrase in italic gold (#c5a059) in the serif display face.
- **Do:** Use gold (#c5a059) for eyebrows, the header button and headline emphasis.
- **Do:** Keep the green contact button for WhatsApp only.
- **Don't:** Don't use the green on other buttons.
- **Don't:** Don't set headlines in a sans face; the serif carries the voice.
- **Don't:** Don't place gold on large background areas.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
