# Design system — Artistic Horizon Hero Landing Page Template

`SN-W01816` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

Expressive and dark: a black ground carries a bold white display headline, Artistic horizon, with an italic grey subline. Artwork tiles are scattered at slight rotations around it like a collage. The one colour is a lime button (#a3e635) in the top right. The look is loud and playful, with the lime used once as a signal.

**Mood:** expressive, collage, loud, dark

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#a3e635` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#000000` · `#d1d5db` · `#333333` · `#bef264` · `#a3e635` · `#8cd32a` · `#9ca3af` · `#f3f4f6` · `#111827`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display, Geist, Roboto, Montserrat, Poppins
- **Scale (largest breakpoint):** h1 128px · h3 16px · body 60px
- **Weights in use:** medium, semibold
- **Letter spacing:** `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded` (4px), `rounded-full` (9999px), `rounded-md` (6px)
- **Shadows:** `shadow-2xl`, `shadow-sm`
- **Content width:** `max-w-5xl`
- **Common gaps:** `gap-1`, `gap-4`, `gap-2`

**Primary button**

```html
<a class="bg-[#a3e635] hover:bg-[#8cd32a] text-black font-medium text-sm px-5 py-2.5 rounded-md transition-colors flex items-center gap-2">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Testimonials (`testimonials`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #ffffff;
  --color-text: #ffffff;
  --color-muted: #6b7280;
  --color-border: #ffffff;
  --color-accent: #a3e635;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 4px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#ffffff',
    ink: '#ffffff',
    muted: '#6b7280',
    line: '#ffffff',
    accent: '#a3e635',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use lime (#a3e635) for the single primary button in the hero
- **Do:** Scatter artwork tiles at slight rotations around the headline
- **Do:** Set the headline in bold white with an italic grey subline
- **Don't:** Don't use lime for large fills or backgrounds
- **Don't:** Don't place a light ground behind the hero
- **Don't:** Don't align the artwork tiles on a grid; the scatter is the look

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
