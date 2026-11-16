# Design system — Dossier Resume & CV Portfolio Template

`SN-W01997` · portfolio · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A plain, print-like resume: a single white card on a near-white page (#f9fafb), with a bold sans name, a small grey contact line and bold section headings. Credentials and education sit in two columns under the summary, with grey secondary text for institutions and dates. Nothing is decorative; hierarchy comes from weight and grey steps, which suits a document meant to be read and printed.

**Mood:** plain, print-like, orderly, quiet, credible

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f9fafb` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#111827` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#f3f4f6` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#111827` · `#9ca3af` · `#6b7280` · `#4b5563` · `#d1d5db` · `#1f2937` · `#f3f4f6` · `#374151` · `#f9fafb` · `#e5e7eb`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 30px · h2 20px · h3 14px · body 14px
- **Weights in use:** medium, normal, semibold
- **Letter spacing:** `tracking-wide`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px)
- **Shadows:** `shadow-sm`
- **Content width:** `max-w-3xl`
- **Section padding:** `py-16`
- **Common gaps:** `gap-1`, `gap-2`, `gap-2.5`

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. Services (`services`)
3. Team (`team`)
4. Comparison (`comparison`)

## Motion, effects and stack

- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #f9fafb;
  --color-surface: #ffffff;
  --color-text: #111827;
  --color-muted: #6b7280;
  --color-border: #f3f4f6;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f9fafb',
    surface: '#ffffff',
    ink: '#111827',
    muted: '#6b7280',
    line: '#f3f4f6',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep section headings bold and dark (#111827) and details in grey (#6b7280)
- **Do:** Use a two-column layout for credentials and education below the summary
- **Do:** Keep the card on the near-white page with no heavy shadow
- **Don't:** Don't add an accent colour; the design has none
- **Don't:** Don't set the contact line in bold; it is secondary text.
- **Don't:** Don't add photographs or icons to the header; the layout is text-only

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
