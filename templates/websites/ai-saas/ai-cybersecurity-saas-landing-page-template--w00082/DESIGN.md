# Design system — AI Cybersecurity SaaS Landing Page Template

`SN-W00082` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A black page with a faint red-tinted star field and a large white sans headline set in tight leading, where Cyber-Reality carries a red-to-pink gradient. A small pill status label sits above, and a dark nav bar with a red-bordered button sits at the top. The red gradient is the only colour and is used on one phrase.

**Mood:** cosmic, dark, dramatic, bold

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#000000` | Cards, panels, raised areas |
| Text | `#f5f5f5` | Headings and primary copy |
| Muted text | `#ffffff` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#dc2626` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#ef233c` · `#000000` · `#a1a1aa` · `#71717a` · `#27272a` · `#52525b` · `#d4d4d8` · `#18181b` · `#dc2626`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Manrope
- **Body:** Inter
- **Loaded families:** Inter, Manrope, Geist, Roboto, Montserrat, Poppins
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 20px · body 14px
- **Weights in use:** bold, medium, semibold
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-xl` (12px)
- **Shadows:** `shadow-[0_0_10px_#ef233c]`, `shadow-2xl`, `shadow-black/50`
- **Content width:** `max-w-7xl`, `max-w-6xl`
- **Section padding:** `py-16`, `py-24`
- **Common gaps:** `gap-3`, `gap-2`, `gap-8`

**Primary button**

```html
<a class="w-full sm:w-auto group relative px-8 py-4 bg-accent hover:bg-red-600 text-white rounded-full font-bold tracking-wide transition-all shadow-[0_0_40px_-10px_rgba(239,35,60,0.5)] hover:shadow-[0_0_60px_-15px_rgba(239,35,60,0.7)] flex items-center justify-center gap-3 touch-manipulation">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Logo cloud (`logo-cloud`)
4. Bento grid (`bento-grid`)
5. Pricing (`pricing`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #000000;
  --color-text: #f5f5f5;
  --color-muted: #ffffff;
  --color-border: #ffffff;
  --color-accent: #dc2626;
  --font-display: "Manrope", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#000000',
    ink: '#f5f5f5',
    muted: '#ffffff',
    line: '#ffffff',
    accent: '#dc2626',
  },
  fontFamily: { display: ['Manrope'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the gradient phrase in the red accent (#dc2626)
- **Do:** Keep the page ground black with white headlines
- **Do:** Use the faint star field as the only background texture
- **Don't:** Don't use red as a full-section background
- **Don't:** Don't set body copy in red
- **Don't:** Don't add more than one gradient phrase per hero

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
