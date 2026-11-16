# Design system — Medical Specialist Landing Page Template

`SN-W02468` · healthcare · light mode · Sinera Atlas theme `calm` · language `es`

## Direction

A warm off-white page with a dark charcoal headline whose last line is set in light grey italic. The primary button is solid emerald green with a white outline partner, and the hero photograph sits in a tall panel that fades into a pale grey ground. Emerald is the single accent, and it reads as clear and clinical rather than decorative.

**Mood:** clear, clinical, warm, calm, human

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fbf9f6` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#292524` | Headings and primary copy |
| Muted text | `#57534e` | Secondary copy, captions |
| Border | `#e7e5e4` | Hairlines, dividers, outlines |
| Accent | `#10b981` | Primary action and highlights |

Palette by frequency of use: `#10b981` · `#ffffff` · `#059669` · `#e7e5e4` · `#022c22` · `#57534e` · `#f5f5f4` · `#fbf9f6` · `#78716c` · `#047857`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display
- **Scale (largest breakpoint):** h1 60px · h2 48px · h3 20px · body 14px
- **Weights in use:** medium, normal
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-xl` (12px)
- **Shadows:** `shadow-sm`, `shadow-md`, `shadow-[0_0_20px_rgba(16,185,129,0.1)]`
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-1.5`, `gap-2`, `gap-3`

**Primary button**

```html
<a class="hidden md:inline-flex items-center gap-2 bg-emerald-600 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-emerald-700 transition-all hover:scale-[1.02] shadow-lg shadow-emerald-900/10">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. FAQ (`faq`)
5. Contact form (`contact-form`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #fbf9f6;
  --color-surface: #ffffff;
  --color-text: #292524;
  --color-muted: #57534e;
  --color-border: #e7e5e4;
  --color-accent: #10b981;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fbf9f6',
    surface: '#ffffff',
    ink: '#292524',
    muted: '#57534e',
    line: '#e7e5e4',
    accent: '#10b981',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use emerald (#10b981) for the primary button and status accents only
- **Do:** Set the headline large, with the last line in light grey italic
- **Do:** Keep the photograph in a tall panel that fades into the pale ground
- **Don't:** Don't add a second brand colour beside the emerald
- **Don't:** Don't set the italic line in dark text; it stays light grey
- **Don't:** Don't set body copy in green on the off-white ground

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
