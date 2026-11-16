# Design system — VRAX VR Agency & Spatial Computing Template

`SN-W01727` · agency-studio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A dark immersive VR studio page on near-black [#050505] with heavy wide sans headlines and an orange [#ff5a00] accent used for a round marker and the key phrase. Hero text is blurred and layered, which gives the top of the page an out-of-focus, cinematic feel. Small labels are set in widely tracked capitals, and the page leans on motion and depth rather than colour blocks.

**Mood:** cinematic, dark, futuristic, immersive, blurred

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#050505` | Page ground |
| Surface | `#0d0d10` | Cards, panels, raised areas |
| Text | `#111111` | Headings and primary copy |
| Muted text | `#ffffff` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#ff5a00` | Primary action and highlights |
| Second accent | `#22d3ee` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#ff5a00` · `#22d3ee` · `#111111` · `#000000` · `#050505` · `#0d0d10` · `#0a0a0c` · `#f0eee9` · `#333333`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Archivo Black
- **Body:** Archivo Black
- **Loaded families:** Archivo Black, DM Sans, DM Serif Display, Inter
- **Scale (largest breakpoint):** h2 72px · h3 48px · body 12px
- **Letter spacing:** `tracking-tight`, `tracking-[0.2em]`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-sm` (2px)
- **Content width:** `max-w-[1500px]`, `max-w-6xl`
- **Section padding:** `py-20`, `py-32`
- **Common gaps:** `gap-3`, `gap-4`, `gap-6`

**Primary button**

```html
<a class="mt-8 group flex items-center justify-between px-5 py-4 bg-[#ff5a00] text-white">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Marquee (`marquee`)
4. Video / media (`video-media`)
5. Call to action (`cta`)
6. Testimonials (`testimonials`)
7. FAQ (`faq`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes
- **Libraries:** Tailwind CSS (CDN), GSAP, Three.js
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #050505;
  --color-surface: #0d0d10;
  --color-text: #111111;
  --color-muted: #ffffff;
  --color-border: #ffffff;
  --color-accent: #ff5a00;
  --color-accent-2: #22d3ee;
  --font-display: "Archivo Black", sans-serif;
  --font-body: "Archivo Black", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#050505',
    surface: '#0d0d10',
    ink: '#111111',
    muted: '#ffffff',
    line: '#ffffff',
    accent: '#ff5a00',
    accent2: '#22d3ee',
  },
  fontFamily: { display: ['Archivo Black'], sans: ['Archivo Black'] },
} }
```

## Do and don't

- **Do:** Use the orange (#ff5a00) only for the hero marker and one highlight per section
- **Do:** Set labels in widely tracked small capitals
- **Do:** Keep the page on #050505 and let depth come from blur and motion
- **Don't:** Don't use white backgrounds; the page stays dark through every section
- **Don't:** Don't use orange for body copy
- **Don't:** Don't add flat colour panels; depth comes from layering

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
