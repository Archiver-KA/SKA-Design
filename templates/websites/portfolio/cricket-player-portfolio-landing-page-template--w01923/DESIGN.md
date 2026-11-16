# Design system — Cricket Player Portfolio Landing Page Template

`SN-W01923` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A black stadium-style page with a soft dark green glow behind the hero and a tilted dark card carrying stat tiles. The headline is set in bold Inter at about 96px, white on the first line and grey on the second, and the green is limited to the eyebrow pill and the glow. The stat tiles float over the image with small uppercase labels, which gives the page a broadcast feel.

**Mood:** bold, sporty, dark, editorial, broadcast

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#404040` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#262626` | Secondary copy, captions |
| Border | `#262626` | Hairlines, dividers, outlines |
| Accent | `#34d399` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#171717` · `#262626` · `#34d399` · `#a3a3a3` · `#737373` · `#10b981` · `#000000` · `#0a0a0a` · `#404040`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Space Grotesk
- **Scale (largest breakpoint):** h1 96px · h2 36px · h3 20px · body 14px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded` (4px), `rounded-lg` (8px)
- **Shadows:** `shadow-2xl`
- **Content width:** `max-w-7xl`, `max-w-[500px]`
- **Section padding:** `py-24`, `py-20`
- **Common gaps:** `gap-2`, `gap-6`, `gap-3`

**Primary button**

```html
<a class="bg-white text-black px-8 py-3 rounded text-sm font-medium hover:bg-neutral-200 transition-colors flex items-center gap-2">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Stats band (`stats`)
4. Gallery / portfolio (`gallery-portfolio`)
5. Feature grid (`features`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), GSAP
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #404040;
  --color-text: #ffffff;
  --color-muted: #262626;
  --color-border: #262626;
  --color-accent: #34d399;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#404040',
    ink: '#ffffff',
    muted: '#262626',
    line: '#262626',
    accent: '#34d399',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in bold Inter at about 96px, white over grey
- **Do:** Use green (#34d399) only for the eyebrow pill and the glow
- **Do:** Place stat tiles over the photo with small uppercase labels
- **Don't:** Don't use the green as a background; the page ground is black
- **Don't:** Don't set the headline in a light weight; the template uses bold
- **Don't:** Don't use dark text on this page; it is white on black

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
