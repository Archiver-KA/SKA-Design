# Design system — Premium Brand Agency Landing Page Template

`SN-W01670` · agency-studio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A near-black page with a large two-line white headline, the second line in grey, and a bright lime pill as the primary button beside a dark outlined secondary. A faint green glow sits behind the hero and the lime is the only accent. The look is confident and editorial, with the lime button doing all the colour work.

**Mood:** confident, editorial, dark, bold, minimal

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#e5e5e5` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#84cc16` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#737373` · `#a3a3a3` · `#171717` · `#000000` · `#d4d4d4` · `#525252` · `#e5e5e5` · `#a3e635` · `#84cc16`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 20px · body 14px
- **Weights in use:** medium
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-2xl` (16px)
- **Shadows:** `shadow-2xl`, `shadow-[0_0_40px_rgba(255,255,255,0.1)]`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-4`, `gap-2`, `gap-6`

**Primary button**

```html
<a class="bg-lime-400 text-black px-8 py-4 rounded-full text-sm font-medium hover:bg-lime-500 transition-colors flex items-center gap-2">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Marquee (`marquee`)
4. About (`about`)
5. Services (`services`)
6. Bento grid (`bento-grid`)
7. Process / steps (`how-it-works`)
8. Team (`team`)
9. Stats band (`stats`)
10. FAQ (`faq`)
11. Articles (`blog-articles`)
12. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #e5e5e5;
  --color-text: #ffffff;
  --color-muted: #737373;
  --color-border: #ffffff;
  --color-accent: #84cc16;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#e5e5e5',
    ink: '#ffffff',
    muted: '#737373',
    line: '#ffffff',
    accent: '#84cc16',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use the lime (#84cc16) for the primary button and one highlight per section
- **Do:** Set the headline large in white, with the second line in grey
- **Do:** Keep the glow faint and behind the hero only
- **Don't:** Don't read the page as light; the ground is near-black, not lime
- **Don't:** Don't use the lime as body text colour on dark grounds
- **Don't:** Don't add a second saturated accent

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
