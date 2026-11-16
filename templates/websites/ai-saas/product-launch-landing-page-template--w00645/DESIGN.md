# Design system — Product Launch Landing Page Template

`SN-W00645` · ai-saas · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A bright launch page where the headline's second clause is set in muted slate and the first in near-black, so the contrast lives in the type rather than in colour. Coral (#ff6154) is reserved for the primary button, a fully rounded pill. The page sits on white with a faint radial wash, and the logo and launch count stay small above the headline.

**Mood:** crisp, friendly, bright, launch, clear

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#f1f5f9` | Cards, panels, raised areas |
| Text | `#0f172a` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#f1f5f9` | Hairlines, dividers, outlines |
| Accent | `#ff6154` | Primary action and highlights |
| Second accent | `#e2e8f0` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#f1f5f9` · `#0f172a` · `#64748b` · `#e2e8f0` · `#cbd5e1` · `#ff6154` · `#fff7ed` · `#94a3b8` · `#000000`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h3 18px · body 20px
- **Weights in use:** medium, bold, semibold
- **Letter spacing:** `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-xl` (12px)
- **Shadows:** `shadow-lg`, `shadow-2xl`, `shadow-sm`
- **Content width:** `max-w-4xl`, `max-w-2xl`
- **Common gaps:** `gap-3`, `gap-2`, `gap-8`

**Primary button**

```html
<a class="bg-ph-orange hover:bg-orange-600 text-white text-sm font-medium px-5 py-2.5 rounded-full transition-all active:scale-95 shadow-lg shadow-orange-500/20 flex items-center gap-1.5">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #f1f5f9;
  --color-text: #0f172a;
  --color-muted: #64748b;
  --color-border: #f1f5f9;
  --color-accent: #ff6154;
  --color-accent-2: #e2e8f0;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
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
    accent: '#ff6154',
    accent2: '#e2e8f0',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline's second clause in muted slate (#64748b) and the first in near-black (#0f172a)
- **Do:** Use coral (#ff6154) for the primary button only
- **Do:** Keep the logo and launch count small above the headline
- **Don't:** Don't set headline text in coral
- **Don't:** Don't add a second button colour; secondary buttons stay white and outlined
- **Don't:** Don't set the headline in a light weight; it stays heavy

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
