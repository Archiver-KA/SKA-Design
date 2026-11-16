# Design system — AI Voice Agent Landing Page Template

`SN-W00184` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `es`

## Direction

Dark Spanish landing page on near-black (#020202) with a white headline whose second line is set in a light-blue gradient. A solid blue primary button (#3b82f6) sits beside a dark outlined secondary, and a small cyan (#06b6d4) glow marks the logo. The composition is centred and quiet, with blue kept for the call to action and the highlight phrase.

**Mood:** dark, centred, clear, confident

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#020202` | Page ground |
| Surface | `#18181b` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#a1a1aa` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#06b6d4` | Primary action and highlights |
| Second accent | `#1e3a8a` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#a1a1aa` · `#3b82f6` · `#000000` · `#06b6d4` · `#60a5fa` · `#020202` · `#1e3a8a` · `#2563eb` · `#71717a`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 24px · body 14px
- **Weights in use:** semibold, medium, bold
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-xl` (12px)
- **Shadows:** `shadow-[0_0_30px_rgba(37,99,235,0.6)]`, `shadow-[0_0_50px_-15px_rgba(6,182,212,0.15)]`, `shadow-[0_0_15px_rgba(6,182,212,0.1)]`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-32`, `py-20`
- **Common gaps:** `gap-2`, `gap-4`, `gap-16`

**Primary button**

```html
<a class="group relative px-5 py-2 rounded-full bg-white text-black text-xs font-semibold tracking-wide overflow-hidden hover:scale-105 transition-transform duration-300">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Modal / overlay (`modal-overlay`)
3. Hero (`hero`)
4. Marquee (`marquee`)
5. Schedule (`schedule-agenda`)
6. Feature grid (`features`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Unicorn Studio (WebGL scenes)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #020202;
  --color-surface: #18181b;
  --color-text: #ffffff;
  --color-muted: #a1a1aa;
  --color-border: #ffffff;
  --color-accent: #06b6d4;
  --color-accent-2: #1e3a8a;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#020202',
    surface: '#18181b',
    ink: '#ffffff',
    muted: '#a1a1aa',
    line: '#ffffff',
    accent: '#06b6d4',
    accent2: '#1e3a8a',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in white, with the second line in the blue-to-cyan gradient
- **Do:** Use the solid blue (#3b82f6) button with white text as the primary call to action
- **Do:** Keep the hero on near-black (#020202) and centre all the copy
- **Don't:** Don't use blue for body text; it marks the headline phrase and buttons only
- **Don't:** Don't switch the hero to a light background; the page is dark
- **Don't:** Don't add a third accent colour to the hero; blue and cyan are the pair

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
