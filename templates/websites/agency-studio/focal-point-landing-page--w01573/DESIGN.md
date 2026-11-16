# Design system — Focal Point Landing Page

`SN-W01573` · agency-studio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A black ground with a two-line headline in Inter, where the top line fades into a silver gradient and the lower line stays white. This gives depth without colour. Red (#ef4444) is limited to a small dot in the announcement pill, and a dark navigation pill floats at the top. Under the copy, a black product frame with a thin border sits as the visual.

**Mood:** stark, silver, direct, minimal, urgent

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#18181b` | Cards, panels, raised areas |
| Text | `#f5f5f5` | Headings and primary copy |
| Muted text | `#ffffff` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#ef4444` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#ef4444` · `#a1a1aa` · `#dc2626` · `#000000` · `#fecaca` · `#18181b` · `#27272a` · `#f87171` · `#52525b`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 20px · body 18px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-widest`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-2xl` (16px)
- **Shadows:** `shadow-[0_0_10px_rgba(220,38,38,0.5)]`, `shadow-2xl`, `shadow-[0_0_20px_rgba(0,0,0,0.5)]`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-2`, `gap-3`, `gap-6`

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Logo cloud (`logo-cloud`)
4. Call to action (`cta`)
5. Feature grid (`features`)
6. Process / steps (`how-it-works`)
7. Booking form (`booking`)
8. FAQ (`faq`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Unicorn Studio (WebGL scenes)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #18181b;
  --color-text: #f5f5f5;
  --color-muted: #ffffff;
  --color-border: #ffffff;
  --color-accent: #ef4444;
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
    ink: '#f5f5f5',
    muted: '#ffffff',
    line: '#ffffff',
    accent: '#ef4444',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in Inter with the first line in a silver gradient and the second in white
- **Do:** Use the red (#ef4444) only for the status dot in the announcement pill
- **Do:** Frame the product visual in a thin-bordered black box
- **Don't:** Don't use red as a background; the page is black
- **Don't:** Don't add a second gradient colour to the headline
- **Don't:** Don't set the navigation as a full-width bar; it floats as a pill

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
