# Design system — Healthcare Clinic Landing Page Template

`SN-W02400` · healthcare · light mode · Sinera Atlas theme `calm` · language `en`

## Direction

A straightforward medical hero on white, with a large navy (#1a3e6a) sans-serif headline centred over a short supporting paragraph. A bright green (#22c55e) button carries the call to action and is the strongest colour on the screen, with the navy keeping the text authoritative. Layout is centred and conventional, and the page reads as a familiar clinic site.

**Mood:** conventional, clear, trustworthy, centred, direct

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#f1f5f9` | Cards, panels, raised areas |
| Text | `#1a1a1a` | Headings and primary copy |
| Muted text | `#333333` | Secondary copy, captions |
| Border | `#f1f5f9` | Hairlines, dividers, outlines |
| Accent | `#1a3e6a` | Primary action and highlights |
| Second accent | `#22c55e` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#1a3e6a` · `#facc15` · `#f1f5f9` · `#333333` · `#1a1a1a` · `#22c55e` · `#16a34a` · `#244b7d` · `#e2e8f0`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 60px · h2 36px · h3 20px · body 16px
- **Weights in use:** semibold, medium, normal
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-2xl` (16px), `rounded-lg` (8px), `rounded-xl` (12px)
- **Shadows:** `shadow-sm`, `shadow-lg`, `shadow-inner`
- **Content width:** `max-w-6xl`, `max-w-4xl`
- **Section padding:** `py-20`, `py-24`
- **Common gaps:** `gap-6`, `gap-1`, `gap-8`

**Primary button**

```html
<a class="inline-block bg-[#22C55E] text-white text-base md:text-lg font-medium px-8 py-4 rounded-lg shadow-lg hover:bg-green-600 transition-all hover:scale-[1.02] active:scale-[0.98]">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Video / media (`video-media`)
4. Process / steps (`how-it-works`)
5. Testimonials (`testimonials`)
6. Articles (`blog-articles`)
7. Call to action (`cta`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels)
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #f1f5f9;
  --color-text: #1a1a1a;
  --color-muted: #333333;
  --color-border: #f1f5f9;
  --color-accent: #1a3e6a;
  --color-accent-2: #22c55e;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 16px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#f1f5f9',
    ink: '#1a1a1a',
    muted: '#333333',
    line: '#f1f5f9',
    accent: '#1a3e6a',
    accent2: '#22c55e',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in heavy navy (#1a3e6a) sans-serif, centred.
- **Do:** Use the green (#22c55e) for the primary button only.
- **Do:** Keep the page on white with light grey panels (#f1f5f9).
- **Don't:** Don't use the yellow (#facc15) on the hero.
- **Don't:** Don't set body copy in green; it is for the button.
- **Don't:** Don't leave the logo area without a real logo image.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
