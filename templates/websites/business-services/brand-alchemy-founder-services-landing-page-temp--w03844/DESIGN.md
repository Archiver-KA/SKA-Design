# Design system — Brand Alchemy Founder Services Landing Page Template

`SN-W03844` · business-services · dark mode · Sinera Atlas theme `route` · language `en`

## Direction

A dark, cinematic hero on black with a faint violet glow behind the copy, which gives the page a moody, stage-lit feel. The headline is large, sans-serif and white, and its closing phrase is set in italic grey as the promise of the brand. A solid white button sits under a short paragraph, so the page reads as serious and low-key.

**Mood:** moody, premium, editorial, understated

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#171717` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#a3a3a3` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#6366f1` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#a3a3a3` · `#737373` · `#171717` · `#000000` · `#525252` · `#d4d4d4` · `#e5e5e5` · `#262626` · `#0a0a0a`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 18px · body 14px
- **Weights in use:** medium, light, normal
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-sm` (2px)
- **Shadows:** `shadow-[0_0_50px_-12px_rgba(255,255,255,0.05)]`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-32`, `py-24`
- **Common gaps:** `gap-4`, `gap-6`, `gap-1`

**Primary button**

```html
<a class="group relative px-8 py-4 bg-white text-black rounded-full font-medium text-sm tracking-wide overflow-hidden transition-all hover:pr-10">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Logo cloud (`logo-cloud`)
4. Process / steps (`how-it-works`)
5. Testimonials (`testimonials`)
6. About (`about`)
7. FAQ (`faq`)
8. Call to action (`cta`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #171717;
  --color-text: #ffffff;
  --color-muted: #a3a3a3;
  --color-border: #ffffff;
  --color-accent: #6366f1;
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
    accent: '#6366f1',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in large white sans-serif, with the closing phrase in italic grey.
- **Do:** Use the white solid button as the single call to action in the hero.
- **Do:** Keep the faint violet glow in the background behind the copy only.
- **Don't:** Don't add bright colours to the hero text.
- **Don't:** Don't place the button on a light background.
- **Don't:** Don't set the headline in a serif face.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
