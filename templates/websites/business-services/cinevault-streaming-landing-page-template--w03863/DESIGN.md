# Design system — CineVault Streaming Landing Page Template

`SN-W03863` · business-services · dark mode · Sinera Atlas theme `route` · language `en`

## Direction

A black, cinematic streaming page with white sans-serif headlines centred over a dark hero and a faint purple and red haze behind the top. Buttons are pill-shaped, with a solid light primary and a translucent outline secondary. A large featured-content panel sits below the copy, and the layout stays minimal so the imagery carries the page.

**Mood:** cinematic, dark, minimal, immersive, bold

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#262626` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#a3a3a3` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#f87171` | Primary action and highlights |
| Second accent | `#c084fc` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#000000` · `#f87171` · `#c084fc` · `#ef4444` · `#a855f7` · `#9333ea` · `#fecaca` · `#38bdf8` · `#581c87`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 20px · body 14px
- **Weights in use:** medium, semibold, normal
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-lg` (8px)
- **Shadows:** `shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]`, `shadow-[0_2.8px_2.2px_rgba(0,0,0,0.3),_0_6.7px_5.3px_rgba(0,0,0,0.35),_0_12.5px_10px_rgba(0,0,0,0.4)]`
- **Content width:** `max-w-7xl`, `max-w-5xl`
- **Section padding:** `py-12`
- **Common gaps:** `gap-2`, `gap-3`, `gap-6`

**Primary button**

```html
<a class="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white/90 backdrop-blur hover:bg-white/10 font-geist">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. Timeline (`timeline`)
3. Bento grid (`bento-grid`)
4. Stats band (`stats`)
5. Pricing (`pricing`)
6. Testimonials (`testimonials`)
7. FAQ (`faq`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Unicorn Studio (WebGL scenes)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #262626;
  --color-text: #ffffff;
  --color-muted: #a3a3a3;
  --color-border: #ffffff;
  --color-accent: #f87171;
  --color-accent-2: #c084fc;
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
    surface: '#262626',
    ink: '#ffffff',
    muted: '#a3a3a3',
    line: '#ffffff',
    accent: '#f87171',
    accent2: '#c084fc',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the background black (#000000) and set headlines in white sans-serif
- **Do:** Pair a solid white primary button with a translucent outline secondary button
- **Do:** Let the featured imagery sit in a large rounded frame at full width
- **Don't:** Don't add light section backgrounds; the page stays black
- **Don't:** Don't put more than one glow colour behind the hero
- **Don't:** Don't crowd the hero with badges or stats above the headline

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
