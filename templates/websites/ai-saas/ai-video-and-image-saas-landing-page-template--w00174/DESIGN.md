# Design system — AI Video & Image SaaS Landing Page Template

`SN-W00174` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

Dark hero on pure black (#000000) with a violet glow behind the centred headline and a violet primary button (#8a2be2). The white Outfit headline is large and centred, with a light grey subline and an outlined secondary button beside the primary. Colour appears only in the button and the soft violet haze behind the type.

**Mood:** dark, cinematic, soft-glow, centred

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#0a0a0a` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#e0e0e0` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#8a2be2` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#8a2be2` · `#e0e0e0` · `#000000` · `#0a0a0a` · `#9ca3af` · `#4a148c` · `#d8b4fe` · `#7b1fa2` · `#333333`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Outfit
- **Body:** Outfit
- **Loaded families:** Outfit, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 72px · h3 36px · body 12px
- **Weights in use:** semibold, medium, light
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-xl` (12px), `rounded-md` (6px), `rounded-full` (9999px)
- **Shadows:** `shadow-[#8A2BE2]/10`, `shadow-sm`, `shadow-md`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-32`, `py-16`
- **Common gaps:** `gap-3`, `gap-6`, `gap-8`

**Primary button**

```html
<a class="text-sm font-medium bg-[#8A2BE2] text-white px-4 py-2 rounded-full hover:bg-[#7B1FA2] transition-all shadow-sm shadow-[#8A2BE2]/20">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Marquee (`marquee`)
4. Video / media (`video-media`)
5. Pricing (`pricing`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** inline SVG

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #0a0a0a;
  --color-text: #ffffff;
  --color-muted: #e0e0e0;
  --color-border: #ffffff;
  --color-accent: #8a2be2;
  --font-display: "Outfit", sans-serif;
  --font-body: "Outfit", sans-serif;
  --radius: 12px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#0a0a0a',
    ink: '#ffffff',
    muted: '#e0e0e0',
    line: '#ffffff',
    accent: '#8a2be2',
  },
  fontFamily: { display: ['Outfit'], sans: ['Outfit'] },
} }
```

## Do and don't

- **Do:** Use the violet (#8a2be2) for the primary button and the glow behind the hero only
- **Do:** Set headlines in Outfit, centred, in white at large size
- **Do:** Pair the violet primary button with an outlined secondary button
- **Don't:** Don't use violet for body text; it is reserved for buttons and glow
- **Don't:** Don't put a light section into the hero; the page stays black
- **Don't:** Don't add a second accent colour; the page uses violet and neutrals only

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
