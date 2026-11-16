# Design system — locallead.io

`SN-W01626` · agency-studio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A dark automated-marketing page with a centred, heavy uppercase Inter headline in white, set over two very large lines. Indigo (#6366f1) is the accent, used on the primary 'Book a Growth Call' button and as a faint purple haze in the background. The navigation is a small floating glass bar at the top, grey supporting copy sits below the headline, and the layout is symmetrical and quiet.

**Mood:** bold, dark, systematic, clean

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#312e81` | Page ground |
| Surface | `#0a0a0a` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#a3a3a3` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#6366f1` | Primary action and highlights |
| Second accent | `#34d399` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#a3a3a3` · `#6366f1` · `#000000` · `#818cf8` · `#0a0a0a` · `#d4d4d4` · `#525252` · `#171717` · `#737373`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Manrope
- **Scale (largest breakpoint):** h1 128px · h2 48px · h3 18px · body 14px
- **Weights in use:** medium, light, normal
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-3xl` (24px)
- **Shadows:** `shadow-lg`, `shadow-2xl`, `shadow-black/50`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-24`, `py-12`
- **Common gaps:** `gap-4`, `gap-2`, `gap-6`

**Primary button**

```html
<a class="group inline-flex items-center gap-2 bg-white hover:bg-neutral-200 text-black px-8 py-4 rounded-full font-medium text-sm transition-all duration-300 hover:scale-[1.02]">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Booking form (`booking`)
3. Video / media (`video-media`)
4. Feature grid (`features`)
5. Benefits (`benefits`)
6. Logo cloud (`logo-cloud`)
7. Process / steps (`how-it-works`)
8. FAQ (`faq`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Unicorn Studio (WebGL scenes)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #312e81;
  --color-surface: #0a0a0a;
  --color-text: #ffffff;
  --color-muted: #a3a3a3;
  --color-border: #ffffff;
  --color-accent: #6366f1;
  --color-accent-2: #34d399;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#312e81',
    surface: '#0a0a0a',
    ink: '#ffffff',
    muted: '#a3a3a3',
    line: '#ffffff',
    accent: '#6366f1',
    accent2: '#34d399',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in heavy uppercase Inter, white, centred over two lines
- **Do:** Use indigo (#6366f1) for the primary button and a soft background haze only
- **Do:** Put the navigation in a floating rounded-full glass bar
- **Don't:** Don't set headline words in indigo
- **Don't:** Don't add a second accent colour to the hero
- **Don't:** Don't left-align the hero; the layout is centred

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
