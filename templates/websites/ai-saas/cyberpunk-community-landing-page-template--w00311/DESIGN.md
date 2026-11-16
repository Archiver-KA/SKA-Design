# Design system — Cyberpunk Community Landing Page Template

`SN-W00311` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark, sharp-cornered page on near-black [#0a0a0a], with a magenta [#d946ef] primary button and monospace type throughout. The hero has a short bracketed status tag, a large white headline, and a terminal window with plain output lines below. The square corners and code-like labels make the page read as a hacker collective rather than a company.

**Mood:** sharp, dark, hacker, collective

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Surface | `#000000` | Cards, panels, raised areas |
| Text | `#d1d5db` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#d946ef` | Primary action and highlights |
| Second accent | `#22c55e` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#6b7280` · `#9ca3af` · `#000000` · `#0a0a0a` · `#d946ef` · `#4b5563` · `#050505` · `#333333` · `#d1d5db`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** JetBrains Mono
- **Body:** JetBrains Mono
- **Loaded families:** Geist, Roboto, Montserrat, Poppins, Playfair Display, Instrument Serif
- **Scale (largest breakpoint):** h1 96px · h2 30px · h3 18px · body 14px
- **Weights in use:** bold, medium
- **Letter spacing:** `tracking-widest`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-none` (0)
- **Shadows:** `shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)]`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="h-14 px-8 bg-accent-500 text-black font-bold text-sm uppercase tracking-wider hover:bg-white transition-colors flex items-center justify-center gap-3">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Marquee (`marquee`)
5. Feature grid (`features`)
6. Comparison (`comparison`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #0a0a0a;
  --color-surface: #000000;
  --color-text: #d1d5db;
  --color-muted: #6b7280;
  --color-border: #ffffff;
  --color-accent: #d946ef;
  --color-accent-2: #22c55e;
  --font-display: "JetBrains Mono", sans-serif;
  --font-body: "JetBrains Mono", sans-serif;
  --radius: 0;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0a0a0a',
    surface: '#000000',
    ink: '#d1d5db',
    muted: '#6b7280',
    line: '#ffffff',
    accent: '#d946ef',
    accent2: '#22c55e',
  },
  fontFamily: { display: ['JetBrains Mono'], sans: ['JetBrains Mono'] },
} }
```

## Do and don't

- **Do:** Use magenta (#d946ef) for the primary button and the quote rule only
- **Do:** Keep corners square; the design uses no radius
- **Do:** Set labels and headings in JetBrains Mono, in uppercase where they are tags
- **Don't:** Don't round the buttons or cards
- **Don't:** Don't use the magenta for body text
- **Don't:** Don't switch the headings to Inter; the mono face is part of the identity

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
