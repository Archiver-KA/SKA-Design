# Design system — Billionaire Trading Community Landing Page Template

`SN-W00885` · fintech-crypto · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A pure black page with a bold white sans headline over a grey italic serif second line, the strongest contrast move on the page. A bright yellow (#fde047) pill button and a yellow limited badge are the only saturated colours. Small grey micro-copy sits under the button, and the layout is centred and sparse.

**Mood:** dark, bold, sparse, luxurious, yellow-accented

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#0e1621` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#fde047` | Primary action and highlights |
| Second accent | `#fde047` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#6b7280` · `#000000` · `#9ca3af` · `#eab308` · `#fde047` · `#111827` · `#ca8a04` · `#4b5563` · `#182533`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Newsreader
- **Body:** Inter
- **Loaded families:** Inter, Newsreader
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 18px · body 14px
- **Weights in use:** medium, light, bold
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded` (4px)
- **Shadows:** `shadow-xl`, `shadow-2xl`, `shadow-lg`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-3`, `gap-6`, `gap-2`

**Primary button**

```html
<a class="relative rounded-full bg-white/5 border border-white/10 px-5 py-2 text-xs font-semibold tracking-wide text-white hover:bg-white/10 transition-all duration-300 overflow-hidden group">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Integrations (`integrations`)
5. FAQ (`faq`)
6. Timeline (`timeline`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #0e1621;
  --color-text: #ffffff;
  --color-muted: #6b7280;
  --color-border: #ffffff;
  --color-accent: #fde047;
  --color-accent-2: #fde047;
  --font-display: "Newsreader", serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#0e1621',
    ink: '#ffffff',
    muted: '#6b7280',
    line: '#ffffff',
    accent: '#fde047',
    accent2: '#fde047',
  },
  fontFamily: { display: ['Newsreader'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the first headline line in bold white sans and the second in grey italic serif
- **Do:** Make the primary button solid yellow (#fde047), the only saturated fill
- **Do:** Keep a small grey micro line below the CTA
- **Don't:** Don't use the dark navy (#182533) as an accent; it is a surface tone, not a highlight
- **Don't:** Don't add a second accent colour beside the yellow
- **Don't:** Don't put the yellow on large areas

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
