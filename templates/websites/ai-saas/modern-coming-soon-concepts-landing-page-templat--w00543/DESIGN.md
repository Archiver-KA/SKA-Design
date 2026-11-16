# Design system — Modern Coming Soon Concepts Landing Page Template

`SN-W00543` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A black stage with a dark glass card at the centre holding a two-line headline: white on top and a silver gradient below. Violet and blue blurred glows sit at the left and right edges and are the only colour on the screen. A small pill label above the headline marks the access message, and the large sans-serif type carries the page.

**Mood:** cinematic, dark, glowing, refined

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#171717` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#a1a1aa` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#6366f1` | Primary action and highlights |
| Second accent | `#10b981` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#000000` · `#6366f1` · `#a1a1aa` · `#818cf8` · `#10b981` · `#737373` · `#171717` · `#1da1f2` · `#71717a`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Cinzel, Inter, Space Grotesk, JetBrains Mono, Instrument Serif
- **Scale (largest breakpoint):** h1 128px · h2 36px · h3 24px · body 14px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-tighter`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-3xl` (24px)
- **Shadows:** `shadow-xl`, `shadow-lg`, `shadow-2xl`
- **Content width:** `max-w-4xl`, `max-w-5xl`
- **Section padding:** `py-12`
- **Common gaps:** `gap-2`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-slate-200 transition-colors text-sm whitespace-nowrap">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. Newsletter signup (`newsletter`)
3. Code / terminal (`code-terminal`)
4. Marquee (`marquee`)
5. Case studies (`case-studies`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), GSAP
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #171717;
  --color-text: #ffffff;
  --color-muted: #a1a1aa;
  --color-border: #ffffff;
  --color-accent: #6366f1;
  --color-accent-2: #10b981;
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
    surface: '#171717',
    ink: '#ffffff',
    muted: '#a1a1aa',
    line: '#ffffff',
    accent: '#6366f1',
    accent2: '#10b981',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the glass card dark and let its blur separate it from the background
- **Do:** Set the second headline line in a silver gradient under a white first line
- **Do:** Place blurred violet glows at the page edges, away from the text
- **Don't:** Don't put glows behind body text; keep them at the edges
- **Don't:** Don't set the headline in bright colours; white and silver carry it
- **Don't:** Don't drop the pill label above the headline; it frames the message

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
