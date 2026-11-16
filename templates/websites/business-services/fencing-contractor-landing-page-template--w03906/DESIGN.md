# Design system — Fencing Contractor Landing Page Template

`SN-W03906` · business-services · light mode · Sinera Atlas theme `route` · language `en`

## Direction

A soft, pale page with a faint green cast, where a sturdy sans headline in dark slate carries the message and one phrase turns deep green (#047857) for emphasis. System-ui sets all the type, so the page reads plain and practical. The hero pairs the copy with a white instant-quote card showing segmented options and a dark full-width button. Rounded white panels and generous padding keep it approachable.

**Mood:** practical, local, approachable, clean, sturdy

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#d1fae5` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#334155` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#334155` | Hairlines, dividers, outlines |
| Accent | `#047857` | Primary action and highlights |
| Second accent | `#10b981` | Supporting highlights |

Palette by frequency of use: `#64748b` · `#1e293b` · `#94a3b8` · `#0f172a` · `#ffffff` · `#334155` · `#047857` · `#475569` · `#065f46` · `#34d399`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** system-ui
- **Body:** system-ui
- **Scale (largest breakpoint):** h2 30px · h3 18px · body 14px
- **Weights in use:** semibold, bold, medium
- **Letter spacing:** `tracking-wide`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-xl` (12px)
- **Shadows:** `shadow-xl`, `shadow-lg`
- **Content width:** `max-w-[1100px]`
- **Section padding:** `py-20`, `py-24`
- **Common gaps:** `gap-2`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="h-12 px-6 rounded-full border border-slate-200 text-slate-700 text-sm font-semibold hover:bg-slate-50 transition-colors flex items-center gap-2">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Services (`services`)
4. Feature grid (`features`)
5. Case studies (`case-studies`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), CSS animations, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #d1fae5;
  --color-surface: #ffffff;
  --color-text: #334155;
  --color-muted: #64748b;
  --color-border: #334155;
  --color-accent: #047857;
  --color-accent-2: #10b981;
  --font-display: "system-ui", sans-serif;
  --font-body: "system-ui", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#d1fae5',
    surface: '#ffffff',
    ink: '#334155',
    muted: '#64748b',
    line: '#334155',
    accent: '#047857',
    accent2: '#10b981',
  },
  fontFamily: { display: ['system-ui'], sans: ['system-ui'] },
} }
```

## Do and don't

- **Do:** Set the emphasised phrase of the headline in deep green (#047857) and keep the rest in slate.
- **Do:** Use the dark button for the calculator submit and outlined green for secondary links.
- **Do:** Keep the instant quote card as a white rounded panel with segmented choices.
- **Don't:** Don't add a second accent colour; green is the only colour beyond the neutrals.
- **Don't:** Don't set the headline in a decorative face; keep system-ui.
- **Don't:** Don't drop the trust line under the hero buttons.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
