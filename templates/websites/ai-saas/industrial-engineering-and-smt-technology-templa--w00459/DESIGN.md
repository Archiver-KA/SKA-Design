# Design system — Industrial Engineering & SMT Technology Template

`SN-W00459` · ai-saas · light mode · Sinera Atlas theme `route` · language `en`

## Direction

A corporate engineering page that opens on a dark navy hero with a diagonal lighter gradient, then moves to white sections below. Sky blue (#0ea5e9) is the only accent, used on the primary button and the small eyebrow label. The company name is set in heavy uppercase Inter, with a regular-weight subtitle beneath it. The dark hero against the white body gives a serious, technical feel.

**Mood:** corporate, technical, serious, clean, navy

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#f0f9ff` | Cards, panels, raised areas |
| Text | `#0f172a` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#f1f5f9` | Hairlines, dividers, outlines |
| Accent | `#0ea5e9` | Primary action and highlights |

Palette by frequency of use: `#0ea5e9` · `#ffffff` · `#0f172a` · `#e2e8f0` · `#64748b` · `#7dd3fc` · `#334155` · `#f1f5f9` · `#f0f9ff` · `#f8fafc`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist
- **Scale (largest breakpoint):** h1 48px · h2 30px · h3 14px · body 14px
- **Weights in use:** semibold, medium
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-lg` (8px), `rounded-md` (6px), `rounded-xl` (12px)
- **Shadows:** `shadow-lg`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-14`, `py-20`
- **Common gaps:** `gap-3`, `gap-1.5`, `gap-2`

**Primary button**

```html
<a class="inline-flex items-center justify-center gap-2 bg-sky-500 hover:bg-sky-600 text-white font-medium px-6 py-3 rounded-md transition w-full sm:w-auto font-geist">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Services (`services`)
4. Feature grid (`features`)
5. Comparison (`comparison`)
6. Contact form (`contact-form`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #f0f9ff;
  --color-text: #0f172a;
  --color-muted: #64748b;
  --color-border: #f1f5f9;
  --color-accent: #0ea5e9;
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
    surface: '#f0f9ff',
    ink: '#0f172a',
    muted: '#64748b',
    line: '#f1f5f9',
    accent: '#0ea5e9',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use sky blue (#0ea5e9) for the primary button and the eyebrow label
- **Do:** Keep the hero on the dark navy gradient and the body sections on white
- **Do:** Set the company name in heavy uppercase Inter
- **Don't:** Don't use blue for large section backgrounds
- **Don't:** Don't add a second accent colour to the hero
- **Don't:** Don't set small body copy in white on the navy gradient

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
