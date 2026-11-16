# Design system — Architecture Portfolio Landing Page Template

`SN-W01804` · portfolio · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

Moody and documentary: a dark-to-transparent gradient runs over a full-bleed kitchen photograph, so the sans headline sits on near-black at the bottom left, with a small uppercase location line above it. The headline is two-tone, with the second phrase in a muted light grey. The nav is small and sits over the image without a bar. It reads as calm and architectural, with the photograph doing the work.

**Mood:** moody, documentary, calm, architectural

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f8fafc` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#1e293b` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#94a3b8` | Primary action and highlights |

Palette by frequency of use: `#0f172a` · `#ffffff` · `#64748b` · `#94a3b8` · `#cbd5e1` · `#e2e8f0` · `#334155` · `#1e293b` · `#f8fafc` · `#f1f5f9`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 96px · h2 60px · h3 24px · body 14px
- **Weights in use:** light, medium, normal
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-sm` (2px), `rounded-full` (9999px)
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-8`, `gap-2`, `gap-4`

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Case studies (`case-studies`)
4. Contact form (`contact-form`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** gradient fills, blend modes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #f8fafc;
  --color-surface: #ffffff;
  --color-text: #1e293b;
  --color-muted: #64748b;
  --color-border: #ffffff;
  --color-accent: #94a3b8;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 2px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f8fafc',
    surface: '#ffffff',
    ink: '#1e293b',
    muted: '#64748b',
    line: '#ffffff',
    accent: '#94a3b8',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Place the headline over a dark gradient at the bottom left of the photo
- **Do:** Set the second phrase of the headline in a lighter grey tone
- **Do:** Keep the location line small, uppercase and above the headline
- **Don't:** Don't place the headline over the bright parts of the photo
- **Don't:** Don't use bold colour; keep the tone muted
- **Don't:** Don't add a solid header bar over the hero image

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
