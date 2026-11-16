# Design system — MAZERA Fashion Landing Page Template

`SN-W02800` · beauty-fashion · light mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A bold, brutalist-leaning fashion page on white. An enormous heavy sans wordmark, 'MAZERA', fills the centre of the first screen with a small TM mark, followed by a light grey tagline and a black-outlined pill button with a hard offset shadow. A row of thick-bordered, rounded image cards runs across the bottom. Black outlines and blocky offset shadows, not colour, give the page its character.

**Mood:** bold, graphic, brutalist, stark, confident

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#f5f5f5` | Cards, panels, raised areas |
| Text | `#171717` | Headings and primary copy |
| Muted text | `#525252` | Secondary copy, captions |
| Border | `#000000` | Hairlines, dividers, outlines |
| Accent | `#000000` | Primary action and highlights |
| Second accent | `#fef3c7` | Supporting highlights |

Palette by frequency of use: `#000000` · `#f5f5f5` · `#ffffff` · `#525252` · `#171717` · `#404040` · `#e5e5e5` · `#737373` · `#d4d4d4` · `#16a34a`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 168px · h2 60px · h3 20px · body 14px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-[28px]` (28px), `rounded-md` (6px), `rounded-full` (9999px)
- **Shadows:** `shadow-none`, `shadow-[5px_5px_0px_black]`, `shadow-[5px_5px_0px_rgba(255,255,255,0.2)]`
- **Content width:** `max-w-7xl`, `max-w-[1200px]`
- **Common gaps:** `gap-2`, `gap-4`, `gap-3`

**Primary button**

```html
<a class="font-montserrat text-lg border-2 border-white rounded-md px-6 py-3 bg-white/10 backdrop-blur-sm text-white shadow-[5px_5px_0px_rgba(255,255,255,0.2)] cursor-pointer text-center font-bold flex items-center justify-center gap-2 transition-all duration-300 ease hover:shadow-none hover:translate-y-[3px] hover:translate-x-[3px] hover:bg-white/20">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Marquee (`marquee`)
4. Product grid (`product-grid`)
5. Awards / press (`awards-press`)
6. Footer (`footer`)
7. Modal / overlay (`modal-overlay`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #f5f5f5;
  --color-text: #171717;
  --color-muted: #525252;
  --color-border: #000000;
  --color-accent: #000000;
  --color-accent-2: #fef3c7;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 28px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#f5f5f5',
    ink: '#171717',
    muted: '#525252',
    line: '#000000',
    accent: '#000000',
    accent2: '#fef3c7',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the wordmark in a very heavy sans at display size, centred.
- **Do:** Outline buttons and cards in thick black (#000000) with rounded corners.
- **Do:** Give the primary button a hard offset shadow in black, not a blurred one.
- **Don't:** Don't add soft or blurred shadows; the shadows are hard offsets.
- **Don't:** Don't use green (#16a34a) in the first screen; it does not appear there.
- **Don't:** Don't set the tagline in a heavy weight; it stays light grey.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
