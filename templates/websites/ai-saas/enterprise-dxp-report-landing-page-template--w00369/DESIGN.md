# Design system — Enterprise DXP Report Landing Page Template

`SN-W00369` · ai-saas · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A white editorial landing page with a navy-black (#0f172a) headline set large in Inter, the middle and last lines dropped to slate grey. The hero is split: copy and an email form on the left, and a report cover on a pale grey plane on the right. Colour is almost absent; the dark navy report cover is the strongest mass on the page and carries the identity.

**Mood:** editorial, neutral, authoritative, clean, print-like

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#f8fafc` | Cards, panels, raised areas |
| Text | `#0f172a` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#0f172a` | Primary action and highlights |

Palette by frequency of use: `#0f172a` · `#ffffff` · `#cbd5e1` · `#64748b` · `#94a3b8` · `#f8fafc` · `#e2e8f0` · `#f1f5f9` · `#475569` · `#020617`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 20px · body 12px
- **Weights in use:** semibold, medium, normal
- **Letter spacing:** `tracking-widest`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-sm` (2px), `rounded-full` (9999px), `rounded-lg` (8px)
- **Shadows:** `shadow-2xl`, `shadow-slate-200/50`, `shadow-slate-300`
- **Content width:** `max-w-7xl`, `max-w-5xl`
- **Section padding:** `py-24`, `py-20`
- **Common gaps:** `gap-2`, `gap-4`, `gap-3`

**Primary button**

```html
<a class="bg-slate-950 text-white text-xs font-medium px-5 py-2.5 rounded-sm hover:bg-slate-800 transition-colors flex items-center gap-2">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Integrations (`integrations`)
5. Team (`team`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), blend modes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #f8fafc;
  --color-text: #0f172a;
  --color-muted: #64748b;
  --color-border: #ffffff;
  --color-accent: #0f172a;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 2px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#f8fafc',
    ink: '#0f172a',
    muted: '#64748b',
    line: '#ffffff',
    accent: '#0f172a',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headlines in Inter at display size, with the first line in #0f172a and following lines in slate grey.
- **Do:** Use the dark navy (#0f172a) for the primary button and the report cover, and nowhere else as a fill.
- **Do:** Place a document or report mockup on the right of the hero as the single visual.
- **Don't:** Don't add a second accent colour; the page is neutral and navy only.
- **Don't:** Don't put the form in a heavy frame; the field and button sit directly on the white.
- **Don't:** Don't place a full-bleed image behind the headline.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
