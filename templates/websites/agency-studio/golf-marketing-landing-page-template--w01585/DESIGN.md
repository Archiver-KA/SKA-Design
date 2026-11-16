# Design system — Golf Marketing Landing Page Template

`SN-W01585` · agency-studio · light mode · Sinera Atlas theme `workshop` · language `pl`

## Direction

A pale mint-white ground with a serif headline in near-black, where the key phrase 'za krótko.' is set in deep green (#1a5c38). A tinted rule box lists two numbered rules, and a deep green product panel on the right shows scoring cards with pill tags. Green is the single brand colour, used for the headline accent, the primary button and the panel.

**Mood:** calm, sporting, clear, friendly, precise

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#f7f9f8` | Cards, panels, raised areas |
| Text | `#1a1a1a` | Headings and primary copy |
| Muted text | `#5a5a5a` | Secondary copy, captions |
| Border | `#d8e6df` | Hairlines, dividers, outlines |
| Accent | `#1a5c38` | Primary action and highlights |
| Second accent | `#92400e` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#d8e6df` · `#1a1a1a` · `#1a5c38` · `#5a5a5a` · `#edf7f1` · `#2e8b57` · `#f7f9f8` · `#3d3d3d` · `#92400e`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** DM Sans
- **Body:** DM Sans
- **Loaded families:** DM Sans, Playfair Display
- **Scale (largest breakpoint):** h1 60px · h2 36px · h3 20px · body 16px
- **Weights in use:** normal, medium, light
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-2xl` (16px)
- **Shadows:** `shadow-sm`, `shadow-md`, `shadow-lg`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-4`, `gap-3`, `gap-16`

**Primary button**

```html
<a class="bg-[#1a5c38] hover:bg-[#134429] text-white text-base font-normal px-5 py-2.5 rounded-full transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Gallery / portfolio (`gallery-portfolio`)
4. Feature grid (`features`)
5. About (`about`)
6. Contact form (`contact-form`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #f7f9f8;
  --color-text: #1a1a1a;
  --color-muted: #5a5a5a;
  --color-border: #d8e6df;
  --color-accent: #1a5c38;
  --color-accent-2: #92400e;
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
    surface: '#f7f9f8',
    ink: '#1a1a1a',
    muted: '#5a5a5a',
    line: '#d8e6df',
    accent: '#1a5c38',
    accent2: '#92400e',
  },
  fontFamily: { display: ['DM Sans'], sans: ['DM Sans'] },
} }
```

## Do and don't

- **Do:** Set the headline serif in near-black, with the key phrase in deep green (#1a5c38)
- **Do:** Use deep green (#1a5c38) for the primary button and the product panel
- **Do:** Present rules in a tinted box as short numbered lines
- **Don't:** Don't use the brown (#92400e) as a second accent; it is a secondary tone
- **Don't:** Don't lighten the green panel into a pale tint; it carries the contrast
- **Don't:** Don't set body copy in pure black; use the grey

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
