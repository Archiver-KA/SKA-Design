# Design system — AI Analytics SaaS Landing Page Template

`SN-W00037` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark, data-forward SaaS page where a single lime (#c6f91f) carries the brand against a near-black ground (#05080a). Geist at about 72px sets the headline in white, with the last line fading to grey, and the hero is a product dashboard with lime chart lines and a small lime badge. The lime is used sparingly, so the dashboard is the main visual.

**Mood:** data-forward, dark, sharp, modern, confident

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#05080a` | Page ground |
| Surface | `#0f1216` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#c6f91f` | Primary action and highlights |
| Second accent | `#ef4444` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#c6f91f` · `#05080a` · `#000000` · `#0f1216` · `#2a2e33` · `#ef4444` · `#161b22` · `#262626` · `#404040`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Geist
- **Body:** Geist
- **Loaded families:** Geist, Inter, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 18px · body 14px
- **Weights in use:** medium, semibold, light
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded` (4px), `rounded-lg` (8px)
- **Shadows:** `shadow-lg`, `shadow-[0_0_20px_rgba(198,249,31,0.1)]`, `shadow-inner`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-32`, `py-24`
- **Common gaps:** `gap-3`, `gap-2`, `gap-1`

**Primary button**

```html
<a class="px-8 py-4 bg-white text-dark font-semibold rounded hover:bg-white/90 transition-all shadow-[0_0_20px_rgba(255,255,255,0.15)] hover:shadow-[0_0_35px_rgba(255,255,255,0.25)] hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2 group">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Marquee (`marquee`)
4. Testimonials (`testimonials`)
5. Gallery / portfolio (`gallery-portfolio`)
6. Timeline (`timeline`)
7. Pricing (`pricing`)
8. Articles (`blog-articles`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Spline 3D
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #05080a;
  --color-surface: #0f1216;
  --color-text: #ffffff;
  --color-muted: #6b7280;
  --color-border: #ffffff;
  --color-accent: #c6f91f;
  --color-accent-2: #ef4444;
  --font-display: "Geist", sans-serif;
  --font-body: "Geist", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#05080a',
    surface: '#0f1216',
    ink: '#ffffff',
    muted: '#6b7280',
    line: '#ffffff',
    accent: '#c6f91f',
    accent2: '#ef4444',
  },
  fontFamily: { display: ['Geist'], sans: ['Geist'] },
} }
```

## Do and don't

- **Do:** Use lime (#c6f91f) for chart lines, the badge and one highlight per section
- **Do:** Set headlines in Geist at about 72px in white, with a grey fade on the last line
- **Do:** Show the product as a dark dashboard card in the hero
- **Don't:** Don't switch to a light page ground; the look depends on the dark base
- **Don't:** Don't add a second bright accent beside the lime
- **Don't:** Don't use lime for long body text

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
