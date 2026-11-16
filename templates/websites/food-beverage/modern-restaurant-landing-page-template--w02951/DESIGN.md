# Design system — Modern Restaurant Landing Page Template

`SN-W02951` · food-beverage · dark mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A refined dark restaurant hero on near-black (#0a0a0a) with a large sans headline in white and a grey second line for contrast. The primary button is solid white with a soft shadow and the secondary is a dark outline pill. Orange (#f97316) appears only as a small dot in the seasonal-menu label, so the page is almost monochrome.

**Mood:** minimal, dark, modern, restrained

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Surface | `#171717` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#262626` | Hairlines, dividers, outlines |
| Accent | `#f97316` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#262626` · `#737373` · `#a3a3a3` · `#d4d4d4` · `#0a0a0a` · `#171717` · `#f97316` · `#404040` · `#fb923c`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 18px · body 12px
- **Weights in use:** medium, light, normal
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-2xl` (16px)
- **Shadows:** `shadow-none`, `shadow-[0_4px_0_#a3a3a3]`, `shadow-[0_4px_0_#171717]`
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-4`, `gap-8`

**Primary button**

```html
<a class="hidden md:flex items-center gap-2 bg-white text-black text-xs font-medium px-4 py-2 rounded-full shadow-[0_4px_0_#a3a3a3] hover:bg-neutral-100 active:shadow-none active:translate-y-1 transition-all">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Timeline (`timeline`)
4. Menu list (`menu-list`)
5. Testimonials (`testimonials`)
6. Booking form (`booking`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #0a0a0a;
  --color-surface: #171717;
  --color-text: #ffffff;
  --color-muted: #737373;
  --color-border: #262626;
  --color-accent: #f97316;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0a0a0a',
    surface: '#171717',
    ink: '#ffffff',
    muted: '#737373',
    line: '#262626',
    accent: '#f97316',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the hero headline in a large sans, with the second line in muted grey
- **Do:** Use a solid white pill for the primary button and a dark outline pill for the secondary
- **Do:** Keep the orange (#f97316) to small dots and labels
- **Don't:** Don't fill large areas with the orange; it marks details only
- **Don't:** Don't set headlines in the light grey (#d4d4d4); the headline is white
- **Don't:** Don't add a second accent colour

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
