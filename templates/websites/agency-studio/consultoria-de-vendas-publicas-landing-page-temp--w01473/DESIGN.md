# Design system — Consultoria de Vendas Públicas Landing Page Template

`SN-W01473` · agency-studio · light mode · Sinera Atlas theme `workshop` · language `pt-BR`

## Direction

A light, restrained landing page: a white ground (#ffffff) with near-black text (#171717) and a large, tightly set grotesque headline over a lighter grey second line. Colour is nearly absent; the green (#10b981) shows only in the logo mark and status dot, while the primary action is a solid near-black button. Structure comes from hairline rules and a row of big figures under the hero.

**Mood:** clean, restrained, corporate, editorial

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#d4d4d4` | Cards, panels, raised areas |
| Text | `#171717` | Headings and primary copy |
| Muted text | `#525252` | Secondary copy, captions |
| Border | `#e5e5e5` | Hairlines, dividers, outlines |
| Accent | `#171717` | Primary action and highlights |

Palette by frequency of use: `#e5e5e5` · `#737373` · `#171717` · `#ffffff` · `#a3a3a3` · `#d4d4d4` · `#10b981` · `#fafafa` · `#059669` · `#525252`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** JetBrains Mono
- **Body:** Inter
- **Loaded families:** Inter, JetBrains Mono, Geist, Roboto, Montserrat, Poppins
- **Scale (largest breakpoint):** h1 72px · h2 10px · h3 18px · body 12px
- **Weights in use:** medium, semibold, light
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-sm` (2px), `rounded-full` (9999px), `rounded-[1px]` (1px)
- **Shadows:** `shadow-sm`
- **Content width:** `max-w-6xl`, `max-w-4xl`
- **Section padding:** `py-24`, `py-16`
- **Common gaps:** `gap-2`, `gap-4`, `gap-3`

**Primary button**

```html
<a class="w-full bg-white border border-neutral-200 text-neutral-900 text-xs font-semibold tracking-wide py-3 rounded-sm hover:bg-neutral-100 transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Marquee (`marquee`)
5. Feature grid (`features`)
6. Stats band (`stats`)
7. Process / steps (`how-it-works`)
8. Testimonials (`testimonials`)
9. Newsletter signup (`newsletter`)
10. Contact form (`contact-form`)
11. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Unicorn Studio (WebGL scenes)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #d4d4d4;
  --color-text: #171717;
  --color-muted: #525252;
  --color-border: #e5e5e5;
  --color-accent: #171717;
  --font-display: "JetBrains Mono", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 2px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#d4d4d4',
    ink: '#171717',
    muted: '#525252',
    line: '#e5e5e5',
    accent: '#171717',
  },
  fontFamily: { display: ['JetBrains Mono'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headlines in the grotesque sans at heavy weight with tight tracking, and keep the second line in grey (#737373).
- **Do:** Use the green (#10b981) only for the logo mark and status dot, never for buttons or text.
- **Do:** Make the primary button solid near-black (#171717) with white text, and keep secondary actions outlined.
- **Don't:** Don't add drop shadows or gradient fills; separation comes from hairline rules.
- **Don't:** Don't use the green as a background or large fill.
- **Don't:** Don't set the headline in a monospace face; it is a sans.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
