# Design system — System Architect Developer Portfolio Template

`SN-W02247` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A near-black systems-engineering page with a faint violet glow behind the content and a single thin violet rule as the centrepiece of the hero. The navigation is small uppercase, widely tracked text with a green status dot, which makes the page read as an operator console. Glows and gradient fills carry the mood, and the hero is mostly empty space with a very large headline, so the copy has to do the work.

**Mood:** technical, dark, precise, futuristic, austere

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#030303` | Page ground |
| Surface | `#171717` | Cards, panels, raised areas |
| Text | `#f5f5f5` | Headings and primary copy |
| Muted text | `#ffffff` | Secondary copy, captions |
| Border | `#262626` | Hairlines, dividers, outlines |
| Accent | `#10b981` | Primary action and highlights |
| Second accent | `#10b981` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#262626` · `#171717` · `#a3a3a3` · `#525252` · `#737373` · `#000000` · `#030303` · `#6366f1` · `#10b981`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Space Grotesk, JetBrains Mono
- **Scale (largest breakpoint):** h1 160px · h2 48px · h3 24px · body 14px
- **Weights in use:** medium, semibold, light
- **Letter spacing:** `tracking-tighter`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded` (4px), `rounded-2xl` (16px)
- **Shadows:** `shadow-2xl`, `shadow-black`, `shadow-[0_0_30px_rgba(0,0,0,0.5)]`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-32`, `py-16`
- **Common gaps:** `gap-2`, `gap-8`, `gap-6`

**Primary button**

```html
<a class="px-10 py-5 bg-black text-white rounded-full text-sm font-mono uppercase tracking-widest hover:scale-105 transition-transform hover-trigger inline-block hover:shadow-2xl hover:shadow-black/20">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Marquee (`marquee`)
4. Stats band (`stats`)
5. About (`about`)
6. Bento grid (`bento-grid`)
7. Code / terminal (`code-terminal`)
8. Process / steps (`how-it-works`)
9. Feature grid (`features`)
10. Testimonials (`testimonials`)
11. Call to action (`cta`)
12. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), GSAP, Three.js, Lenis smooth scroll
- **Icons:** inline SVG

## Tokens

```css
:root {
  --color-background: #030303;
  --color-surface: #171717;
  --color-text: #f5f5f5;
  --color-muted: #ffffff;
  --color-border: #262626;
  --color-accent: #10b981;
  --color-accent-2: #10b981;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#030303',
    surface: '#171717',
    ink: '#f5f5f5',
    muted: '#ffffff',
    line: '#262626',
    accent: '#10b981',
    accent2: '#10b981',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the nav and labels in small uppercase with wide tracking.
- **Do:** Use the green (#10b981) only for status indicators and the single accent.
- **Do:** Keep the background near-black (#030303) and let glows sit behind content.
- **Don't:** Don't use the indigo (#6366f1) as a page ground; it appears only as a glow.
- **Don't:** Don't add bright fills to panels; surfaces stay dark grey (#171717).
- **Don't:** Don't crowd the hero; the design relies on large empty space.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
