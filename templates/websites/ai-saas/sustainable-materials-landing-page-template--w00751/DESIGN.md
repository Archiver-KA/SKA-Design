# Design system — Sustainable Materials Landing Page Template

`SN-W00751` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `ko`

## Direction

A near-black hero (#050505) with a huge bold white sans wordmark, GROUND, set over a dim photograph of coffee beans. The second word, POLY, is set in italic tan (#c0a080) off to the right and cropped at the edge, so the accent works as a large display device rather than a UI colour. Secondary text and the outlined buttons are small and quiet beneath the title.

**Mood:** bold, dark, industrial, editorial

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#050505` | Page ground |
| Surface | `#0a0a0a` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#9ca3af` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#c0a080` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#c0a080` · `#050505` · `#9ca3af` · `#0a0a0a` · `#d1d5db` · `#6b7280` · `#000000` · `#4b5563`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Space Grotesk
- **Scale (largest breakpoint):** h2 36px · h3 16px · body 16px
- **Weights in use:** light, normal, medium
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-lg` (8px)
- **Shadows:** `shadow-[0_50px_100px_rgba(0,0,0,0.9)]`, `shadow-[0_0_30px_rgba(192,160,128,0.05)]`
- **Content width:** `max-w-[1600px]`, `max-w-5xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-4`, `gap-8`, `gap-16`

**Primary button**

```html
<a class="w-full py-3 bg-[#C0A080] text-[#050505] text-xs font-medium tracking-widest uppercase hover:bg-white hover:text-[#050505] transition-colors rounded-full">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Process / steps (`how-it-works`)
4. Feature grid (`features`)
5. Pricing (`pricing`)
6. FAQ (`faq`)
7. Contact form (`contact-form`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN), GSAP, Lenis smooth scroll
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #050505;
  --color-surface: #0a0a0a;
  --color-text: #ffffff;
  --color-muted: #9ca3af;
  --color-border: #ffffff;
  --color-accent: #c0a080;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#050505',
    surface: '#0a0a0a',
    ink: '#ffffff',
    muted: '#9ca3af',
    line: '#ffffff',
    accent: '#c0a080',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the brand words in a heavy sans at very large size, one in white and one in italic tan (#c0a080)
- **Do:** Keep the photograph dark and low-contrast behind the headline
- **Do:** Use outlined buttons with thin tan borders for hero actions
- **Don't:** Don't use the tan accent on body text; it is for display words only
- **Don't:** Don't brighten the background photograph behind the title
- **Don't:** Don't add a solid filled button in the hero

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
