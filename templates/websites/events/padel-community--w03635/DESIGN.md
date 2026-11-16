# Design system — Padel Community

`SN-W03635` · events · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A sporty community page that opens on a darkened action photograph, with a large white sans-serif headline and a second line in translucent grey. A lime-green pill button carries the primary action over the image, and the lower sections return to a light ground with plain cards. The lime is the only bright colour and reads as energetic against the neutral surfaces.

**Mood:** energetic, sporty, friendly, clean

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fafaf9` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#1c1917` | Headings and primary copy |
| Muted text | `#78716c` | Secondary copy, captions |
| Border | `#e7e5e4` | Hairlines, dividers, outlines |
| Accent | `#acbc37` | Primary action and highlights |
| Second accent | `#0379b9` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#1c1917` · `#acbc37` · `#78716c` · `#e7e5e4` · `#f5f5f4` · `#fafaf9` · `#000000` · `#0379b9` · `#a8a29e`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 96px · h2 60px · h3 18px · body 14px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-3xl` (24px), `rounded-lg` (8px)
- **Shadows:** `shadow-sm`, `shadow-lg`, `shadow-xl`
- **Content width:** `max-w-7xl`, `max-w-[200px]`
- **Section padding:** `py-24`, `py-12`
- **Common gaps:** `gap-2`, `gap-4`, `gap-6`

**Primary button**

```html
<a class="w-full sm:w-auto bg-[#ACBC37] text-white px-8 py-4 rounded-full text-base font-semibold hover:bg-[#9aa931] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 group border border-[#ACBC37]">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Schedule (`schedule-agenda`)
5. Call to action (`cta`)
6. Process / steps (`how-it-works`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #fafaf9;
  --color-surface: #ffffff;
  --color-text: #1c1917;
  --color-muted: #78716c;
  --color-border: #e7e5e4;
  --color-accent: #acbc37;
  --color-accent-2: #0379b9;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fafaf9',
    surface: '#ffffff',
    ink: '#1c1917',
    muted: '#78716c',
    line: '#e7e5e4',
    accent: '#acbc37',
    accent2: '#0379b9',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the hero headline in bold white sans-serif, with the second line in muted grey
- **Do:** Use the lime (#acbc37) for the primary button and small status pills only
- **Do:** Keep lower sections on the light neutral ground with plain bordered cards
- **Don't:** Don't set body text in lime on white
- **Don't:** Don't place lime buttons over light photographs
- **Don't:** Don't add bright colours beyond the lime and the blue (#0379b9)

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
