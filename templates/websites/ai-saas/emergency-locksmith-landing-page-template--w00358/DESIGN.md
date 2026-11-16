# Design system — Emergency Locksmith Landing Page Template

`SN-W00358` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `fr`

## Direction

A dark navy emergency-services page with a serif headline, where the second phrase, Intervention Urgente, is set in muted gold (#ccac6e). A small red status pill above the headline signals urgency. Gold solid and gold-outlined buttons sit side by side, and the restrained palette makes gold read as trust and speed rather than luxury.

**Mood:** trustworthy, urgent, composed, dark

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0d1b2a` | Page ground |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#a0afba` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#ccac6e` | Primary action and highlights |
| Second accent | `#1b263b` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#ccac6e` · `#a0afba` · `#0d1b2a` · `#1b263b` · `#e63946` · `#e9c787`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Montserrat
- **Scale (largest breakpoint):** h1 60px · h2 36px · h3 14px · body 14px
- **Weights in use:** semibold, light, medium
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-lg` (8px), `rounded-xl` (12px), `rounded-full` (9999px)
- **Shadows:** `shadow-2xl`, `shadow-[0_8px_30px_-4px_rgba(204,172,110,0.3)]`, `shadow-[0_0_8px_rgba(230,57,70,0.8)]`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-24`, `py-12`
- **Common gaps:** `gap-4`, `gap-2`, `gap-8`

**Primary button**

```html
<a class="bg-[#CCAC6E] text-[#0D1B2A] font-['Inter'] font-semibold text-sm px-6 py-2.5 rounded-lg hover:bg-[#e9c787] hover:-translate-y-0.5 transition-all duration-300 shadow-[0_8px_30px_-4px_rgba(204,172,110,0.3)] flex items-center gap-2">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Services (`services`)
5. FAQ (`faq`)
6. Call to action (`cta`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #0d1b2a;
  --color-text: #ffffff;
  --color-muted: #a0afba;
  --color-border: #ffffff;
  --color-accent: #ccac6e;
  --color-accent-2: #1b263b;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 8px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0d1b2a',
    ink: '#ffffff',
    muted: '#a0afba',
    line: '#ffffff',
    accent: '#ccac6e',
    accent2: '#1b263b',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the urgent phrase in gold (#ccac6e) on the navy ground
- **Do:** Make the primary button solid gold with dark text and the secondary gold-outlined
- **Do:** Use the red (#e63946) only for the small urgency pill
- **Don't:** Don't use red for buttons; keep it to the status pill
- **Don't:** Don't add light backgrounds to the hero
- **Don't:** Don't drop the serif from the headline; it is the page's identity

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
