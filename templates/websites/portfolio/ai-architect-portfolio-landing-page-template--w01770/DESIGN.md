# Design system — AI Architect Portfolio Landing Page Template

`SN-W01770` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `pt-BR`

## Direction

A near-black page with a large white lead line set in an italic face, followed by a blue phrase below it. The primary button is a dark outline with a green edge, and the secondary is a plain dark outline. A faint orbital diagram sits to the right, and the palette stays cool and restrained apart from the green and blue highlights.

**Mood:** cool, dark, restrained, technical

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#18181b` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#a1a1aa` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#10b981` | Primary action and highlights |
| Second accent | `#3b82f6` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#a1a1aa` · `#18181b` · `#000000` · `#10b981` · `#3b82f6` · `#374151` · `#60a5fa` · `#34d399` · `#f4f4f5`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display, Poppins, Geist, Roboto, Montserrat
- **Scale (largest breakpoint):** h1 72px · h2 72px · h3 18px · body 12px
- **Weights in use:** semibold, medium, normal
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded` (4px), `rounded-3xl` (24px)
- **Shadows:** `shadow-lg`, `shadow-2xl`, `shadow-inner`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Common gaps:** `gap-2`, `gap-24`, `gap-12`

**Primary button**

```html
<a class="group relative px-8 py-4 bg-blue-500 hover:bg-blue-400 text-black font-semibold rounded-full transition-all duration-300 hover:shadow-[0_0_40px_rgba(59,130,246,0.4)] overflow-hidden">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Marquee (`marquee`)
4. Bento grid (`bento-grid`)
5. Call to action (`cta`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #18181b;
  --color-text: #ffffff;
  --color-muted: #a1a1aa;
  --color-border: #ffffff;
  --color-accent: #10b981;
  --color-accent-2: #3b82f6;
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
    surface: '#18181b',
    ink: '#ffffff',
    muted: '#a1a1aa',
    line: '#ffffff',
    accent: '#10b981',
    accent2: '#3b82f6',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the lead line in an italic white face, with the blue phrase below it.
- **Do:** Use the blue (#3b82f6) for the highlight phrase only, not for buttons.
- **Do:** Keep the green (#10b981) as the primary button's edge and accent.
- **Don't:** Don't add more highlight colours beyond the green and blue pair.
- **Don't:** Don't use a light background; the page is black.
- **Don't:** Don't flatten the orbital diagram into a plain icon; it is part of the look.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
