# Design system — Earth Observation ePortfolio Website Template

`SN-W02000` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

The hero is a deep navy ground (#0f172a) with a bold white sans name at large size and a small uppercase blue-grey subtitle line. A white pill button is the single high-contrast element, set over a soft glow. The page feels technical and academic, with structure carried by a centred stack of label, name, tagline and paragraph.

**Mood:** technical, dark-hero, academic, clean

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0f172a` | Page ground |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#94a3b8` | Primary action and highlights |
| Second accent | `#1e293b` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#94a3b8` · `#cbd5e1` · `#64748b` · `#0f172a` · `#34d399` · `#e2e8f0` · `#334155` · `#020617` · `#10b981`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 20px · body 14px
- **Weights in use:** semibold, medium, light
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-[18px]` (18px), `rounded` (4px)
- **Shadows:** `shadow-white/5`, `shadow-lg`, `shadow-[0_0_20px_-5px_rgba(255,255,255,0.3)]`
- **Content width:** `max-w-6xl`, `max-w-2xl`
- **Common gaps:** `gap-2`, `gap-3`, `gap-8`

**Primary button**

```html
<a class="group relative inline-flex items-center gap-2 bg-white text-navy-950 px-8 py-3.5 rounded-full font-medium shadow-[0_0_20px_-5px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_-5px_rgba(255,255,255,0.5)] transition-all hover:-translate-y-0.5">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Feature grid (`features`)
5. Timeline (`timeline`)
6. Services (`services`)
7. Case studies (`case-studies`)
8. Contact form (`contact-form`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN), Unicorn Studio (WebGL scenes)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #0f172a;
  --color-text: #ffffff;
  --color-muted: #64748b;
  --color-border: #ffffff;
  --color-accent: #94a3b8;
  --color-accent-2: #1e293b;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0f172a',
    ink: '#ffffff',
    muted: '#64748b',
    line: '#ffffff',
    accent: '#94a3b8',
    accent2: '#1e293b',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use the dark navy ground (#0f172a) for the hero with white headline text
- **Do:** Set the tagline in small uppercase with letter-spacing
- **Do:** Keep one white pill button as the primary action in the hero
- **Don't:** Don't set the hero on a light ground
- **Don't:** Don't leave the logo strip without images
- **Don't:** Don't add decorative shapes beyond the soft glow

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
