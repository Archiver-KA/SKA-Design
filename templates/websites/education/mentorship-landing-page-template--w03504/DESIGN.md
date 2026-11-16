# Design system — Mentorship Landing Page Template

`SN-W03504` · education · dark mode · Sinera Atlas theme `calm` · language `en`

## Direction

A dark, high-contrast coaching page with a near-black ground (#0a0a0a) and Inter set very large and heavy for the headline. The middle phrase of the headline takes a blue-to-grey gradient, and the buttons pair a solid blue primary with a dark grey secondary. A soft radial glow frames the hero, adding depth without colour in the body text.

**Mood:** bold, dark, confident, high-contrast

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Surface | `#171717` | Cards, panels, raised areas |
| Text | `#d4d4d4` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#262626` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#d4d4d4` · `#262626` · `#fafafa` · `#a3a3a3` · `#171717` · `#737373` · `#0a0a0a` · `#e5e5e5` · `#404040` · `#f5f5f5`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 96px · h2 36px · h3 20px · body 14px
- **Weights in use:** medium, semibold, normal
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-2xl` (16px)
- **Shadows:** `shadow-[0_0_30px_-5px_rgba(59,130,246,0.4)]`, `shadow-[0_0_0_0_rgba(59,130,246,0)]`, `shadow-[0_0_30px_-10px_rgba(59,130,246,0.15)]`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-2`, `gap-3`, `gap-6`

**Primary button**

```html
<a class="inline-flex items-center justify-center rounded-full bg-neutral-50 px-4 py-2 text-sm font-medium text-neutral-950 transition-all hover:bg-neutral-200 hover:scale-105 active:scale-95">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Stats band (`stats`)
4. About (`about`)
5. Services (`services`)
6. Pricing (`pricing`)
7. Contact form (`contact-form`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #0a0a0a;
  --color-surface: #171717;
  --color-text: #d4d4d4;
  --color-muted: #737373;
  --color-border: #262626;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0a0a0a',
    surface: '#171717',
    ink: '#d4d4d4',
    muted: '#737373',
    line: '#262626',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in Inter at heavy weight, with one gradient phrase in the middle
- **Do:** Pair a solid blue primary button with a dark grey secondary button
- **Do:** Keep the radial glow behind the hero as the only decorative element
- **Don't:** Don't use light backgrounds for hero sections
- **Don't:** Don't add a second gradient phrase in the same headline
- **Don't:** Don't use blue for body text or navigation labels

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
