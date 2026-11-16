# Design system — WhatsApp SaaS Landing Page Template

`SN-W00834` · ai-saas · light mode · Sinera Atlas theme `circuit` · language `pt-BR`

## Direction

A white hero with a faint dot grid across the background and a dark navy headline in Inter. The phrase 'WhatsApp.' is set in a bold orange (#ff6b00), and that orange is the only accent, with the primary button in dark ink. Copy is grey and the layout is open, so the page reads as direct and practical, and the orange is the single point of emphasis.

**Mood:** direct, practical, open, light

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#0f172a` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#e5e3dc` | Hairlines, dividers, outlines |
| Accent | `#ff6b00` | Primary action and highlights |
| Second accent | `#ff6b00` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#0f172a` · `#9ca3af` · `#e5e3dc` · `#6b7280` · `#10b981` · `#ff6b00` · `#d1d5db` · `#f5f4f0` · `#475569`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Manrope
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 36px · body 18px
- **Weights in use:** light, medium, bold
- **Letter spacing:** `tracking-tight`, `tracking-[0.1em]`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded` (4px), `rounded-xl` (12px)
- **Shadows:** `shadow-sm`, `shadow-[0_8px_24px_rgba(255,107,0,0.25)]`, `shadow-[0_8px_32px_rgba(0,0,0,0.12)]`
- **Content width:** `max-w-[1400px]`, `max-w-[800px]`
- **Section padding:** `py-32`, `py-24`
- **Common gaps:** `gap-3`, `gap-4`, `gap-2`

**Primary button**

```html
<a class="inline-flex items-center justify-center font-medium text-sm text-white bg-[#0F172A] hover:bg-[#1E293B] px-5 py-2.5 rounded-full transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Stats band (`stats`)
5. Call to action (`cta`)
6. FAQ (`faq`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), AOS scroll reveal
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #ffffff;
  --color-text: #0f172a;
  --color-muted: #6b7280;
  --color-border: #e5e3dc;
  --color-accent: #ff6b00;
  --color-accent-2: #ff6b00;
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
    surface: '#ffffff',
    ink: '#0f172a',
    muted: '#6b7280',
    line: '#e5e3dc',
    accent: '#ff6b00',
    accent2: '#ff6b00',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the emphasised word in bold orange (#ff6b00), one per headline
- **Do:** Keep the hero on white with the faint dot grid behind it
- **Do:** Use dark ink (#0f172a) for the primary button and orange for highlights only
- **Don't:** Don't set long body copy in orange
- **Don't:** Don't remove the dot grid to make the hero plainer
- **Don't:** Don't use the green from the template palette in the hero

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
