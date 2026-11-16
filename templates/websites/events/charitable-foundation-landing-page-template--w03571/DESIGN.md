# Design system — Charitable Foundation Landing Page Template

`SN-W03571` · events · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

The foundation hero uses a documentary photograph of children as its ground, with large white sans-serif statements set on solid black blocks so they stay legible. The lines are stacked tight and left-aligned, and a small floating panel lists upcoming events. The look is direct and humanitarian, relying on the photograph and bold type.

**Mood:** humanitarian, direct, photographic, bold, high-contrast

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#1c1917` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#9ca3af` | Secondary copy, captions |
| Border | `#cbd5e1` | Hairlines, dividers, outlines |
| Accent | `#e2e8f0` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#000000` · `#e2e8f0` · `#475569` · `#64748b` · `#9ca3af` · `#cbd5e1` · `#6b7280` · `#0f172a` · `#e5e7eb`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 96px · h2 60px · h3 18px · body 14px
- **Weights in use:** bold, medium, semibold
- **Letter spacing:** `tracking-wider`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-[30px]` (30px), `rounded-[40px]` (40px)
- **Shadows:** `shadow-2xl`, `shadow-lg`, `shadow-sm`
- **Content width:** `max-w-[1400px]`, `max-w-7xl`
- **Section padding:** `py-24`, `py-12`
- **Common gaps:** `gap-2`, `gap-8`, `gap-4`

**Primary button**

```html
<a class="hidden sm:flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full text-xs font-bold hover:bg-sand-200 transition-colors font-work-sans">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Process / steps (`how-it-works`)
4. Services (`services`)
5. About (`about`)
6. Articles (`blog-articles`)
7. Stats band (`stats`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #1c1917;
  --color-text: #ffffff;
  --color-muted: #9ca3af;
  --color-border: #cbd5e1;
  --color-accent: #e2e8f0;
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
    surface: '#1c1917',
    ink: '#ffffff',
    muted: '#9ca3af',
    line: '#cbd5e1',
    accent: '#e2e8f0',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set hero statements in white on solid black blocks over the photograph
- **Do:** Use documentary photography as the hero ground
- **Do:** Keep the event panel small, with one action
- **Don't:** Don't add decorative colour to the headline blocks
- **Don't:** Don't place statement text directly on the photograph without a block
- **Don't:** Don't use light backgrounds for the hero

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
