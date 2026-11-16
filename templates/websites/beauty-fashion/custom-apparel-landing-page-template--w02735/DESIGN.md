# Design system — Custom Apparel Landing Page Template

`SN-W02735` · beauty-fashion · light mode · Sinera Atlas theme `dwell` · language `en`

## Direction

Light, warm-grey page with a large serif headline in deep green-black, centred over a short subline. The primary action is a dark green pill in the header, and the lower area leads into a row of photo cards with thin borders. The stance is calm and understated, and the dark green does both the action work and the text work.

**Mood:** calm, understated, light, serif-led

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f3f1eb` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#1a2e22` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#1a2e22` | Hairlines, dividers, outlines |
| Accent | `#1a2e22` | Primary action and highlights |

Palette by frequency of use: `#1a2e22` · `#ffffff` · `#f3f1eb` · `#000000` · `#6b7280` · `#16a34a` · `#15803d` · `#f3f4f6` · `#86efac` · `#bbf7d0`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Newsreader
- **Body:** Inter
- **Loaded families:** Inter, Newsreader
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 30px · body 12px
- **Weights in use:** medium, bold, light
- **Letter spacing:** `tracking-wide`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-lg` (8px)
- **Shadows:** `shadow-xl`, `shadow-2xl`, `shadow-[#1A2E22]/10`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-24`, `py-20`
- **Common gaps:** `gap-2`, `gap-4`, `gap-3`

**Primary button**

```html
<a class="bg-[#1A2E22] text-[#F3F1EB] px-5 py-2 rounded-full text-xs font-medium tracking-wide hover:bg-opacity-90 transition-all flex items-center gap-2 group">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Logo cloud (`logo-cloud`)
3. Hero (`hero`)
4. Benefits (`benefits`)
5. Process / steps (`how-it-works`)
6. FAQ (`faq`)
7. Case studies (`case-studies`)
8. Testimonials (`testimonials`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN), GSAP
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #f3f1eb;
  --color-surface: #ffffff;
  --color-text: #1a2e22;
  --color-muted: #6b7280;
  --color-border: #1a2e22;
  --color-accent: #1a2e22;
  --font-display: "Newsreader", serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f3f1eb',
    surface: '#ffffff',
    ink: '#1a2e22',
    muted: '#6b7280',
    line: '#1a2e22',
    accent: '#1a2e22',
  },
  fontFamily: { display: ['Newsreader'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the hero headline in Newsreader at large size, in deep green-black (#1a2e22)
- **Do:** Use the dark green (#1a2e22) for the header quote button
- **Do:** Show product photography as a row of three cards with thin borders
- **Don't:** Don't use a dark page ground; the page is light
- **Don't:** Don't add bright green fills; the green in the design is deep and muted
- **Don't:** Don't crowd the hero; the headline needs the open space around it

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
