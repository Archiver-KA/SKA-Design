# Design system — AI Creative Services Landing Page Template

`SN-W00077` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A near-black page has a warm brown-to-black radial glow behind the hero and a large white sans headline, with the last two lines in grey. A small orange status dot sits above the headline, and a white pill button is the primary action. Orange appears in the glow and the dot, so the warmth comes from light rather than fills.

**Mood:** warm, dark, soft, modern

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0b0c0e` | Page ground |
| Surface | `#0b0c0e` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#ffffff` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#f97316` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#737373` · `#f97316` · `#a3a3a3` · `#000000` · `#e5e5e5` · `#0b0c0e` · `#d4d4d4` · `#171717` · `#262626`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 96px · h2 36px · h3 14px · body 14px
- **Weights in use:** medium, semibold, normal
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-lg` (8px)
- **Shadows:** `shadow-xl`, `shadow-2xl`, `shadow-inner`
- **Content width:** `max-w-[1200px]`, `max-w-[1000px]`
- **Section padding:** `py-24`, `py-12`
- **Common gaps:** `gap-2`, `gap-8`, `gap-4`

**Primary button**

```html
<a class="px-4 py-1.5 text-xs font-medium bg-white text-black rounded-full hover:bg-neutral-200 transition-colors duration-200">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Video / media (`video-media`)
4. Pricing (`pricing`)
5. Feature grid (`features`)
6. Process / steps (`how-it-works`)
7. FAQ (`faq`)
8. Call to action (`cta`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #0b0c0e;
  --color-surface: #0b0c0e;
  --color-text: #ffffff;
  --color-muted: #ffffff;
  --color-border: #ffffff;
  --color-accent: #f97316;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0b0c0e',
    surface: '#0b0c0e',
    ink: '#ffffff',
    muted: '#ffffff',
    line: '#ffffff',
    accent: '#f97316',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the warm orange glow behind the hero as the only colour
- **Do:** Set the last two headline lines in grey
- **Do:** Use white pills for the primary action
- **Don't:** Don't use orange for large filled buttons
- **Don't:** Don't put the glow behind body copy
- **Don't:** Don't switch to a light page treatment

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
