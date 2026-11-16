# Design system — Restaurant Café Landing Page Template

`SN-W02972` · food-beverage · light mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A quiet café page on an off-white ground (#fafaf9) with a heavy Inter headline whose second line is set in a grey italic serif, a warm contrast to the sans-serif. Primary buttons are solid near-black pills (#1c1917) beside a plain outlined pill, and a soft peach glow sits in one corner behind the hero. The photograph is inset in a large rounded frame, so the page feels airy and understated.

**Mood:** warm, airy, editorial, understated

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fafaf9` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#292524` | Headings and primary copy |
| Muted text | `#78716c` | Secondary copy, captions |
| Border | `#1c1917` | Hairlines, dividers, outlines |
| Accent | `#1c1917` | Primary action and highlights |
| Second accent | `#22c55e` | Supporting highlights |

Palette by frequency of use: `#1c1917` · `#ffffff` · `#e7e5e4` · `#78716c` · `#fafaf9` · `#a8a29e` · `#44403c` · `#292524` · `#f5f5f4` · `#d6d3d1`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display
- **Scale (largest breakpoint):** h1 72px · h2 30px · h3 18px · body 14px
- **Weights in use:** medium, semibold, normal
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-lg` (8px), `rounded-full` (9999px), `rounded-xl` (12px)
- **Shadows:** `shadow-sm`, `shadow-2xl`, `shadow-lg`
- **Content width:** `max-w-6xl`, `max-w-3xl`
- **Section padding:** `py-20`
- **Common gaps:** `gap-2`, `gap-4`, `gap-12`

**Primary button**

```html
<a class="hidden sm:flex items-center gap-2 text-xs font-medium text-stone-600 px-4 py-2 hover:bg-stone-100 rounded-full transition-colors border border-transparent hover:border-stone-200">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Modal / overlay (`modal-overlay`)
4. Booking form (`booking`)
5. Services (`services`)
6. Menu list (`menu-list`)
7. Map / location (`map-location`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #fafaf9;
  --color-surface: #ffffff;
  --color-text: #292524;
  --color-muted: #78716c;
  --color-border: #1c1917;
  --color-accent: #1c1917;
  --color-accent-2: #22c55e;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 8px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fafaf9',
    surface: '#ffffff',
    ink: '#292524',
    muted: '#78716c',
    line: '#1c1917',
    accent: '#1c1917',
    accent2: '#22c55e',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use near-black pills (#1c1917) for primary and secondary calls to action.
- **Do:** Set the second headline line in a grey italic serif, as the hero does.
- **Do:** Keep the peach glow to the corners behind the hero image only.
- **Don't:** Don't use peach (#ffedd5) as a button fill; it is only a glow.
- **Don't:** Don't set the whole headline in the italic serif; only the second line.
- **Don't:** Don't square off the photo frame; it uses large rounded corners.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
