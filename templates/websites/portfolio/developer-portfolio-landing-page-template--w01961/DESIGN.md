# Design system — Developer Portfolio Landing Page Template

`SN-W01961` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

Dark cinematic hero: a black ground (#000000) with a soft violet glow behind a very large white Inter wordmark and one small white pill button. The glow is the only colour, so the page is effectively monochrome with purple light. Hierarchy comes from scale and centred symmetry rather than from cards or imagery.

**Mood:** cinematic, centred, luminous, monochrome, premium

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#000000` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#ffffff` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#a855f7` | Primary action and highlights |
| Second accent | `#3b82f6` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#a855f7` · `#9ca3af` · `#6b7280` · `#000000` · `#c084fc` · `#d1d5db` · `#3b82f6` · `#0a0a0a` · `#22c55e`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Plus Jakarta Sans
- **Body:** Plus Jakarta Sans
- **Loaded families:** Plus Jakarta Sans
- **Scale (largest breakpoint):** h1 128px · h2 48px · h3 20px · body 14px
- **Weights in use:** bold, medium, semibold
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-3xl` (24px), `rounded-xl` (12px)
- **Shadows:** `shadow-2xl`, `shadow-lg`, `shadow-[0_0_20px_rgba(168,85,247,0.3)]`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-32`, `py-12`
- **Common gaps:** `gap-3`, `gap-2`, `gap-4`

**Primary button**

```html
<a class="magnetic-btn group relative inline-flex h-10 items-center justify-center overflow-hidden rounded-full px-6 font-medium transition-all duration-300 bg-white/5 hover:bg-white/10 border border-white/10 text-white hover:border-purple-500/50 hover:shadow-[0_0_20px_rgba(168,85,247,0.3)]">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), GSAP, Three.js, Lenis smooth scroll
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #000000;
  --color-text: #ffffff;
  --color-muted: #ffffff;
  --color-border: #ffffff;
  --color-accent: #a855f7;
  --color-accent-2: #3b82f6;
  --font-display: "Plus Jakarta Sans", sans-serif;
  --font-body: "Plus Jakarta Sans", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#000000',
    ink: '#ffffff',
    muted: '#ffffff',
    line: '#ffffff',
    accent: '#a855f7',
    accent2: '#3b82f6',
  },
  fontFamily: { display: ['Plus Jakarta Sans'], sans: ['Plus Jakarta Sans'] },
} }
```

## Do and don't

- **Do:** Keep the hero centred with one oversized headline and one pill button
- **Do:** Use violet (#a855f7) as ambient glow, not as text colour
- **Do:** Keep the wordmark white (#ffffff) with a subtle light gradient
- **Don't:** Don't put light backgrounds behind the hero; the page is dark
- **Don't:** Don't add hues to the glow beyond violet and blue
- **Don't:** Don't stack more than one call to action in the hero

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
