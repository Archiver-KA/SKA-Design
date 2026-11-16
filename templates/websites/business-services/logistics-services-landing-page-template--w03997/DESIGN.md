# Design system — Logistics Services Landing Page Template

`SN-W03997` · business-services · dark mode · Sinera Atlas theme `route` · language `en`

## Direction

A dark, modern logistics page with a large white sans-serif headline set left-aligned. One key phrase is picked out in green (#10b981) with a lighter mint shift, and floating status cards over a warehouse photograph show live shipment data in small type. Green is kept to the highlight phrase and the progress bars, which keeps the page easy to follow.

**Mood:** modern, dark, precise, energetic, clear

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#09090b` | Page ground |
| Surface | `#18181b` | Cards, panels, raised areas |
| Text | `#f4f4f5` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#10b981` | Primary action and highlights |
| Second accent | `#3b82f6` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#10b981` · `#34d399` · `#09090b` · `#a1a1aa` · `#27272a` · `#71717a` · `#18181b` · `#3f3f46` · `#f4f4f5`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** var(--font-sans)
- **Body:** var(--font-sans)
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 20px · body 12px
- **Weights in use:** semibold, medium, bold
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-lg` (8px)
- **Shadows:** `shadow-2xl`, `shadow-[0_0_15px_rgba(16,185,129,0.4)]`, `shadow-[0_0_20px_rgba(16,185,129,0.3)]`
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-4`, `gap-16`

**Primary button**

```html
<a class="group flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-emerald-500 text-zinc-950 text-sm font-semibold hover:bg-emerald-400 transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)]">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Logo cloud (`logo-cloud`)
4. Bento grid (`bento-grid`)
5. Product grid (`product-grid`)
6. Map / location (`map-location`)
7. FAQ (`faq`)
8. Contact form (`contact-form`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #09090b;
  --color-surface: #18181b;
  --color-text: #f4f4f5;
  --color-muted: #71717a;
  --color-border: #ffffff;
  --color-accent: #10b981;
  --color-accent-2: #3b82f6;
  --font-display: "var(--font-sans)", sans-serif;
  --font-body: "var(--font-sans)", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#09090b',
    surface: '#18181b',
    ink: '#f4f4f5',
    muted: '#71717a',
    line: '#ffffff',
    accent: '#10b981',
    accent2: '#3b82f6',
  },
  fontFamily: { display: ['var(--font-sans)'], sans: ['var(--font-sans)'] },
} }
```

## Do and don't

- **Do:** Use green (#10b981) for the highlight phrase, progress bars and primary button only
- **Do:** Float status cards over photographs on a dark translucent fill
- **Do:** Set headlines in heavy sans-serif, left aligned, in near-white
- **Don't:** Don't use green for body text
- **Don't:** Don't place light panels over the photograph
- **Don't:** Don't add more than one highlight phrase per hero

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
