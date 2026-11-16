# Design system — Luxury Fitness Club Landing Page Template

`SN-W02650` · sports-fitness · dark mode · Sinera Atlas theme `calm` · language `en`

## Direction

A cinematic, dark club page despite its light-mode flag: the hero sits on a deep navy-black (#0c0c12) with a teal glow and very large white headlines. The teal accent (#17a2b8) appears in small labels and highlights, and the page is organised around a list of amenities and a bento grid. Type is a single large sans-serif with tight, dramatic scale. The effect is night-time and urban rather than bright.

**Mood:** cinematic, urban, night-toned, premium, dramatic

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0c0c12` | Page ground |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#17a2b8` | Primary action and highlights |
| Second accent | `#581c87` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#17a2b8` · `#9ca3af` · `#6b7280` · `#05050a` · `#111118` · `#4b5563` · `#0c0c12` · `#000000` · `#d1d5db`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, JetBrains Mono, Playfair Display
- **Scale (largest breakpoint):** h1 160px · h2 60px · h3 30px · body 16px
- **Weights in use:** medium, light, semibold
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-none` (0)
- **Shadows:** `shadow-[0_0_40px_-15px_rgba(23,162,184,0.15)]`, `shadow-[0_0_60px_-15px_rgba(23,162,184,0.3)]`, `shadow-[0_0_40px_rgba(255,255,255,0.1)]`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-32`, `py-40`
- **Common gaps:** `gap-3`, `gap-4`, `gap-8`

**Primary button**

```html
<a class="w-full py-4 bg-[#17A2B8] text-black text-xs font-mono tracking-widest uppercase hover:bg-white transition-colors duration-300 font-semibold">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Bento grid (`bento-grid`)
4. Feature grid (`features`)
5. Marquee (`marquee`)
6. FAQ (`faq`)
7. Process / steps (`how-it-works`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #0c0c12;
  --color-text: #ffffff;
  --color-muted: #6b7280;
  --color-border: #ffffff;
  --color-accent: #17a2b8;
  --color-accent-2: #581c87;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0c0c12',
    ink: '#ffffff',
    muted: '#6b7280',
    line: '#ffffff',
    accent: '#17a2b8',
    accent2: '#581c87',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use the deep navy-black (#0c0c12) as the page ground, not white.
- **Do:** Set headlines very large in white, one short line each.
- **Do:** Use teal (#17a2b8) only for small labels and single highlights.
- **Don't:** Don't switch the hero to a white background; the design depends on the dark ground.
- **Don't:** Don't use purple (#581c87) as a large fill.
- **Don't:** Don't use grey text on the dark ground for headlines.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
