# Design system — Humanitarian Charity Landing Page Template

`SN-W03611` · events · dark mode · Sinera Atlas theme `workshop` · language `fr`

## Direction

The charity page opens on a deep navy hero (#0f172a) that fades into pale grey at the bottom. The headline is a bold white sans in uppercase, and its second line is an italic serif in gold (#d4af37). Gold also marks the kicker, the donate button in the navigation and a short quote. The layout is dignified and dark, with gold kept for emphasis.

**Mood:** dignified, dark, warm, gold, measured

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0f172a` | Page ground |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#475569` | Secondary copy, captions |
| Border | `#f1f5f9` | Hairlines, dividers, outlines |
| Accent | `#d4af37` | Primary action and highlights |
| Second accent | `#1e293b` | Supporting highlights |

Palette by frequency of use: `#d4af37` · `#ffffff` · `#0f172a` · `#e2e8f0` · `#64748b` · `#f1f5f9` · `#1e293b` · `#fafafa` · `#475569` · `#94a3b8`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** Montserrat
- **Loaded families:** Montserrat, Playfair Display
- **Scale (largest breakpoint):** h1 96px · h2 72px · h3 30px · body 20px
- **Weights in use:** bold, medium, light
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-[2rem]` (2rem), `rounded-[2.5rem]` (2.5rem)
- **Shadows:** `shadow-lg`, `shadow-xl`, `shadow-2xl`
- **Content width:** `max-w-[95%]`, `max-w-4xl`
- **Section padding:** `py-16`, `py-24`
- **Common gaps:** `gap-6`, `gap-2`, `gap-3`

**Primary button**

```html
<a class="ml-2 px-8 py-3 rounded-full bg-[#D4AF37] hover:bg-[#C5A028] text-white transition-all duration-300 text-sm font-bold tracking-wide shadow-[0_4px_20px_rgba(212,175,55,0.3)] flex items-center gap-2">…</a>
```

## Page structure

Blocks in page order:

1. Video / media (`video-media`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Marquee (`marquee`)
5. Process / steps (`how-it-works`)
6. Stats band (`stats`)
7. Contact form (`contact-form`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #0f172a;
  --color-text: #ffffff;
  --color-muted: #475569;
  --color-border: #f1f5f9;
  --color-accent: #d4af37;
  --color-accent-2: #1e293b;
  --font-display: "Playfair Display", serif;
  --font-body: "Montserrat", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0f172a',
    ink: '#ffffff',
    muted: '#475569',
    line: '#f1f5f9',
    accent: '#d4af37',
    accent2: '#1e293b',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['Montserrat'] },
} }
```

## Do and don't

- **Do:** Use gold (#d4af37) for the donate button, kickers and the italic headline line
- **Do:** Keep the hero on deep navy (#0f172a) with white headlines
- **Do:** Set the emphasised headline line in an italic serif
- **Don't:** Don't use gold for body copy or long text
- **Don't:** Don't place the gold italic line on light backgrounds
- **Don't:** Don't add bright colours beside the gold

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
