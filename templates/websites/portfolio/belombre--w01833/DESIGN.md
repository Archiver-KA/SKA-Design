# Design system — belombre

`SN-W01833` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `fr`

## Direction

Stark black event-production site: a pure black hero with a white logo lockup in a panel at the top and one light outlined button at the bottom, leaving the rest of the screen empty. The palette is black, white and grey, and the hero type is set in a serif face. Photography is expected to carry the colour, so the UI itself stays minimal.

**Mood:** stark, minimal, monochrome, event

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#000000` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#d4d4d8` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#18181b` · `#ffffff` · `#71717a` · `#d4d4d8` · `#000000` · `#e4e4e7` · `#f4f4f0` · `#3f3f46` · `#52525b` · `#f4f4f5`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** Inter
- **Loaded families:** Instrument Serif, Inter, Playfair Display
- **Scale (largest breakpoint):** h1 96px · h2 72px · h3 20px · body 24px
- **Weights in use:** light, medium, normal
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-none` (0), `rounded-sm` (2px), `rounded-full` (9999px)
- **Shadows:** `shadow-lg`, `shadow-sm`
- **Content width:** `max-w-4xl`, `max-w-2xl`
- **Section padding:** `py-48`
- **Common gaps:** `gap-x-6`, `gap-6`, `gap-y-6`

**Primary button**

```html
<a class="inline-block bg-white/90 backdrop-blur text-black px-6 py-2 font-serif italic text-lg hover:bg-white transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Video / media (`video-media`)
2. Navigation bar (`navbar`)
3. Marquee (`marquee`)
4. Hero (`hero`)
5. Feature grid (`features`)
6. Services (`services`)
7. Footer (`footer`)
8. Modal / overlay (`modal-overlay`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #000000;
  --color-text: #ffffff;
  --color-muted: #71717a;
  --color-border: #d4d4d8;
  --font-display: "Playfair Display", serif;
  --font-body: "Inter", sans-serif;
  --radius: 0;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#000000',
    ink: '#ffffff',
    muted: '#71717a',
    line: '#d4d4d8',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the hero black with a white logo panel at the top
- **Do:** Use one white outlined button at the bottom of the hero
- **Do:** Let photography carry all colour on the page
- **Don't:** Don't add colour to the UI; the page is monochrome
- **Don't:** Don't fill the hero with text; leave it mostly empty
- **Don't:** Don't use a grey ground for the hero

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
