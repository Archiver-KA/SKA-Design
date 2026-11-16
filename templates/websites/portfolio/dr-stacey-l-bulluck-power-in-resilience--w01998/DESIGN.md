# Design system — Dr. Stacey L. Bulluck | Power in Resilience

`SN-W01998` · portfolio · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A motivational speaker site built on a full-bleed photograph with a dark overlay, so the first screen reads as a stage rather than a light page. The headline is large white sans in sentence case, centred over the image, and the only colour is a gold (#d4af37) outlined pill button in the navbar. Red (#ef4444) appears only in the logo mark, so accent use is sparse and deliberate.

**Mood:** photographic, bold, motivational, sans-serif

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fafafa` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#0f172a` | Headings and primary copy |
| Border | `#faf9f6` | Hairlines, dividers, outlines |
| Accent | `#d4af37` | Primary action and highlights |
| Second accent | `#d4af37` | Supporting highlights |

Palette by frequency of use: `#f1f5f9` · `#94a3b8` · `#000000` · `#faf9f6` · `#0f172a` · `#ef4444` · `#e2e8f0` · `#d4af37` · `#581c87` · `#fef08a`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Oswald, Roboto
- **Scale (largest breakpoint):** h1 96px · h2 60px · h3 60px · body 18px
- **Weights in use:** normal, medium
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-3xl` (24px), `rounded-[2rem]` (2rem)
- **Shadows:** `shadow-[0_8px_30px_rgba(212,175,55,0.15)]`, `shadow-[0_0_20px_rgba(212,175,55,0.4)]`, `shadow-[0_0_30px_rgba(212,175,55,0.6)]`
- **Content width:** `max-w-7xl`, `max-w-5xl`
- **Section padding:** `py-32`, `py-24`
- **Common gaps:** `gap-8`, `gap-2`, `gap-12`

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Marquee (`marquee`)
4. Gallery / portfolio (`gallery-portfolio`)
5. About (`about`)
6. Video / media (`video-media`)
7. Testimonials (`testimonials`)
8. Process / steps (`how-it-works`)
9. Services (`services`)
10. Team (`team`)
11. Footer (`footer`)
12. Modal / overlay (`modal-overlay`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #fafafa;
  --color-surface: #ffffff;
  --color-text: #0f172a;
  --color-border: #faf9f6;
  --color-accent: #d4af37;
  --color-accent-2: #d4af37;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fafafa',
    surface: '#ffffff',
    ink: '#0f172a',
    line: '#faf9f6',
    accent: '#d4af37',
    accent2: '#d4af37',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use full-bleed photography with a dark overlay behind the hero headline
- **Do:** Keep headlines in Inter at large size, white on the image
- **Do:** Reserve the gold (#d4af37) for the primary call-to-action pill
- **Don't:** Don't place light text over the unshaded photograph
- **Don't:** Don't use the red (#ef4444) for buttons; it marks the logo only
- **Don't:** Don't add a second accent colour beside the gold

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
