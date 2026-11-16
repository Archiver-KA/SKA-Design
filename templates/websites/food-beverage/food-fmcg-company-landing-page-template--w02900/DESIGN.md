# Design system — Food FMCG Company Landing Page Template

`SN-W02900` · food-beverage · light mode · Sinera Atlas theme `dwell` · language `vi`

## Direction

A clean, corporate hero on white with a navy-black ground for primary actions and a single orange highlight in the headline. The headline mixes a heavy sans with an italic serif phrase in dark grey, which gives the page an editorial note, and the navy pill buttons (#0f172a) are the main controls. The stance is trustworthy and business-to-business, with colour kept to a word and a button.

**Mood:** clean, corporate, editorial, trustworthy, restrained

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#f1f5f9` | Cards, panels, raised areas |
| Text | `#475569` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#f1f5f9` | Hairlines, dividers, outlines |
| Accent | `#ea580c` | Primary action and highlights |
| Second accent | `#ea580c` | Supporting highlights |

Palette by frequency of use: `#0f172a` · `#ffffff` · `#64748b` · `#94a3b8` · `#e2e8f0` · `#f1f5f9` · `#475569` · `#ea580c` · `#334155` · `#1e293b`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 30px · h3 18px · body 12px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-md` (6px), `rounded-xl` (12px)
- **Shadows:** `shadow-lg`, `shadow-sm`, `shadow-md`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-24`, `py-16`
- **Common gaps:** `gap-2`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="hidden md:inline-flex items-center justify-center h-9 px-4 rounded-full bg-slate-900 text-white text-xs font-medium tracking-wide hover:bg-slate-800 transition-colors shadow-sm">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Product grid (`product-grid`)
5. Logo cloud (`logo-cloud`)
6. Articles (`blog-articles`)
7. Contact form (`contact-form`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #f1f5f9;
  --color-text: #475569;
  --color-muted: #64748b;
  --color-border: #f1f5f9;
  --color-accent: #ea580c;
  --color-accent-2: #ea580c;
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
    ink: '#475569',
    muted: '#64748b',
    line: '#f1f5f9',
    accent: '#ea580c',
    accent2: '#ea580c',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in heavy sans, with one orange (#ea580c) word and one italic serif phrase.
- **Do:** Use the navy-black (#0f172a) pill for primary buttons and the nav contact button.
- **Do:** Keep secondary buttons as white outlines beside the primary pill.
- **Don't:** Don't colour whole headlines orange; only a single word takes the accent.
- **Don't:** Don't use a serif for body copy; the serif appears only in the headline phrase.
- **Don't:** Don't fill secondary buttons; they stay white with an outline.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
