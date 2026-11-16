# Design system — GTMVerse Go-To-Market Agency Landing Page Template

`SN-W01593` · agency-studio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A black ground with a warm coral glow rising from the lower right, and a heavy uppercase headline set centred over three lines. The middle word 'OWNED.' carries an orange-to-amber gradient (#ff6b4a to #ffb627), the only coloured type, while the rest stays white. The glow and gradient give the page heat and urgency, and the layout stays strict and centred.

**Mood:** urgent, heated, bold, centred, high-contrast

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#050505` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#ffffff` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#ff6b4a` | Primary action and highlights |
| Second accent | `#ffb627` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#ff6b4a` · `#9ca3af` · `#6b7280` · `#4b5563` · `#3ace67` · `#ffb627` · `#d1d5db` · `#050505` · `#0a0a0a`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** var(--font-body)
- **Body:** var(--font-body)
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 20px · body 14px
- **Weights in use:** semibold, bold, medium
- **Letter spacing:** `tracking-widest`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-2xl` (16px), `rounded-full` (9999px), `rounded-lg` (8px)
- **Shadows:** `shadow-[0_0_30px_-10px_rgba(255,107,74,0.5)]`, `shadow-[0_0_50px_-10px_rgba(255,107,74,0.4)]`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-32`, `py-12`
- **Common gaps:** `gap-3`, `gap-2`, `gap-4`

**Primary button**

```html
<a class="w-full sm:w-auto px-8 py-4 bg-[#FF6B4A] hover:bg-[#ff5530] text-black font-semibold rounded-lg transition-all shadow-[0_0_30px_-10px_rgba(255,107,74,0.5)] flex items-center justify-center gap-2">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Marquee (`marquee`)
4. Feature grid (`features`)
5. Services (`services`)
6. Testimonials (`testimonials`)
7. Pricing (`pricing`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), AOS scroll reveal
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #050505;
  --color-text: #ffffff;
  --color-muted: #ffffff;
  --color-border: #ffffff;
  --color-accent: #ff6b4a;
  --color-accent-2: #ffb627;
  --font-display: "var(--font-body)", sans-serif;
  --font-body: "var(--font-body)", sans-serif;
  --radius: 16px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#050505',
    ink: '#ffffff',
    muted: '#ffffff',
    line: '#ffffff',
    accent: '#ff6b4a',
    accent2: '#ffb627',
  },
  fontFamily: { display: ['var(--font-body)'], sans: ['var(--font-body)'] },
} }
```

## Do and don't

- **Do:** Set the headline in heavy uppercase, centred over three lines, with the key word in orange gradient
- **Do:** Use the coral (#ff6b4a) for the glow and the key word only
- **Do:** Keep the ground black (#000000) and let the glow sit in one corner
- **Don't:** Don't use the coral for body text on black; it is too low in contrast
- **Don't:** Don't add a second glow colour beside the coral
- **Don't:** Don't set the whole headline in gradient; only the key word takes it

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
