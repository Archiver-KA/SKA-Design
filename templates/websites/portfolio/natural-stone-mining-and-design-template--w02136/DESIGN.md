# Design system — Natural Stone Mining & Design Template

`SN-W02136` · portfolio · light mode · Sinera Atlas theme `workshop` · language `tr`

## Direction

A corporate stone-supplier landing page on white (#ffffff) with headlines in a dark navy near-black (#1b2535 family), set in bold, tight Inter. One dark navy carries the brand, used for the headline and the primary buttons, with a grey support line and a thin-bordered input for the quote form. The right half carries a rounded photograph of a stone project, which supplies the only warmth on the first screen.

**Mood:** corporate, clean, solid, industrial, direct

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#f1f5f9` | Cards, panels, raised areas |
| Text | `#0f172a` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#020617` | Hairlines, dividers, outlines |
| Accent | `#1b2535` | Primary action and highlights |

Palette by frequency of use: `#1b2535` · `#ffffff` · `#e2e8f0` · `#f1f5f9` · `#94a3b8` · `#64748b` · `#cbd5e1` · `#020617` · `#475569` · `#26344a`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display
- **Scale (largest breakpoint):** h1 72px · h2 60px · h3 20px · body 18px
- **Weights in use:** light, medium, semibold
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-2xl` (16px), `rounded-full` (9999px), `rounded-xl` (12px)
- **Shadows:** `shadow-sm`, `shadow-md`, `shadow-lg`
- **Content width:** `max-w-[1700px]`, `max-w-3xl`
- **Common gaps:** `gap-2`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="hidden sm:inline-flex sm:px-6 transition-colors hover:bg-[#26344a] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 text-base font-medium text-white bg-[#1B2535] rounded-lg pt-3 pr-5 pb-3 pl-5 gap-x-2 gap-y-2 items-center justify-center">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Gallery / portfolio (`gallery-portfolio`)
4. Bento grid (`bento-grid`)
5. Marquee (`marquee`)
6. FAQ (`faq`)
7. Call to action (`cta`)
8. Feature grid (`features`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #f1f5f9;
  --color-text: #0f172a;
  --color-muted: #64748b;
  --color-border: #020617;
  --color-accent: #1b2535;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 16px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#f1f5f9',
    ink: '#0f172a',
    muted: '#64748b',
    line: '#020617',
    accent: '#1b2535',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use the dark navy (#1b2535) for headlines and primary buttons only.
- **Do:** Set headlines in bold, tight Inter with generous line spacing.
- **Do:** Pair the hero copy with a rounded photograph on the right and a single quote input below.
- **Don't:** Don't add a second accent colour; the navy carries the brand.
- **Don't:** Don't use a WhatsApp-style green for buttons beyond the contact action.
- **Don't:** Don't shrink the headline; the layout depends on three-line stacking.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
