# Design system — AI Creative Agency Landing Page Template

`SN-W01406` · agency-studio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A near-black page with a centred sans headline in white at large size, a small muted subline, and one red-orange (#f84019) pill button as the single strong colour on the first screen. Below it, a grid of image tiles sits on dark frames with thin borders. The rhythm is quiet and tight, and the orange is kept for the action.

**Mood:** quiet, tight, dark, action-focused, minimal

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Surface | `#171717` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#d4d4d4` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#f84019` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#f84019` · `#0a0a0a` · `#d4d4d4` · `#a3a3a3` · `#cbd5e1` · `#fafafa` · `#ff6b4a` · `#171717` · `#000000`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist
- **Scale (largest breakpoint):** h1 72px · h2 60px · h3 36px · body 16px
- **Weights in use:** semibold, medium
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-2xl` (16px), `rounded-xl` (12px), `rounded-full` (9999px)
- **Shadows:** `shadow-[0_8px_30px_rgba(248,64,25,0.25)]`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-3`, `gap-4`

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Marquee (`marquee`)
3. Feature grid (`features`)
4. Services (`services`)
5. Process / steps (`how-it-works`)
6. FAQ (`faq`)
7. Hero (`hero`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Unicorn Studio (WebGL scenes), Chart.js
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #0a0a0a;
  --color-surface: #171717;
  --color-text: #ffffff;
  --color-muted: #d4d4d4;
  --color-border: #ffffff;
  --color-accent: #f84019;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 16px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0a0a0a',
    surface: '#171717',
    ink: '#ffffff',
    muted: '#d4d4d4',
    line: '#ffffff',
    accent: '#f84019',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use red-orange (#f84019) for the primary button and nothing else on the first screen.
- **Do:** Set the headline in one sans at large size, white on near-black.
- **Do:** Keep grid tiles dark with thin borders so the images carry the colour.
- **Don't:** Don't use the orange for headings or links; it is for the action.
- **Don't:** Don't add a light section; the page stays near-black.
- **Don't:** Don't leave image tiles without a dark fallback frame.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
