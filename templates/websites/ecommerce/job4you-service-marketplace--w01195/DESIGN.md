# Design system — Job4You Service Marketplace 

`SN-W01195` · ecommerce · light mode · Sinera Atlas theme `market` · language `pt-BR`

## Direction

A functional, app-like stance: a marketplace shown as a sidebar layout with a navy header band, white cards and a single orange accent. Orange (#f97316) marks the active navigation item, the second half of the brand name and the 'see all' link. Category tiles are white rounded cards with icon placeholders, so the layout reads as a dense utility interface rather than a brand showcase.

**Mood:** functional, clear, friendly, app-like

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#e2e8f0` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#0f172a` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#f1f5f9` | Hairlines, dividers, outlines |
| Accent | `#f97316` | Primary action and highlights |
| Second accent | `#e2e8f0` | Supporting highlights |

Palette by frequency of use: `#f97316` · `#ffffff` · `#0f172a` · `#e2e8f0` · `#64748b` · `#f8fafc` · `#94a3b8` · `#1e293b` · `#fef0e6` · `#f1f5f9`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Plus Jakarta Sans
- **Body:** Plus Jakarta Sans
- **Loaded families:** Plus Jakarta Sans
- **Scale (largest breakpoint):** h1 26px · h2 18px · h3 22px · body 12px
- **Weights in use:** medium, normal, semibold
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-xl` (12px), `rounded-[16px]` (16px), `rounded-full` (9999px)
- **Shadows:** `shadow-[0_1px_3px_rgba(0,0,0,0.06)]`, `shadow-md`, `shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)]`
- **Content width:** `max-w-4xl`
- **Common gaps:** `gap-3`, `gap-2`, `gap-1`

**Primary button**

```html
<a class="bg-[#F97316] text-white px-5 py-2 rounded-xl text-[14px] font-semibold hover:bg-[#EA6A0A] transition-colors shadow-[0_1px_3px_rgba(0,0,0,0.06)]">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. Feature grid (`features`)
3. Sidebar (`sidebar`)
4. Navigation bar (`navbar`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #e2e8f0;
  --color-surface: #ffffff;
  --color-text: #0f172a;
  --color-muted: #64748b;
  --color-border: #f1f5f9;
  --color-accent: #f97316;
  --color-accent-2: #e2e8f0;
  --font-display: "Plus Jakarta Sans", sans-serif;
  --font-body: "Plus Jakarta Sans", sans-serif;
  --radius: 12px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#e2e8f0',
    surface: '#ffffff',
    ink: '#0f172a',
    muted: '#64748b',
    line: '#f1f5f9',
    accent: '#f97316',
    accent2: '#e2e8f0',
  },
  fontFamily: { display: ['Plus Jakarta Sans'], sans: ['Plus Jakarta Sans'] },
} }
```

## Do and don't

- **Do:** Use orange (#f97316) only for the active item, the brand highlight and text links.
- **Do:** Put content on white rounded cards over the light grey-blue background (#e2e8f0).
- **Do:** Keep the navy (#0f172a) for the header band and dark status cards.
- **Don't:** Don't use orange for large filled areas; it is for small emphasis.
- **Don't:** Don't add decorative photos to category tiles; the tiles hold icons only.
- **Don't:** Don't use heavy shadows; cards separate by fill and rounded corners.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
