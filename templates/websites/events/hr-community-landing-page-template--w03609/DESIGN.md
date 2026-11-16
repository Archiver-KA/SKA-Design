# Design system — HR Community Landing Page Template

`SN-W03609` · events · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

The HR community page is a dark, premium hero on near-black (#0e0f11). A heavy white sans headline runs across three centred lines above a solid green (#12c27f) pill button, and a row of association and media partner names sits along the bottom. Green is the only colour and marks the main action. The layout is centred, heavy and restrained.

**Mood:** premium, dark, sharp, confident, restrained

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0e0f11` | Page ground |
| Surface | `#0e0f11` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#ffffff` | Secondary copy, captions |
| Border | `#1f2328` | Hairlines, dividers, outlines |
| Accent | `#12c27f` | Primary action and highlights |
| Second accent | `#c5a880` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#0fa36b` · `#1f2328` · `#0e0f11` · `#9ca3af` · `#6b7280` · `#171a1f` · `#12c27f` · `#4b5563` · `#c5a880`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Outfit, Playfair Display
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 20px · body 16px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-lg` (8px)
- **Shadows:** `shadow-[0_4px_30px_rgba(15,163,107,0.08)]`, `shadow-lg`, `shadow-[0_0_15px_rgba(15,163,107,0.2)]`
- **Content width:** `max-w-7xl`, `max-w-6xl`
- **Section padding:** `py-32`, `py-16`
- **Common gaps:** `gap-2`, `gap-4`, `gap-3`

**Primary button**

```html
<a class="bg-[#0FA36B] hover:bg-[#12C27F] text-white font-medium px-8 py-3.5 rounded-full transition-all duration-300 shadow-[0_0_15px_rgba(15,163,107,0.2)] hover:shadow-[0_0_25px_rgba(18,194,127,0.4)] text-sm flex items-center gap-2">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Marquee (`marquee`)
4. Stats band (`stats`)
5. Team (`team`)
6. Call to action (`cta`)
7. Testimonials (`testimonials`)
8. Feature grid (`features`)
9. Articles (`blog-articles`)
10. Pricing (`pricing`)
11. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #0e0f11;
  --color-surface: #0e0f11;
  --color-text: #ffffff;
  --color-muted: #ffffff;
  --color-border: #1f2328;
  --color-accent: #12c27f;
  --color-accent-2: #c5a880;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0e0f11',
    surface: '#0e0f11',
    ink: '#ffffff',
    muted: '#ffffff',
    line: '#1f2328',
    accent: '#12c27f',
    accent2: '#c5a880',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in heavy white sans, centred over three lines
- **Do:** Use green (#12c27f) for the primary button only
- **Do:** Keep the page on near-black (#0e0f11) with muted grey small text
- **Don't:** Don't set green text on dark backgrounds for body copy
- **Don't:** Don't mix in a second bright hue
- **Don't:** Don't use more than one solid button in the hero

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
