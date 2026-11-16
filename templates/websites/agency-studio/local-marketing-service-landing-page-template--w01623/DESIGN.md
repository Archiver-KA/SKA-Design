# Design system — Local Marketing Service Landing Page Template

`SN-W01623` · agency-studio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A dark sales page on near-black (#0a0a0a) with a centred white sans headline. The phrase 'Go-To Business' takes a soft blue (#3b82f6), which is the only accent and also colours the play button of the video frame below the copy. The eyebrow line is small uppercase grey, and a faint radial glow lifts the centre of the hero so the block reads as a single focused unit.

**Mood:** direct, dark, focused, promotional

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Surface | `#171717` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#3b82f6` | Primary action and highlights |
| Second accent | `#22c55e` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#171717` · `#a3a3a3` · `#3b82f6` · `#262626` · `#0a0a0a` · `#000000` · `#404040` · `#2563eb` · `#60a5fa`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 60px · h2 36px · h3 20px · body 14px
- **Weights in use:** medium, light
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded` (4px)
- **Shadows:** `shadow-lg`, `shadow-2xl`, `shadow-blue-900/10`
- **Content width:** `max-w-3xl`, `max-w-7xl`
- **Section padding:** `py-20`, `py-24`
- **Common gaps:** `gap-3`, `gap-2`, `gap-4`

**Primary button**

```html
<a class="w-full sm:w-auto px-8 py-3.5 rounded-full bg-white text-black font-medium hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Bento grid (`bento-grid`)
4. Awards / press (`awards-press`)
5. About (`about`)
6. FAQ (`faq`)
7. Call to action (`cta`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #0a0a0a;
  --color-surface: #171717;
  --color-text: #ffffff;
  --color-muted: #737373;
  --color-border: #ffffff;
  --color-accent: #3b82f6;
  --color-accent-2: #22c55e;
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
    line: '#ffffff',
    accent: '#3b82f6',
    accent2: '#22c55e',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use blue (#3b82f6) for one highlighted phrase in the headline and the play control
- **Do:** Set the headline in Inter, white, large and centred
- **Do:** Keep the eyebrow line small, uppercase and grey (#737373)
- **Don't:** Don't use blue for body copy
- **Don't:** Don't place the video above the headline
- **Don't:** Don't add a second brand colour; the page keeps to blue and neutrals

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
