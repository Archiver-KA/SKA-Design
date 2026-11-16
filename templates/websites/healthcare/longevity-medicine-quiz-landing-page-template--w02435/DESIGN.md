# Design system — Longevity Medicine Quiz Landing Page Template

`SN-W02435` · healthcare · light mode · Sinera Atlas theme `calm` · language `en`

## Direction

The longevity quiz page is a light, centred hero: a white ground, a large serif headline in near-black, and the closing word in italic gold (#c9a84c). A tracked gold kicker sits above the headline, and one gold pill button is the only action, with a small grey line under it to reduce friction. Gold appears in three places only, so the page reads as restrained and premium.

**Mood:** premium, restrained, centred, measured

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#faf9f6` | Cards, panels, raised areas |
| Text | `#18181b` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#f4f4f5` | Hairlines, dividers, outlines |
| Accent | `#c9a84c` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#71717a` · `#52525b` · `#18181b` · `#c9a84c` · `#09090b` · `#f4f4f5` · `#a1a1aa` · `#faf9f6` · `#27272a`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** DM Sans
- **Body:** DM Sans
- **Loaded families:** DM Sans, Playfair Display
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 20px · body 18px
- **Weights in use:** light, semibold, medium
- **Letter spacing:** `tracking-[0.2em]`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px)
- **Shadows:** `shadow-sm`, `shadow-2xl`, `shadow-xl`
- **Content width:** `max-w-4xl`, `max-w-2xl`
- **Section padding:** `py-32`, `py-20`
- **Common gaps:** `gap-8`, `gap-1`, `gap-4`

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Team (`team`)
4. Testimonials (`testimonials`)
5. Stats band (`stats`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #faf9f6;
  --color-text: #18181b;
  --color-muted: #71717a;
  --color-border: #f4f4f5;
  --color-accent: #c9a84c;
  --font-display: "DM Sans", sans-serif;
  --font-body: "DM Sans", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#faf9f6',
    ink: '#18181b',
    muted: '#71717a',
    line: '#f4f4f5',
    accent: '#c9a84c',
  },
  fontFamily: { display: ['DM Sans'], sans: ['DM Sans'] },
} }
```

## Do and don't

- **Do:** Set the closing word of the headline in italic gold (#c9a84c)
- **Do:** Use one gold pill as the only action in the hero
- **Do:** Put a small tracked gold kicker above each headline
- **Don't:** Don't use gold for body copy or large fills
- **Don't:** Don't add a second button colour to the hero
- **Don't:** Don't place photography in the hero; the page is type and one button

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
