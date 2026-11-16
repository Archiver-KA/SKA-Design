# Design system — DevOps & Cloud Engineer Portfolio Template

`SN-W01973` · portfolio · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A black loader opens the page, with a small monospace INITIALIZING SYSTEM label above a large white 0 percent counter. The page itself is light and set in Inter, with an orange-red (#eb3a14) accent and GSAP and Lenis motion.

**Mood:** unverified, loading, minimal, monospaced, black

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f5f5f7` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#1a1a1a` | Headings and primary copy |
| Muted text | `#666666` | Secondary copy, captions |
| Border | `#e5e7eb` | Hairlines, dividers, outlines |
| Accent | `#eb3a14` | Primary action and highlights |
| Second accent | `#22c55e` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#eb3a14` · `#666666` · `#1a1a1a` · `#e5e7eb` · `#f5f5f7` · `#000000` · `#d1d5db` · `#6b7280` · `#9ca3af`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, JetBrains Mono
- **Scale (largest breakpoint):** h2 24px · h3 24px · body 14px
- **Weights in use:** semibold, bold, medium
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-lg` (8px)
- **Shadows:** `shadow-2xl`, `shadow-sm`
- **Content width:** `max-w-5xl`, `max-w-[1600px]`
- **Section padding:** `py-12`
- **Common gaps:** `gap-2`, `gap-4`, `gap-6`

**Primary button**

```html
<a class="block w-full text-center bg-primary text-white py-4 rounded-lg font-mono text-xs font-bold uppercase tracking-widest hover:bg-accent transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Cart / checkout (`cart-checkout`)
4. Hero (`hero`)
5. Marquee (`marquee`)
6. Timeline (`timeline`)
7. Booking form (`booking`)
8. Case studies (`case-studies`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), GSAP, Lenis smooth scroll
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #f5f5f7;
  --color-surface: #ffffff;
  --color-text: #1a1a1a;
  --color-muted: #666666;
  --color-border: #e5e7eb;
  --color-accent: #eb3a14;
  --color-accent-2: #22c55e;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f5f5f7',
    surface: '#ffffff',
    ink: '#1a1a1a',
    muted: '#666666',
    line: '#e5e7eb',
    accent: '#eb3a14',
    accent2: '#22c55e',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the loader centred, with a small monospace label above a large counter
- **Do:** Check the page once the counter reaches 100.
- **Do:** Reserve the orange-red (#eb3a14) for the primary action once the page is visible
- **Don't:** Don't leave the loader stuck at 0 percent if the scripts fail; the page would look blank
- **Don't:** Don't carry the black preloader into the rest of the page unless it is designed to
- **Don't:** Don't enlarge the monospace label; it is a small caption

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
