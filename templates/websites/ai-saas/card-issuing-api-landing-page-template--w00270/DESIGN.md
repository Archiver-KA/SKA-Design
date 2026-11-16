# Design system — Card Issuing API Landing Page Template

`SN-W00270` · ai-saas · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A light, crisp fintech hero: an off-white ground with a large near-black Inter headline, the second line in a pale grey. The code window is the visual anchor, a dark rounded panel with syntax-coloured lines beside the copy, and a small status card overlaps its corner. The black primary button and the dark code panel give the page a developer-facing tone on a light base.

**Mood:** crisp, developer, technical, light

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fafaf9` | Page ground |
| Surface | `#292524` | Cards, panels, raised areas |
| Text | `#1c1917` | Headings and primary copy |
| Muted text | `#78716c` | Secondary copy, captions |
| Border | `#e7e5e4` | Hairlines, dividers, outlines |
| Accent | `#10b981` | Primary action and highlights |
| Second accent | `#2563eb` | Supporting highlights |

Palette by frequency of use: `#1c1917` · `#78716c` · `#ffffff` · `#e7e5e4` · `#a8a29e` · `#57534e` · `#d6d3d1` · `#fafaf9` · `#292524` · `#44403c`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Plus Jakarta Sans, Inter, JetBrains Mono
- **Scale (largest breakpoint):** h1 72px · h2 30px · h3 18px · body 12px
- **Weights in use:** semibold, medium, bold
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-xl` (12px)
- **Shadows:** `shadow-sm`, `shadow-lg`, `shadow-stone-200`
- **Content width:** `max-w-[1400px]`, `max-w-2xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-4`, `gap-3`, `gap-2`

**Primary button**

```html
<a class="inline-flex items-center justify-center px-5 py-2.5 text-xs font-semibold rounded-full bg-stone-900 text-white hover:bg-stone-800 transition-all hover:shadow-lg hover:shadow-stone-200">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Process / steps (`how-it-works`)
4. Feature grid (`features`)
5. Services (`services`)
6. Code / terminal (`code-terminal`)
7. Contact form (`contact-form`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #fafaf9;
  --color-surface: #292524;
  --color-text: #1c1917;
  --color-muted: #78716c;
  --color-border: #e7e5e4;
  --color-accent: #10b981;
  --color-accent-2: #2563eb;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fafaf9',
    surface: '#292524',
    ink: '#1c1917',
    muted: '#78716c',
    line: '#e7e5e4',
    accent: '#10b981',
    accent2: '#2563eb',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the hero ground in #fafaf9 with near-black (#1c1917) headlines
- **Do:** Keep the code panel dark and rounded, with the syntax lines as the visual
- **Do:** Use black for the primary button and the status card for live state
- **Don't:** Don't make the code panel light; it depends on contrast
- **Don't:** Don't set the second headline line in pale grey at small sizes
- **Don't:** Don't add more than one overlapping status card

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
