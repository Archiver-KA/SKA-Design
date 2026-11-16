# Design system — AI Enterprise Solutions Landing Page Template

`SN-W00092` · ai-saas · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

LemonStalk is a light, soft enterprise page on an off-white ground (#f9fafb) with a faint grey gradient behind the hero. The headline is large, bold Inter in near-black (#18181b), and its second phrase is set in a grey gradient. The primary button is solid near-black, so the page uses charcoal rather than a brand colour for emphasis.

**Mood:** light, soft, corporate, calm, neutral

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f9fafb` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#18181b` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#e4e4e7` | Hairlines, dividers, outlines |
| Accent | `#18181b` | Primary action and highlights |
| Second accent | `#ef4444` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#18181b` · `#a1a1aa` · `#52525b` · `#e4e4e7` · `#71717a` · `#27272a` · `#d4d4d8` · `#3f3f46` · `#000000`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 30px · h3 20px · body 14px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded` (4px), `rounded-lg` (8px)
- **Shadows:** `shadow-sm`, `shadow-lg`, `shadow-[0_0_20px_rgba(255,255,255,0.3)]`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-20`
- **Common gaps:** `gap-3`, `gap-2`, `gap-4`

**Primary button**

```html
<a class="px-4 py-2 bg-zinc-900 dark:bg-white text-white dark:text-black rounded-full hover:bg-zinc-700 dark:hover:bg-lemon-400 transition-colors text-xs font-semibold">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Logo cloud (`logo-cloud`)
5. Product grid (`product-grid`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #f9fafb;
  --color-surface: #ffffff;
  --color-text: #18181b;
  --color-muted: #71717a;
  --color-border: #e4e4e7;
  --color-accent: #18181b;
  --color-accent-2: #ef4444;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f9fafb',
    surface: '#ffffff',
    ink: '#18181b',
    muted: '#71717a',
    line: '#e4e4e7',
    accent: '#18181b',
    accent2: '#ef4444',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the hero headline in bold Inter in near-black (#18181b), with the second phrase in grey
- **Do:** Use the solid near-black button for the primary action and an outline button for the second
- **Do:** Keep the hero on the off-white ground (#f9fafb) with a faint radial grey gradient
- **Don't:** Don't use purple (#a855f7) or red (#ef4444) as accents; the page uses charcoal
- **Don't:** Don't set headlines in mid-grey; they are near-black
- **Don't:** Don't add coloured buttons; the page relies on charcoal

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
