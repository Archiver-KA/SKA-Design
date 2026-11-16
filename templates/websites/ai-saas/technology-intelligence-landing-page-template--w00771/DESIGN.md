# Design system — Technology Intelligence Landing Page Template

`SN-W00771` · ai-saas · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A warm off-white page (#f8f8f7) with a huge black Inter headline stacked over three lines, where the middle line is set as outlined hairline type. Small monospace status labels sit above, and a single red-orange (#ff3300) vertical rule marks the intro paragraph. The page is blunt and diagrammatic, with square corners and one warm signal colour.

**Mood:** blunt, diagrammatic, precise, editorial

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f8f8f7` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#0a0a0a` | Headings and primary copy |
| Muted text | `#5a5a5c` | Secondary copy, captions |
| Border | `#0a0a0a` | Hairlines, dividers, outlines |
| Accent | `#ff3300` | Primary action and highlights |

Palette by frequency of use: `#0a0a0a` · `#ff3300` · `#5a5a5c` · `#ffffff` · `#333333` · `#f8f8f7` · `#111111` · `#1a1a1a`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, JetBrains Mono, Space Grotesk
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 24px · body 14px
- **Weights in use:** medium, normal
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-none` (0)
- **Shadows:** `shadow-[4px_4px_0px_#0A0A0A]`, `shadow-sm`, `shadow-[0_0_50px_rgba(0,0,0,0.8)]`
- **Content width:** `max-w-[90rem]`, `max-w-2xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-2`, `gap-3`, `gap-6`

**Primary button**

```html
<a class="btn-angular relative group overflow-hidden bg-[#FF3300] text-white px-8 py-5 flex items-center gap-4">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Marquee (`marquee`)
5. Map / location (`map-location`)
6. Testimonials (`testimonials`)
7. Feature grid (`features`)
8. Articles (`blog-articles`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #f8f8f7;
  --color-surface: #ffffff;
  --color-text: #0a0a0a;
  --color-muted: #5a5a5c;
  --color-border: #0a0a0a;
  --color-accent: #ff3300;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f8f8f7',
    surface: '#ffffff',
    ink: '#0a0a0a',
    muted: '#5a5a5c',
    line: '#0a0a0a',
    accent: '#ff3300',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in Inter at very large size, with the middle line outlined
- **Do:** Use the red-orange (#ff3300) only for the intro rule and the live status dot
- **Do:** Keep corners square; the hero panels are not rounded
- **Don't:** Don't round the corners of the hero panels
- **Don't:** Don't add a dark background to the hero
- **Don't:** Don't use red-orange as a button fill

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
