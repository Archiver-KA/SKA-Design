# Design system — Ciberseguridad SaaS Landing Page Template

`SN-W00280` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `es`

## Direction

A dark, security-focused hero on a near-black ground (#171717): a bold white Inter headline with the second line faded to a grey gradient. A large 3D shield render carries the visual weight on the right, with green status LEDs (#22c55e) as the only accent, and the white primary button sits in a dark email field. The effect is serious and high-contrast rather than playful.

**Mood:** serious, dark, high contrast, technical

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#171717` | Page ground |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#525252` | Secondary copy, captions |
| Border | `#e5e5e5` | Hairlines, dividers, outlines |
| Accent | `#22c55e` | Primary action and highlights |
| Second accent | `#06b6d4` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#171717` · `#737373` · `#e5e5e5` · `#a3a3a3` · `#06b6d4` · `#22c55e` · `#f5f5f5` · `#fafafa` · `#525252`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Geist
- **Body:** Geist
- **Loaded families:** Roboto, Montserrat, Poppins, Playfair Display, Instrument Serif, Merriweather
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 18px · body 14px
- **Weights in use:** semibold, bold, medium
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-2xl` (16px)
- **Shadows:** `shadow-2xl`, `shadow-lg`, `shadow-sm`
- **Content width:** `max-w-7xl`, `max-w-[200px]`
- **Section padding:** `py-32`, `py-16`
- **Common gaps:** `gap-2`, `gap-3`, `gap-8`

**Primary button**

```html
<a class="group relative flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold text-black transition-all hover:bg-neutral-200">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Stats band (`stats`)
4. Feature grid (`features`)
5. Marquee (`marquee`)
6. Call to action (`cta`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #171717;
  --color-text: #ffffff;
  --color-muted: #525252;
  --color-border: #e5e5e5;
  --color-accent: #22c55e;
  --color-accent-2: #06b6d4;
  --font-display: "Geist", sans-serif;
  --font-body: "Geist", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#171717',
    ink: '#ffffff',
    muted: '#525252',
    line: '#e5e5e5',
    accent: '#22c55e',
    accent2: '#06b6d4',
  },
  fontFamily: { display: ['Geist'], sans: ['Geist'] },
} }
```

## Do and don't

- **Do:** Set the hero ground in #171717 and the headline in white Inter
- **Do:** Use green (#22c55e) only for status lights and small live indicators
- **Do:** Keep the email field and white button together as one input group
- **Don't:** Don't use green for the headline or large fills
- **Don't:** Don't set the Spanish body copy on the grey gradient; keep it on the dark ground
- **Don't:** Don't add a light section into the hero; the dark ground is the identity

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
