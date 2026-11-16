# Design system — ZioBratClub E-commerce Landing Page Template

`SN-W01349` · ecommerce · light mode · Sinera Atlas theme `market` · language `en`

## Direction

A loud, satirical merch hero on warm off-white (#fdfbf7), with a faint repeated 'ZIO BRAT' watermark across the grid. The brand name is set huge in magenta (#ff00cc) with a hard offset edge, and 'WHAT WAS PROMISED' is black italic on a neon lime (#ccff00) bar. Black pill buttons carry lime labels, so the palette is magenta, lime and black on paper, and the type is the main graphic device.

**Mood:** loud, satirical, playful, graphic

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fdfbf7` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#0a0a0a` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#0a0a0a` | Hairlines, dividers, outlines |
| Accent | `#ff00cc` | Primary action and highlights |
| Second accent | `#ccff00` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#ff00cc` · `#0a0a0a` · `#ccff00` · `#000000` · `#f5f5f4` · `#64748b` · `#fafaf9` · `#e7e5e4` · `#a8a29e`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Oswald
- **Body:** Inter
- **Loaded families:** Inter, Oswald
- **Scale (largest breakpoint):** h1 128px · h2 48px · h3 20px · body 18px
- **Weights in use:** semibold, medium, bold
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded` (4px)
- **Shadows:** `shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]`, `shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]`, `shadow-2xl`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-3`, `gap-8`

**Primary button**

```html
<a class="bg-deep-black text-brat-green px-8 py-4 rounded-full text-lg font-semibold hover:scale-105 transition-transform border-2 border-transparent hover:border-brat-green flex items-center gap-2">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Marquee (`marquee`)
4. Product grid (`product-grid`)
5. Call to action (`cta`)
6. FAQ (`faq`)
7. Newsletter signup (`newsletter`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #fdfbf7;
  --color-surface: #ffffff;
  --color-text: #0a0a0a;
  --color-muted: #64748b;
  --color-border: #0a0a0a;
  --color-accent: #ff00cc;
  --color-accent-2: #ccff00;
  --font-display: "Oswald", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fdfbf7',
    surface: '#ffffff',
    ink: '#0a0a0a',
    muted: '#64748b',
    line: '#0a0a0a',
    accent: '#ff00cc',
    accent2: '#ccff00',
  },
  fontFamily: { display: ['Oswald'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the brand word in heavy magenta (#ff00cc) and the headline in black caps, with one italic phrase on a lime (#ccff00) bar
- **Do:** Keep buttons as black pills with lime (#ccff00) labels
- **Do:** Use the faint repeated wordmark as the only background pattern, in pale grey on off-white
- **Don't:** Don't set long body copy in magenta or lime; both are for display and labels
- **Don't:** Don't use the lime bar as a background for text blocks; it is for the headline phrase only
- **Don't:** Don't soften the offset edge on the wordmark; the hard edge is the look

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
