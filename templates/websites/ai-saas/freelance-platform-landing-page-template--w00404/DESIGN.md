# Design system — Freelance Platform Landing Page Template

`SN-W00404` · ai-saas · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A light hero over a soft pale sky-blue and blush gradient, with a large heavy near-black sans headline in two centred lines. The primary action is a solid near-black pill with white text, and the secondary is a plain ghost button. Below the copy, a light dashboard mockup with a sidebar and cards sits in a pale frame, so the page reads as an approachable productivity app.

**Mood:** approachable, light, soft, productive, clean

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#1a1a1a` | Cards, panels, raised areas |
| Text | `#0f172a` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#f1f5f9` | Hairlines, dividers, outlines |
| Accent | `#1e293b` | Primary action and highlights |
| Second accent | `#22c55e` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#0f172a` · `#f1f5f9` · `#1a1a1a` · `#1e293b` · `#64748b` · `#475569` · `#334155` · `#e2e8f0` · `#94a3b8`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Nunito
- **Body:** Inter
- **Loaded families:** Inter, Nunito, Geist, Roboto, Montserrat, Poppins
- **Scale (largest breakpoint):** h1 80px · h2 48px · h3 18px · body 17px
- **Weights in use:** bold, semibold, medium
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-lg` (8px)
- **Shadows:** `shadow-sm`, `shadow-md`, `shadow-lg`
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Common gaps:** `gap-3`, `gap-4`, `gap-2`

**Primary button**

```html
<a class="bg-[#1A1A1A] text-white text-[15px] font-medium px-6 py-2.5 rounded-full hover:bg-black transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Stats band (`stats`)
5. Feature grid (`features`)
6. Process / steps (`how-it-works`)
7. Testimonials (`testimonials`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #1a1a1a;
  --color-text: #0f172a;
  --color-muted: #64748b;
  --color-border: #f1f5f9;
  --color-accent: #1e293b;
  --color-accent-2: #22c55e;
  --font-display: "Nunito", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#1a1a1a',
    ink: '#0f172a',
    muted: '#64748b',
    line: '#f1f5f9',
    accent: '#1e293b',
    accent2: '#22c55e',
  },
  fontFamily: { display: ['Nunito'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in a heavy sans at large size, centred, in near-black (#0f172a).
- **Do:** Use the near-black pill (#1e293b) for the primary button and a plain ghost button for the secondary.
- **Do:** Show the dashboard mockup under the hero copy, in a pale rounded frame.
- **Don't:** Don't build a dark hero; the gradient stays light.
- **Don't:** Don't add saturated colours to the gradient; it stays pale.
- **Don't:** Don't use a dark mockup frame; the dashboard sits in a light frame.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
