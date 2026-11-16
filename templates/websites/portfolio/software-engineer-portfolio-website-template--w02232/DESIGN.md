# Design system — Software Engineer Portfolio Website Template

`SN-W02232` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A dark, minimal engineering portfolio: a bold white sans headline with its last word faded toward grey, a short muted intro, and a white solid button beside an outlined one. A soft blue glow sits in the top corner, and the rest of the screen is almost black, so atmosphere comes from light, not shapes.

**Mood:** dark, minimal, focused, calm

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#171717` | Page ground |
| Surface | `#e5e5e5` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#a3a3a3` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#3b82f6` | Primary action and highlights |
| Second accent | `#f59e0b` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#a3a3a3` · `#d4d4d4` · `#171717` · `#10b981` · `#3b82f6` · `#a855f7` · `#f59e0b` · `#525252` · `#000000`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 12px · h3 20px · body 14px
- **Weights in use:** medium, semibold, light
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-2xl` (16px)
- **Shadows:** `shadow-2xl`, `shadow-black/20`, `shadow-[0_0_15px_rgba(16,185,129,0.1)]`
- **Content width:** `max-w-4xl`, `max-w-2xl`
- **Common gaps:** `gap-3`, `gap-2`, `gap-4`

**Primary button**

```html
<a class="group inline-flex items-center gap-2 px-5 py-2.5 bg-white text-black text-sm font-medium rounded-full hover:bg-neutral-200 transition-all hover:pr-4 hover:pl-6">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Bento grid (`bento-grid`)
5. About (`about`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #171717;
  --color-surface: #e5e5e5;
  --color-text: #ffffff;
  --color-muted: #a3a3a3;
  --color-border: #ffffff;
  --color-accent: #3b82f6;
  --color-accent-2: #f59e0b;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#171717',
    surface: '#e5e5e5',
    ink: '#ffffff',
    muted: '#a3a3a3',
    line: '#ffffff',
    accent: '#3b82f6',
    accent2: '#f59e0b',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in bold white sans with the last word faded toward grey
- **Do:** Keep the ground near-black (#171717) and body copy in grey (#a3a3a3)
- **Do:** Use the blue (#3b82f6) only as a soft background glow
- **Don't:** Don't set this template on a white ground; it is near-black
- **Don't:** Don't set buttons in saturated colours
- **Don't:** Don't add a second glow in the same corner

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
