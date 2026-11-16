# Design system — Proposta Instituto Mineiro de Serviços Odontologia

`SN-W02507` · healthcare · dark mode · Sinera Atlas theme `calm` · language `en`

## Direction

A clinic hero where a photograph of the waiting room sits under a blue-teal overlay and the white sans headline is set directly over the image. The primary action is a bright WhatsApp-green pill (#25d366) and the secondary is a white pill, so the two buttons read at a glance as the contact routes. A round green chat button floats in the lower right corner.

**Mood:** urgent, clear, warm, direct

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#1d75a6` | Page ground |
| Surface | `#050505` | Cards, panels, raised areas |
| Text | `#f5f5f5` | Headings and primary copy |
| Muted text | `#1f2933` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#25d366` | Primary action and highlights |
| Second accent | `#25d366` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#e2e8f0` · `#475569` · `#0b2f4a` · `#1f2933` · `#7a1e3a` · `#9f1239` · `#25d366` · `#fbe8ec` · `#64748b`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display, Geist, Sora
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 18px · body 14px
- **Weights in use:** light, medium, semibold
- **Letter spacing:** `tracking-tight`, `tracking-[0.2em]`

## Shape, spacing and layout

- **Corner radius:** `rounded-3xl` (24px), `rounded-2xl` (16px), `rounded-full` (9999px)
- **Shadows:** `shadow-soft`, `shadow-soft-lg`, `shadow-[0_4px_12px_rgba(31,41,51,0.06)]`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-16`, `py-12`
- **Common gaps:** `gap-2`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="px-4 py-2 rounded-full transition-all duration-300 font-medium hover:bg-white hover:shadow-[0_4px_12px_rgba(31,41,51,0.06)] hover:text-[#0B2F4A] font-geist">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. FAQ (`faq`)
5. Call to action (`cta`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #1d75a6;
  --color-surface: #050505;
  --color-text: #f5f5f5;
  --color-muted: #1f2933;
  --color-border: #ffffff;
  --color-accent: #25d366;
  --color-accent-2: #25d366;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 24px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#1d75a6',
    surface: '#050505',
    ink: '#f5f5f5',
    muted: '#1f2933',
    line: '#ffffff',
    accent: '#25d366',
    accent2: '#25d366',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use the green (#25d366) only for WhatsApp and call actions
- **Do:** Set headlines in white Inter over a dark overlay of the clinic photograph
- **Do:** Pair one green primary button with one white secondary pill
- **Don't:** Don't use the green for decorative accents or section backgrounds
- **Don't:** Don't set headlines over the bright areas of the photograph
- **Don't:** Don't drop the floating chat button; the page relies on it for contact

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
