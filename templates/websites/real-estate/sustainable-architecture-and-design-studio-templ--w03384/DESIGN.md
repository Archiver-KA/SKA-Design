# Design system — Sustainable Architecture & Design Studio Template

`SN-W03384` · real-estate · dark mode · Sinera Atlas theme `dwell` · language `en`

## Direction

Dark architectural studio page with a deep blue-navy ground and white headlines set large in a clean sans. Amber (#ffb40f) is the one warm accent: it fills the primary button, outlines the award badge and marks a short rule under the headline. The nav is a rounded bar, and the supporting copy is a muted blue-grey, so the page feels quiet and considered.

**Mood:** quiet, considered, architectural, refined

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#163b52` | Page ground |
| Surface | `#faf8f5` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#8da3b3` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#ffb40f` | Primary action and highlights |
| Second accent | `#163b52` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#ffb40f` · `#8da3b3` · `#1c2127` · `#4a5568` · `#163b52` · `#eef1f4` · `#faf8f5` · `#ffcc55` · `#d49500`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Prompt
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 20px · body 14px
- **Weights in use:** normal, semibold, medium
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-md` (6px), `rounded-lg` (8px)
- **Shadows:** `shadow-sm`, `shadow-[0_4px_12px_rgba(28,33,39,0.04)]`, `shadow-[0_8px_24px_rgba(28,33,39,0.08)]`
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Section padding:** `py-32`, `py-24`
- **Common gaps:** `gap-4`, `gap-3`, `gap-2`

**Primary button**

```html
<a class="hidden md:inline-flex items-center justify-center px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-gradient-to-b from-[#ffcc55] via-[#ffb40f] to-[#d49500] rounded-full hover:-translate-y-px shadow-[0_4px_12px_rgba(196,154,60,0.25)] hover:shadow-[0_6px_16px_rgba(196,154,60,0.35)] transition-all duration-300 font-sans">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Services (`services`)
5. Marquee (`marquee`)
6. Case studies (`case-studies`)
7. Process / steps (`how-it-works`)
8. Testimonials (`testimonials`)
9. Contact form (`contact-form`)
10. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #163b52;
  --color-surface: #faf8f5;
  --color-text: #ffffff;
  --color-muted: #8da3b3;
  --color-border: #ffffff;
  --color-accent: #ffb40f;
  --color-accent-2: #163b52;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#163b52',
    surface: '#faf8f5',
    ink: '#ffffff',
    muted: '#8da3b3',
    line: '#ffffff',
    accent: '#ffb40f',
    accent2: '#163b52',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the ground deep navy (#163b52) and set all headlines in white.
- **Do:** Use amber (#ffb40f) for the primary button and the short rule under the headline only.
- **Do:** Set supporting copy in the muted blue-grey (#8da3b3), never in amber.
- **Don't:** Don't use amber for more than one button per section.
- **Don't:** Don't switch the ground to white; the page is designed dark.
- **Don't:** Don't tint photography with amber.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
