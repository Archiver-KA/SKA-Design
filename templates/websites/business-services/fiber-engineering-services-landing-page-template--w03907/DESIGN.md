# Design system — Fiber Engineering Services Landing Page Template

`SN-W03907` · business-services · dark mode · Sinera Atlas theme `route` · language `en`

## Direction

A cinematic dark page built on a full-bleed photograph of network hardware, dimmed to charcoal so the white type stands out. Headlines are set in a heavy uppercase sans at very large size, and a small wide-tracked label above them adds an engineered note. Body copy is small and grey, which keeps the focus on the bold display type. The photograph is the only colour source on the first screen.

**Mood:** cinematic, technical, bold, monochrome, engineered

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#171717` | Page ground |
| Surface | `#000000` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#ffffff` · `#6b7280` · `#9ca3af` · `#000000` · `#4b5563` · `#1a1a1a` · `#d1d5db` · `#171717` · `#f5f5f5` · `#0f0f0f`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** var(--font-body)
- **Body:** var(--font-body)
- **Loaded families:** Inter, Space Grotesk
- **Scale (largest breakpoint):** h2 48px · h3 30px · body 14px
- **Weights in use:** medium, light, semibold
- **Letter spacing:** `tracking-widest`, `tracking-tight-custom`

## Shape, spacing and layout

- **Corner radius:** `rounded` (4px), `rounded-full` (9999px), `rounded-sm` (2px)
- **Content width:** `max-w-[1600px]`, `max-w-[1400px]`
- **Section padding:** `py-32`, `py-12`
- **Common gaps:** `gap-2`, `gap-8`, `gap-4`

**Primary button**

```html
<a class="hidden md:block border border-white/20 px-5 py-2 text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-colors rounded-sm">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. About (`about`)
5. Services (`services`)
6. Call to action (`cta`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN), GSAP, Lenis smooth scroll
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #171717;
  --color-surface: #000000;
  --color-text: #ffffff;
  --color-muted: #6b7280;
  --color-border: #ffffff;
  --font-display: "var(--font-body)", sans-serif;
  --font-body: "var(--font-body)", sans-serif;
  --radius: 4px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#171717',
    surface: '#000000',
    ink: '#ffffff',
    muted: '#6b7280',
    line: '#ffffff',
  },
  fontFamily: { display: ['var(--font-body)'], sans: ['var(--font-body)'] },
} }
```

## Do and don't

- **Do:** Set headlines in heavy uppercase at very large size, with a small wide-tracked label above.
- **Do:** Keep a dark overlay on the hero photograph so white type reads clearly.
- **Do:** Keep the interface monochrome; let the photograph provide the only colour.
- **Don't:** Don't add a brand colour to the hero; the look is black, white and grey.
- **Don't:** Don't place body copy over bright areas of the photograph.
- **Don't:** Don't set the display headline in lowercase; the uppercase is the signature.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
