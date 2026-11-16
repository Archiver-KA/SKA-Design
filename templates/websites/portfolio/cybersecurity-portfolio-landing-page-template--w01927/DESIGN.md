# Design system — Cybersecurity Portfolio Landing Page Template

`SN-W01927` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

The same black hero as its sibling template, with a terminal window on the right and a sans headline whose second line is cyan (#22d3ee). Status text in the terminal is green, and the body paragraph is grey. Three uppercase stat labels sit under the hero copy, so the page reads as a security practitioner's profile.

**Mood:** technical, terminal, dark, precise, security

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#3f3f46` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#27272a` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#22d3ee` | Primary action and highlights |
| Second accent | `#22c55e` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#a1a1aa` · `#06b6d4` · `#f4f4f5` · `#71717a` · `#27272a` · `#22d3ee` · `#22c55e` · `#3b82f6` · `#e4e4e7`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, JetBrains Mono
- **Scale (largest breakpoint):** h1 60px · h2 30px · h3 18px · body 14px
- **Weights in use:** medium, light, normal
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded` (4px), `rounded-full` (9999px), `rounded-xl` (12px)
- **Shadows:** `shadow-[0_0_10px_rgba(6,182,212,0.5)]`, `shadow-2xl`, `shadow-cyan-900/10`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-24`, `py-12`
- **Common gaps:** `gap-2`, `gap-8`, `gap-4`

**Primary button**

```html
<a class="group relative px-6 py-3 bg-zinc-100 text-zinc-950 font-medium rounded text-sm hover:bg-white transition-all overflow-hidden">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Stats band (`stats`)
4. About (`about`)
5. Feature grid (`features`)
6. Timeline (`timeline`)
7. Case studies (`case-studies`)
8. Testimonials (`testimonials`)
9. Contact form (`contact-form`)
10. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #3f3f46;
  --color-text: #ffffff;
  --color-muted: #27272a;
  --color-border: #ffffff;
  --color-accent: #22d3ee;
  --color-accent-2: #22c55e;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 4px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#3f3f46',
    ink: '#ffffff',
    muted: '#27272a',
    line: '#ffffff',
    accent: '#22d3ee',
    accent2: '#22c55e',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the terminal window as the one graphic on the hero, with a dark body and green status lines
- **Do:** Set the second headline line in cyan (#22d3ee) and the rest in white
- **Do:** Use small uppercase labels under the figures in the stat row
- **Don't:** Don't use a light background; this template is dark
- **Don't:** Don't add a second terminal or code block to the hero
- **Don't:** Don't colour status lines in anything but green and white

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
