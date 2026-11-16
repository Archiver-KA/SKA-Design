# Design system — AI Creator Courses Landing Page Template

`SN-W00079` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark navy page with a very large white sans headline in a metallic gradient, light at the top and grey at the bottom, and a small uppercase tagline above it in grey. Buttons are a green-filled primary and a dark outlined secondary. A soft violet glow surrounds the logo and the rest of the hero is restrained.

**Mood:** bold, dark, polished, creator-focused

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#050a14` | Page ground |
| Surface | `#050a14` | Cards, panels, raised areas |
| Text | `#f5f5f5` | Headings and primary copy |
| Muted text | `#ffffff` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#22c55e` | Primary action and highlights |
| Second accent | `#22c55e` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#6366f1` · `#9ca3af` · `#d1d5db` · `#000000` · `#050a14` · `#22c55e` · `#f87171` · `#ef4444` · `#6b7280`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Open Sans
- **Body:** Open Sans
- **Loaded families:** Montserrat, Open Sans, Prompt
- **Scale (largest breakpoint):** h1 128px · h2 48px · h3 30px · body 14px
- **Weights in use:** bold, medium, semibold
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-xl` (12px)
- **Shadows:** `shadow-[0_0_10px_#6366f1]`, `shadow-lg`, `shadow-[0_4px_10px_rgba(99,102,241,0.3)]`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-32`
- **Common gaps:** `gap-2`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="cursor-hover px-8 py-4 bg-[#6366f1] hover:bg-[#4f46e5] text-white rounded-full text-xs font-bold uppercase tracking-widest shadow-[0_0_30px_rgba(99,102,241,0.3)] transition-all duration-300 hover:scale-105">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Marquee (`marquee`)
5. Feature grid (`features`)
6. Services (`services`)
7. About (`about`)
8. Call to action (`cta`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #050a14;
  --color-surface: #050a14;
  --color-text: #f5f5f5;
  --color-muted: #ffffff;
  --color-border: #ffffff;
  --color-accent: #22c55e;
  --color-accent-2: #22c55e;
  --font-display: "Open Sans", sans-serif;
  --font-body: "Open Sans", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#050a14',
    surface: '#050a14',
    ink: '#f5f5f5',
    muted: '#ffffff',
    line: '#ffffff',
    accent: '#22c55e',
    accent2: '#22c55e',
  },
  fontFamily: { display: ['Open Sans'], sans: ['Open Sans'] },
} }
```

## Do and don't

- **Do:** Keep the headline in a metallic white-to-grey gradient
- **Do:** Use green (#22c55e) for the primary button only
- **Do:** Keep the page ground deep navy (#050a14)
- **Don't:** Don't use the violet (#6366f1) for large fills
- **Don't:** Don't set the headline in a coloured gradient
- **Don't:** Don't add a light section to the hero

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
