# Design system — Enterprise Technology and Innovation Landing Page Template

`SN-W00371` · ai-saas · light mode · Sinera Atlas theme `route` · language `en`

## Direction

A light, airy page with a pale blue-grey ground and dark slate headlines set very large in Inter. The emphasis is a coral-orange gradient on the closing phrase of the headline, the one place the brand colour appears in the hero. The navigation is a plain white bar, and the page relies on generous white space and a tinted background to feel calm rather than corporate.

**Mood:** airy, calm, corporate, warm, spacious

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f8fafc` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#1e293b` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#334155` | Hairlines, dividers, outlines |
| Accent | `#ff210a` | Primary action and highlights |
| Second accent | `#1e293b` | Supporting highlights |

Palette by frequency of use: `#0f172a` · `#f1f5f9` · `#ff210a` · `#e2e8f0` · `#1e293b` · `#cbd5e1` · `#ffffff` · `#64748b` · `#020617` · `#334155`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Poppins
- **Scale (largest breakpoint):** h1 88px · h2 36px · h3 20px · body 14px
- **Weights in use:** medium, semibold, normal
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-xl` (12px)
- **Shadows:** `shadow-sm`, `shadow-black/30`, `shadow-slate-200/50`
- **Content width:** `max-w-7xl`, `max-w-5xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-4`, `gap-8`

**Primary button**

```html
<a class="w-full sm:w-auto px-8 py-3.5 bg-[#fd760c] text-white text-sm font-medium rounded-xl hover:bg-[#e56a0b] transition-all duration-300 shadow-lg shadow-[#fd760c]/20 hover:shadow-xl hover:-translate-y-0.5 flex items-center justify-center gap-2">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Logo cloud (`logo-cloud`)
4. Services (`services`)
5. About (`about`)
6. Stats band (`stats`)
7. Testimonials (`testimonials`)
8. Contact form (`contact-form`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #f8fafc;
  --color-surface: #ffffff;
  --color-text: #1e293b;
  --color-muted: #64748b;
  --color-border: #334155;
  --color-accent: #ff210a;
  --color-accent-2: #1e293b;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f8fafc',
    surface: '#ffffff',
    ink: '#1e293b',
    muted: '#64748b',
    line: '#334155',
    accent: '#ff210a',
    accent2: '#1e293b',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the closing phrase of each headline in the coral accent (#ff210a) or its gradient.
- **Do:** Keep the page ground pale (#f8fafc) and place white panels on it.
- **Do:** Set headlines in Inter at display size in dark slate.
- **Don't:** Don't use the coral for body text or links; it is for headline emphasis.
- **Don't:** Don't use a dark hero; this page stays light.
- **Don't:** Don't put more than one coloured phrase in a single headline.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
