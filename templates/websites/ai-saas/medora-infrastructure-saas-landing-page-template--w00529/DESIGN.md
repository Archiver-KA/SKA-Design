# Design system — Medora Infrastructure SaaS Landing Page Template

`SN-W00529` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark, warm SaaS page on near-black (#0a0a0a) with large white headlines whose key words are set in orange (#fb923c). Pill-shaped tags and buttons, with a solid orange primary and a dark outline secondary, keep the hierarchy clear. The orange appears only on headline words and the primary action, so the page reads as confident and infrastructure-focused.

**Mood:** confident, warm, dark, infrastructure, focused

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Surface | `#171717` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#ffffff` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#fb923c` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#f97316` · `#a3a3a3` · `#fb923c` · `#171717` · `#000000` · `#fdba74` · `#0a0a0a` · `#f59e0b` · `#737373`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** var(--font-sans)
- **Body:** var(--font-sans)
- **Loaded families:** Instrument Serif, Inter, Space Grotesk, Geist
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 20px · body 14px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-xl` (12px)
- **Shadows:** `shadow-[0_0_20px_rgba(255,255,255,0.1)]`, `shadow-xl`, `shadow-2xl`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-4`, `gap-1`

**Primary button**

```html
<a class="relative border-gradient bg-transparent hover:bg-white/10 transition-colors text-xs font-semibold text-white rounded-full px-4 py-1.5">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Integrations (`integrations`)
4. Feature grid (`features`)
5. Marquee (`marquee`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Unicorn Studio (WebGL scenes), Spline 3D
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #0a0a0a;
  --color-surface: #171717;
  --color-text: #ffffff;
  --color-muted: #ffffff;
  --color-border: #ffffff;
  --color-accent: #fb923c;
  --font-display: "var(--font-sans)", sans-serif;
  --font-body: "var(--font-sans)", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0a0a0a',
    surface: '#171717',
    ink: '#ffffff',
    muted: '#ffffff',
    line: '#ffffff',
    accent: '#fb923c',
  },
  fontFamily: { display: ['var(--font-sans)'], sans: ['var(--font-sans)'] },
} }
```

## Do and don't

- **Do:** Set the key word of each headline in orange (#fb923c).
- **Do:** Use a solid orange pill for the primary action and a dark outline for the secondary.
- **Do:** Keep the page on the near-black ground with grey supporting text.
- **Don't:** Don't set the page on an orange ground; it stays near-black.
- **Don't:** Don't use the orange for body copy.
- **Don't:** Don't add a second bright hue to the headline.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
