# Design system — Video Marketing Agency Landing Page Template

`SN-W01721` · agency-studio · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A restrained light consulting page on a pale grey ground with a single warm gold italic phrase in the headline, which carries all of the emphasis. Heavy black sans headlines are centred over a large thin outline circle that frames the hero like a diagram. The palette is almost entirely neutral and the calls to action are dark pills, so the page feels calm and senior.

**Mood:** calm, neutral, senior, airy, consultative

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Text | `#52525b` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#ffffff` · `#a1a1aa` · `#d4d4d8` · `#71717a` · `#52525b`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 20px · body 16px
- **Weights in use:** semibold, medium, bold
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-[1.5rem]` (1.5rem), `rounded-[2rem]` (2rem)
- **Shadows:** `shadow-sm`, `shadow-[0_4px_24px_-8px_rgba(13,26,44,0.04)]`, `shadow-[0_4px_24px_-8px_rgba(13,26,44,0.06)]`
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-6`, `gap-8`

**Primary button**

```html
<a class="inline-flex items-center justify-center bg-[var(--primary)] hover:bg-[var(--dark)] text-white transition-all duration-300 text-sm font-medium rounded-full py-2.5 px-6 shadow-sm">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Marquee (`marquee`)
4. Timeline (`timeline`)
5. Video / media (`video-media`)
6. Bento grid (`bento-grid`)
7. Process / steps (`how-it-works`)
8. Testimonials (`testimonials`)
9. Call to action (`cta`)
10. FAQ (`faq`)
11. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-text: #52525b;
  --color-muted: #71717a;
  --color-border: #ffffff;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    ink: '#52525b',
    muted: '#71717a',
    line: '#ffffff',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in heavy black sans and use one gold italic phrase for emphasis
- **Do:** Keep the ground pale and neutral, with the hero framed by thin outline circles
- **Do:** Use dark pill buttons for primary calls to action
- **Don't:** Don't use more than one emphasis phrase per headline
- **Don't:** Don't add saturated colour to the hero
- **Don't:** Don't set body copy in the gold accent

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
