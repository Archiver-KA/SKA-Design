# Design system — DJ Alex Booking Landing Page Template

`SN-W01993` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `sv`

## Direction

Club-night dark page: a near-black ground (#0a0a0a) with a heavy white uppercase sans name, DJ ALEX, and a two-line grey subtitle beneath it. The one accent is a bright cyan (#06b6d4) pill button with a soft glow, the booking call to action. Navigation is small, and its booking button is solid white. The layout is simple, and the glow on the cyan button does most of the work.

**Mood:** nocturnal, bold, direct, glowing, simple

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Surface | `#171717` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#06b6d4` | Primary action and highlights |
| Second accent | `#1e3a8a` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#06b6d4` · `#171717` · `#0a0a0a` · `#22d3ee` · `#737373` · `#262626` · `#a3a3a3` · `#d4d4d4` · `#525252`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 128px · h2 60px · h3 20px · body 14px
- **Weights in use:** medium, bold, semibold
- **Letter spacing:** `tracking-wide`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-2xl` (16px)
- **Shadows:** `shadow-2xl`, `shadow-[0_0_20px_rgba(6,182,212,0.1)]`, `shadow-[0_0_20px_rgba(6,182,212,0.5)]`
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Section padding:** `py-32`
- **Common gaps:** `gap-6`, `gap-2`, `gap-3`

**Primary button**

```html
<a class="px-10 py-5 bg-cyan-500 hover:bg-cyan-400 text-black font-bold rounded-full transition-all duration-300 flex items-center justify-center gap-2 group shadow-[0_0_25px_rgba(6,182,212,0.3)] hover:shadow-[0_0_40px_rgba(6,182,212,0.6)] hover:-translate-y-1">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Feature grid (`features`)
5. Video / media (`video-media`)
6. Contact form (`contact-form`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Unicorn Studio (WebGL scenes)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #0a0a0a;
  --color-surface: #171717;
  --color-text: #ffffff;
  --color-muted: #737373;
  --color-border: #ffffff;
  --color-accent: #06b6d4;
  --color-accent-2: #1e3a8a;
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
    accent: '#06b6d4',
    accent2: '#1e3a8a',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use the cyan (#06b6d4) pill for the single booking call to action
- **Do:** Set the artist name in heavy, uppercase white sans at display size
- **Do:** Keep the subtitle in two grey lines below the headline
- **Don't:** Don't use cyan for more than one action per screen
- **Don't:** Don't put a glow on the headline; the glow belongs to the button
- **Don't:** Don't set the subtitle in white; it is grey

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
