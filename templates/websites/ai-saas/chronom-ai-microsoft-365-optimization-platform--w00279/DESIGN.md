# Design system — Chronom AI | Microsoft 365 Optimization platform

`SN-W00279` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark, futuristic SaaS hero on near-black (#0a0a0a): a large white Inter headline with the second line in a blue-to-violet gradient (#566df3). The indigo-blue is the single accent, used for the nav button, the gradient line and the primary CTA, while the secondary button is a dark outline. A faint glow and small pill badge add a sense of depth without any extra colour.

**Mood:** futuristic, dark, gradient-led, polished

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Surface | `#000000` | Cards, panels, raised areas |
| Text | `#f5f5f5` | Headings and primary copy |
| Muted text | `#ffffff` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#566df3` | Primary action and highlights |
| Second accent | `#10b981` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#566df3` · `#737373` · `#a3a3a3` · `#000000` · `#10b981` · `#ef4444` · `#0a0a0a` · `#f87171` · `#34d399`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 24px · body 14px
- **Weights in use:** medium, semibold, normal
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-lg` (8px)
- **Shadows:** `shadow-2xl`, `shadow-inner`, `shadow-[0_0_15px_-3px_rgba(86,109,243,0.4)]`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-3`, `gap-6`

**Primary button**

```html
<a class="text-sm font-medium bg-[#566DF3] hover:bg-[#485cd4] text-white px-4 py-2 rounded-full transition-all shadow-[0_0_15px_-3px_rgba(86,109,243,0.4)]">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Logo cloud (`logo-cloud`)
5. Pricing (`pricing`)
6. Bento grid (`bento-grid`)
7. Video / media (`video-media`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #0a0a0a;
  --color-surface: #000000;
  --color-text: #f5f5f5;
  --color-muted: #ffffff;
  --color-border: #ffffff;
  --color-accent: #566df3;
  --color-accent-2: #10b981;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0a0a0a',
    surface: '#000000',
    ink: '#f5f5f5',
    muted: '#ffffff',
    line: '#ffffff',
    accent: '#566df3',
    accent2: '#10b981',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the hero ground in #0a0a0a and the headline in white Inter
- **Do:** Use the indigo (#566df3) for the nav button and the gradient headline line
- **Do:** Keep the secondary CTA as a dark outline beside the white primary
- **Don't:** Don't use the green (#10b981) for buttons or the headline; it does not appear in the hero
- **Don't:** Don't add more gradient stops beyond the blue-to-violet pair
- **Don't:** Don't set the subline in full white; use the grey

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
