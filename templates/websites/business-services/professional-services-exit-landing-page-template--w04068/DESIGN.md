# Design system — Professional Services Exit Landing Page Template

`SN-W04068` · business-services · dark mode · Sinera Atlas theme `route` · language `en`

## Direction

A dark, editorial page in near-black, with an all-caps serif headline set in wide-tracked white. Gold-bronze (#b8944f) is kept for small eyebrow labels and quiet accents, and body copy sits in a soft dark card with light text. The serif, the letter-spacing and the restrained palette give the page a formal, reflective tone suited to a considered decision.

**Mood:** editorial, formal, reflective, restrained, dark

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0909` | Page ground |
| Surface | `#0a0909` | Cards, panels, raised areas |
| Text | `#eae6e1` | Headings and primary copy |
| Muted text | `#ffffff` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#b8944f` | Primary action and highlights |

Palette by frequency of use: `#b8944f` · `#ffffff` · `#eae6e1` · `#0a0909`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display
- **Scale (largest breakpoint):** h1 60px · h2 48px · h3 18px · body 16px
- **Weights in use:** light, normal
- **Letter spacing:** `tracking-widest`, `tracking-[0.2em]`

## Shape, spacing and layout

- **Corner radius:** `rounded-lg` (8px), `rounded-full` (9999px)
- **Shadows:** `shadow-[0_0_80px_rgba(184,148,79,0.05)]`
- **Content width:** `max-w-5xl`, `max-w-6xl`
- **Section padding:** `py-32`
- **Common gaps:** `gap-12`, `gap-8`, `gap-24`

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Testimonials (`testimonials`)
4. 3D / canvas scene (`3d-canvas`)
5. Process / steps (`how-it-works`)
6. Call to action (`cta`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #0a0909;
  --color-surface: #0a0909;
  --color-text: #eae6e1;
  --color-muted: #ffffff;
  --color-border: #ffffff;
  --color-accent: #b8944f;
  --font-display: "Playfair Display", serif;
  --font-body: "Inter", sans-serif;
  --radius: 8px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0a0909',
    surface: '#0a0909',
    ink: '#eae6e1',
    muted: '#ffffff',
    line: '#ffffff',
    accent: '#b8944f',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headlines in Playfair Display in uppercase with wide letter-spacing
- **Do:** Use the gold-bronze (#b8944f) only for eyebrow labels and small accents
- **Do:** Keep body copy in a dark card with light text (#eae6e1)
- **Don't:** Don't set the gold as a large fill or as a button background
- **Don't:** Don't introduce bright colours; the page stays black, white and bronze
- **Don't:** Don't set body text in all caps; only headlines and eyebrows are uppercase

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
