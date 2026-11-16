# Design system — AI CMS SaaS Landing Page Template

`SN-W00069` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A near-black page with a very large, heavy uppercase sans headline where the second word fades from white to grey. Monospace nav labels, a green status dot and a solid blue primary button sit around it, with a dark secondary button beside. The look is hard-edged and technical, with blue reserved for the call to action.

**Mood:** hard-edged, technical, bold, dark

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#050505` | Page ground |
| Surface | `#050505` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#ffffff` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#0088ff` | Primary action and highlights |
| Second accent | `#22c55e` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#0088ff` · `#6b7280` · `#050505` · `#000000` · `#4b5563` · `#9ca3af` · `#22c55e` · `#d1d5db` · `#4ade80`.

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
- **Shadows:** `shadow-[0_0_10px_white]`, `shadow-2xl`, `shadow-[0_0_50px_rgba(0,136,255,0.3)]`
- **Content width:** `max-w-7xl`, `max-w-[1400px]`
- **Section padding:** `py-32`, `py-24`
- **Common gaps:** `gap-3`, `gap-4`, `gap-2`

**Primary button**

```html
<a class="w-full py-3 border border-white/20 rounded font-bold uppercase text-xs tracking-wider text-white hover:bg-white hover:text-black transition-all z-10 relative">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Marquee (`marquee`)
5. Stats band (`stats`)
6. Code / terminal (`code-terminal`)
7. Feature grid (`features`)
8. Pricing (`pricing`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN), GSAP, Lenis smooth scroll, Unicorn Studio (WebGL scenes)
- **Icons:** inline SVG

## Tokens

```css
:root {
  --color-background: #050505;
  --color-surface: #050505;
  --color-text: #ffffff;
  --color-muted: #ffffff;
  --color-border: #ffffff;
  --color-accent: #0088ff;
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
    accent: '#0088ff',
    accent2: '#22c55e',
  },
  fontFamily: { display: ['Space Grotesk'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use blue (#0088ff) for the primary call to action only
- **Do:** Set headlines in heavy uppercase with a grey fade on one word
- **Do:** Keep monospace for nav labels and status text
- **Don't:** Don't use the green (#22c55e) for buttons
- **Don't:** Don't set the headline in mixed case
- **Don't:** Don't add rounded corners to the primary button

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
