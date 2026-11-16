# Design system — Authority Lab

`SN-W00231` · ai-saas · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A grey, photographic hero with heavy condensed black uppercase Spanish headlines stacked over a desaturated mountain photo. A dark blue tag (#3f556b) picks out a single word, and a dark bar chart fills the right edge as a data motif. The ground is light grey-green, so the page reads as sober and editorial rather than moody.

**Mood:** sober, editorial, bold, grey

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f4f6f3` | Page ground |
| Surface | `#1e2420` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#ebedea` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#3f556b` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#2d322f` · `#3f556b` · `#1e2420` · `#ebedea` · `#414f3f` · `#f4f6f3` · `#25d366`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Oswald, Playfair Display
- **Scale (largest breakpoint):** h2 60px · h3 48px · body 14px
- **Weights in use:** semibold, medium, normal
- **Letter spacing:** `tracking-tighter`, `tracking-[0.2em]`

## Shape, spacing and layout

- **Corner radius:** `rounded-[1px]` (1px), `rounded-full` (9999px), `rounded-xl` (12px)
- **Shadows:** `shadow-xl`, `shadow-[0_8px_32px_rgba(63,85,107,0.08)]`, `shadow-sm`
- **Content width:** `max-w-[1400px]`, `max-w-[28ch]`
- **Section padding:** `py-32`, `py-18`
- **Common gaps:** `gap-2`, `gap-3`, `gap-6`

**Primary button**

```html
<a class="uppercase hover:bg-[#3F556B] transition-colors duration-300 flex items-center gap-2 text-[10px] sm:text-xs font-semibold text-white tracking-wide sm:tracking-widest bg-[#2d322f] px-4 sm:px-8 py-2 sm:py-3">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Video / media (`video-media`)
5. Feature grid (`features`)
6. Schedule (`schedule-agenda`)
7. FAQ (`faq`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #f4f6f3;
  --color-surface: #1e2420;
  --color-text: #ffffff;
  --color-muted: #ebedea;
  --color-border: #ffffff;
  --color-accent: #3f556b;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 1px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f4f6f3',
    surface: '#1e2420',
    ink: '#ffffff',
    muted: '#ebedea',
    line: '#ffffff',
    accent: '#3f556b',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in heavy condensed uppercase, dark on a grey photo
- **Do:** Use the dark blue tag (#3f556b) to highlight one word
- **Do:** Keep the photo desaturated so the type and the bar chart carry the colour
- **Don't:** Don't add saturated colour to the photo
- **Don't:** Don't set the headline in lowercase
- **Don't:** Don't use a light body font for headlines

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
