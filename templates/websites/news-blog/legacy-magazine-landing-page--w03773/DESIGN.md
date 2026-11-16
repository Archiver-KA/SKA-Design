# Design system — Legacy Magazine Landing Page

`SN-W03773` · news-blog · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark navy-charcoal page [#1d232c] with a serif display headline set in warm cream, its middle word in italic. A deep red [#88071d] button marks the navigation call to action, and a thin uppercase pill label above the headline gives the page a magazine tone. A large framed magazine cover placeholder sits to the right, angled slightly to suggest print.

**Mood:** editorial, luxurious, warm, magazine-like, bold

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#1d232c` | Page ground |
| Text | `#000000` | Headings and primary copy |
| Muted text | `#1d232c` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#88071d` | Primary action and highlights |
| Second accent | `#88071d` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#c79e75` · `#1d232c` · `#f0dbc1` · `#88071d` · `#000000` · `#a00923`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Bodoni Moda
- **Body:** Bodoni Moda
- **Loaded families:** Bodoni Moda, Lato, Montserrat, Geist, Roboto, Poppins
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 24px · body 14px
- **Weights in use:** medium, bold, semibold
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-sm` (2px)
- **Shadows:** `shadow-[0_0_20px_rgba(136,7,29,0.3)]`, `shadow-[0_0_30px_rgba(136,7,29,0.2)]`, `shadow-[0_0_30px_rgba(136,7,29,0.1)]`
- **Content width:** `max-w-7xl`, `max-w-[280px]`
- **Section padding:** `py-32`, `py-24`
- **Common gaps:** `gap-4`, `gap-12`, `gap-2`

**Primary button**

```html
<a class="group flex items-center justify-center gap-3 bg-[#f0dbc1] text-[#1d232c] px-8 py-4 font-montserrat text-sm font-medium tracking-wide hover:bg-white transition-all duration-300">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Services (`services`)
4. Logo cloud (`logo-cloud`)
5. Process / steps (`how-it-works`)
6. Call to action (`cta`)
7. Bento grid (`bento-grid`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #1d232c;
  --color-text: #000000;
  --color-muted: #1d232c;
  --color-border: #ffffff;
  --color-accent: #88071d;
  --color-accent-2: #88071d;
  --font-display: "Bodoni Moda", serif;
  --font-body: "Bodoni Moda", serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#1d232c',
    ink: '#000000',
    muted: '#1d232c',
    line: '#ffffff',
    accent: '#88071d',
    accent2: '#88071d',
  },
  fontFamily: { display: ['Bodoni Moda'], sans: ['Bodoni Moda'] },
} }
```

## Do and don't

- **Do:** Set the headline in a large cream serif, with one word in italic
- **Do:** Use the deep red (#88071d) for the navigation button only
- **Do:** Keep the thin uppercase pill label above the headline
- **Don't:** Don't use the red on large backgrounds
- **Don't:** Don't set the headline in a sans-serif face
- **Don't:** Don't add bright colours to the cover frame

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
