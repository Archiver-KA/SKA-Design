# Design system — EUSA Venture Studio

`SN-W00374` · ai-saas · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A plain white page with a near-black slate headline set very large in Inter and tightly tracked. The hero is a centred stack: a small status pill with a green dot, the headline, two lines of grey copy and a pair of buttons, a solid dark primary beside an outline secondary. There is no imagery; typography and the one dark button carry the page.

**Mood:** plain, bold, corporate, minimal, direct

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#cbd5e1` | Cards, panels, raised areas |
| Text | `#1e293b` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#1e293b` | Primary action and highlights |
| Second accent | `#10b981` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#64748b` · `#94a3b8` · `#1e293b` · `#334155` · `#475569` · `#cbd5e1` · `#e2e8f0` · `#10b981`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 96px · h2 36px · h3 20px · body 14px
- **Weights in use:** medium, semibold, light
- **Letter spacing:** `tracking-tighter`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-lg` (8px), `rounded-full` (9999px), `rounded-2xl` (16px)
- **Shadows:** `shadow-lg`, `shadow-sm`
- **Content width:** `max-w-7xl`, `max-w-5xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-2`, `gap-4`, `gap-3`

**Primary button**

```html
<a class="bg-navy-900 text-white text-sm font-medium px-4 py-2 rounded-full hover:bg-slate-700 transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Process / steps (`how-it-works`)
4. Team (`team`)
5. Services (`services`)
6. About (`about`)
7. Contact form (`contact-form`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #cbd5e1;
  --color-text: #1e293b;
  --color-muted: #64748b;
  --color-border: #ffffff;
  --color-accent: #1e293b;
  --color-accent-2: #10b981;
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
    surface: '#cbd5e1',
    ink: '#1e293b',
    muted: '#64748b',
    line: '#ffffff',
    accent: '#1e293b',
    accent2: '#10b981',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headlines in Inter at display size with tight letter spacing, in near-black slate (#1e293b).
- **Do:** Make the primary button solid dark slate with white text, and pair it with one outline button.
- **Do:** Keep the status pill small, with a single green dot as its only colour.
- **Don't:** Don't add imagery to the hero; the page is type and buttons.
- **Don't:** Don't use the green dot anywhere else; it signals status only.
- **Don't:** Don't add gradients or glow; the page is flat white.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
