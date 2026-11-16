# Design system — Medical Aesthetics & Wellness Landing Page Template

`SN-W02454` · healthcare · light mode · Sinera Atlas theme `calm` · language `es`

## Direction

A pale sage page with a large, tightly set sans headline in dark green-grey, centred over a small uppercase eyebrow. The primary button is a muted olive pill with a soft circle at its left end, and the palette stays in greens and near-black. The layout is minimal and wide, relying on generous space and one large statement.

**Mood:** calm, minimal, clinical, airy, organic

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#eaf0ea` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#333833` | Headings and primary copy |
| Muted text | `#655750` | Secondary copy, captions |
| Border | `#f5f5f4` | Hairlines, dividers, outlines |
| Accent | `#64734f` | Primary action and highlights |

Palette by frequency of use: `#333833` · `#ffffff` · `#655750` · `#eaf0ea` · `#64734f` · `#f5f5f4` · `#f9fafb` · `#322018` · `#546140` · `#d7d1cc`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Bricolage Grotesque, Inter
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 30px · body 18px
- **Weights in use:** medium, normal, light
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-[2rem]` (2rem), `rounded-[1.5rem]` (1.5rem)
- **Shadows:** `shadow-sm`, `shadow-md`, `shadow-lg`
- **Content width:** `max-w-7xl`, `max-w-[280px]`
- **Section padding:** `py-24`, `py-36`
- **Common gaps:** `gap-4`, `gap-8`, `gap-2`

**Primary button**

```html
<a class="inline-flex items-center justify-center bg-white text-[#333833] px-6 py-3 rounded-full text-base font-normal shadow-sm hover:bg-gray-50 transition-colors duration-300 gap-2">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Call to action (`cta`)
4. Feature grid (`features`)
5. Team (`team`)
6. Schedule (`schedule-agenda`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels)
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #eaf0ea;
  --color-surface: #ffffff;
  --color-text: #333833;
  --color-muted: #655750;
  --color-border: #f5f5f4;
  --color-accent: #64734f;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#eaf0ea',
    surface: '#ffffff',
    ink: '#333833',
    muted: '#655750',
    line: '#f5f5f4',
    accent: '#64734f',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the hero headline large in Inter, centred, in dark green-grey (#333833)
- **Do:** Use the olive (#64734f) for the primary pill button only
- **Do:** Keep the eyebrow label small, uppercase and muted
- **Don't:** Don't add a second accent beyond the olive and sage
- **Don't:** Don't use the dark brown (#322018) as a fill for large areas
- **Don't:** Don't set the headline in bold; keep it at regular weight

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
