# Design system — Adrino Template

`SN-W00009` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A near-black hero has a large serif headline, 'Scale beyond the limits.', fading from white into grey on its second line. Thin violet lines (#c084fc) and a soft glow sit behind the headline, and a dark code console sits low on the page. The white primary button and a ghost secondary button keep the call to action plain, and the product is the proof.

**Mood:** premium, technical, dark, editorial

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#020204` | Page ground |
| Surface | `#020204` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#ffffff` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#c084fc` | Primary action and highlights |
| Second accent | `#3b82f6` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#94a3b8` · `#a855f7` · `#64748b` · `#c084fc` · `#cbd5e1` · `#020204` · `#10b981` · `#34d399` · `#0a0a0c`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Newsreader
- **Body:** Inter
- **Loaded families:** Inter, JetBrains Mono, Newsreader, Geist, Roboto, Montserrat
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 18px · body 14px
- **Weights in use:** medium, semibold, light
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded` (4px)
- **Shadows:** `shadow-2xl`, `shadow-lg`, `shadow-[0_0_15px_rgba(168,85,247,0.3)]`
- **Content width:** `max-w-2xl`, `max-w-6xl`
- **Section padding:** `py-32`
- **Common gaps:** `gap-2`, `gap-3`, `gap-1`

**Primary button**

```html
<a class="group relative text-xs font-medium bg-[#0a0a0c] border px-4 py-2 rounded-md transition-all overflow-hidden hover:border-purple-500/50 shadow-[0_0_0_1px_rgba(0,0,0,0)] hover:shadow-[0_0_0_1px_rgba(168,85,247,0.2)] text-white border-white/10 active:scale-95 active:bg-[#121215]">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Stats band (`stats`)
4. Code / terminal (`code-terminal`)
5. Bento grid (`bento-grid`)
6. Process / steps (`how-it-works`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #020204;
  --color-surface: #020204;
  --color-text: #ffffff;
  --color-muted: #ffffff;
  --color-border: #ffffff;
  --color-accent: #c084fc;
  --color-accent-2: #3b82f6;
  --font-display: "Newsreader", serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#020204',
    surface: '#020204',
    ink: '#ffffff',
    muted: '#ffffff',
    line: '#ffffff',
    accent: '#c084fc',
    accent2: '#3b82f6',
  },
  fontFamily: { display: ['Newsreader'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the hero headline in a large serif with a white-to-grey fade on the second line
- **Do:** Use the violet (#c084fc) for thin glows and line accents only
- **Do:** Show the product as a dark code console below the hero fold
- **Don't:** Don't use purple as a page background or large fill
- **Don't:** Don't set the headline in a light sans-serif
- **Don't:** Don't place two solid call-to-action buttons of equal weight

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
