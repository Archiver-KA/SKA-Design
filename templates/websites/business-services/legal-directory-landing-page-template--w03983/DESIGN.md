# Design system — Legal Directory Landing Page Template

`SN-W03983` · business-services · light mode · Sinera Atlas theme `route` · language `en`

## Direction

A clean, light directory page organised around one large search bar in a white card, with a solid indigo button (#4f46e5) as its action. Headings are bold sans-serif in dark slate, and icon tiles and generous white space give the sections their structure. Indigo is kept for the search action and links, so the page reads as a working tool before it reads as marketing.

**Mood:** clean, functional, airy, modern, tool-like

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f1f5f9` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#1e293b` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#f1f5f9` | Hairlines, dividers, outlines |
| Accent | `#4f46e5` | Primary action and highlights |
| Second accent | `#10b981` | Supporting highlights |

Palette by frequency of use: `#64748b` · `#0f172a` · `#4f46e5` · `#ffffff` · `#f1f5f9` · `#94a3b8` · `#10b981` · `#6366f1` · `#f8fafc` · `#334155`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 48px · h2 48px · h3 18px · body 12px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-2xl` (16px), `rounded-full` (9999px), `rounded-lg` (8px)
- **Shadows:** `shadow-sm`, `shadow-md`, `shadow-xl`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-24`, `py-20`
- **Common gaps:** `gap-2`, `gap-4`, `gap-0.5`

**Primary button**

```html
<a class="w-full lg:w-auto px-8 py-3 bg-[#4F46E5] hover:bg-[#4338ca] text-white text-lg font-medium rounded-lg transition-all duration-200 shadow-sm hover:shadow-md transform active:scale-95 flex items-center justify-center gap-2">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Contact form (`contact-form`)
4. Marquee (`marquee`)
5. Comparison (`comparison`)
6. Services (`services`)
7. Feature grid (`features`)
8. Map / location (`map-location`)
9. Call to action (`cta`)
10. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #f1f5f9;
  --color-surface: #ffffff;
  --color-text: #1e293b;
  --color-muted: #64748b;
  --color-border: #f1f5f9;
  --color-accent: #4f46e5;
  --color-accent-2: #10b981;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 16px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f1f5f9',
    surface: '#ffffff',
    ink: '#1e293b',
    muted: '#64748b',
    line: '#f1f5f9',
    accent: '#4f46e5',
    accent2: '#10b981',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use indigo (#4f46e5) only for the search button and interactive links
- **Do:** Keep the search field in a white card on the light grey ground
- **Do:** Set headings in bold Inter with tight line spacing
- **Don't:** Don't use indigo over large background areas
- **Don't:** Don't use heavy gradients on the hero; the page is flat
- **Don't:** Don't use the green (#10b981) for primary buttons

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
