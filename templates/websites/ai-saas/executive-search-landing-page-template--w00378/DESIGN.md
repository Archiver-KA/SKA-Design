# Design system — Executive Search Landing Page Template

`SN-W00378` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark navy page where a large uppercase bold sans headline is filled with a white-to-silver gradient and centred over a blurred blue background. Glassmorphism appears in the floating nav pill and the secondary button, while the primary action is a solid blue (#007bff) button with uppercase, tracked label text. The page is cinematic, and the uppercase headline is the single typographic statement.

**Mood:** cinematic, bold, dark, glassy, authoritative

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#050a14` | Page ground |
| Surface | `#050a14` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#ffffff` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#007bff` | Primary action and highlights |
| Second accent | `#f97316` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#007bff` · `#9ca3af` · `#d1d5db` · `#6b7280` · `#000000` · `#050a14` · `#f97316` · `#10b981` · `#9333ea`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Open Sans
- **Body:** Open Sans
- **Loaded families:** Montserrat, Open Sans
- **Scale (largest breakpoint):** h1 152px · h2 48px · h3 20px · body 12px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-2xl` (16px), `rounded-full` (9999px), `rounded` (4px)
- **Shadows:** `shadow-inner`, `shadow-lg`, `shadow-[0_0_10px_#007bff]`
- **Content width:** `max-w-7xl`, `max-w-[100vw]`
- **Section padding:** `py-32`, `py-24`
- **Common gaps:** `gap-3`, `gap-4`, `gap-6`

**Primary button**

```html
<a class="cursor-hover w-full sm:w-auto px-8 py-4 bg-[#007bff] text-white text-xs font-bold uppercase tracking-widest rounded-full hover:bg-white hover:text-black transition-all duration-300 shadow-[0_0_20px_rgba(0,123,255,0.4)] text-center">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. About (`about`)
5. Logo cloud (`logo-cloud`)
6. Feature grid (`features`)
7. Team (`team`)
8. Stats band (`stats`)
9. Marquee (`marquee`)
10. Integrations (`integrations`)
11. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #050a14;
  --color-surface: #050a14;
  --color-text: #ffffff;
  --color-muted: #ffffff;
  --color-border: #ffffff;
  --color-accent: #007bff;
  --color-accent-2: #f97316;
  --font-display: "Open Sans", sans-serif;
  --font-body: "Open Sans", sans-serif;
  --radius: 16px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#050a14',
    surface: '#050a14',
    ink: '#ffffff',
    muted: '#ffffff',
    line: '#ffffff',
    accent: '#007bff',
    accent2: '#f97316',
  },
  fontFamily: { display: ['Open Sans'], sans: ['Open Sans'] },
} }
```

## Do and don't

- **Do:** Set the hero headline in uppercase bold Open Sans, with a white-to-silver gradient fill.
- **Do:** Use the blue (#007bff) only for the primary button, with white uppercase label text.
- **Do:** Place the nav in a translucent rounded pill with a thin border across the top.
- **Don't:** Don't use orange in the hero; the accent is blue.
- **Don't:** Don't set the headline in title case; it stays uppercase.
- **Don't:** Don't use a light background; the hero sits on dark navy.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
