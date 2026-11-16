# Design system — Server-Side Lead Tracking Landing Page Template

`SN-W00705` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A quiet dark SaaS hero: a near-black ground (#0a0a0a), a centred two-line headline in white over grey, and a white primary button beside a dark outlined secondary. The product is shown as a dark dashboard panel below the fold, so the interface itself serves as the illustration. Indigo appears only on the logo mark, and the rest is monochrome, which keeps attention on the data.

**Mood:** restrained, monochrome, product-led, precise, dark

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Surface | `#000000` | Cards, panels, raised areas |
| Text | `#eeeeee` | Headings and primary copy |
| Muted text | `#888888` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#ffffff` | Primary action and highlights |
| Second accent | `#10b981` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#888888` · `#000000` · `#6366f1` · `#10b981` · `#34d399` · `#4f46e5` · `#3b82f6` · `#0a0a0a` · `#22c55e`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 18px · body 12px
- **Weights in use:** medium, light, bold
- **Letter spacing:** `tracking-wider`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded` (4px), `rounded-xl` (12px)
- **Shadows:** `shadow-2xl`, `shadow-[0_0_15px_rgba(59,130,246,0.5)]`, `shadow-[0_0_20px_rgba(255,255,255,0.15)]`
- **Content width:** `max-w-7xl`, `max-w-5xl`
- **Section padding:** `py-32`
- **Common gaps:** `gap-2`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="bg-white text-black px-4 py-2 rounded-full text-xs font-medium hover:bg-gray-200 transition-colors border border-transparent hover:border-white/20">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Integrations (`integrations`)
4. Feature grid (`features`)
5. Pricing (`pricing`)
6. Newsletter signup (`newsletter`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #0a0a0a;
  --color-surface: #000000;
  --color-text: #eeeeee;
  --color-muted: #888888;
  --color-border: #ffffff;
  --color-accent: #ffffff;
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
    ink: '#eeeeee',
    muted: '#888888',
    line: '#ffffff',
    accent: '#ffffff',
    accent2: '#10b981',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Make the primary button white with dark text and keep secondary buttons outlined.
- **Do:** Show the product as a dark dashboard panel rather than an illustration.
- **Do:** Keep the palette monochrome and use indigo only on the logo mark.
- **Don't:** Don't add coloured gradients to the headline; its grey-on-white treatment is the look.
- **Don't:** Don't introduce a light background section into this dark layout.
- **Don't:** Don't fill buttons with indigo; the call to action is white.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
