# Design system — AI Music Stems SaaS Landing Page Template

`SN-W00117` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `es`

## Direction

Sonic is a dark, warm music-tool page on a near-black ground with a soft amber glow behind the hero. The headline is a large white sans that steps down to a muted grey in its middle and last lines, and the primary button is white with a dark outline secondary. Orange (#fb923c) appears in the glow and small details, so the colour feels like light rather than paint.

**Mood:** dark, warm, musical, glowing, understated

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#292524` | Cards, panels, raised areas |
| Text | `#f5f5f5` | Headings and primary copy |
| Muted text | `#ffffff` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#fb923c` | Primary action and highlights |
| Second accent | `#fb923c` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#6366f1` · `#78716c` · `#a8a29e` · `#d6d3d1` · `#fb923c` · `#f97316` · `#000000` · `#1c1917` · `#e7e5e4`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 96px · h2 36px · h3 18px · body 14px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-sm` (2px), `rounded-full` (9999px), `rounded` (4px)
- **Shadows:** `shadow-2xl`, `shadow-[0_0_20px_rgba(99,102,241,0.05)]`, `shadow-[0_0_15px_rgba(99,102,241,0.5)]`
- **Content width:** `max-w-7xl`, `max-w-5xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-3`, `gap-2`, `gap-4`

**Primary button**

```html
<a class="text-xs font-medium px-4 py-2 rounded-full transition-colors bg-white text-black hover:bg-stone-200">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Bento grid (`bento-grid`)
4. Testimonials (`testimonials`)
5. Pricing (`pricing`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN), Unicorn Studio (WebGL scenes)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #292524;
  --color-text: #f5f5f5;
  --color-muted: #ffffff;
  --color-border: #ffffff;
  --color-accent: #fb923c;
  --color-accent-2: #fb923c;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 2px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#292524',
    ink: '#f5f5f5',
    muted: '#ffffff',
    line: '#ffffff',
    accent: '#fb923c',
    accent2: '#fb923c',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in large white sans, stepping down to grey on the lower lines
- **Do:** Use the soft orange glow (#fb923c) behind the hero as the only colour
- **Do:** Use a white pill button for the primary action and a dark outline pill for the second
- **Don't:** Don't use indigo (#6366f1) as a background; the ground is near-black with warm light
- **Don't:** Don't add orange fills to the buttons; they are white
- **Don't:** Don't use more than one glow per screen

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
