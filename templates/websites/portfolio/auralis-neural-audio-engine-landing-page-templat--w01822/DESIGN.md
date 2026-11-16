# Design system — Auralis Neural Audio Engine Landing Page Template

`SN-W01822` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

Dark cinematic instrument page: a near-black ground (#0a0a0b) with a large cream serif headline whose second line is italic, and a single orange-filled button. Small monospace labels for status and captions sit at the top and bottom of the hero. The orange (#ff7a1a) is the only strong colour, and cyan appears only faintly. It reads as technical and refined.

**Mood:** cinematic, technical, refined, dark

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0b` | Page ground |
| Surface | `#0c0c0e` | Cards, panels, raised areas |
| Text | `#f5f1e8` | Headings and primary copy |
| Border | `#f5f1e8` | Hairlines, dividers, outlines |
| Accent | `#ff7a1a` | Primary action and highlights |
| Second accent | `#7df9ff` | Supporting highlights |

Palette by frequency of use: `#f5f1e8` · `#ff7a1a` · `#0a0a0b` · `#7df9ff` · `#0c0c0e` · `#050506`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Cormorant Garamond
- **Body:** Cormorant Garamond
- **Loaded families:** Cormorant Garamond, JetBrains Mono
- **Scale (largest breakpoint):** h1 128px · h2 48px · h3 20px · body 12px
- **Weights in use:** light, medium, semibold
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-none` (0), `rounded-full` (9999px)
- **Shadows:** `shadow-[inset_0_1px_0_rgba(255,255,255,0.3)]`
- **Content width:** `max-w-7xl`, `max-w-5xl`
- **Section padding:** `py-24`, `py-16`
- **Common gaps:** `gap-8`, `gap-2`, `gap-6`

**Primary button**

```html
<a class="group relative inline-flex items-center justify-center bg-[#FF7A1A] text-[#0A0A0B] font-semibold text-xs tracking-widest uppercase px-8 py-4 overflow-hidden transition-all duration-300 hover:bg-[#FF7A1A]/90 shadow-[inset_0_1px_0_rgba(255,255,255,0.3)]">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. Feature grid (`features`)
3. Video / media (`video-media`)
4. Testimonials (`testimonials`)
5. Pricing (`pricing`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #0a0a0b;
  --color-surface: #0c0c0e;
  --color-text: #f5f1e8;
  --color-border: #f5f1e8;
  --color-accent: #ff7a1a;
  --color-accent-2: #7df9ff;
  --font-display: "Cormorant Garamond", serif;
  --font-body: "Cormorant Garamond", serif;
  --radius: 0;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0a0a0b',
    surface: '#0c0c0e',
    ink: '#f5f1e8',
    line: '#f5f1e8',
    accent: '#ff7a1a',
    accent2: '#7df9ff',
  },
  fontFamily: { display: ['Cormorant Garamond'], sans: ['Cormorant Garamond'] },
} }
```

## Do and don't

- **Do:** Use cream (#f5f1e8) for headlines and orange (#ff7a1a) for the primary button
- **Do:** Set the headline in large serif with the second line in italic
- **Do:** Use small monospace labels for status and captions
- **Don't:** Don't use cyan (#7df9ff) for large areas
- **Don't:** Don't set body text in the serif at small sizes
- **Don't:** Don't put light backgrounds behind the hero

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
