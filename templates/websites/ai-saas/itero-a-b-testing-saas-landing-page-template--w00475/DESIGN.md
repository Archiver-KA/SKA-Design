# Design system — Itero A/B Testing SaaS Landing Page Template

`SN-W00475` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark, tech-forward growth page on a near-black ground, with cyan (#00e0e9) used for one highlighted phrase per headline and the primary button. Headlines are heavy and tightly set, with the final clause in mid-grey for contrast. A translucent scroll cue and a blurred glow frame the hero. The style is sharp and product-focused, with cyan as the only colour.

**Mood:** sharp, tech-forward, dark, product-focused, restrained

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#070707` | Page ground |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#333333` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#00e0e9` | Primary action and highlights |
| Second accent | `#22c55e` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#00c4cc` · `#9ca3af` · `#6b7280` · `#000000` · `#070707` · `#d1d5db` · `#00e0e9` · `#333333` · `#050505`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 20px · body 14px
- **Weights in use:** semibold, medium, bold
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded` (4px), `rounded-full` (9999px), `rounded-lg` (8px)
- **Shadows:** `shadow-[0_0_20px_rgba(0,196,204,0.3)]`, `shadow-[0_0_15px_rgba(0,196,204,0.3)]`, `shadow-[0_0_50px_rgba(0,196,204,0.15)]`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-3`, `gap-8`

**Primary button**

```html
<a class="w-full py-2.5 bg-[#00C4CC] hover:bg-[#00e0e9] text-black font-semibold text-sm rounded transition-all duration-300 shadow-[0_0_20px_rgba(0,196,204,0.3)] mt-2">…</a>
```

## Page structure

Blocks in page order:

1. Contact form (`contact-form`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Logo cloud (`logo-cloud`)
5. Pricing (`pricing`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN), GSAP, Unicorn Studio (WebGL scenes)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #070707;
  --color-text: #ffffff;
  --color-muted: #333333;
  --color-border: #ffffff;
  --color-accent: #00e0e9;
  --color-accent-2: #22c55e;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 4px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#070707',
    ink: '#ffffff',
    muted: '#333333',
    line: '#ffffff',
    accent: '#00e0e9',
    accent2: '#22c55e',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use cyan (#00e0e9) for one highlighted phrase per headline and the primary button
- **Do:** Set the final clause of headlines in mid-grey
- **Do:** Keep the page on the near-black ground with glass-style panels
- **Don't:** Don't use cyan for body text
- **Don't:** Don't add a second bright colour to the hero
- **Don't:** Don't set headlines in a light weight

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
