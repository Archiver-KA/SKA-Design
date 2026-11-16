# Design system — Nexus SaaS Landing Page Template

`SN-W00585` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark, editorial search page on a near-black ground (#030303) with a warm orange glow at the top edge. The hero headline is large white text in a serif face. Orange (#ff6400) is the only accent and appears in the kicker label and the nav button tint, not in large fills.

**Mood:** editorial, dark, warm, restrained, serif-led

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#030303` | Page ground |
| Surface | `#070707` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#a1a1aa` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#ff6400` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#ff6400` · `#ffa500` · `#a1a1aa` · `#71717a` · `#070707` · `#d4d4d8` · `#ffedd5` · `#090909` · `#050505`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** JetBrains Mono
- **Body:** JetBrains Mono
- **Loaded families:** JetBrains Mono, Newsreader
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 24px · body 12px
- **Weights in use:** medium, semibold
- **Letter spacing:** `tracking-tight`, `tracking-[0.18rem]`

## Shape, spacing and layout

- **Corner radius:** `rounded-xl` (12px), `rounded-lg` (8px), `rounded-2xl` (16px)
- **Shadows:** `shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]`, `shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]`, `shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]`
- **Content width:** `max-w-6xl`, `max-w-2xl`
- **Section padding:** `py-12`, `py-20`
- **Common gaps:** `gap-3`, `gap-2`, `gap-4`

**Primary button**

```html
<a class="rounded-lg px-3 py-2 text-xs font-medium text-orange-100 bg-[#FF6400]/10 border border-[#FF6400]/20 transition-all duration-300 hover:bg-[#FF6400]/15">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Logo cloud (`logo-cloud`)
5. Bento grid (`bento-grid`)
6. Feature grid (`features`)
7. Timeline (`timeline`)
8. Product grid (`product-grid`)
9. Gallery / portfolio (`gallery-portfolio`)
10. About (`about`)
11. Pricing (`pricing`)
12. Testimonials (`testimonials`)
13. Contact form (`contact-form`)
14. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels)
- **Libraries:** Tailwind CSS (CDN), GSAP, Lenis smooth scroll, AOS scroll reveal
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #030303;
  --color-surface: #070707;
  --color-text: #ffffff;
  --color-muted: #a1a1aa;
  --color-border: #ffffff;
  --color-accent: #ff6400;
  --font-display: "JetBrains Mono", sans-serif;
  --font-body: "JetBrains Mono", sans-serif;
  --radius: 12px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#030303',
    surface: '#070707',
    ink: '#ffffff',
    muted: '#a1a1aa',
    line: '#ffffff',
    accent: '#ff6400',
  },
  fontFamily: { display: ['JetBrains Mono'], sans: ['JetBrains Mono'] },
} }
```

## Do and don't

- **Do:** Set the hero headline large in white (#ffffff) on the near-black ground (#030303) in a serif face.
- **Do:** Use orange (#ff6400) for the small kicker label and the nav button tint only.
- **Do:** Keep the warm glow at the top edge and leave the rest of the ground flat.
- **Don't:** Don't set the headline in a sans-serif; it is a serif.
- **Don't:** Don't fill buttons or panels with orange; it is a text and tint accent.
- **Don't:** Don't use the lighter amber (#ffa500) on the first screen.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
