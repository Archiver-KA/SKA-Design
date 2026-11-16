# Design system — Agency AI Platform Landing Page Template

`SN-W01357` · agency-studio · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A near-white hero with a soft mint glow behind a dark slate headline. The phrase AI Execution is set in a green italic serif, the one stylistic contrast in the first line. The green-teal (#33afa5) fills the primary button and that phrase, giving a light, calm, human-led platform.

**Mood:** light, clean, human, editorial

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Text | `#0f172a` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#f1f5f9` | Hairlines, dividers, outlines |
| Accent | `#33afa5` | Primary action and highlights |
| Second accent | `#33afa5` | Supporting highlights |

Palette by frequency of use: `#0f172a` · `#64748b` · `#ffffff` · `#e2e8f0` · `#f8fafc` · `#f1f5f9` · `#33afa5` · `#cbd5e1` · `#7cb305` · `#0d9488`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** DM Sans
- **Body:** DM Sans
- **Loaded families:** DM Sans, Playfair Display, Geist, Roboto, Montserrat, Poppins
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 20px · body 14px
- **Weights in use:** semibold, medium, light
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded` (4px)
- **Shadows:** `shadow-[0_10px_30px_rgba(0,0,0,0.05)]`, `shadow-[#33AFA5]/20`, `shadow-lg`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-4`, `gap-8`

**Primary button**

```html
<a class="px-5 py-2.5 rounded-full border border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-900 transition-all">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Process / steps (`how-it-works`)
4. Gallery / portfolio (`gallery-portfolio`)
5. Bento grid (`bento-grid`)
6. Testimonials (`testimonials`)
7. Call to action (`cta`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-text: #0f172a;
  --color-muted: #64748b;
  --color-border: #f1f5f9;
  --color-accent: #33afa5;
  --color-accent-2: #33afa5;
  --font-display: "DM Sans", sans-serif;
  --font-body: "DM Sans", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    ink: '#0f172a',
    muted: '#64748b',
    line: '#f1f5f9',
    accent: '#33afa5',
    accent2: '#33afa5',
  },
  fontFamily: { display: ['DM Sans'], sans: ['DM Sans'] },
} }
```

## Do and don't

- **Do:** Set headlines in dark slate (#0f172a), with at most one italic serif phrase in the green-teal.
- **Do:** Use the teal (#33afa5) for the primary button and that italic phrase only.
- **Do:** Keep the hero ground near-white with a soft green glow behind the headline.
- **Don't:** Don't use the teal as a section background; it appears in accents only.
- **Don't:** Don't set body copy in pure black; use the slate tone.
- **Don't:** Don't use more than one serif phrase in a headline.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
