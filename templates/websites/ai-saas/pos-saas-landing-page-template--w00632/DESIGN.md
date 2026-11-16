# Design system — POS SaaS Landing Page Template

`SN-W00632` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A near-black retail software page where the headline does the decorating. The word Intelligence fades from white into lime (#a3e635), and the second line Reimagined drops to muted grey, so the page has one gradient and one accent. Manrope at 128px sets the hero, and a lime primary button sits beside a white outlined secondary button.

**Mood:** futuristic, dark, gradient-led, retail, confident

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#020402` | Page ground |
| Surface | `#3f3f46` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#a3e635` | Primary action and highlights |
| Second accent | `#064e3b` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#a3e635` · `#71717a` · `#84cc16` · `#3f3f46` · `#bef264` · `#a1a1aa` · `#020402` · `#365314` · `#d4d4d8`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Manrope
- **Body:** Manrope
- **Loaded families:** Manrope
- **Scale (largest breakpoint):** h1 128px · h2 60px · h3 20px · body 14px
- **Weights in use:** medium, semibold, light
- **Letter spacing:** `tracking-tighter`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-3xl` (24px)
- **Shadows:** `shadow-[0_0_10px_rgba(190,242,100,0.5)]`, `shadow-[0_0_10px_rgba(190,242,100,0.4)]`, `shadow-[0_0_10px_#bef264]`
- **Content width:** `max-w-7xl`, `max-w-5xl`
- **Section padding:** `py-32`, `py-24`
- **Common gaps:** `gap-2`, `gap-3`, `gap-6`

**Primary button**

```html
<a class="text-xs font-semibold text-[#020402] bg-lime-400 px-5 py-2.5 rounded-full hover:bg-lime-300 transition-colors hover-trigger shadow-[0_0_15px_rgba(190,242,100,0.3)]">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Marquee (`marquee`)
5. Feature grid (`features`)
6. Testimonials (`testimonials`)
7. Pricing (`pricing`)
8. FAQ (`faq`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #020402;
  --color-surface: #3f3f46;
  --color-text: #ffffff;
  --color-muted: #71717a;
  --color-border: #ffffff;
  --color-accent: #a3e635;
  --color-accent-2: #064e3b;
  --font-display: "Manrope", sans-serif;
  --font-body: "Manrope", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#020402',
    surface: '#3f3f46',
    ink: '#ffffff',
    muted: '#71717a',
    line: '#ffffff',
    accent: '#a3e635',
    accent2: '#064e3b',
  },
  fontFamily: { display: ['Manrope'], sans: ['Manrope'] },
} }
```

## Do and don't

- **Do:** Use the lime gradient (white to #a3e635) on one headline word only
- **Do:** Set the hero headline in Manrope at display size on black (#020402)
- **Do:** Keep the primary button lime (#a3e635) and the secondary button white-outlined
- **Don't:** Don't add gradients to body text or cards
- **Don't:** Don't use lime for body copy
- **Don't:** Don't use the dark green (#064e3b) as a visible background; it does not appear in the hero

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
