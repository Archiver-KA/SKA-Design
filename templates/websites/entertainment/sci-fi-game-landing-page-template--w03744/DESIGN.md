# Design system — Sci‑Fi Game Landing Page Template

`SN-W03744` · entertainment · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A raw black page [#050505] in which lime [#ccff00] is the single signal colour, used for the wordmark, a scrolling status ticker and a full-width band lower down. Headlines are very large bold uppercase sans-serif, and small monospaced labels with brackets and underscores give the page a terminal tone. The overall effect is blunt and game-like.

**Mood:** terminal, raw, game-like, high-contrast, technical

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#050505` | Page ground |
| Surface | `#0a0a0a` | Cards, panels, raised areas |
| Text | `#000000` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#ccff00` | Primary action and highlights |

Palette by frequency of use: `#ccff00` · `#ffffff` · `#a3a3a3` · `#000000` · `#050505` · `#737373` · `#0a0a0a` · `#d4d4d4` · `#333333` · `#171717`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** JetBrains Mono
- **Body:** Inter
- **Loaded families:** Inter, JetBrains Mono
- **Scale (largest breakpoint):** h1 48px · h2 72px · h3 20px · body 14px
- **Weights in use:** medium, light, bold
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px)
- **Shadows:** `shadow-xl`, `shadow-[0_0_20px_#CCFF00]`, `shadow-2xl`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-2`, `gap-4`, `gap-6`

**Primary button**

```html
<a class="h-14 bg-[#CCFF00] text-black px-8 text-xs font-mono font-bold tracking-widest uppercase hover:bg-white transition-colors whitespace-nowrap flex items-center justify-center gap-2">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. Marquee (`marquee`)
3. Articles (`blog-articles`)
4. About (`about`)
5. Stats band (`stats`)
6. Newsletter signup (`newsletter`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), AOS scroll reveal
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #050505;
  --color-surface: #0a0a0a;
  --color-text: #000000;
  --color-muted: #737373;
  --color-border: #ffffff;
  --color-accent: #ccff00;
  --font-display: "JetBrains Mono", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#050505',
    surface: '#0a0a0a',
    ink: '#000000',
    muted: '#737373',
    line: '#ffffff',
    accent: '#ccff00',
  },
  fontFamily: { display: ['JetBrains Mono'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set navigation labels and small captions in uppercase monospace
- **Do:** Use lime (#ccff00) for the wordmark, key words and one full-width band
- **Do:** Keep headlines in bold uppercase sans-serif at display size
- **Don't:** Don't use lime as a large background behind body text
- **Don't:** Don't soften the monospace labels with rounded tags
- **Don't:** Don't mix sentence-case headings into the uppercase system

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
