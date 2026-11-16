# Design system — Luxury Travel Landing Page Template

`SN-W03104` · travel · dark mode · Sinera Atlas theme `dwell` · language `pt-BR`

## Direction

A full-bleed photographic hero of a city bay sits under a heavy dark overlay, which mutes the photo to a warm grey-brown. Navigation sits in small spaced capitals across the top, and the overlay and photograph carry the mood. Headlines are set in Cormorant Garamond and body text in Barlow Condensed.

**Mood:** moody, cinematic, warm, urban

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#111111` | Page ground |
| Surface | `#161616` | Cards, panels, raised areas |
| Text | `#f5f5f5` | Headings and primary copy |
| Muted text | `#e6dcd3` | Secondary copy, captions |
| Border | `#2a2a2a` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#b5533c` · `#888888` · `#e6dcd3` · `#d4c5b9` · `#ffffff` · `#2a2a2a` · `#161616` · `#111111` · `#aaaaaa` · `#1a1a1a`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Cormorant Garamond
- **Body:** Barlow Condensed
- **Loaded families:** Barlow Condensed, Cormorant Garamond
- **Scale (largest breakpoint):** h1 144px · h2 60px · h3 36px · body 18px
- **Weights in use:** normal
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px)
- **Content width:** `max-w-[1600px]`, `max-w-2xl`
- **Section padding:** `py-40`, `py-24`
- **Common gaps:** `gap-4`, `gap-2`, `gap-12`

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Marquee (`marquee`)
4. Call to action (`cta`)
5. Pricing (`pricing`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), AOS scroll reveal
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #111111;
  --color-surface: #161616;
  --color-text: #f5f5f5;
  --color-muted: #e6dcd3;
  --color-border: #2a2a2a;
  --font-display: "Cormorant Garamond", serif;
  --font-body: "Barlow Condensed", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#111111',
    surface: '#161616',
    ink: '#f5f5f5',
    muted: '#e6dcd3',
    line: '#2a2a2a',
  },
  fontFamily: { display: ['Cormorant Garamond'], sans: ['Barlow Condensed'] },
} }
```

## Do and don't

- **Do:** Put a dark overlay over the photograph so light text reads over it
- **Do:** Set the hero headline in Cormorant Garamond at large size
- **Do:** Keep navigation in small spaced capitals across the top
- **Don't:** Don't show the photograph at full brightness behind text
- **Don't:** Don't use the terracotta (#b5533c) as the page ground
- **Don't:** Don't add decorative colour over the photograph

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
