# Design system — Design Agency Landing Page Template

`SN-W01510` · agency-studio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A black ground (#000000) with a very large white sans headline, 'Architecting the next web.', whose second line shades from white to grey. A small status pill with a green dot (#10b981) sits above, and a solid white square button sits beside the copy. The centred pill nav with a white active tab keeps the page restrained and tool-like.

**Mood:** restrained, technical, stark, premium

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#e5e5e5` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#10b981` | Primary action and highlights |
| Second accent | `#ef4444` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#737373` · `#000000` · `#10b981` · `#a3a3a3` · `#171717` · `#34d399` · `#525252` · `#d4d4d4` · `#e5e5e5`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 112px · h2 36px · h3 18px · body 14px
- **Weights in use:** medium, light, bold
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded` (4px)
- **Shadows:** `shadow-[0_0_10px_#10b981]`, `shadow-[0_0_20px_rgba(0,0,0,0.5)]`, `shadow-[0_0_10px_rgba(255,255,255,0.3)]`
- **Content width:** `max-w-[1400px]`, `max-w-2xl`
- **Section padding:** `py-32`
- **Common gaps:** `gap-2`, `gap-3`, `gap-6`

**Primary button**

```html
<a class="px-5 py-2 rounded-full bg-white text-black text-[11px] font-semibold tracking-wide hover:shadow-[0_0_10px_rgba(255,255,255,0.3)] transition-all">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Marquee (`marquee`)
5. Case studies (`case-studies`)
6. About (`about`)
7. Testimonials (`testimonials`)
8. Feature grid (`features`)
9. FAQ (`faq`)
10. Team (`team`)
11. Pricing (`pricing`)
12. Video / media (`video-media`)
13. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Unicorn Studio (WebGL scenes)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #e5e5e5;
  --color-text: #ffffff;
  --color-muted: #737373;
  --color-border: #ffffff;
  --color-accent: #10b981;
  --color-accent-2: #ef4444;
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
    surface: '#e5e5e5',
    ink: '#ffffff',
    muted: '#737373',
    line: '#ffffff',
    accent: '#10b981',
    accent2: '#ef4444',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline very large in white, with the second line shaded from white to grey.
- **Do:** Use the solid white rectangular button with uppercase tracked text for the primary action.
- **Do:** Keep the status pill and its green (#10b981) dot as the only colour on the first screen.
- **Don't:** Don't add rounded corners to the primary button; it is square.
- **Don't:** Don't add a coloured background to the hero.
- **Don't:** Don't set the headline in a serif; it is sans throughout.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
