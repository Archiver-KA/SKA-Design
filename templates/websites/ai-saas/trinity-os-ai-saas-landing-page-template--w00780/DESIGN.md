# Design system — Trinity OS AI SaaS Landing Page Template

`SN-W00780` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark, quiet recovery-service page with a centred hero. The headline is a high-contrast serif with the second line fading into grey. The surrounding UI is plain grey on near-black with outlined pill buttons, and orange (#f97316) appears only in the small status pill.

**Mood:** calm, dark, editorial, restrained

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#09090b` | Page ground |
| Surface | `#0f0f12` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#a8a29e` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#f97316` | Primary action and highlights |
| Second accent | `#ec4899` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#a8a29e` · `#f97316` · `#fb923c` · `#0f0f12` · `#09090b` · `#78716c` · `#d6d3d1` · `#292524` · `#ec4899`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Newsreader
- **Scale (largest breakpoint):** h1 100px · h2 48px · h3 20px · body 14px
- **Weights in use:** light, medium, normal
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-3xl` (24px), `rounded-2xl` (16px)
- **Shadows:** `shadow-[0_0_15px_rgba(0,229,255,0.1)]`, `shadow-[0_0_15px_rgba(0,229,255,0.15)]`, `shadow-[0_4px_30px_rgba(0,229,255,0.1)]`
- **Content width:** `max-w-[1200px]`, `max-w-[1000px]`
- **Section padding:** `py-20`
- **Common gaps:** `gap-4`, `gap-6`, `gap-12`

**Primary button**

```html
<a class="text-sm font-light px-5 py-2 rounded-full border border-orange-500/30 hover:bg-orange-500/10 hover:border-orange-500/60 hover:shadow-[0_0_15px_rgba(0,229,255,0.15)] transition-all text-white bg-white/5 font-sans">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Pricing (`pricing`)
4. Benefits (`benefits`)
5. Booking form (`booking`)
6. Process / steps (`how-it-works`)
7. Integrations (`integrations`)
8. FAQ (`faq`)
9. Call to action (`cta`)
10. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #09090b;
  --color-surface: #0f0f12;
  --color-text: #ffffff;
  --color-muted: #a8a29e;
  --color-border: #ffffff;
  --color-accent: #f97316;
  --color-accent-2: #ec4899;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#09090b',
    surface: '#0f0f12',
    ink: '#ffffff',
    muted: '#a8a29e',
    line: '#ffffff',
    accent: '#f97316',
    accent2: '#ec4899',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Centre the hero with a two-line headline and the second line in grey
- **Do:** Use outlined pill buttons, with an arrow icon on the primary action
- **Do:** Keep the status pill as the only warm element above the fold
- **Don't:** Don't set the headline in a sans-serif face
- **Don't:** Don't fill large areas with orange
- **Don't:** Don't add decorative imagery to the hero, which is text-led

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
