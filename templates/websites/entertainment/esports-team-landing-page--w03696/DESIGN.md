# Design system — Esports Team Landing Page 

`SN-W03696` · entertainment · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

Dark, cinematic hero with a large heavy headline in white, stacked over an outlined repeat of the same word in a darker stroke to add depth. The ground is near-black with a faint warm haze, and a slow marquee of short white phrases separated by grey dots runs along the lower edge of the hero. Body copy is plain Inter, so the drama comes from scale and contrast rather than colour.

**Mood:** cinematic, bold, dark, broadcast

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#050505` | Page ground |
| Surface | `#171717` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#a3a3a3` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#ef4444` | Primary action and highlights |
| Second accent | `#eab308` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#ef4444` · `#000000` · `#171717` · `#a3a3a3` · `#737373` · `#dc2626` · `#050505` · `#7f1d1d` · `#0a0a0a`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** a monospace face
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 60px · h2 12px · h3 20px · body 10px
- **Weights in use:** bold, black, medium
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-xl` (12px), `rounded` (4px), `rounded-full` (9999px)
- **Shadows:** `shadow-2xl`, `shadow-[0_0_30px_rgba(185,28,28,0.2)]`, `shadow-[0_0_30px_rgba(202,138,4,0.1)]`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Common gaps:** `gap-2`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="hidden md:flex items-center gap-2 bg-white text-black px-4 py-1.5 rounded-sm text-[11px] font-bold uppercase hover:bg-neutral-200 transition-colors tracking-tight clip-path-slant">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. Navigation bar (`navbar`)
3. Marquee (`marquee`)
4. About (`about`)
5. Feature grid (`features`)
6. Team (`team`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #050505;
  --color-surface: #171717;
  --color-text: #ffffff;
  --color-muted: #a3a3a3;
  --color-border: #ffffff;
  --color-accent: #ef4444;
  --color-accent-2: #eab308;
  --font-display: "a monospace face", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 12px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#050505',
    surface: '#171717',
    ink: '#ffffff',
    muted: '#a3a3a3',
    line: '#ffffff',
    accent: '#ef4444',
    accent2: '#eab308',
  },
  fontFamily: { display: ['a monospace face'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the hero headline in heavy white capitals with an outlined repeat beneath it
- **Do:** Run the marquee of short phrases in white and grey along the lower edge of the hero
- **Do:** Use Inter for all body copy
- **Don't:** Don't lighten the page background beyond near-black
- **Don't:** Don't put light panels on the dark page ground
- **Don't:** Don't introduce pastel or warm colours beyond the red accent

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
