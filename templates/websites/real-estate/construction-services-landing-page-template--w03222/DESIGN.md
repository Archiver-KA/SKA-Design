# Design system — Construction Services Landing Page Template

`SN-W03222` · real-estate · light mode · Sinera Atlas theme `dwell` · language `en`

## Direction

The first screen is the same editorial, photo-led hero as its near-identical sibling: a full-bleed interior photograph with a light wash, and a white serif headline in two lines with an italic second line. Colour stays neutral, with near-black (#1c1917) for the primary button and warm wood tones coming from the photograph. The copy is left-aligned over the image, so the page opens quietly and residentially.

**Mood:** quiet, editorial, warm, understated

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fafaf9` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#1c1917` | Headings and primary copy |
| Muted text | `#57534e` | Secondary copy, captions |
| Border | `#e7e5e4` | Hairlines, dividers, outlines |
| Accent | `#1c1917` | Primary action and highlights |

Palette by frequency of use: `#1c1917` · `#a8a29e` · `#ffffff` · `#57534e` · `#fafaf9` · `#e7e5e4` · `#78716c` · `#f5f5f4` · `#d6d3d1` · `#44403c`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Cormorant Garamond, Inter
- **Scale (largest breakpoint):** h1 96px · h2 36px · h3 20px · body 14px
- **Weights in use:** medium, semibold, light
- **Letter spacing:** `tracking-wide`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-sm` (2px), `rounded-full` (9999px)
- **Shadows:** `shadow-sm`, `shadow-md`
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-3`, `gap-4`, `gap-2`

**Primary button**

```html
<a class="px-5 py-2 bg-stone-900 text-white text-xs uppercase tracking-wide font-medium rounded-sm hover:bg-stone-800 transition-colors duration-300">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Timeline (`timeline`)
5. Services (`services`)
6. Gallery / portfolio (`gallery-portfolio`)
7. Testimonials (`testimonials`)
8. Contact form (`contact-form`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #fafaf9;
  --color-surface: #ffffff;
  --color-text: #1c1917;
  --color-muted: #57534e;
  --color-border: #e7e5e4;
  --color-accent: #1c1917;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 2px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fafaf9',
    surface: '#ffffff',
    ink: '#1c1917',
    muted: '#57534e',
    line: '#e7e5e4',
    accent: '#1c1917',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in a white serif, the second line in italic, left-aligned over the photo.
- **Do:** Use near-black (#1c1917) for the primary button and keep the secondary outlined.
- **Do:** Keep the hero copy short and the eyebrow line small and tracked.
- **Don't:** Don't place the copy on a plain light area; keep it on the darkened photograph.
- **Don't:** Don't add a bright accent colour; the palette is neutral apart from the photograph.
- **Don't:** Don't centre the hero copy; the layout is left-aligned throughout.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
