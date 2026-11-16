# Design system — Dubai Real Estate Referral Landing Page Template

`SN-W03232` · real-estate · dark mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A dark, minimal Dubai hero on a near-black ground (#030712) with a large white sans headline in two lines and a grey-to-white gradient across the key phrase. Copy is centred and short, with a solid white primary button beside an outlined secondary. The look is calm and premium, with colour limited to greys and white.

**Mood:** calm, premium, minimal, monochrome

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#030712` | Page ground |
| Surface | `#111827` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#9ca3af` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#9ca3af` | Primary action and highlights |
| Second accent | `#10b981` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#9ca3af` · `#111827` · `#1f2937` · `#6b7280` · `#f3f4f6` · `#d1d5db` · `#030712` · `#374151` · `#000000`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 18px · body 14px
- **Weights in use:** medium, light, normal
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-lg` (8px)
- **Content width:** `max-w-6xl`, `max-w-4xl`
- **Section padding:** `py-24`, `py-12`
- **Common gaps:** `gap-6`, `gap-2`, `gap-8`

**Primary button**

```html
<a class="text-xs font-medium px-4 py-2 rounded-full transition-colors bg-white text-black hover:bg-gray-200">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Stats band (`stats`)
4. Process / steps (`how-it-works`)
5. Contact form (`contact-form`)
6. Footer (`footer`)

## Motion, effects and stack

- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #030712;
  --color-surface: #111827;
  --color-text: #ffffff;
  --color-muted: #9ca3af;
  --color-border: #ffffff;
  --color-accent: #9ca3af;
  --color-accent-2: #10b981;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#030712',
    surface: '#111827',
    ink: '#ffffff',
    muted: '#9ca3af',
    line: '#ffffff',
    accent: '#9ca3af',
    accent2: '#10b981',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the hero headline in white sans, centred, with the key phrase in a grey-to-white gradient.
- **Do:** Use a solid white primary button and a dark outlined secondary side by side.
- **Do:** Keep the page on near-black (#030712) with grey (#9ca3af) for supporting copy.
- **Don't:** Don't add purple or green highlights; the palette is only greys and white.
- **Don't:** Don't left-align the headline; it is centred.
- **Don't:** Don't use a light background; the first screen is dark.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
