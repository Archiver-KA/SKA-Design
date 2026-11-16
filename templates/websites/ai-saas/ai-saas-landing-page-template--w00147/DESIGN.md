# Design system — AI SaaS Landing Page Template

`SN-W00147` · ai-saas · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

Light, calm B2B page on off-white with a large sans headline in deep forest green (#0d3c1f), its second line in a softer grey-green (#4a6b5a). Buttons are solid forest green with spaced uppercase labels, and a blinking caret after the headline gives a live, software feel. The page is restrained and organic, with no imagery in the first screen.

**Mood:** calm, organic, restrained, professional

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f3f4f6` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#111827` | Headings and primary copy |
| Muted text | `#4a6b5a` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#0d3c1f` | Primary action and highlights |
| Second accent | `#f69066` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#0d3c1f` · `#3d7f61` · `#4a6b5a` · `#faf9f6` · `#f69066` · `#111827` · `#6b7280` · `#eaefeb` · `#f5f5f3`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Playfair Display, &quot
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 20px · body 14px
- **Weights in use:** semibold, medium, normal
- **Letter spacing:** `tracking-tight`, `tracking-[0.15em]`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-xl` (12px)
- **Shadows:** `shadow-sm`, `shadow-[0_4px_24px_rgba(13,60,31,0.06)]`, `shadow-[0_8px_32px_rgba(0,0,0,0.2)]`
- **Content width:** `max-w-3xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-[100px]`
- **Common gaps:** `gap-4`, `gap-2`, `gap-6`

**Primary button**

```html
<a class="inline-flex items-center justify-center text-white px-5 py-2.5 rounded text-xs font-medium tracking-[0.15em] uppercase transition-all shadow-[0_0_0_1px_rgba(0,0,0,0.05),0_2px_4px_rgba(0,0,0,0.1)] hover:opacity-90 bg-[#0D3C1F]">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Process / steps (`how-it-works`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #f3f4f6;
  --color-surface: #ffffff;
  --color-text: #111827;
  --color-muted: #4a6b5a;
  --color-border: #ffffff;
  --color-accent: #0d3c1f;
  --color-accent-2: #f69066;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f3f4f6',
    surface: '#ffffff',
    ink: '#111827',
    muted: '#4a6b5a',
    line: '#ffffff',
    accent: '#0d3c1f',
    accent2: '#f69066',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headlines in a heavy sans in forest green (#0d3c1f), with the subline in grey-green (#4a6b5a)
- **Do:** Use spaced uppercase labels on the solid green buttons
- **Do:** Keep the blinking caret after the headline as the only motion cue
- **Don't:** Don't add bright accent colours to the first screen
- **Don't:** Don't add drop shadows to the buttons
- **Don't:** Don't put imagery above the headline

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
