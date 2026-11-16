# Design system — Cross-Border E-commerce Sourcing Landing Page Template

`SN-W01134` · ecommerce · dark mode · Sinera Atlas theme `market` · language `vi`

## Direction

A dark navy sourcing page on a night-blue ground, with a soft glow behind the hero. The headline is white sans-serif, and its second line is a mint green (#34d399) that carries the key offer. A solid green pill button sits centred below the body copy. The page is clean and technical, with the green reserved for the offer line and the button.

**Mood:** technical, clean, night, confident

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0f172a` | Page ground |
| Surface | `#1e293b` | Cards, panels, raised areas |
| Text | `#f8fafc` | Headings and primary copy |
| Muted text | `#94a3b8` | Secondary copy, captions |
| Border | `#334155` | Hairlines, dividers, outlines |
| Accent | `#34d399` | Primary action and highlights |
| Second accent | `#064e3b` | Supporting highlights |

Palette by frequency of use: `#1e293b` · `#94a3b8` · `#334155` · `#f8fafc` · `#cbd5e1` · `#ffffff` · `#64748b` · `#34d399` · `#064e3b` · `#0f172a`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Be Vietnam Pro
- **Body:** Be Vietnam Pro
- **Loaded families:** Be Vietnam Pro, Inter
- **Scale (largest breakpoint):** h1 48px · h2 24px · h3 18px · body 16px
- **Weights in use:** medium, light
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded` (4px)
- **Shadows:** `shadow-[0_0_0_1px_rgba(255,255,255,0.1)_inset]`, `shadow-[0_0_0_1px_rgba(255,255,255,0.1)_inset,0_8px_20px_-6px_rgba(5,150,105,0.3)]`, `shadow-2xl`
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-4`, `gap-6`, `gap-2`

**Primary button**

```html
<a class="inline-flex h-9 items-center justify-center rounded-full bg-emerald-600 px-4 text-sm font-medium text-white transition-colors hover:bg-emerald-500 shadow-[0_0_0_1px_rgba(255,255,255,0.1)_inset]">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Process / steps (`how-it-works`)
5. FAQ (`faq`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #0f172a;
  --color-surface: #1e293b;
  --color-text: #f8fafc;
  --color-muted: #94a3b8;
  --color-border: #334155;
  --color-accent: #34d399;
  --color-accent-2: #064e3b;
  --font-display: "Be Vietnam Pro", sans-serif;
  --font-body: "Be Vietnam Pro", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0f172a',
    surface: '#1e293b',
    ink: '#f8fafc',
    muted: '#94a3b8',
    line: '#334155',
    accent: '#34d399',
    accent2: '#064e3b',
  },
  fontFamily: { display: ['Be Vietnam Pro'], sans: ['Be Vietnam Pro'] },
} }
```

## Do and don't

- **Do:** Set the headline in white sans-serif, with the second line in mint green (#34d399)
- **Do:** Use the solid green pill button for the main call to action only
- **Do:** Keep the background dark navy (#0f172a) and use lighter slate tones for surfaces
- **Don't:** Don't use the green for body copy; it is for the offer line and the button
- **Don't:** Don't remove the soft glow behind the hero; it gives the page its depth
- **Don't:** Don't set the header on a light bar

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
