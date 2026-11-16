# Design system — SEO Expert Portfolio Landing Page Template

`SN-W02224` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A dark, high-energy SEO hero: a very large bold uppercase sans headline in white, with the middle words filled by a blue-to-indigo gradient (#3b82f6). A scrolling marquee of service names in outline and fill runs under the copy, and a deep blue band starts below the fold. The gradient headline is the signature, and the rest of the page stays black.

**Mood:** high-energy, bold, techy, dark

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#000000` | Cards, panels, raised areas |
| Text | `#dbeafe` | Headings and primary copy |
| Muted text | `#a3a3a3` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#3b82f6` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#3b82f6` · `#000000` · `#a3a3a3` · `#1e3a8a` · `#171717` · `#737373` · `#93c5fd` · `#1e40af` · `#60a5fa`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** a monospace face
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 36px · h2 12px · h3 24px · body 14px
- **Weights in use:** bold, semibold, medium
- **Letter spacing:** `tracking-widest`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-lg` (8px)
- **Shadows:** `shadow-[0_0_10px_#1e3a8a]`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="hidden md:flex items-center gap-2 bg-white text-black px-4 py-1.5 rounded-sm text-[11px] font-bold uppercase hover:bg-neutral-200 transition-colors tracking-tight">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. Navigation bar (`navbar`)
3. Marquee (`marquee`)
4. About (`about`)
5. Services (`services`)
6. Gallery / portfolio (`gallery-portfolio`)
7. Testimonials (`testimonials`)
8. Team (`team`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #000000;
  --color-text: #dbeafe;
  --color-muted: #a3a3a3;
  --color-border: #ffffff;
  --color-accent: #3b82f6;
  --font-display: "a monospace face", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#000000',
    ink: '#dbeafe',
    muted: '#a3a3a3',
    line: '#ffffff',
    accent: '#3b82f6',
  },
  fontFamily: { display: ['a monospace face'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in bold uppercase and fill the key words with the blue gradient (#3b82f6)
- **Do:** Keep the page ground black (#000000) and reserve the deep blue (#1e3a8a) for bands
- **Do:** Run service names as a marquee with outline and fill alternating
- **Don't:** Don't put the gradient on body text
- **Don't:** Don't use the deep blue band as the page background
- **Don't:** Don't set the display type in a monospace face; headlines are bold sans

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
