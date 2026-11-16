# Design system — Distortion Handwritten Portfolio Template

`SN-W01992` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

Cinematic and moody: a near-black page lit by a red-orange glow at the top-left corner, with a framed monitor in the centre showing a blue-toned film still of a figure in orange sunglasses. Navigation is small sans text, and the project title sits in a serif over the still. The red-orange (#ff3d00) works as light and in the photography, not in the type or the buttons.

**Mood:** cinematic, moody, warm, photographic, dim

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#050505` | Page ground |
| Surface | `#050505` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#888888` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#ff3d00` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#ff3d00` · `#050505` · `#18181b` · `#000000` · `#888888` · `#f4f4f5` · `#111111` · `#0a0a0a` · `#9ca3af`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Rock Salt, Geist, Roboto, Montserrat, Poppins
- **Scale (largest breakpoint):** h1 20px · h2 48px · h3 30px · body 20px
- **Weights in use:** semibold, medium, extrabold
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-sm` (2px), `rounded` (4px)
- **Content width:** `max-w-7xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-4`, `gap-2`, `gap-1`

**Primary button**

```html
<a class="group flex items-center gap-2 text-white/70 hover:text-[#FF3D00] transition-colors cursor-pointer pointer-events-auto bg-black/50 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Hero (`hero`)
3. Navigation bar (`navbar`)
4. Case studies (`case-studies`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN), GSAP, Lenis smooth scroll, AOS scroll reveal
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #050505;
  --color-surface: #050505;
  --color-text: #ffffff;
  --color-muted: #888888;
  --color-border: #ffffff;
  --color-accent: #ff3d00;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#050505',
    surface: '#050505',
    ink: '#ffffff',
    muted: '#888888',
    line: '#ffffff',
    accent: '#ff3d00',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the page near-black (#050505) and bring colour in through imagery
- **Do:** Use the red-orange (#ff3d00) glow at the edge as ambient light only
- **Do:** Set project titles in serif over the imagery, as in the film still
- **Don't:** Don't fill the page with the orange (#ff3d00); it is a light source, not a background
- **Don't:** Don't place white text over bright images without a dark frame
- **Don't:** Don't swap the serif titles for a handwritten face.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
