# Design system — HazysKraft

`SN-W02042` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A dark, high-contrast landing page on near-black (#050505) where one word in the headline is picked out in orange (#f97316). Orange marks the highlight, while a bright green (#25d366) is kept for the WhatsApp call to action, so the two accents have separate jobs. Inter is set bold and centred, and the hero is a single column of headline, subtitle and two buttons.

**Mood:** bold, high-contrast, direct, food-focused, energetic

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#050505` | Page ground |
| Surface | `#18181b` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#a1a1aa` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#f97316` | Primary action and highlights |
| Second accent | `#25d366` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#f97316` · `#a1a1aa` · `#27272a` · `#000000` · `#18181b` · `#71717a` · `#d4d4d8` · `#050505` · `#ea580c`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Manrope, Geist, Roboto, Montserrat, Poppins
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 20px · body 14px
- **Weights in use:** bold, medium, semibold
- **Letter spacing:** `tracking-wider`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-2xl` (16px), `rounded-full` (9999px), `rounded-lg` (8px)
- **Shadows:** `shadow-lg`, `shadow-2xl`, `shadow-[0_0_20px_rgba(37,211,102,0.3)]`
- **Content width:** `max-w-6xl`, `max-w-2xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-3`, `gap-2`, `gap-6`

**Primary button**

```html
<a class="hidden md:inline-flex items-center justify-center gap-2 bg-white text-black px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-zinc-200 transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Gallery / portfolio (`gallery-portfolio`)
4. Services (`services`)
5. Testimonials (`testimonials`)
6. Logo cloud (`logo-cloud`)
7. Pricing (`pricing`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #050505;
  --color-surface: #18181b;
  --color-text: #ffffff;
  --color-muted: #a1a1aa;
  --color-border: #ffffff;
  --color-accent: #f97316;
  --color-accent-2: #25d366;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 16px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#050505',
    surface: '#18181b',
    ink: '#ffffff',
    muted: '#a1a1aa',
    line: '#ffffff',
    accent: '#f97316',
    accent2: '#25d366',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use orange (#f97316) for one highlighted phrase per headline.
- **Do:** Reserve the green (#25d366) for the WhatsApp contact button only.
- **Do:** Centre hero copy with the headline in Inter bold.
- **Don't:** Don't use the green for decorative fills or section backgrounds.
- **Don't:** Don't put more than one orange highlight in a headline.
- **Don't:** Don't add light section backgrounds; the page stays near-black.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
