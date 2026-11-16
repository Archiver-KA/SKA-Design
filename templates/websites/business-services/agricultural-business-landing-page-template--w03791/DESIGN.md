# Design system — Agricultural Business Landing Page Template

`SN-W03791` · business-services · light mode · Sinera Atlas theme `route` · language `cs`

## Direction

A farm-business landing page built around a darkened photograph, with a centred white headline and one highlighted green word in the title. The primary button is a deep green fill (#166534) beside a translucent grey secondary button. Stats and sections sit below on a light ground, giving a steady, rural tone and a clear split between the hero and the content.

**Mood:** rural, steady, warm, clear

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fafaf9` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#292524` | Headings and primary copy |
| Muted text | `#78716c` | Secondary copy, captions |
| Border | `#f5f5f4` | Hairlines, dividers, outlines |
| Accent | `#166534` | Primary action and highlights |
| Second accent | `#f59e0b` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#1c1917` · `#e7e5e4` · `#44403c` · `#57534e` · `#fafaf9` · `#166534` · `#f5f5f4` · `#78716c` · `#15803d`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Merriweather, Geist, Roboto, Montserrat, Poppins
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 20px · body 14px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-xl` (12px), `rounded-full` (9999px), `rounded-lg` (8px)
- **Shadows:** `shadow-sm`, `shadow-lg`, `shadow-xl`
- **Content width:** `max-w-7xl`, `max-w-5xl`
- **Section padding:** `py-24`, `py-12`
- **Common gaps:** `gap-3`, `gap-2`, `gap-4`

**Primary button**

```html
<a class="w-full sm:w-auto px-8 py-3.5 bg-green-800 hover:bg-green-700 text-white rounded-lg font-medium transition-all duration-300 shadow-lg shadow-green-900/30 flex items-center justify-center gap-2">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Gallery / portfolio (`gallery-portfolio`)
5. Map / location (`map-location`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #fafaf9;
  --color-surface: #ffffff;
  --color-text: #292524;
  --color-muted: #78716c;
  --color-border: #f5f5f4;
  --color-accent: #166534;
  --color-accent-2: #f59e0b;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 12px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fafaf9',
    surface: '#ffffff',
    ink: '#292524',
    muted: '#78716c',
    line: '#f5f5f4',
    accent: '#166534',
    accent2: '#f59e0b',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the hero headline in white over the darkened photograph, centred.
- **Do:** Use deep green (#166534) for the primary button and the highlighted word.
- **Do:** Set the highlighted word in italic to separate it from the rest of the headline.
- **Don't:** Don't use the green for body copy on the photograph.
- **Don't:** Don't drop the darkened overlay behind the hero headline.
- **Don't:** Don't add a bright yellow button beside the green one.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
