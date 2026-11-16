# Design system — CampaignIQ AI Marketing Prediction Template

`SN-W01463` · agency-studio · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A near-white ground ([#ffffff]) with a faint indigo glow behind the hero and a dark navy ([#0f172a]) headline. The primary button is solid indigo ([#4f46e5]) with a small grey note below it. The layout is airy and single-column, and the glow and a few small coloured squares are the only decoration.

**Mood:** airy, clean, calm, minimal, tool-like

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#0f172a` | Headings and primary copy |
| Muted text | `#475569` | Secondary copy, captions |
| Border | `#cbd5e1` | Hairlines, dividers, outlines |
| Accent | `#4f46e5` | Primary action and highlights |
| Second accent | `#059669` | Supporting highlights |

Palette by frequency of use: `#0f172a` · `#ffffff` · `#e2e8f0` · `#4f46e5` · `#475569` · `#64748b` · `#4338ca` · `#eef2ff` · `#6366f1` · `#f8fafc`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 24px · h2 20px · h3 14px · body 12px
- **Weights in use:** medium, semibold
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-md` (6px), `rounded-xl` (12px), `rounded-full` (9999px)
- **Shadows:** `shadow-sm`, `shadow-md`, `shadow-card`
- **Content width:** `max-w-5xl`, `max-w-4xl`
- **Common gaps:** `gap-2`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="bg-indigo-600 text-white px-8 py-3.5 rounded-md text-base font-medium hover:bg-indigo-700 transition-all shadow-sm flex items-center gap-2 group">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Footer (`footer`)
4. Contact form (`contact-form`)
5. FAQ (`faq`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #ffffff;
  --color-text: #0f172a;
  --color-muted: #475569;
  --color-border: #cbd5e1;
  --color-accent: #4f46e5;
  --color-accent-2: #059669;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 6px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#ffffff',
    ink: '#0f172a',
    muted: '#475569',
    line: '#cbd5e1',
    accent: '#4f46e5',
    accent2: '#059669',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use indigo (#4f46e5) for the primary button only
- **Do:** Set the headline in Inter at large size, centred, in navy (#0f172a)
- **Do:** Keep the hero to one centred column with a small note under the button
- **Don't:** Don't add a dark hero band
- **Don't:** Don't add more than one decorative glow
- **Don't:** Don't use indigo for body text

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
