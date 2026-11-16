# Design system — Landscape Architecture & Garden Design Template

`SN-W03268` · real-estate · dark mode · Sinera Atlas theme `dwell` · language `cs`

## Direction

Dark and stone-toned, with a dim grey-green ground (#293027) under a large white serif headline whose second line is set in italic. A single vivid orange (#ff5108) marks the eyebrow rule and the primary button, while secondary links stay plain white. The orange is the only warm signal against the muted stone tones, which gives the page a quiet, natural character.

**Mood:** natural, quiet, editorial, grounded

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#293027` | Page ground |
| Surface | `#efeee6` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#69705d` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#ff5108` | Primary action and highlights |
| Second accent | `#c4bd81` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#69705d` · `#f4f0e8` · `#a9aa9e` · `#90846e` · `#293027` · `#f7f3eb` · `#182017` · `#ff5108` · `#2c322b`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** DM Sans
- **Body:** DM Sans
- **Loaded families:** DM Sans, Playfair Display
- **Scale (largest breakpoint):** h1 96px · h2 60px · h3 24px · body 12px
- **Weights in use:** medium, semibold
- **Letter spacing:** `tracking-tight`, `tracking-[0.16em]`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px)
- **Content width:** `max-w-[100rem]`, `max-w-2xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-3`, `gap-5`, `gap-4`

**Primary button**

```html
<a class="inline-flex items-center gap-3 bg-[#ff5108] px-5 py-3.5 text-xs font-medium tracking-[0.08em] text-white transition hover:bg-[#e64805]">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Gallery / portfolio (`gallery-portfolio`)
5. Contact form (`contact-form`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** gradient fills
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #293027;
  --color-surface: #efeee6;
  --color-text: #ffffff;
  --color-muted: #69705d;
  --color-border: #ffffff;
  --color-accent: #ff5108;
  --color-accent-2: #c4bd81;
  --font-display: "DM Sans", sans-serif;
  --font-body: "DM Sans", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#293027',
    surface: '#efeee6',
    ink: '#ffffff',
    muted: '#69705d',
    line: '#ffffff',
    accent: '#ff5108',
    accent2: '#c4bd81',
  },
  fontFamily: { display: ['DM Sans'], sans: ['DM Sans'] },
} }
```

## Do and don't

- **Do:** Set headlines in a white serif display face, with the second line in italic.
- **Do:** Use orange (#ff5108) only for the primary button and the eyebrow rule.
- **Do:** Keep the hero ground dark and muted so the white headline stays readable.
- **Don't:** Don't use a light cream background for the hero.
- **Don't:** Don't add more than one saturated colour to a section.
- **Don't:** Don't set headlines in all capitals; only the eyebrow is uppercase.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
