# Design system — Architect Studio Landing Page Template

`SN-W03177` · real-estate · dark mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A cinematic, dark architecture studio page on near-black (#050505), with a heavy white Inter headline and one grey secondary word. The layout is a full-width hero, a grid of project images and a white call to action. Green (#34d399) is only a small accent. The page is sparse, and the images do the talking.

**Mood:** minimal, cinematic, dark, spare

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#050505` | Page ground |
| Surface | `#27272a` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#27272a` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#34d399` | Primary action and highlights |
| Second accent | `#fb923c` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#000000` · `#a1a1aa` · `#34d399` · `#27272a` · `#18181b` · `#050505` · `#d4d4d8` · `#71717a` · `#10b981`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Montserrat, Manrope
- **Scale (largest breakpoint):** h1 96px · h2 36px · h3 24px · body 14px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-lg` (8px)
- **Shadows:** `shadow-[0_0_20px_rgba(255,255,255,0.2)]`, `shadow-[0_0_8px_rgba(52,211,153,0.6)]`, `shadow-2xl`
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Section padding:** `py-32`
- **Common gaps:** `gap-4`, `gap-1`, `gap-8`

**Primary button**

```html
<a class="text-xs font-medium text-zinc-300 hover:text-white hover:bg-white/10 px-5 py-2 rounded-full transition-all font-manrope">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Timeline (`timeline`)
4. Case studies (`case-studies`)
5. Services (`services`)
6. Testimonials (`testimonials`)
7. About (`about`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #050505;
  --color-surface: #27272a;
  --color-text: #ffffff;
  --color-muted: #27272a;
  --color-border: #ffffff;
  --color-accent: #34d399;
  --color-accent-2: #fb923c;
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
    surface: '#27272a',
    ink: '#ffffff',
    muted: '#27272a',
    line: '#ffffff',
    accent: '#34d399',
    accent2: '#fb923c',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headlines in Inter at heavy weight in white, with one grey word
- **Do:** Use the green (#34d399) only as a small accent, never as a fill
- **Do:** Keep the page on #050505 with project photography as the colour
- **Don't:** Don't use the green as a background colour
- **Don't:** Don't add light sections between the dark ones
- **Don't:** Don't put more than one headline in a section

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
