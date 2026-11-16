# Design system — Architect Portfolio Landing Page Template

`SN-W01795` · portfolio · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A warm off-white page with a large, tightly set dark sans headline in three lines, where the middle line fades to a mid-grey for a two-tone effect. A tall framed image placeholder sits on the right with a small caption at its base. The stance is restrained and architectural, with greys carrying the hierarchy and no accent colour visible.

**Mood:** restrained, architectural, neutral, measured

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fafaf9` | Page ground |
| Surface | `#fafaf9` | Cards, panels, raised areas |
| Text | `#1c1917` | Headings and primary copy |
| Muted text | `#57534e` | Secondary copy, captions |
| Border | `#e7e5e4` | Hairlines, dividers, outlines |
| Accent | `#065f46` | Primary action and highlights |

Palette by frequency of use: `#1c1917` · `#57534e` · `#e7e5e4` · `#78716c` · `#a8a29e` · `#f5f5f4` · `#d6d3d1` · `#292524` · `#fafaf9` · `#ffffff`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display, Geist, Roboto, Montserrat, Poppins
- **Scale (largest breakpoint):** h1 72px · h2 24px · h3 18px · body 14px
- **Weights in use:** medium, light, semibold
- **Letter spacing:** `tracking-wide`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-sm` (2px), `rounded` (4px)
- **Shadows:** `shadow-2xl`, `shadow-stone-200`, `shadow-sm`
- **Content width:** `max-w-5xl`, `max-w-3xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-12`, `gap-6`, `gap-16`

**Primary button**

```html
<a class="group bg-stone-800 hover:bg-stone-700 text-white px-8 py-3 rounded text-sm font-medium transition-all duration-300 border border-stone-700 flex items-center gap-2">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Testimonials (`testimonials`)
4. About (`about`)
5. Timeline (`timeline`)
6. Logo cloud (`logo-cloud`)
7. Feature grid (`features`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #fafaf9;
  --color-surface: #fafaf9;
  --color-text: #1c1917;
  --color-muted: #57534e;
  --color-border: #e7e5e4;
  --color-accent: #065f46;
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
    surface: '#fafaf9',
    ink: '#1c1917',
    muted: '#57534e',
    line: '#e7e5e4',
    accent: '#065f46',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in tight dark sans, with the middle line in grey (#a8a29e).
- **Do:** Keep the framed image on the right with a small caption at its base.
- **Do:** Use only greys and near-black; the page shows no accent colour.
- **Don't:** Don't add an accent colour; the greys carry the hierarchy.
- **Don't:** Don't set the headline in a serif.
- **Don't:** Don't round the image frame heavily; it sits as a hard-edged panel.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
