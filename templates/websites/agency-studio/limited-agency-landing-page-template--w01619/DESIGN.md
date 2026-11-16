# Design system — Limited Agency Landing Page Template

`SN-W01619` · agency-studio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A black, centred agency hero with a clean grotesque headline in white, a grey subline and two dark pill buttons, one filled and one outlined. The first screen uses no accent colour, so the page reads as monochrome and sober, and the copy alone carries the tone. Glass-style panels and a blur on the navigation are the only texture.

**Mood:** sober, monochrome, minimal, premium

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#171717` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#a3a3a3` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#34d399` | Primary action and highlights |
| Second accent | `#ef4444` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#34d399` · `#10b981` · `#000000` · `#ef4444` · `#a7f3d0` · `#171717` · `#e5e5e5` · `#064e3b` · `#3b82f6`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 20px · body 14px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-tighter`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-2xl` (16px)
- **Shadows:** `shadow-[0_0_15px_rgba(255,255,255,0.1)]`, `shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]`, `shadow-[0_2.8px_2.2px_rgba(0,0,0,0.3),_0_6.7px_5.3px_rgba(0,0,0,0.35),_0_12.5px_10px_rgba(0,0,0,0.4)]`
- **Content width:** `max-w-7xl`, `max-w-5xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-3`, `gap-1`, `gap-2`

**Primary button**

```html
<a class="inline-flex items-center gap-2 text-sm font-medium text-black bg-white rounded-lg px-4 py-2 hover:bg-neutral-200 transition font-geist">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. Logo cloud (`logo-cloud`)
3. Team (`team`)
4. Comparison (`comparison`)
5. Integrations (`integrations`)
6. Feature grid (`features`)
7. Pricing (`pricing`)
8. Contact form (`contact-form`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Three.js, Unicorn Studio (WebGL scenes)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #171717;
  --color-text: #ffffff;
  --color-muted: #a3a3a3;
  --color-border: #ffffff;
  --color-accent: #34d399;
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
    surface: '#171717',
    ink: '#ffffff',
    muted: '#a3a3a3',
    line: '#ffffff',
    accent: '#34d399',
    accent2: '#ef4444',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the hero monochrome: white headline, grey subline, black ground
- **Do:** Use a filled dark pill and an outlined dark pill for the two CTAs
- **Do:** Centre the hero copy with generous space above and below
- **Don't:** Don't introduce a colour accent without a clear purpose; the first screen works without one
- **Don't:** Don't use bright buttons; they break the monochrome
- **Don't:** Don't add imagery over the headline

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
