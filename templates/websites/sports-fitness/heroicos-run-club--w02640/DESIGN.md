# Design system — Heroicos Run Club

`SN-W02640` · sports-fitness · dark mode · Sinera Atlas theme `calm` · language `es`

## Direction

A preloader shows a white percentage counter, 0%, centred on a near-black ground with a soft grey glow. The page it leads into is dark, set in Geist with light-grey text, and uses motion from GSAP and a Unicorn Studio scene.

**Mood:** dark, minimal, loading, motion-led, uncertain

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Surface | `#000000` | Cards, panels, raised areas |
| Text | `#e2e8f0` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#e2e8f0` | Primary action and highlights |
| Second accent | `#22c55e` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#000000` · `#525252` · `#64748b` · `#0a0a0a` · `#e2e8f0` · `#cbd5e1` · `#818cf8` · `#67e8f9` · `#94a3b8`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Geist
- **Body:** Geist
- **Loaded families:** Inter, Geist, Playfair Display, Great Vibes, Imperial Script
- **Scale (largest breakpoint):** h1 128px · h2 72px · h3 30px · body 12px
- **Weights in use:** medium, semibold, black
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-[28px]` (28px), `rounded-2xl` (16px)
- **Shadows:** `shadow-2xl`, `shadow-lg`, `shadow-white/10`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-14`, `py-32`
- **Common gaps:** `gap-2`, `gap-6`, `gap-4`

**Primary button**

```html
<a class="rounded-full border border-white/20 px-6 py-2 text-sm font-medium text-white hover:bg-white hover:text-black transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Marquee (`marquee`)
5. Feature grid (`features`)
6. Schedule (`schedule-agenda`)
7. FAQ (`faq`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), GSAP, Unicorn Studio (WebGL scenes)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #0a0a0a;
  --color-surface: #000000;
  --color-text: #e2e8f0;
  --color-muted: #64748b;
  --color-border: #ffffff;
  --color-accent: #e2e8f0;
  --color-accent-2: #22c55e;
  --font-display: "Geist", sans-serif;
  --font-body: "Geist", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0a0a0a',
    surface: '#000000',
    ink: '#e2e8f0',
    muted: '#64748b',
    line: '#ffffff',
    accent: '#e2e8f0',
    accent2: '#22c55e',
  },
  fontFamily: { display: ['Geist'], sans: ['Geist'] },
} }
```

## Do and don't

- **Do:** Use the near-black ground with a soft centre glow for loading states.
- **Do:** Set the progress counter in a monospace face, centred.
- **Do:** Set the page text in Geist, in light grey on the near-black ground.
- **Don't:** Don't treat the loader as the page's hero; it is a preloader only.
- **Don't:** Don't use a light background for loading screens.
- **Don't:** Don't add colour to the counter.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
