# Design system — WA Control Center Workshop Landing Page Template

`SN-W00817` · ai-saas · light mode · Sinera Atlas theme `circuit` · language `fr`

## Direction

A dark, tech-forward workshop page on a near-black ground with a faint grid texture. A centred bold sans headline ends in a grey phrase, and a mint-green primary button (#059669) sits under it. The page reads as a dark control-room design.

**Mood:** tech-forward, dark, grid-based, focused

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Text | `#ffffff` | Headings and primary copy |
| Accent | `#059669` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#059669`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 30px · h3 16px · body 14px
- **Weights in use:** medium, semibold
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-lg` (8px)
- **Shadows:** `shadow-[0_0_20px_-5px_hsl(var(--primary)/0.5)]`, `shadow-[0_0_40px_hsl(var(--primary)/0.4)]`, `shadow-[0_0_20px_-10px_hsl(var(--primary)/0.3)]`
- **Content width:** `max-w-6xl`, `max-w-4xl`
- **Section padding:** `py-20`, `py-24`
- **Common gaps:** `gap-2`, `gap-4`, `gap-3`

**Primary button**

```html
<a class="inline-flex items-center gap-2 bg-foreground text-background px-4 py-2 rounded-lg text-xs font-semibold hover:opacity-90 transition-opacity">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Modal / overlay (`modal-overlay`)
3. Hero (`hero`)
4. Bento grid (`bento-grid`)
5. Pricing (`pricing`)
6. FAQ (`faq`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-text: #ffffff;
  --color-accent: #059669;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    ink: '#ffffff',
    accent: '#059669',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use mint green (#059669) for the primary button
- **Do:** Put a faint grid texture behind the hero
- **Do:** Set the headline in bold sans with the final phrase in grey
- **Don't:** Don't use light backgrounds for the hero
- **Don't:** Don't use green for large fills
- **Don't:** Don't add decorative icons to the grid

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
