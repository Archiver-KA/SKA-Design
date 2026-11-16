# Design system — Streetwear Brand Launch Landing Page Template

`SN-W02820` · beauty-fashion · dark mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A stark, high-energy launch page on pure black (#000000), with white bold uppercase navigation and a single lime (#c0ff00) pill as the call to action. The composition rests on lime against black, with the button in the lower right. The type is a heavy grotesk, and the result reads as confident streetwear branding rather than a polished agency site.

**Mood:** high-energy, stark, bold, streetwear

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#27272a` | Hairlines, dividers, outlines |
| Accent | `#c0ff00` | Primary action and highlights |
| Second accent | `#ef4444` | Supporting highlights |

Palette by frequency of use: `#c0ff00` · `#27272a` · `#18181b` · `#a1a1aa` · `#000000` · `#ffffff` · `#71717a` · `#d4d4d8` · `#3f3f46` · `#52525b`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Space Grotesk
- **Body:** Inter
- **Loaded families:** Inter, Space Grotesk, JetBrains Mono
- **Scale (largest breakpoint):** h1 96px · h2 30px · h3 18px · body 14px
- **Weights in use:** semibold, bold, medium
- **Letter spacing:** `tracking-tighter`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-none` (0)
- **Shadows:** `shadow-lg`, `shadow-[0_0_30px_rgba(192,255,0,0.3)]`, `shadow-[0_0_50px_rgba(192,255,0,0.5)]`
- **Content width:** `max-w-2xl`, `max-w-7xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-3`, `gap-12`, `gap-4`

**Primary button**

```html
<a class="bg-neon text-black font-semibold text-sm px-6 py-3 rounded-full hover:scale-105 active:scale-95 transition-transform shadow-lg flex items-center gap-2">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Logo cloud (`logo-cloud`)
4. Feature grid (`features`)
5. Stats band (`stats`)
6. Process / steps (`how-it-works`)
7. Pricing (`pricing`)
8. FAQ (`faq`)
9. Booking form (`booking`)
10. Footer (`footer`)
11. Modal / overlay (`modal-overlay`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #ffffff;
  --color-text: #ffffff;
  --color-muted: #71717a;
  --color-border: #27272a;
  --color-accent: #c0ff00;
  --color-accent-2: #ef4444;
  --font-display: "Space Grotesk", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#ffffff',
    ink: '#ffffff',
    muted: '#71717a',
    line: '#27272a',
    accent: '#c0ff00',
    accent2: '#ef4444',
  },
  fontFamily: { display: ['Space Grotesk'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the page on pure black (#000000) with white text and bold uppercase navigation
- **Do:** Use the lime (#c0ff00) for the main call to action only
- **Do:** Place the primary pill at a section end or corner for contrast
- **Don't:** Don't use the lime as a page background; it is an action colour
- **Don't:** Don't pair the lime with red (#ef4444)
- **Don't:** Don't soften the display type with rounded or script faces

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
