# Design system — Enterprise AI Infrastructure Landing Page Template

`SN-W00361` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A hard-edged AI infrastructure page on black with a heavy white headline in two lines, SYNTHETIC over COGNITION, where the second word fades from white to grey. Orange-red (#ff3b00) is the only accent, used for the primary button and a small version pill. The minimal navigation makes the page read as a technical product console.

**Mood:** hard-edged, technical, bold, stark

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#050505` | Page ground |
| Surface | `#050505` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#ffffff` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#ff3b00` | Primary action and highlights |
| Second accent | `#22c55e` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#ff3b00` · `#6b7280` · `#050505` · `#000000` · `#4b5563` · `#9ca3af` · `#22c55e` · `#d1d5db` · `#4ade80`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Space Grotesk
- **Body:** Inter
- **Loaded families:** Inter, Space Grotesk, JetBrains Mono, Geist, Roboto, Montserrat
- **Scale (largest breakpoint):** h1 128px · h2 48px · h3 36px · body 20px
- **Weights in use:** bold, light, normal
- **Letter spacing:** `tracking-widest`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded` (4px), `rounded-xl` (12px)
- **Shadows:** `shadow-[0_0_10px_white]`, `shadow-2xl`, `shadow-[0_0_50px_rgba(255,59,0,0.3)]`
- **Content width:** `max-w-7xl`, `max-w-[1400px]`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-3`, `gap-4`, `gap-12`

**Primary button**

```html
<a class="w-full py-3 border border-white/20 rounded font-bold uppercase text-xs tracking-wider text-white hover:bg-white hover:text-black transition-all z-10 relative">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Menu list (`menu-list`)
4. Hero (`hero`)
5. Marquee (`marquee`)
6. Stats band (`stats`)
7. Code / terminal (`code-terminal`)
8. Feature grid (`features`)
9. Pricing (`pricing`)
10. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN), GSAP, Lenis smooth scroll, Unicorn Studio (WebGL scenes)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #050505;
  --color-surface: #050505;
  --color-text: #ffffff;
  --color-muted: #ffffff;
  --color-border: #ffffff;
  --color-accent: #ff3b00;
  --color-accent-2: #22c55e;
  --font-display: "Space Grotesk", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#050505',
    surface: '#050505',
    ink: '#ffffff',
    muted: '#ffffff',
    line: '#ffffff',
    accent: '#ff3b00',
    accent2: '#22c55e',
  },
  fontFamily: { display: ['Space Grotesk'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the two-line headline in heavy sans, with the second word in a white-to-grey gradient
- **Do:** Use orange-red (#ff3b00) for the primary button and the version pill only
- **Do:** Keep navigation as small uppercase links with a status label at the right
- **Don't:** Don't use the orange as a background; it is an accent only
- **Don't:** Don't set the headline in a light weight
- **Don't:** Don't add rounded corners to the buttons; they are square-cut

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
