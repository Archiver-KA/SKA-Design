# Design system — Irrigation and Lighting Services Template

`SN-W03964` · business-services · light mode · Sinera Atlas theme `route` · language `en`

## Direction

A clean, open page on a white ground with a large regular-weight sans-serif headline in near-black, set over two lines with generous leading. The main action is a dark navy button in the header, and a soft grey panel frames the hero imagery. Green is kept for the brand, and the page keeps a calm, horticultural restraint.

**Mood:** calm, open, restrained, clean, horticultural

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#f8fafc` | Cards, panels, raised areas |
| Text | `#0f172a` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#f1f5f9` | Hairlines, dividers, outlines |
| Accent | `#149116` | Primary action and highlights |
| Second accent | `#e2e8f0` | Supporting highlights |

Palette by frequency of use: `#149116` · `#0f172a` · `#ffffff` · `#f1f5f9` · `#64748b` · `#f8fafc` · `#e2e8f0` · `#334155` · `#475569` · `#f0fdf4`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 104px · h2 48px · h3 24px · body 16px
- **Weights in use:** medium, semibold, normal
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-xl` (12px), `rounded-3xl` (24px), `rounded-full` (9999px)
- **Shadows:** `shadow-sm`, `shadow-[0_8px_30px_rgb(0,0,0,0.04)]`, `shadow-lg`
- **Content width:** `max-w-[1400px]`, `max-w-4xl`
- **Section padding:** `py-32`, `py-24`
- **Common gaps:** `gap-2`, `gap-6`, `gap-4`

**Primary button**

```html
<a class="w-full inline-flex items-center justify-center gap-2 bg-[#149116] hover:bg-[#117a12] text-white rounded-xl px-4 py-3 transition-colors text-sm font-medium">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Video / media (`video-media`)
5. Services (`services`)
6. Stats band (`stats`)
7. Contact form (`contact-form`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills
- **Libraries:** Tailwind CSS (CDN), GSAP
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #f8fafc;
  --color-text: #0f172a;
  --color-muted: #64748b;
  --color-border: #f1f5f9;
  --color-accent: #149116;
  --color-accent-2: #e2e8f0;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 12px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#f8fafc',
    ink: '#0f172a',
    muted: '#64748b',
    line: '#f1f5f9',
    accent: '#149116',
    accent2: '#e2e8f0',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headlines in a large regular-weight sans-serif in near-black
- **Do:** Use the dark navy button for the header call to action
- **Do:** Keep the hero on white, with a soft grey panel for imagery
- **Don't:** Don't use green for buttons or large areas
- **Don't:** Don't set the headline in a bold weight
- **Don't:** Don't add more than one row of badges above the headline

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
