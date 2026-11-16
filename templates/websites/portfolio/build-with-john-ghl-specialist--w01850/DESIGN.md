# Design system — Build With John | GHL Specialist

`SN-W01850` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A near-black landing page with a frosted, rounded navigation bar and a centred hero of short Inter text above a small image card. The green status pill (#4ade80) is the only bright colour on the first screen, and a faint violet glow sits in the lower right. Buttons are pills, one filled white and one dark and outlined.

**Mood:** dark, glassy, conversion-led, understated

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#27272a` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#d1d5db` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#4ade80` | Primary action and highlights |
| Second accent | `#fde047` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#d1d5db` · `#9ca3af` · `#000000` · `#27272a` · `#d4d4d4` · `#404040` · `#a3a3a3` · `#4ade80` · `#6b7280`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 24px · body 14px
- **Weights in use:** medium, semibold, light
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-xl` (12px), `rounded-full` (9999px), `rounded-2xl` (16px)
- **Shadows:** `shadow-lg`, `shadow-2xl`, `shadow-md`
- **Content width:** `max-w-7xl`, `max-w-[90%]`
- **Common gaps:** `gap-3`, `gap-x-3`, `gap-y-3`

**Primary button**

```html
<a class="block rounded-xl px-4 py-3 text-base font-medium text-gray-300 hover:bg-white/10 hover:text-white transition-colors font-geist">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Marquee (`marquee`)
4. Feature grid (`features`)
5. Case studies (`case-studies`)
6. About (`about`)
7. Process / steps (`how-it-works`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Three.js, Unicorn Studio (WebGL scenes), AOS scroll reveal
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #27272a;
  --color-text: #ffffff;
  --color-muted: #d1d5db;
  --color-border: #ffffff;
  --color-accent: #4ade80;
  --color-accent-2: #fde047;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 12px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#27272a',
    ink: '#ffffff',
    muted: '#d1d5db',
    line: '#ffffff',
    accent: '#4ade80',
    accent2: '#fde047',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use the green status pill (#4ade80) only for availability or status
- **Do:** Keep navigation in a frosted, rounded bar floating over the page
- **Do:** Pair a white filled primary pill with a dark outlined secondary pill
- **Don't:** Don't use the yellow accent (#fde047) on the first screen
- **Don't:** Don't leave an image card without its image.
- **Don't:** Don't use square buttons

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
