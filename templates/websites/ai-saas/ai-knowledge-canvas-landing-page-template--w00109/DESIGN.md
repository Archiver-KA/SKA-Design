# Design system — AI Knowledge Canvas Landing Page Template

`SN-W00109` · ai-saas · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

SideSpark is a light, typographic waitlist page on an off-white ground (#f5f5f5), with a large serif headline in black and a monospace sub-line. The layout is plain and left-aligned, with a bordered email field and a solid black button, and three numbered feature cards with small monospace labels. The overall effect is a paper-and-ink treatment.

**Mood:** plain, editorial, light, technical, understated

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f5f5f5` | Page ground |
| Surface | `#262626` | Cards, panels, raised areas |
| Text | `#000000` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#000000` | Hairlines, dividers, outlines |
| Accent | `#000000` | Primary action and highlights |

Palette by frequency of use: `#000000` · `#ffffff` · `#f5f5f5` · `#737373` · `#a3a3a3` · `#fafafa` · `#262626` · `#404040` · `#e5e5e5` · `#f3f3ef`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Newsreader
- **Body:** Newsreader
- **Loaded families:** Geist, Roboto, Montserrat, Poppins, Playfair Display, Instrument Serif
- **Scale (largest breakpoint):** h1 30px · h2 72px · h3 12px · body 14px
- **Weights in use:** medium, normal
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-sm` (2px)
- **Shadows:** `shadow-sm`, `shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]`, `shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]`
- **Content width:** `max-w-6xl`, `max-w-4xl`
- **Section padding:** `py-12`, `py-20`
- **Common gaps:** `gap-8`, `gap-2`, `gap-4`

**Primary button**

```html
<a class="bg-black text-white px-6 py-3 font-mono text-sm uppercase tracking-wide hover:bg-neutral-800 transition-colors border border-black shadow-[4px_4px_0px_0px_rgba(200,200,200,1)] whitespace-nowrap w-full sm:w-auto">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. Newsletter signup (`newsletter`)
3. Video / media (`video-media`)
4. Footer (`footer`)

## Motion, effects and stack

- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #f5f5f5;
  --color-surface: #262626;
  --color-text: #000000;
  --color-muted: #737373;
  --color-border: #000000;
  --color-accent: #000000;
  --font-display: "Newsreader", serif;
  --font-body: "Newsreader", serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f5f5f5',
    surface: '#262626',
    ink: '#000000',
    muted: '#737373',
    line: '#000000',
    accent: '#000000',
  },
  fontFamily: { display: ['Newsreader'], sans: ['Newsreader'] },
} }
```

## Do and don't

- **Do:** Set the headline in a serif display face in black on the off-white ground (#f5f5f5)
- **Do:** Use monospace for sub-lines, labels and numbered card tags
- **Do:** Use the solid black button and a hard black field border for the waitlist form
- **Don't:** Don't use a dark background for this template; the ground is light
- **Don't:** Don't add shadows to the cards; they sit on thin borders
- **Don't:** Don't set the labels in the serif face; they are monospace

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
