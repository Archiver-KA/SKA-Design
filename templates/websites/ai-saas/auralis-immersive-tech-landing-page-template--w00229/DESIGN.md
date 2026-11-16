# Design system — Auralis Immersive Tech Landing Page Template

`SN-W00229` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark navy hero on #020617 with a large white uppercase headline set in three stacked words, the last word in a dark outline ghost style. Orange (#f97316) is the only accent, used on the active nav item and the access button dot, and small monospace labels in the corners give a technical, immersive tone. The page is sparse, so the headline does almost all of the work.

**Mood:** immersive, technical, bold, sparse

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#020617` | Page ground |
| Surface | `#080808` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Border | `#262626` | Hairlines, dividers, outlines |
| Accent | `#f97316` | Primary action and highlights |
| Second accent | `#429dfe` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#262626` · `#020617` · `#080808` · `#f97316` · `#429dfe` · `#ff91e3` · `#1a1a1a` · `#10b981` · `#f59e0b`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Geist
- **Body:** Geist
- **Loaded families:** Geist
- **Scale (largest breakpoint):** h2 48px · h3 36px · body 14px
- **Weights in use:** medium, light, extralight
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-3xl` (24px), `rounded-2xl` (16px)
- **Shadows:** `shadow-2xl`
- **Content width:** `max-w-7xl`, `max-w-[90%]`
- **Section padding:** `py-32`
- **Common gaps:** `gap-2`, `gap-6`, `gap-4`

**Primary button**

```html
<a class="bg-white text-[#020617] px-5 py-2 rounded-full text-sm font-normal flex items-center gap-2 hover:bg-[#D4D4D4] transition-all duration-300 group scroll-link interactive overflow-hidden relative">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Feature grid (`features`)
5. Marquee (`marquee`)
6. Testimonials (`testimonials`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), GSAP, Three.js, Lenis smooth scroll
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #020617;
  --color-surface: #080808;
  --color-text: #ffffff;
  --color-border: #262626;
  --color-accent: #f97316;
  --color-accent-2: #429dfe;
  --font-display: "Geist", sans-serif;
  --font-body: "Geist", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#020617',
    surface: '#080808',
    ink: '#ffffff',
    line: '#262626',
    accent: '#f97316',
    accent2: '#429dfe',
  },
  fontFamily: { display: ['Geist'], sans: ['Geist'] },
} }
```

## Do and don't

- **Do:** Set the headline in large uppercase sans in white with the last word outlined
- **Do:** Use orange (#f97316) for the active nav item and one accent per view
- **Do:** Place small monospace labels in the corners, not over the headline
- **Don't:** Don't use blue or purple beside the orange in the hero
- **Don't:** Don't fill the ghost word; keep it as an outline
- **Don't:** Don't set the nav in uppercase bold; it is small and light

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
