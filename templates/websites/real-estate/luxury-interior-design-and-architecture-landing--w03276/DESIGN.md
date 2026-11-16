# Design system — Luxury Interior Design & Architecture Landing Page Template

`SN-W03276` · real-estate · dark mode · Sinera Atlas theme `dwell` · language `fr`

## Direction

Dark and high-contrast, with a near-black ground (#0c0a09) and a large white sans headline in three lines. One word, réinventé, is set in italic serif, which is the only change of face on the screen. A steel blue (#0765a1) fills the primary button beside a thin outlined secondary, so the page uses a single cool accent against the black.

**Mood:** refined, dark, high-contrast, modern

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0c0a09` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#78716c` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#0765a1` | Primary action and highlights |
| Second accent | `#8b503e` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#1c1917` · `#78716c` · `#d6d3d1` · `#0765a1` · `#fafaf9` · `#0c0a09` · `#a8a29e` · `#f5f5f4` · `#57534e`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 24px · body 14px
- **Weights in use:** medium, light
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-sm` (2px), `rounded-full` (9999px)
- **Shadows:** `shadow-sm`, `shadow-2xl`
- **Content width:** `max-w-[1400px]`, `max-w-2xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-6`, `gap-4`, `gap-12`

**Primary button**

```html
<a class="inline-flex justify-center items-center hover:bg-[#8B503E] transition-colors duration-300 text-sm font-medium text-white bg-[#0765A1] rounded-full px-8 py-3.5">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Gallery / portfolio (`gallery-portfolio`)
4. Feature grid (`features`)
5. Pricing (`pricing`)
6. Testimonials (`testimonials`)
7. Contact form (`contact-form`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #0c0a09;
  --color-surface: #ffffff;
  --color-text: #ffffff;
  --color-muted: #78716c;
  --color-border: #ffffff;
  --color-accent: #0765a1;
  --color-accent-2: #8b503e;
  --font-display: "Playfair Display", serif;
  --font-body: "Inter", sans-serif;
  --radius: 2px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0c0a09',
    surface: '#ffffff',
    ink: '#ffffff',
    muted: '#78716c',
    line: '#ffffff',
    accent: '#0765a1',
    accent2: '#8b503e',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set one word per headline in italic serif for contrast.
- **Do:** Use blue (#0765a1) for the primary button only.
- **Do:** Keep the hero on the dark ground (#0c0a09) with white headings.
- **Don't:** Don't switch the hero to a light background.
- **Don't:** Don't use the blue for large fills or section backgrounds.
- **Don't:** Don't mix a second accent colour beside the blue.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
