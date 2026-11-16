# Design system — Belombre Studio

`SN-W04161` · other-landing · dark mode · Sinera Atlas theme `circuit` · language `fr`

## Direction

A black ground with the wordmark in a light panel at the top and a single white button centred below, set in italic serif. The layout is largely empty, so the look rests on the type pairing and the black-and-white contrast. Playfair Display at large sizes gives an editorial, restrained tone, with Inter for supporting text.

**Mood:** editorial, monochrome, restrained, elegant

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#3f3f46` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#d4d4d8` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#18181b` · `#71717a` · `#ffffff` · `#d4d4d8` · `#3f3f46` · `#f4f4f0` · `#e4e4e7` · `#000000` · `#52525b` · `#f4f4f5`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** Inter
- **Loaded families:** Instrument Serif, Inter, Playfair Display
- **Scale (largest breakpoint):** h1 60px · h2 72px · h3 20px · body 24px
- **Weights in use:** light, normal, medium
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-none` (0), `rounded-sm` (2px), `rounded-full` (9999px)
- **Shadows:** `shadow-lg`, `shadow-sm`
- **Content width:** `max-w-2xl`, `max-w-4xl`
- **Section padding:** `py-48`
- **Common gaps:** `gap-6`, `gap-x-4`, `gap-y-4`

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
  --color-surface: #3f3f46;
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
    surface: '#3f3f46',
    ink: '#ffffff',
    muted: '#71717a',
    line: '#d4d4d8',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headlines in Playfair Display at large sizes.
- **Do:** Keep the palette black and white, with grey only for muted text.
- **Do:** Use a white button with dark text for the main call to action.
- **Don't:** Don't add colour to the page; the layout is monochrome.
- **Don't:** Don't set headlines in a sans-serif.
- **Don't:** Don't round the corners beyond the small radius already used.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
