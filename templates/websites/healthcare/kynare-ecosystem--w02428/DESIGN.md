# Design system — KYNARE ECOSYSTEM

`SN-W02428` · healthcare · dark mode · Sinera Atlas theme `calm` · language `en`

## Direction

The ecosystem page opens on a near-black ground (#0a0a0a) with a tracked white caps line and a very large outlined word set as a thin stroke behind the copy. The sub-line is an italic monospace grey. Depth comes from the outline and the contrast between typefaces. The tone is technical and sparse.

**Mood:** sparse, technical, outlined, monochrome

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Surface | `#f9f9f9` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#1e293b` | Primary action and highlights |
| Second accent | `#10b981` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#000000` · `#a1a1aa` · `#71717a` · `#0a0a0a` · `#ea580c` · `#111111` · `#a3a3a3` · `#f8fafc` · `#f97316`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Bricolage Grotesque
- **Body:** var(--font-body)
- **Loaded families:** Bricolage Grotesque, Playfair Display, Cormorant Garamond, Geist, Roboto, Montserrat
- **Scale (largest breakpoint):** h1 30px · h2 72px · h3 36px · body 24px
- **Weights in use:** medium, semibold, light
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-xl` (12px)
- **Shadows:** `shadow-xl`, `shadow-2xl`, `shadow-[0_0_15px_rgba(255,255,255,0.8)]`
- **Content width:** `max-w-7xl`, `max-w-[70%]`
- **Section padding:** `py-24`
- **Common gaps:** `gap-3`, `gap-4`, `gap-2`

**Primary button**

```html
<a class="flex hover:bg-slate-800/80 transition text-2xl bg-slate-900/80 border-slate-700/80 border rounded-2xl px-3 py-2 items-center justify-between">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Menu list (`menu-list`)
4. Hero (`hero`)
5. Testimonials (`testimonials`)
6. Services (`services`)
7. About (`about`)
8. Contact form (`contact-form`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Three.js, Unicorn Studio (WebGL scenes)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #0a0a0a;
  --color-surface: #f9f9f9;
  --color-text: #ffffff;
  --color-muted: #71717a;
  --color-border: #ffffff;
  --color-accent: #1e293b;
  --color-accent-2: #10b981;
  --font-display: "Bricolage Grotesque", sans-serif;
  --font-body: "var(--font-body)", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0a0a0a',
    surface: '#f9f9f9',
    ink: '#ffffff',
    muted: '#71717a',
    line: '#ffffff',
    accent: '#1e293b',
    accent2: '#10b981',
  },
  fontFamily: { display: ['Bricolage Grotesque'], sans: ['var(--font-body)'] },
} }
```

## Do and don't

- **Do:** Keep the ground near-black (#0a0a0a) with white tracked caps for the wordmark line
- **Do:** Use large outlined type as a background device behind solid copy
- **Do:** Set the sub-line in italic monospace grey
- **Don't:** Don't fill the outlined word; it stays a thin stroke
- **Don't:** Don't add colour; the page is monochrome.
- **Don't:** Don't set the headline in a heavy weight; the tracking carries it

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
