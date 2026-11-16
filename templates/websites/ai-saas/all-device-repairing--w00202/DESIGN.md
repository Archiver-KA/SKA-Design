# Design system — All Device Repairing

`SN-W00202` · ai-saas · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

Clean local-business page on white, with a strong royal blue used for the top utility bar, the second headline line and the primary button. The hero is a heavy dark sans-serif headline with blue emphasis, a light grey row of small trust items, and two photos in rounded frames beside the copy. The layout is practical and direct, and blue is the only colour.

**Mood:** practical, clean, trustworthy, direct

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#f1f5f9` | Cards, panels, raised areas |
| Text | `#0f172a` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#f1f5f9` | Hairlines, dividers, outlines |
| Accent | `#1e293b` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#0f172a` · `#64748b` · `#f1f5f9` · `#94a3b8` · `#1e293b` · `#eff6ff` · `#e2e8f0` · `#f8fafc` · `#cbd5e1`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 60px · h2 36px · h3 18px · body 14px
- **Weights in use:** bold, semibold, medium
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-lg` (8px), `rounded-full` (9999px), `rounded-xl` (12px)
- **Shadows:** `shadow-lg`, `shadow-card`, `shadow-sm`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-12`, `py-24`
- **Common gaps:** `gap-2`, `gap-4`, `gap-1`

**Primary button**

```html
<a class="hidden md:flex items-center gap-2 text-sm font-semibold text-slate-900 bg-slate-100 hover:bg-slate-200 px-5 py-2.5 rounded-full transition-all">…</a>
```

## Page structure

Blocks in page order:

1. Logo cloud (`logo-cloud`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Team (`team`)
5. Services (`services`)
6. Contact form (`contact-form`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** gradient fills, blend modes, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #f1f5f9;
  --color-text: #0f172a;
  --color-muted: #64748b;
  --color-border: #f1f5f9;
  --color-accent: #1e293b;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 8px;
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
    line: '#f1f5f9',
    accent: '#1e293b',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use the blue for the second headline line, the primary button and the top utility bar only
- **Do:** Set headlines in heavy dark sans-serif, with the emphasis phrase in blue
- **Do:** Put the small trust items under the buttons in plain grey text
- **Don't:** Don't use blue for body copy or for large fills other than the utility bar
- **Don't:** Don't add dark sections; the page is white and light grey
- **Don't:** Don't crop the repair photos into circles; they sit in rounded rectangles

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
