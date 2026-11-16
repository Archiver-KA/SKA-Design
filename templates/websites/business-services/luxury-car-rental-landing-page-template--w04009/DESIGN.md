# Design system — Luxury Car Rental Landing Page Template

`SN-W04009` · business-services · dark mode · Sinera Atlas theme `route` · language `en`

## Direction

The same minimal rental system, with a full-width photograph of a grey sports car behind the headline. The photograph is darkened toward the bottom so the white sans-serif headline and the yellow eyebrow label stay legible. Navigation and call-to-action links sit on the image in small type, separated by thin dividers.

**Mood:** minimal, cinematic, dark, clean, automotive

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#080805` | Page ground |
| Surface | `#2a2a2a` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#888888` | Secondary copy, captions |
| Border | `#2a2a2a` | Hairlines, dividers, outlines |
| Accent | `#d4d414` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#d4d414` · `#2a2a2a` · `#080805` · `#888888` · `#121212` · `#000000`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Figtree
- **Body:** Figtree
- **Loaded families:** Figtree
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 30px · body 14px
- **Weights in use:** light, medium, normal
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-[2rem]` (2rem), `rounded-2xl` (16px)
- **Shadows:** `shadow-lg`
- **Content width:** `max-w-[1440px]`, `max-w-2xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-1.5`, `gap-6`, `gap-3`

## Page structure

Blocks in page order:

1. Hero (`hero`)

## Motion, effects and stack

- **Effects:** gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN), Framer Motion, React
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #080805;
  --color-surface: #2a2a2a;
  --color-text: #ffffff;
  --color-muted: #888888;
  --color-border: #2a2a2a;
  --color-accent: #d4d414;
  --font-display: "Figtree", sans-serif;
  --font-body: "Figtree", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#080805',
    surface: '#2a2a2a',
    ink: '#ffffff',
    muted: '#888888',
    line: '#2a2a2a',
    accent: '#d4d414',
  },
  fontFamily: { display: ['Figtree'], sans: ['Figtree'] },
} }
```

## Do and don't

- **Do:** Place the photograph full width, darkened toward the bottom under the headline
- **Do:** Keep the eyebrow label in yellow (#d4d414) above the headline
- **Do:** Use thin dividers between text links that sit on the photograph
- **Don't:** Don't lighten the photograph; keep the dark overlay
- **Don't:** Don't place small text on the brightest part of the car
- **Don't:** Don't add a second accent colour

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
