# Design system — Prashant Jha | Frontend Developer

`SN-W00637` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A near-black portfolio where the grey gradient on one headline word is the only decorative type, and the rest is white Inter at display size. Buttons are a white solid and a warm dark outline, and a small orange dot marks availability. The page leans on type and a row of muted stack names rather than on imagery.

**Mood:** understated, dark, personal, minimal, type-led

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#1c1917` | Page ground |
| Surface | `#292524` | Cards, panels, raised areas |
| Text | `#f5f5f4` | Headings and primary copy |
| Muted text | `#d6d3d1` | Secondary copy, captions |
| Border | `#292524` | Hairlines, dividers, outlines |
| Accent | `#f97316` | Primary action and highlights |
| Second accent | `#ec4899` | Supporting highlights |

Palette by frequency of use: `#292524` · `#f5f5f4` · `#44403c` · `#d6d3d1` · `#a8a29e` · `#78716c` · `#e7e5e4` · `#1c1917` · `#0c0a09` · `#57534e`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 72px · h2 24px · h3 14px · body 14px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded` (4px), `rounded-lg` (8px)
- **Shadows:** `shadow-2xl`
- **Content width:** `max-w-6xl`, `max-w-4xl`
- **Common gaps:** `gap-2`, `gap-4`, `gap-1`

**Primary button**

```html
<a class="w-full sm:w-auto px-6 py-3 bg-stone-100 text-stone-950 font-medium rounded-lg hover:bg-stone-200 transition-all flex items-center justify-center gap-2">…</a>
```

## Page structure

Blocks in page order:

1. Video / media (`video-media`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Product grid (`product-grid`)
5. About (`about`)
6. Case studies (`case-studies`)
7. Timeline (`timeline`)
8. Testimonials (`testimonials`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Spline 3D
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #1c1917;
  --color-surface: #292524;
  --color-text: #f5f5f4;
  --color-muted: #d6d3d1;
  --color-border: #292524;
  --color-accent: #f97316;
  --color-accent-2: #ec4899;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#1c1917',
    surface: '#292524',
    ink: '#f5f5f4',
    muted: '#d6d3d1',
    line: '#292524',
    accent: '#f97316',
    accent2: '#ec4899',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use white (#f5f5f4) headlines in Inter at display size on a warm near-black ground (#1c1917)
- **Do:** Set one headline word in a grey gradient and leave the rest solid
- **Do:** Use a white solid primary button and a warm dark (#292524) secondary button
- **Don't:** Don't use the pink (#ec4899) accent in the hero.
- **Don't:** Don't add imagery to the hero; the type carries the page
- **Don't:** Don't set the stack names in bright colour; they stay muted

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
