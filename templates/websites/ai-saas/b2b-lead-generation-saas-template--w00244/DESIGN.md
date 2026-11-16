# Design system — B2B Lead Generation SaaS Template

`SN-W00244` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A stark black-and-white dark hero: a pure black ground (#000000) with a large white Inter headline, muted grey supporting copy, and one white primary button with no colour in the first screen. A thin hairline frame inset from the viewport edges gives structure instead of cards or shadows. The yellow (#eab308) is declared in the theme but does not appear in the hero, so treat it as a reserved highlight.

**Mood:** stark, minimal, high contrast, technical

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Text | `#000000` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#eab308` | Primary action and highlights |
| Second accent | `#3b82f6` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#eab308` · `#000000` · `#3b82f6` · `#ef4444` · `#f87171` · `#facc15` · `#f97316` · `#fb923c` · `#71717a`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, JetBrains Mono
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 14px · body 12px
- **Weights in use:** medium, normal, light
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-sm` (2px), `rounded-full` (9999px)
- **Shadows:** `shadow-[0_0_8px_rgba(34,197,94,0.5)]`, `shadow-[0_0_40px_rgba(255,255,255,0.03)]`
- **Content width:** `max-w-[1440px]`, `max-w-4xl`
- **Section padding:** `py-12`
- **Common gaps:** `gap-2`, `gap-3`, `gap-6`

**Primary button**

```html
<a class="relative bg-brand-bg backdrop-blur-xl px-5 py-2.5 text-xs font-medium text-white/90 group-hover:text-white transition-colors flex items-center justify-center rounded-sm">…</a>
```

## Page structure

Blocks in page order:

1. Logo cloud (`logo-cloud`)
2. Modal / overlay (`modal-overlay`)
3. Navigation bar (`navbar`)
4. Hero (`hero`)
5. Process / steps (`how-it-works`)
6. Bento grid (`bento-grid`)
7. Comparison (`comparison`)
8. Pricing (`pricing`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN), GSAP, Three.js
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #000000;
  --color-text: #000000;
  --color-muted: #71717a;
  --color-border: #ffffff;
  --color-accent: #eab308;
  --color-accent-2: #3b82f6;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 2px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    ink: '#000000',
    muted: '#71717a',
    line: '#ffffff',
    accent: '#eab308',
    accent2: '#3b82f6',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the hero ground in #000000 and keep headlines in white Inter at heavy weight
- **Do:** Use the white primary button as the single call to action above the fold
- **Do:** Frame sections with thin hairline borders rather than filled cards
- **Don't:** Don't add coloured gradients or glow behind the headline; the look is flat black
- **Don't:** Don't put more than one solid-colour button in the first screen
- **Don't:** Don't set body copy in pure white; use the muted grey (#71717a)

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
