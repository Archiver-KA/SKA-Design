# Design system — Architecture & Construction Portfolio Template

`SN-W01802` · portfolio · light mode · Sinera Atlas theme `workshop` · language `fr`

## Direction

Architectural and photo-led: a full-bleed render of a curved building sits behind a large stacked headline that fades from solid black to faint grey as it runs down the left side, with white rounded cards floating over the lower right. The type is a bold sans, with lighter lines for the secondary text. The look is cool and clean on a light ground, with dark pill buttons and minimal chrome.

**Mood:** architectural, bold, clean, photographic

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#171717` | Cards, panels, raised areas |
| Text | `#171717` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#262626` | Hairlines, dividers, outlines |
| Accent | `#c9b48a` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#737373` · `#171717` · `#a3a3a3` · `#262626` · `#c9b48a` · `#0c0c0c` · `#404040` · `#525252` · `#000000`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 16px · body 14px
- **Weights in use:** light, semibold, medium
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-[2rem]` (2rem), `rounded-3xl` (24px)
- **Shadows:** `shadow-sm`, `shadow-md`
- **Content width:** `max-w-7xl`, `max-w-[14rem]`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="bg-white/80 backdrop-blur rounded-full px-5 py-2.5 text-sm font-medium hover:bg-white transition-colors duration-300">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. Stats band (`stats`)
3. About (`about`)
4. Gallery / portfolio (`gallery-portfolio`)
5. Services (`services`)
6. Process / steps (`how-it-works`)
7. Contact form (`contact-form`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #171717;
  --color-text: #171717;
  --color-muted: #737373;
  --color-border: #262626;
  --color-accent: #c9b48a;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#171717',
    ink: '#171717',
    muted: '#737373',
    line: '#262626',
    accent: '#c9b48a',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Let the full-bleed architectural photograph sit under the headline
- **Do:** Set the headline in bold sans and fade the lines below the first
- **Do:** Use white rounded cards over the photo for supporting copy
- **Don't:** Don't place dark body text over the darkest part of the photo
- **Don't:** Don't add a second accent colour; the photograph supplies the colour
- **Don't:** Don't set this template on a dark ground; the ground is light

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
