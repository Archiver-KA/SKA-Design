# Design system — Cornerstone - The Residences

`SN-W03228` · real-estate · light mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A warm cream ground (#f8f3e6) carries a single bronze button (#ab7f43) in the top right reading Schedule Tour. Bronze is the only accent colour, giving a quiet, luxury-residence opening.

**Mood:** quiet, warm, luxurious, spare

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f8f3e6` | Page ground |
| Surface | `#4a5652` | Cards, panels, raised areas |
| Text | `#111111` | Headings and primary copy |
| Muted text | `#f8f3e6` | Secondary copy, captions |
| Border | `#f8f3e6` | Hairlines, dividers, outlines |
| Accent | `#ab7f43` | Primary action and highlights |

Palette by frequency of use: `#f8f3e6` · `#ab7f43` · `#4a5652` · `#343434` · `#c48376` · `#dfd9c6`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display, Roboto
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 20px · body 20px
- **Weights in use:** extralight, medium, light
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** none used — square corners
- **Shadows:** `shadow-sm`, `shadow-md`
- **Content width:** `max-w-[1400px]`, `max-w-2xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-2`, `gap-x-2`, `gap-y-2`

**Primary button**

```html
<a class="hover:bg-[#C48376] md:px-8 uppercase transition-colors cursor-pointer inline-block no-underline text-xs font-medium text-[#F8F3E6] tracking-widest text-center bg-[#AB7F43] pt-3 pr-6 pb-3 pl-6">…</a>
```

## Page structure

Blocks in page order:

1. Video / media (`video-media`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Listings (`listings`)
5. Stats band (`stats`)
6. Pricing (`pricing`)
7. Feature grid (`features`)
8. Articles (`blog-articles`)
9. Contact form (`contact-form`)
10. Footer (`footer`)

## Motion, effects and stack

- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #f8f3e6;
  --color-surface: #4a5652;
  --color-text: #111111;
  --color-muted: #f8f3e6;
  --color-border: #f8f3e6;
  --color-accent: #ab7f43;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f8f3e6',
    surface: '#4a5652',
    ink: '#111111',
    muted: '#f8f3e6',
    line: '#f8f3e6',
    accent: '#ab7f43',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the warm cream ground (#f8f3e6) as the page background.
- **Do:** Use the bronze (#ab7f43) for the single primary button, set in small tracked capitals.
- **Do:** Let photography and the residence copy carry the page rather than added colour.
- **Don't:** Don't add a second accent colour; the palette is cream, bronze and muted grey-green.
- **Don't:** Don't move the Schedule Tour button away from the top right corner.
- **Don't:** Don't use the bronze as a background behind body text; it is a button colour.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
