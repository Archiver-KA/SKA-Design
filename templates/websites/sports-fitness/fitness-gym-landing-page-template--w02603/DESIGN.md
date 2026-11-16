# Design system — Fitness Gym Landing Page Template

`SN-W02603` · sports-fitness · dark mode · Sinera Atlas theme `calm` · language `en`

## Direction

A dark, photo-led gym hero. A black-and-grey photograph of weights sits behind oversized white Inter headlines. Yellow (#facc15) is the only colour, used on the logo, stat line and small labels, so the page reads as high-contrast monochrome with one warm signal.

**Mood:** bold, monochrome, photographic, high-contrast, energetic

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#facc15` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#000000` · `#facc15` · `#d1d5db` · `#9ca3af` · `#6b7280` · `#111111` · `#4b5563` · `#080808` · `#18181b`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 176px · h2 96px · h3 80px · body 20px
- **Weights in use:** medium, normal, bold
- **Letter spacing:** `tracking-tight`, `tracking-[0.25em]`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-[2rem]` (2rem), `rounded-[2.5rem]` (2.5rem)
- **Shadows:** `shadow-[0_0_15px_rgba(250,204,21,0.6)]`, `shadow-2xl`, `shadow-xl`
- **Content width:** `max-w-[1800px]`, `max-w-5xl`
- **Section padding:** `py-32`, `py-12`
- **Common gaps:** `gap-4`, `gap-8`, `gap-12`

**Primary button**

```html
<a class="bg-yellow-400 hover:bg-yellow-500 transition-colors text-black pl-8 pr-2.5 py-2.5 rounded-full font-normal text-2xl flex items-center gap-5 group">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Case studies (`case-studies`)
5. Pricing (`pricing`)
6. Articles (`blog-articles`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #000000;
  --color-text: #ffffff;
  --color-muted: #6b7280;
  --color-border: #ffffff;
  --color-accent: #facc15;
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
    ink: '#ffffff',
    muted: '#6b7280',
    line: '#ffffff',
    accent: '#facc15',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the hero on a dark photograph and keep the headline in white Inter at display size.
- **Do:** Use the yellow (#facc15) only for the logo, the stat line and one highlight per section.
- **Do:** Keep navigation text small and light so it stays readable over the dark image.
- **Don't:** Don't use a yellow page background; yellow is an accent, not the ground.
- **Don't:** Don't set yellow body text over the photograph, where contrast drops.
- **Don't:** Don't add drop shadows to the headline.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
