# Design system — AI Developer SaaS Landing Page Template

`SN-W00086` · ai-saas · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

Ideatr is a light, quiet developer page on an off-white ground, with dark slate headlines and a single blue primary button. Generous empty space surrounds the hero, which relies on Inter at a large size. A wide margin sits around the prompt field.

**Mood:** light, quiet, spacious, developer-focused, plain

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f9f8f6` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#0f172a` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#004bb0` | Primary action and highlights |
| Second accent | `#34d399` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#cbd5e1` · `#fafaf9` · `#64748b` · `#e2e8f0` · `#0f172a` · `#94a3b8` · `#004bb0` · `#f1f5f9` · `#44403c`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, DM Sans, Instrument Serif, Bricolage Grotesque
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 24px · body 11px
- **Weights in use:** medium, light, bold
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded` (4px), `rounded-md` (6px)
- **Shadows:** `shadow-sm`, `shadow`, `shadow-md`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Common gaps:** `gap-2`, `gap-3`, `gap-x-2`

**Primary button**

```html
<a class="hidden transition-colors sm:block text-sm font-medium bg-[#ffffff] border rounded-md px-3 py-2 font-dm-sans tracking-tight hover:text-slate-600 text-slate-900 border-stone-200">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. 3D / canvas scene (`3d-canvas`)
4. Stats band (`stats`)
5. Testimonials (`testimonials`)
6. Product grid (`product-grid`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Spline 3D
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #f9f8f6;
  --color-surface: #ffffff;
  --color-text: #0f172a;
  --color-muted: #64748b;
  --color-border: #ffffff;
  --color-accent: #004bb0;
  --color-accent-2: #34d399;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f9f8f6',
    surface: '#ffffff',
    ink: '#0f172a',
    muted: '#64748b',
    line: '#ffffff',
    accent: '#004bb0',
    accent2: '#34d399',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the page on the off-white ground (#f9f8f6) with dark slate headlines (#0f172a)
- **Do:** Use the blue (#004bb0) for the primary button and the prompt submit control only
- **Do:** Leave generous space around the hero prompt field
- **Don't:** Don't use the pale grey (#e2e8f0) as the accent; it is a surface colour
- **Don't:** Don't add decorative imagery to the hero; the layout is type and the prompt field
- **Don't:** Don't use a second saturated colour in the hero

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
