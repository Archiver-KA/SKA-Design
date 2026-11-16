# Design system — Motion Design Course Landing Page Template

`SN-W03509` · education · dark mode · Sinera Atlas theme `calm` · language `en`

## Direction

A dark, cinematic page with a deep crimson glow (#980003) rising behind the hero text on a near-black ground (#0a0a0a). Inter sets the headline in large white type, with one line in muted grey for contrast, and the secondary text sits in soft greys. The glow carries the drama, while the buttons stay dark and translucent rather than filled with red.

**Mood:** cinematic, dramatic, moody, dark

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Surface | `#171717` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#a3a3a3` | Secondary copy, captions |
| Border | `#262626` | Hairlines, dividers, outlines |
| Accent | `#980003` | Primary action and highlights |

Palette by frequency of use: `#980003` · `#ffffff` · `#262626` · `#171717` · `#a3a3a3` · `#d4d4d4` · `#737373` · `#0a0a0a` · `#404040` · `#525252`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Plus Jakarta Sans, Geist
- **Scale (largest breakpoint):** h1 72px · h2 14px · h3 20px · body 14px
- **Weights in use:** medium, semibold, normal
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-2xl` (16px)
- **Shadows:** `shadow-lg`, `shadow-sm`, `shadow-[0_0_10px_#980003]`
- **Content width:** `max-w-2xl`, `max-w-6xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-3`, `gap-2`, `gap-6`

**Primary button**

```html
<a class="relative z-10 block w-full py-3 px-4 bg-[#980003] rounded-lg text-center text-sm font-semibold text-white hover:bg-[#b00004] transition-all hover:shadow-[0_0_20px_rgba(152,0,3,0.5)] active:scale-95 font-geist">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Services (`services`)
4. Bento grid (`bento-grid`)
5. Feature grid (`features`)
6. Stats band (`stats`)
7. Pricing (`pricing`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN), Unicorn Studio (WebGL scenes)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #0a0a0a;
  --color-surface: #171717;
  --color-text: #ffffff;
  --color-muted: #a3a3a3;
  --color-border: #262626;
  --color-accent: #980003;
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
    muted: '#a3a3a3',
    line: '#262626',
    accent: '#980003',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the crimson glow (#980003) behind the hero as the main source of colour
- **Do:** Set headlines in large white Inter, with one line in muted grey
- **Do:** Use dark glass buttons with light text rather than red-filled buttons
- **Don't:** Don't use the red glow as a fill behind text blocks
- **Don't:** Don't add bright secondary colours to the dark layout
- **Don't:** Don't place body copy over the glow where contrast drops

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
