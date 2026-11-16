# Design system — ¡Nos Casamos! | Abre tu invitacion

`SN-W03565` · events · light mode · Sinera Atlas theme `workshop` · language `es`

## Direction

The wedding invitation opens on a plain off-white screen with a centred serif monogram and a small, letterspaced uppercase prompt beneath it. Nothing else is visible on the first screen, so the design relies on the serif type, generous space and a restrained tone.

**Mood:** quiet, refined, minimal, serif, ceremonial

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fafaf9` | Page ground |
| Surface | `#f5f5f4` | Cards, panels, raised areas |
| Text | `#292524` | Headings and primary copy |
| Muted text | `#57534e` | Secondary copy, captions |
| Border | `#f5f5f4` | Hairlines, dividers, outlines |
| Accent | `#c5a028` | Primary action and highlights |
| Second accent | `#ef4444` | Supporting highlights |

Palette by frequency of use: `#292524` · `#fafaf9` · `#f5f5f4` · `#57534e` · `#78716c` · `#ffffff` · `#a8a29e` · `#d6d3d1` · `#e7e5e4` · `#c5a028`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Cormorant Garamond
- **Body:** Inter
- **Loaded families:** Cormorant Garamond, Inter
- **Scale (largest breakpoint):** h1 96px · h2 36px · h3 24px · body 14px
- **Weights in use:** medium, light
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded` (4px)
- **Shadows:** `shadow-md`, `shadow-xl`, `shadow-lg`
- **Content width:** `max-w-6xl`, `max-w-4xl`
- **Section padding:** `py-32`, `py-24`
- **Common gaps:** `gap-2`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="text-[0.65rem] tracking-widest uppercase text-white bg-gold-500 hover:bg-gold-600 px-5 py-2.5 rounded-full transition-all duration-300 shadow-md hover:shadow-lg font-medium hover:-translate-y-0.5">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Timeline (`timeline`)
4. Call to action (`cta`)
5. Feature grid (`features`)
6. FAQ (`faq`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #fafaf9;
  --color-surface: #f5f5f4;
  --color-text: #292524;
  --color-muted: #57534e;
  --color-border: #f5f5f4;
  --color-accent: #c5a028;
  --color-accent-2: #ef4444;
  --font-display: "Cormorant Garamond", serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fafaf9',
    surface: '#f5f5f4',
    ink: '#292524',
    muted: '#57534e',
    line: '#f5f5f4',
    accent: '#c5a028',
    accent2: '#ef4444',
  },
  fontFamily: { display: ['Cormorant Garamond'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the opening screen to a monogram and one prompt
- **Do:** Set the monogram in a classical serif
- **Do:** Use small letterspaced uppercase for the prompt
- **Don't:** Don't add a photo to the opening screen
- **Don't:** Don't put bright colours on the opening screen
- **Don't:** Don't set the monogram in a sans-serif

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
