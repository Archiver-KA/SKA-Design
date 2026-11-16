# Design system — Scale your domain expertise with bespoke AI

`SN-W00695` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark, warm-black consulting page with a very large headline in a light sans, where the second clause drops to muted taupe to show the contrast in the message. A small uppercase kicker runs along the top, and a paragraph and a cream pill button sit at the lower right. The palette is near-black, cream and stone grey, and the change of tone does the emphasis.

**Mood:** warm, editorial, restrained, dark

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#1c1917` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#f5f5f4` | Headings and primary copy |
| Muted text | `#78716c` | Secondary copy, captions |
| Border | `#f5f5f4` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#ffffff` · `#292524` · `#1c1917` · `#d6d3d1` · `#a8a29e` · `#78716c` · `#f5f5f4` · `#57534e` · `#e7e5e4` · `#44403c`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** DM Sans, Inter
- **Scale (largest breakpoint):** h1 72px · h2 60px · h3 30px · body 14px
- **Weights in use:** medium, light, semibold
- **Letter spacing:** `tracking-tighter`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-lg` (8px)
- **Shadows:** `shadow-[0_2px_8px_rgba(0,0,0,0.04)]`, `shadow-md`, `shadow-lg`
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Section padding:** `py-32`, `py-24`
- **Common gaps:** `gap-12`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="group relative flex items-center gap-2 rounded-full bg-[#F2F0EB] px-12 py-4 text-sm font-medium text-stone-950 transition-all hover:bg-white hover:scale-105">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. Process / steps (`how-it-works`)
3. Gallery / portfolio (`gallery-portfolio`)
4. Marquee (`marquee`)
5. FAQ (`faq`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Three.js, Unicorn Studio (WebGL scenes)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #1c1917;
  --color-surface: #ffffff;
  --color-text: #f5f5f4;
  --color-muted: #78716c;
  --color-border: #f5f5f4;
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
    surface: '#ffffff',
    ink: '#f5f5f4',
    muted: '#78716c',
    line: '#f5f5f4',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in light cream (#f5f5f4) and drop the second clause to taupe (#78716c)
- **Do:** Keep the ground warm near-black (#1c1917) with no colour accents
- **Do:** Use a cream pill button as the only action, placed at the lower right beside the paragraph
- **Don't:** Don't set the page on a light grey ground; it is warm black
- **Don't:** Don't add a bright accent; the palette is stone tones only
- **Don't:** Don't set the headline in a heavy weight; the light sans carries the tone

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
