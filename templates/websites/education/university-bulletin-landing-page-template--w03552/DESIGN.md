# Design system — University Bulletin Landing Page Template

`SN-W03552` · education · light mode · Sinera Atlas theme `calm` · language `en`

## Direction

The bulletin layout is a light, mint-tinted page with the content placed in a single white card, like a newsletter. A small uppercase label names the publication, and a mint pill marks the date. Photography runs full width inside the card, and the text is set in sans-serif under a clear greeting heading. The tone is informal and community-focused.

**Mood:** friendly, clean, community, light, newsletter-like

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f8fafc` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#0f172a` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#34d399` | Primary action and highlights |
| Second accent | `#34d399` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#1e293b` · `#94a3b8` · `#64748b` · `#0f172a` · `#e2e8f0` · `#334155` · `#d1fae5` · `#cbd5e1` · `#f8fafc`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Dancing Script
- **Body:** Dancing Script
- **Loaded families:** Dancing Script, Inter, Playfair Display
- **Scale (largest breakpoint):** h3 14px · body 18px
- **Weights in use:** light, normal, thin
- **Letter spacing:** `tracking-tight`, `tracking-[0.2em]`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-[2rem]` (2rem), `rounded-2xl` (16px)
- **Shadows:** `shadow-[0_0_12px_rgba(52,211,153,0.4)]`, `shadow-[0_0_15px_rgba(255,255,255,0.05)]`, `shadow-sm`
- **Content width:** `max-w-[6rem]`, `max-w-3xl`
- **Common gaps:** `gap-3`, `gap-4`, `gap-6`

## Page structure

Blocks in page order:

1. Feature grid (`features`)
2. Announcement bar (`announcement-bar`)
3. Call to action (`cta`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #f8fafc;
  --color-surface: #ffffff;
  --color-text: #0f172a;
  --color-muted: #64748b;
  --color-border: #ffffff;
  --color-accent: #34d399;
  --color-accent-2: #34d399;
  --font-display: "Dancing Script", sans-serif;
  --font-body: "Dancing Script", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f8fafc',
    surface: '#ffffff',
    ink: '#0f172a',
    muted: '#64748b',
    line: '#ffffff',
    accent: '#34d399',
    accent2: '#34d399',
  },
  fontFamily: { display: ['Dancing Script'], sans: ['Dancing Script'] },
} }
```

## Do and don't

- **Do:** Keep the content in a single white card on a pale mint gradient
- **Do:** Use mint (#34d399) for the date pill and small highlights
- **Do:** Mark the date and category with small uppercase labels
- **Don't:** Don't use dark backgrounds for the card
- **Don't:** Don't add more than one photo per screen
- **Don't:** Don't add heavy shadows to the card

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
