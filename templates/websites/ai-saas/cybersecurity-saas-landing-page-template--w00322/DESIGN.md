# Design system — Cybersecurity SaaS Landing Page Template

`SN-W00322` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark, dramatic security page on near-black [#050505], with a large white sans headline in three short lines and a soft violet glow behind the hero. The primary button is a violet gradient [#a855f7], and a blurred dashboard card sits behind the hero copy as a backdrop. Inter sets the type, and the blur and glow give depth, so the page reads as moody and premium.

**Mood:** moody, premium, dramatic, dark

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#050505` | Page ground |
| Surface | `#0a0a0b` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#a855f7` | Primary action and highlights |
| Second accent | `#34d399` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#71717a` · `#3b82f6` · `#52525b` · `#60a5fa` · `#f87171` · `#34d399` · `#a1a1aa` · `#dbeafe` · `#050505`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, JetBrains Mono
- **Scale (largest breakpoint):** h1 76px · h2 48px · h3 14px · body 12px
- **Weights in use:** medium, semibold
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-2xl` (16px)
- **Shadows:** `shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]`, `shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]`
- **Content width:** `max-w-[1180px]`, `max-w-3xl`
- **Section padding:** `py-20`, `py-28`
- **Common gaps:** `gap-3`, `gap-2`, `gap-7`

**Primary button**

```html
<a class="magnetic group inline-flex items-center gap-2 rounded-full border border-white/15 bg-white px-4 py-2 text-xs font-medium text-black transition-all duration-300 hover:bg-blue-500 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Logo cloud (`logo-cloud`)
5. Feature grid (`features`)
6. Process / steps (`how-it-works`)
7. Testimonials (`testimonials`)
8. Case studies (`case-studies`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN), GSAP, Lenis smooth scroll, Unicorn Studio (WebGL scenes)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #050505;
  --color-surface: #0a0a0b;
  --color-text: #ffffff;
  --color-muted: #71717a;
  --color-border: #ffffff;
  --color-accent: #a855f7;
  --color-accent-2: #34d399;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#050505',
    surface: '#0a0a0b',
    ink: '#ffffff',
    muted: '#71717a',
    line: '#ffffff',
    accent: '#a855f7',
    accent2: '#34d399',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use the violet gradient (#a855f7) on the primary button only
- **Do:** Blur the dashboard preview behind the hero copy so the text stays readable
- **Do:** Set the headline in Inter, large and white, in short lines
- **Don't:** Don't put the violet glow behind body copy
- **Don't:** Don't make the blurred dashboard sharp; it is backdrop
- **Don't:** Don't use a light background; the page stays black

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
