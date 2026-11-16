# Design system — AI Career Platform Landing Page Template

`SN-W00063` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A deep navy page (#0f172a) with a large white sans headline and a blue highlight on the last phrase. The nav is a dark strip with uppercase labels and a solid light start button. On the right, a dark tilted card sits in the background, which gives depth without bright colour. The overall tone is calm and structured.

**Mood:** calm, navy, structured, modern

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0f172a` | Page ground |
| Surface | `#0f172a` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#0f172a` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#2563eb` | Primary action and highlights |
| Second accent | `#fbbf24` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#6366f1` · `#0f172a` · `#2563eb` · `#1e293b` · `#fbbf24` · `#334155` · `#64748b` · `#4f46e5` · `#475569`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Poppins
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 18px · body 14px
- **Weights in use:** medium, light, semibold
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded` (4px), `rounded-full` (9999px), `rounded-lg` (8px)
- **Shadows:** `shadow-[0_0_20px_rgba(99,102,241,0.3)]`, `shadow-lg`, `shadow-[0_0_80px_rgba(99,102,241,0.15)]`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-32`
- **Common gaps:** `gap-3`, `gap-2`, `gap-4`

**Primary button**

```html
<a class="w-full sm:w-auto px-8 py-4 bg-[#6366F1] text-white text-sm font-medium hover:bg-[#4F46E5] transition-colors font-heading shadow-lg rounded-sm">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Stats band (`stats`)
4. Timeline (`timeline`)
5. Feature grid (`features`)
6. Comparison (`comparison`)
7. Process / steps (`how-it-works`)
8. Pricing (`pricing`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #0f172a;
  --color-surface: #0f172a;
  --color-text: #ffffff;
  --color-muted: #0f172a;
  --color-border: #ffffff;
  --color-accent: #2563eb;
  --color-accent-2: #fbbf24;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 4px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0f172a',
    surface: '#0f172a',
    ink: '#ffffff',
    muted: '#0f172a',
    line: '#ffffff',
    accent: '#2563eb',
    accent2: '#fbbf24',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the page ground deep navy (#0f172a)
- **Do:** Use the blue highlight on the last headline phrase only
- **Do:** Keep the tilted card in the background, not in front of the copy
- **Don't:** Don't use pure black for the page
- **Don't:** Don't add a second highlight phrase
- **Don't:** Don't make the nav links brighter than the headline

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
