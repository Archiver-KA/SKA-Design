# Design system — Personal Brand Landing Page Template

`SN-W02150` · portfolio · light mode · Sinera Atlas theme `workshop` · language `pl`

## Direction

A light personal-brand page on white (#ffffff) with near-black uppercase headlines in a bold sans and grey sublines. The strongest visual is a dark phone mockup with a chat interface: grey bubbles on the left and a blue (#4f46e5) bubble on the right. Colour is held back to that blue, so the page reads as a clear, consultative offer, and the large uppercase statements carry the voice.

**Mood:** consultative, clean, calm, clear, modern

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#fafafa` | Cards, panels, raised areas |
| Text | `#171717` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#e5e5e5` | Hairlines, dividers, outlines |
| Accent | `#4f46e5` | Primary action and highlights |
| Second accent | `#0891b2` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#171717` · `#e5e5e5` · `#737373` · `#f5f5f5` · `#4f46e5` · `#fafafa` · `#e0e7ff` · `#525252` · `#a3a3a3`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Geist
- **Body:** Geist
- **Loaded families:** Inter, Roboto, Montserrat, Poppins, Playfair Display, Instrument Serif
- **Scale (largest breakpoint):** h1 68px · h2 48px · h3 20px · body 14px
- **Weights in use:** semibold, medium, bold
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-lg` (8px)
- **Shadows:** `shadow-sm`, `shadow-md`, `shadow-lg`
- **Content width:** `max-w-7xl`, `max-w-[80%]`
- **Section padding:** `py-24`, `py-12`
- **Common gaps:** `gap-4`, `gap-2`, `gap-3`

**Primary button**

```html
<a class="h-12 lg:h-14 px-8 bg-white text-neutral-950 rounded-xl font-semibold hover:bg-neutral-200 focus:ring-2 focus:ring-white/20 transition-all flex items-center justify-center gap-2 lg:w-auto w-full shadow-[0_0_20px_rgba(255,255,255,0.15)] disabled:opacity-70 disabled:cursor-not-allowed">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Marquee (`marquee`)
5. Video / media (`video-media`)
6. Contact form (`contact-form`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Unicorn Studio (WebGL scenes)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #fafafa;
  --color-text: #171717;
  --color-muted: #737373;
  --color-border: #e5e5e5;
  --color-accent: #4f46e5;
  --color-accent-2: #0891b2;
  --font-display: "Geist", sans-serif;
  --font-body: "Geist", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#fafafa',
    ink: '#171717',
    muted: '#737373',
    line: '#e5e5e5',
    accent: '#4f46e5',
    accent2: '#0891b2',
  },
  fontFamily: { display: ['Geist'], sans: ['Geist'] },
} }
```

## Do and don't

- **Do:** Set headlines in uppercase near-black, with the second clause in grey.
- **Do:** Keep the blue (#4f46e5) for chat bubbles and one call to action per section.
- **Do:** Show the product as a dark phone mockup beside the copy.
- **Don't:** Don't set the uppercase headline in the same grey as the body copy.
- **Don't:** Don't use the blue on large backgrounds; it is an accent.
- **Don't:** Don't drop the phone mockup; it is the only image on the first screen.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
