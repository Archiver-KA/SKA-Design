# Design system — Fintech Funding Landing Page Template

`SN-W00952` · fintech-crypto · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A white page with headlines and the logo in deep navy (#0a1f44) and a teal (#19b6a8) used for the primary button and small highlights. The headline is tight, heavy Inter Tight at large size, with short factual lines below. Content sits on a light tinted surface (#f5f7fa), so sections read as calm, factual blocks.

**Mood:** factual, corporate, clear, structured, trustworthy

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#f5f7fa` | Cards, panels, raised areas |
| Text | `#2c2c2c` | Headings and primary copy |
| Border | `#f3f4f6` | Hairlines, dividers, outlines |
| Accent | `#0a1f44` | Primary action and highlights |
| Second accent | `#19b6a8` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#0a1f44` · `#19b6a8` · `#2c2c2c` · `#f3f4f6` · `#f5f7fa` · `#159a8e` · `#ccd1d8` · `#0047ab` · `#e5e7eb`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter Tight
- **Body:** Inter
- **Loaded families:** Inter Tight, Inter
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 20px · body 14px
- **Weights in use:** semibold, medium, bold
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-xl` (12px), `rounded-full` (9999px), `rounded-[10px]` (10px)
- **Shadows:** `shadow-lg`, `shadow-sm`, `shadow-teal/20`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-2`, `gap-8`, `gap-6`

**Primary button**

```html
<a class="bg-teal hover:bg-[#159A8E] text-white px-8 py-4 rounded-[10px] font-medium transition-all hover:-translate-y-0.5 shadow-lg shadow-teal/20">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Logo cloud (`logo-cloud`)
4. Feature grid (`features`)
5. Articles (`blog-articles`)
6. Stats band (`stats`)
7. About (`about`)
8. Call to action (`cta`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #f5f7fa;
  --color-text: #2c2c2c;
  --color-border: #f3f4f6;
  --color-accent: #0a1f44;
  --color-accent-2: #19b6a8;
  --font-display: "Inter Tight", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 12px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#f5f7fa',
    ink: '#2c2c2c',
    line: '#f3f4f6',
    accent: '#0a1f44',
    accent2: '#19b6a8',
  },
  fontFamily: { display: ['Inter Tight'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use teal (#19b6a8) on the primary call to action only.
- **Do:** Set headlines in Inter Tight, heavy, in navy (#0a1f44).
- **Do:** Group content on the tinted surface (#f5f7fa) with generous spacing.
- **Don't:** Don't use teal for long text.
- **Don't:** Don't add decorative glow shapes behind content.
- **Don't:** Don't use more than one CTA colour per section.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
