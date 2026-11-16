# Design system — Brand Designer Portfolio Template

`SN-W01843` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A near-black ground carries a white serif headline with a grey italic serif second line. The solid white pill and the outlined pill are the only shapes, so the page stays restrained.

**Mood:** dark, editorial, restrained, premium

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#e5e5e5` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#a3a3a3` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#ffffff` · `#a3a3a3` · `#737373` · `#000000` · `#525252` · `#171717` · `#d4d4d4` · `#030303` · `#e5e5e5` · `#ececec`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Instrument Serif, Inter
- **Scale (largest breakpoint):** h1 96px · h2 60px · h3 30px · body 14px
- **Weights in use:** medium, normal
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-xl` (12px)
- **Shadows:** `shadow-[0_0_10px_rgba(255,255,255,0.5)]`, `shadow-[0_0_20px_rgba(255,255,255,0.15)]`, `shadow-[0_0_25px_rgba(255,255,255,0.3)]`
- **Content width:** `max-w-7xl`, `max-w-5xl`
- **Section padding:** `py-32`
- **Common gaps:** `gap-8`, `gap-2`, `gap-6`

**Primary button**

```html
<a class="hidden md:flex items-center gap-2 text-sm font-medium text-black bg-white px-5 py-2.5 rounded-full hover:bg-neutral-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.15)] hover:shadow-[0_0_25px_rgba(255,255,255,0.3)]">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Case studies (`case-studies`)
5. Process / steps (`how-it-works`)
6. Team (`team`)
7. Articles (`blog-articles`)
8. Contact form (`contact-form`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** gradient fills, blend modes, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #e5e5e5;
  --color-text: #ffffff;
  --color-muted: #a3a3a3;
  --color-border: #ffffff;
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
    muted: '#a3a3a3',
    line: '#ffffff',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in a white display serif with the second line in grey italic
- **Do:** Keep the ground near-black and use white pills for the calls to action
- **Do:** Let the typography carry the page; avoid decoration on the first screen
- **Don't:** Don't set the headline in a sans-serif to match the body
- **Don't:** Don't introduce a colour accent on the hero
- **Don't:** Don't use the light palette on this dark hero

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
