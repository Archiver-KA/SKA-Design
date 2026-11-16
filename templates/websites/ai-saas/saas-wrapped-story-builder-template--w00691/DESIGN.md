# Design system — SaaS Wrapped Story Builder Template

`SN-W00691` · ai-saas · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A two-pane builder for personalised recap slides: a white settings column on the left with tabs, an upload area, text fields and segmented controls, and a soft lavender-grey preview on the right. The preview shows a tall dark phone-frame card with a white logo tile and a small pill label, so the output is the focus. The interface is plain and neutral so the user's brand can take over.

**Mood:** functional, neutral, soft, tool-like

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f8fafc` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#0f172a` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#f1f5f9` | Hairlines, dividers, outlines |
| Accent | `#e2e8f0` | Primary action and highlights |
| Second accent | `#fbcfe8` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#f8fafc` · `#e2e8f0` · `#94a3b8` · `#f1f5f9` · `#64748b` · `#0f172a` · `#334155` · `#475569` · `#1e293b`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Plus Jakarta Sans
- **Body:** Inter
- **Loaded families:** Inter, Plus Jakarta Sans, Playfair Display, Space Mono
- **Scale (largest breakpoint):** h1 36px · h2 14px · h3 12px · body 18px
- **Weights in use:** bold, medium, semibold
- **Letter spacing:** `tracking-wider`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-xl` (12px)
- **Shadows:** `shadow-sm`, `shadow-xl`, `shadow-lg`
- **Common gaps:** `gap-2`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="bg-slate-900 hover:bg-slate-800 text-white px-4 py-1.5 rounded-md text-xs font-medium transition-all shadow-sm flex items-center gap-2">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Sidebar (`sidebar`)
3. Testimonials (`testimonials`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #f8fafc;
  --color-surface: #ffffff;
  --color-text: #0f172a;
  --color-muted: #64748b;
  --color-border: #f1f5f9;
  --color-accent: #e2e8f0;
  --color-accent-2: #fbcfe8;
  --font-display: "Plus Jakarta Sans", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f8fafc',
    surface: '#ffffff',
    ink: '#0f172a',
    muted: '#64748b',
    line: '#f1f5f9',
    accent: '#e2e8f0',
    accent2: '#fbcfe8',
  },
  fontFamily: { display: ['Plus Jakarta Sans'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the settings column white and neutral, with grey labels and one black primary button
- **Do:** Show the output as a tall phone-frame preview on a soft lavender-grey ground
- **Do:** Use segmented toggles such as Light/Dark and Round/Square for style choices
- **Don't:** Don't colour the settings panel; the brand comes from the user's inputs
- **Don't:** Don't put the preview on a white ground; it needs the tinted background to read
- **Don't:** Don't add more than one primary button per pane

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
