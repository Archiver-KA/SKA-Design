# Design system — Chirag Khaire X

`SN-W04167` · other-landing · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A near-black page with a single blue accent (#3b82f6) used for the button and for the small letter-spaced label above the headline. The headline is very large, bold Outfit set tight to the left, with grey body copy beneath it at a much smaller size. Scale contrast does most of the work, and the image area on the right is a plain dark frame.

**Mood:** bold, high-contrast, confident, dark

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#080808` | Page ground |
| Surface | `#080808` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#888888` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#3b82f6` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#3b82f6` · `#c0c0c0` · `#888888` · `#080808` · `#f0f0f0` · `#444444` · `#555555` · `#bbbbbb` · `#666666`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Outfit
- **Body:** Outfit
- **Loaded families:** Outfit, Space Mono, Syne
- **Scale (largest breakpoint):** h1 96px · h2 60px · h3 20px · body 16px
- **Weights in use:** semibold, normal, bold
- **Letter spacing:** `tracking-tight`, `tracking-[0.2em]`

## Shape, spacing and layout

- **Corner radius:** `rounded-2xl` (16px), `rounded-xl` (12px), `rounded-lg` (8px)
- **Shadows:** `shadow-none`, `shadow-[0_0_30px_rgba(59,130,246,0.08)]`, `shadow-[0_0_20px_rgba(59,130,246,0.06)]`
- **Content width:** `max-w-[1200px]`, `max-w-[700px]`
- **Section padding:** `py-[120px]`, `py-20`
- **Common gaps:** `gap-8`, `gap-6`, `gap-12`

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Case studies (`case-studies`)
4. Testimonials (`testimonials`)
5. Contact form (`contact-form`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), custom keyframes
- **Libraries:** Tailwind CSS (CDN), Three.js, Lenis smooth scroll
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #080808;
  --color-surface: #080808;
  --color-text: #ffffff;
  --color-muted: #888888;
  --color-border: #ffffff;
  --color-accent: #3b82f6;
  --font-display: "Outfit", sans-serif;
  --font-body: "Outfit", sans-serif;
  --radius: 16px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#080808',
    surface: '#080808',
    ink: '#ffffff',
    muted: '#888888',
    line: '#ffffff',
    accent: '#3b82f6',
  },
  fontFamily: { display: ['Outfit'], sans: ['Outfit'] },
} }
```

## Do and don't

- **Do:** Set the headline in Outfit at a very large size, bold and tightly spaced.
- **Do:** Use the blue (#3b82f6) for the primary button and the eyebrow label only.
- **Do:** Keep body copy in grey (#888888) at a small size.
- **Don't:** Don't use blue for headings or large areas.
- **Don't:** Don't set the headline in a light weight.
- **Don't:** Don't add a light background behind the hero.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
