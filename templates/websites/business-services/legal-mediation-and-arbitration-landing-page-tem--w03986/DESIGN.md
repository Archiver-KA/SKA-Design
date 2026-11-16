# Design system — Legal Mediation & Arbitration Landing Page Template

`SN-W03986` · business-services · dark mode · Sinera Atlas theme `route` · language `en`

## Direction

A full-bleed city photograph under a deep teal tint, with a centred, uppercase bold sans-serif headline in white and a short supporting line. The layout is symmetrical and the copy is brief, so the photograph carries the mood. Teal (#4fbfa5) is the brand accent and is kept for small interactive details, and the dark teal ground (#0a262d) makes the page feel composed and formal.

**Mood:** composed, formal, calm, urban, measured

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a262d` | Page ground |
| Surface | `#f1f5f9` | Cards, panels, raised areas |
| Text | `#1e293b` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#4fbfa5` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#0a262d` · `#4fbfa5` · `#000000` · `#475569` · `#94a3b8` · `#0f172a` · `#153e48` · `#f1f5f9` · `#1e293b`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 96px · h2 36px · h3 30px · body 20px
- **Weights in use:** semibold, medium, light
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-xl` (12px)
- **Shadows:** `shadow-2xl`
- **Content width:** `max-w-[1600px]`, `max-w-2xl`
- **Section padding:** `py-24`, `py-20`
- **Common gaps:** `gap-6`, `gap-12`, `gap-2`

**Primary button**

```html
<a class="bg-[#1a2e35] text-white px-8 py-3.5 rounded-full text-sm font-medium hover:bg-[#25414b] transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Call to action (`cta`)
4. Map / location (`map-location`)
5. Timeline (`timeline`)
6. Articles (`blog-articles`)
7. Video / media (`video-media`)
8. Contact form (`contact-form`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #0a262d;
  --color-surface: #f1f5f9;
  --color-text: #1e293b;
  --color-border: #ffffff;
  --color-accent: #4fbfa5;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0a262d',
    surface: '#f1f5f9',
    ink: '#1e293b',
    line: '#ffffff',
    accent: '#4fbfa5',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in bold uppercase sans-serif, centred over the photograph
- **Do:** Keep a dark teal tint (#0a262d) over hero photography so white text stays legible
- **Do:** Use the teal (#4fbfa5) for small interactive accents only
- **Don't:** Don't place body copy over the bright areas of the photograph
- **Don't:** Don't set the hero headline in mixed case
- **Don't:** Don't use the teal as a large background colour

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
