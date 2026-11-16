# Design system — Holistic Health & Physiotherapy Landing Page Template

`SN-W02413` · healthcare · dark mode · Sinera Atlas theme `calm` · language `pl`

## Direction

The physiotherapy page is dark: a charcoal ground (#262626) over a faded, desaturated photograph, with white sans type and one mint (#4ec3a6) colour for the primary button and the small badge. The headline is large, regular-weight and centred, with a lighter subline. One mint button against near-black gives the page a calm, clinical focus.

**Mood:** dark, calm, clinical, understated

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#262626` | Page ground |
| Surface | `#a2b5b1` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#404040` | Secondary copy, captions |
| Border | `#a2b5b1` | Hairlines, dividers, outlines |
| Accent | `#4ec3a6` | Primary action and highlights |

Palette by frequency of use: `#a2b5b1` · `#4ec3a6` · `#ffffff` · `#404040` · `#262626` · `#1a1a1a`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 24px · body 16px
- **Weights in use:** light, extralight, medium
- **Letter spacing:** `tracking-tight`, `tracking-[0.15em]`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-xl` (12px)
- **Content width:** `max-w-6xl`, `max-w-4xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-4`, `gap-2`, `gap-8`

**Primary button**

```html
<a class="w-full sm:w-auto bg-[#4ec3a6] text-[#262626] font-medium rounded-full py-4 px-8 text-base transition-transform duration-300 hover:scale-105 flex items-center justify-center gap-2">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Testimonials (`testimonials`)
5. Bento grid (`bento-grid`)
6. Comparison (`comparison`)
7. Call to action (`cta`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #262626;
  --color-surface: #a2b5b1;
  --color-text: #ffffff;
  --color-muted: #404040;
  --color-border: #a2b5b1;
  --color-accent: #4ec3a6;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#262626',
    surface: '#a2b5b1',
    ink: '#ffffff',
    muted: '#404040',
    line: '#a2b5b1',
    accent: '#4ec3a6',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the ground charcoal (#262626) under a desaturated photo
- **Do:** Use mint (#4ec3a6) only for the primary button and the badge
- **Do:** Set headlines in large regular-weight white sans, centred
- **Don't:** Don't use mint as a page background; it is for controls only.
- **Don't:** Don't make the photograph bright or saturated
- **Don't:** Don't add a second accent colour to the hero

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
