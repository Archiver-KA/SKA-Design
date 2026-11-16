# Design system — Kindling AI Operations Landing Page 

`SN-W00482` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A bold, high-contrast operations page: a near-black ground with a large white headline and an orange (#fe4c00) block behind the key phrase, which is the page's signature. The same orange fills the primary button, so the colour marks the action and the highlight only. Type is set heavy and large, and body copy is short light grey.

**Mood:** bold, high-contrast, energetic, direct, dark

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#000000` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#d4d4d8` | Secondary copy, captions |
| Border | `#27272a` | Hairlines, dividers, outlines |
| Accent | `#fe4c00` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#fe4c00` · `#000000` · `#18181b` · `#a1a1aa` · `#d4d4d8` · `#27272a` · `#3f3f46` · `#71717a` · `#e4e4e7`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Space Grotesk
- **Body:** Space Grotesk
- **Loaded families:** Space Grotesk, Space Mono, Inter, Montserrat, Plus Jakarta Sans, Playfair Display
- **Scale (largest breakpoint):** h1 96px · h2 60px · h3 20px · body 20px
- **Weights in use:** medium, light, normal
- **Letter spacing:** `tracking-tight`, `tracking-normal`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-3xl` (24px), `rounded-2xl` (16px)
- **Shadows:** `shadow-2xl`, `shadow-black/50`, `shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)]`
- **Content width:** `max-w-7xl`, `max-w-6xl`
- **Section padding:** `py-32`
- **Common gaps:** `gap-4`, `gap-6`, `gap-2`

**Primary button**

```html
<a class="hover:bg-[#CC0000] transition-all duration-300 cursor-pointer whitespace-nowrap text-sm sm:text-base font-medium text-white bg-[#FE4C00] w-fit rounded-full px-5 sm:px-8 py-3.5">…</a>
```

## Page structure

Blocks in page order:

1. Video / media (`video-media`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Process / steps (`how-it-works`)
5. Call to action (`cta`)
6. Stats band (`stats`)
7. Marquee (`marquee`)
8. FAQ (`faq`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** inline SVG

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #000000;
  --color-text: #ffffff;
  --color-muted: #d4d4d8;
  --color-border: #27272a;
  --color-accent: #fe4c00;
  --font-display: "Space Grotesk", sans-serif;
  --font-body: "Space Grotesk", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#000000',
    ink: '#ffffff',
    muted: '#d4d4d8',
    line: '#27272a',
    accent: '#fe4c00',
  },
  fontFamily: { display: ['Space Grotesk'], sans: ['Space Grotesk'] },
} }
```

## Do and don't

- **Do:** Set one headline phrase on an orange (#fe4c00) block with white text on top
- **Do:** Use the same orange only for the primary button and the highlight
- **Do:** Keep hero copy centred and under three lines
- **Don't:** Don't use orange for body text
- **Don't:** Don't add gradients behind the headline
- **Don't:** Don't use light grey panels on the black ground

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
