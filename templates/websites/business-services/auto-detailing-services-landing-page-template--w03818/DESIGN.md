# Design system — Auto Detailing Services Landing Page Template

`SN-W03818` · business-services · dark mode · Sinera Atlas theme `route` · language `cs`

## Direction

A dark, quiet page on a near-black ground (#0e0e0e) with warm off-white type (#f5f2ec). Headlines are large, bold Inter set tight and left-aligned, and the gold (#d4a24c) appears only in small details such as the badge dot and the primary button. The layout relies on restraint: a single column of text, generous space and few decorative elements.

**Mood:** calm, restrained, warm, editorial

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0e0e0e` | Page ground |
| Surface | `#1a1a1a` | Cards, panels, raised areas |
| Text | `#f5f2ec` | Headings and primary copy |
| Muted text | `#888888` | Secondary copy, captions |
| Border | `#f5f2ec` | Hairlines, dividers, outlines |
| Accent | `#d4a24c` | Primary action and highlights |
| Second accent | `#dc2626` | Supporting highlights |

Palette by frequency of use: `#d4a24c` · `#f5f2ec` · `#0e0e0e` · `#1a1a1a` · `#888888` · `#ffffff` · `#5f5a53` · `#b77e24` · `#161616` · `#66615a`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 96px · h2 60px · h3 24px · body 14px
- **Weights in use:** semibold, bold, medium
- **Letter spacing:** `tracking-tight`, `tracking-[0.16rem]`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-[2rem]` (2rem), `rounded-2xl` (16px)
- **Shadows:** `shadow-xl`, `shadow-sm`, `shadow-[#0E0E0E]/10`
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Section padding:** `py-20`, `py-28`
- **Common gaps:** `gap-4`, `gap-2`, `gap-3`

**Primary button**

```html
<a class="group inline-flex items-center justify-center gap-2 rounded-full bg-[#D4A24C] px-7 py-4 text-sm font-semibold text-[#0E0E0E] shadow-xl shadow-[#D4A24C]/15 transition duration-300 hover:scale-[1.02] hover:shadow-[#D4A24C]/25">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. Feature grid (`features`)
3. Gallery / portfolio (`gallery-portfolio`)
4. Testimonials (`testimonials`)
5. FAQ (`faq`)
6. Map / location (`map-location`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #0e0e0e;
  --color-surface: #1a1a1a;
  --color-text: #f5f2ec;
  --color-muted: #888888;
  --color-border: #f5f2ec;
  --color-accent: #d4a24c;
  --color-accent-2: #dc2626;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0e0e0e',
    surface: '#1a1a1a',
    ink: '#f5f2ec',
    muted: '#888888',
    line: '#f5f2ec',
    accent: '#d4a24c',
    accent2: '#dc2626',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headlines in Inter bold with tight spacing, in warm off-white (#f5f2ec).
- **Do:** Use gold (#d4a24c) only for the primary button and small status marks.
- **Do:** Keep the page on a near-black background (#0e0e0e) with generous space between sections.
- **Don't:** Don't use gold for large text or for backgrounds.
- **Don't:** Don't add a second bright accent colour.
- **Don't:** Don't set body copy in pure white; keep it in the warm off-white.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
