# Design system — Director & Videographer Portfolio Template

`SN-W01991` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `fr`

## Direction

Cinematic dark title page: a near-black ground (#0a0a0a) with a large centred serif wordmark, VICTOR, over a spaced uppercase role line in grey and one outlined button. A thin vertical rule and a short grey client list frame the left edge, and small grey details sit at the corners.

**Mood:** cinematic, restrained, typographic, sober, centred

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Surface | `#171717` | Cards, panels, raised areas |
| Text | `#f5f5f5` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#404040` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#ffffff` · `#525252` · `#737373` · `#0a0a0a` · `#d4d4d4` · `#a3a3a3` · `#404040` · `#171717` · `#262626` · `#f5f5f5`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 18px · body 12px
- **Weights in use:** light, medium, normal
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** none used — square corners
- **Content width:** `max-w-screen-2xl`, `max-w-5xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-8`, `gap-6`, `gap-2`

**Primary button**

```html
<a class="w-full py-4 bg-white text-neutral-950 text-sm font-medium tracking-wider hover:bg-neutral-200 transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Modal / overlay (`modal-overlay`)
3. Hero (`hero`)
4. Video / media (`video-media`)
5. Logo cloud (`logo-cloud`)
6. About (`about`)
7. Services (`services`)
8. Contact form (`contact-form`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** gradient fills, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #0a0a0a;
  --color-surface: #171717;
  --color-text: #f5f5f5;
  --color-muted: #737373;
  --color-border: #404040;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0a0a0a',
    surface: '#171717',
    ink: '#f5f5f5',
    muted: '#737373',
    line: '#404040',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Centre the wordmark and set the role line below it in spaced uppercase grey
- **Do:** Use a single outlined button, such as PLAY SHOWREEL, for the main action
- **Do:** Frame the page with small grey details in the corners and a thin vertical rule
- **Don't:** Don't add colour; the page is black, white and grey
- **Don't:** Don't use a solid button here; the outline keeps the page quiet
- **Don't:** Don't set the wordmark in Inter; keep it in the serif.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
