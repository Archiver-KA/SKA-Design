# Design system — AI Receptionist SaaS Landing Page Template

`SN-W00141` · ai-saas · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

Full-bleed orange hero where the page ground is the brand colour, not a dark section: the background runs from bright orange (#f97316) toward deeper orange (#ea580c), with white Inter headlines and a pale-peach second line. A white form card and one dark header button are the only neutral masses, so the page reads as a bold, poster-like call to action.

**Mood:** bold, poster, warm, direct

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f97316` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#94a3b8` | Secondary copy, captions |
| Border | `#334155` | Hairlines, dividers, outlines |
| Accent | `#0f172a` | Primary action and highlights |
| Second accent | `#1e293b` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#f97316` · `#0f172a` · `#ea580c` · `#94a3b8` · `#334155` · `#64748b` · `#1e293b` · `#e2e8f0` · `#f8fafc`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 18px · body 14px
- **Weights in use:** bold, semibold, medium
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-xl` (12px)
- **Shadows:** `shadow-xl`, `shadow-sm`, `shadow-lg`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-3`, `gap-8`

**Primary button**

```html
<a class="bg-slate-900 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-slate-800 transition-all shadow-xl border border-slate-700/50">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Team (`team`)
4. Call to action (`cta`)
5. Testimonials (`testimonials`)
6. Pricing (`pricing`)
7. FAQ (`faq`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #f97316;
  --color-surface: #ffffff;
  --color-text: #ffffff;
  --color-muted: #94a3b8;
  --color-border: #334155;
  --color-accent: #0f172a;
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
    background: '#f97316',
    surface: '#ffffff',
    ink: '#ffffff',
    muted: '#94a3b8',
    line: '#334155',
    accent: '#0f172a',
    accent2: '#1e293b',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use the orange ground as the hero surface, with white headlines on top
- **Do:** Keep the form in a white card with dark labels and a single orange button
- **Do:** Set the header button in dark slate as the only neutral action
- **Don't:** Don't set body text blocks on the orange ground
- **Don't:** Don't add more than one white form card per screen
- **Don't:** Don't switch the hero to a dark background; the orange is the look

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
