# Design system — Design Agency Landing Page Template

`SN-W01511` · agency-studio · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A pale, faintly misty white ground (#ffffff) with the same large sans headline in black, the second line shaded from black to grey. A small status pill sits above, and a solid black square button with tracked uppercase text sits beside the copy. This is the light counterpart of the dark design, with the same type scale.

**Mood:** light, restrained, technical, crisp

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#171717` | Cards, panels, raised areas |
| Text | `#000000` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#000000` | Hairlines, dividers, outlines |
| Accent | `#000000` | Primary action and highlights |
| Second accent | `#ef4444` | Supporting highlights |

Palette by frequency of use: `#000000` · `#ffffff` · `#737373` · `#a3a3a3` · `#10b981` · `#525252` · `#fafafa` · `#f5f5f5` · `#e5e5e5` · `#171717`.

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
- **Shadows:** `shadow-[0_0_10px_#10b981]`, `shadow-sm`, `shadow-lg`
- **Content width:** `max-w-[1400px]`, `max-w-2xl`
- **Section padding:** `py-32`
- **Common gaps:** `gap-2`, `gap-3`, `gap-6`

**Primary button**

```html
<a class="px-5 py-2 rounded-full bg-black text-white text-[11px] font-semibold tracking-wide hover:shadow-[0_4px_10px_rgba(0,0,0,0.15)] transition-all">…</a>
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
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #171717;
  --color-text: #000000;
  --color-muted: #737373;
  --color-border: #000000;
  --color-accent: #000000;
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
    background: '#ffffff',
    surface: '#171717',
    ink: '#000000',
    muted: '#737373',
    line: '#000000',
    accent: '#000000',
    accent2: '#ef4444',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline very large in black, with the second line shaded from black to grey.
- **Do:** Use a solid black rectangular button with uppercase tracked text for the primary action.
- **Do:** Keep the pale ground (#ffffff) and avoid adding colour blocks.
- **Don't:** Don't use the dark-page palette here; the ground is white.
- **Don't:** Don't add rounded corners to the primary button.
- **Don't:** Don't add colour to the status pill beyond its small dot.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
