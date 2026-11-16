# Design system — Product Manager Portfolio Landing Page Template

`SN-W02195` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

The look is dark and technical: a near-black ground (#050505), a blue (#3b82f6) and violet (#8b5cf6) accent pair, and a terminal-style interactive section. Terminal-style blocks carry the interactive emphasis, and the accent pair stays on the dark ground.

**Mood:** dark, technical, modest, minimal

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#050505` | Page ground |
| Surface | `#121212` | Cards, panels, raised areas |
| Text | `#a1a1aa` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#3b82f6` | Primary action and highlights |
| Second accent | `#8b5cf6` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#3b82f6` · `#a1a1aa` · `#f8f8f8` · `#8b5cf6` · `#121212` · `#f3f4f6` · `#6b7280` · `#111827` · `#9ca3af`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, JetBrains Mono
- **Scale (largest breakpoint):** h2 48px · h3 20px · body 14px
- **Weights in use:** medium, light, bold
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-xl` (12px)
- **Shadows:** `shadow-sm`, `shadow-lg`, `shadow-2xl`
- **Content width:** `max-w-[1200px]`, `max-w-3xl`
- **Section padding:** `py-20`, `py-32`
- **Common gaps:** `gap-3`, `gap-2`, `gap-4`

**Primary button**

```html
<a class="bg-white text-black px-5 py-2 rounded-full font-mono text-xs font-medium uppercase tracking-widest hover:bg-accent hover:text-white transition-colors duration-200 magnetic-btn shadow-[0_0_20px_rgba(59,130,246,0.2)]">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Marquee (`marquee`)
4. About (`about`)
5. Feature grid (`features`)
6. Case studies (`case-studies`)
7. FAQ (`faq`)
8. Contact form (`contact-form`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), GSAP, Lenis smooth scroll
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #050505;
  --color-surface: #121212;
  --color-text: #a1a1aa;
  --color-muted: #6b7280;
  --color-border: #ffffff;
  --color-accent: #3b82f6;
  --color-accent-2: #8b5cf6;
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
    surface: '#121212',
    ink: '#a1a1aa',
    muted: '#6b7280',
    line: '#ffffff',
    accent: '#3b82f6',
    accent2: '#8b5cf6',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the ground near-black (#050505) with white or grey text
- **Do:** Use blue (#3b82f6) and violet (#8b5cf6) only as paired accents
- **Do:** Keep terminal-style blocks as the interactive highlight
- **Don't:** Don't set body copy in the accent colours.
- **Don't:** Don't use light surfaces in dark sections
- **Don't:** Don't add more than two accent colours

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
