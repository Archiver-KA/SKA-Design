# Design system — Spatial Design Portfolio Template

`SN-W02237` · portfolio · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A pale, quiet opener on a cool off-white ground. An oversized white wordmark sits low on the screen, barely distinct from the ground, so it reads as a faint background mark. The logo and nav are tiny near-black caps, and the screen relies on the scale of the wordmark and the empty space above it.

**Mood:** quiet, airy, spacious, editorial

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f5f5f7` | Page ground |
| Surface | `#0a0a0a` | Cards, panels, raised areas |
| Text | `#0a0a0a` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#10b981` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#0a0a0a` · `#6b7280` · `#9ca3af` · `#f5f5f7` · `#f9fafb` · `#d1d5db` · `#4b5563` · `#000000` · `#f3f4f6`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Space Grotesk
- **Body:** Inter
- **Loaded families:** Inter, Space Grotesk
- **Scale (largest breakpoint):** h2 48px · h3 30px · body 12px
- **Weights in use:** medium, normal, light
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-md` (6px), `rounded-xl` (12px)
- **Content width:** `max-w-[1600px]`, `max-w-6xl`
- **Section padding:** `py-32`, `py-48`
- **Common gaps:** `gap-2`, `gap-4`, `gap-6`

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Gallery / portfolio (`gallery-portfolio`)
5. Feature grid (`features`)
6. Awards / press (`awards-press`)
7. Case studies (`case-studies`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN), GSAP, Lenis smooth scroll
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #f5f5f7;
  --color-surface: #0a0a0a;
  --color-text: #0a0a0a;
  --color-muted: #6b7280;
  --color-border: #ffffff;
  --color-accent: #10b981;
  --font-display: "Space Grotesk", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f5f5f7',
    surface: '#0a0a0a',
    ink: '#0a0a0a',
    muted: '#6b7280',
    line: '#ffffff',
    accent: '#10b981',
  },
  fontFamily: { display: ['Space Grotesk'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the ground pale (#f5f5f7) with near-black (#0a0a0a) small caps for the logo and nav
- **Do:** Set the oversized wordmark in a wide grotesque, low on the screen
- **Do:** Let the empty space above the wordmark do the work
- **Don't:** Don't set this as a dark page; the ground is light
- **Don't:** Don't set the nav text larger than the wordmark
- **Don't:** Don't add colour; the screen is grey and white

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
