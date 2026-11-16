# Design system — Legal Litigation Support Template

`SN-W03985` · business-services · dark mode · Sinera Atlas theme `route` · language `en`

## Direction

A dark, technical layout with a heavy headline in near-white stacked over four lines, set against a near-black ground. Lime (#c0ee3c) is used sparingly, on an outlined nav button and a thin rule beside the intro paragraph. A large rounded photograph of an office corridor grounds the hero in a real workplace rather than an abstract graphic.

**Mood:** technical, direct, dark, grounded, modern

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#09090b` | Page ground |
| Surface | `#18181b` | Cards, panels, raised areas |
| Text | `#fafafa` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#27272a` | Hairlines, dividers, outlines |
| Accent | `#c0ee3c` | Primary action and highlights |

Palette by frequency of use: `#c0ee3c` · `#09090b` · `#fafafa` · `#a1a1aa` · `#27272a` · `#18181b` · `#d4d4d8` · `#0f172a` · `#71717a` · `#a3d12a`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Space Grotesk
- **Body:** Space Grotesk
- **Loaded families:** Space Grotesk, Syne
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 20px · body 14px
- **Weights in use:** bold, light, medium
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-[2rem]` (2rem)
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-32`, `py-24`
- **Common gaps:** `gap-3`, `gap-6`, `gap-16`

**Primary button**

```html
<a class="inline-flex justify-center items-center px-8 py-4 text-sm font-bold uppercase tracking-widest bg-[#C0EE3C] text-zinc-950 rounded-full hover:bg-[#A3D12A] transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Process / steps (`how-it-works`)
5. Integrations (`integrations`)
6. Call to action (`cta`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #09090b;
  --color-surface: #18181b;
  --color-text: #fafafa;
  --color-muted: #71717a;
  --color-border: #27272a;
  --color-accent: #c0ee3c;
  --font-display: "Space Grotesk", sans-serif;
  --font-body: "Space Grotesk", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#09090b',
    surface: '#18181b',
    ink: '#fafafa',
    muted: '#71717a',
    line: '#27272a',
    accent: '#c0ee3c',
  },
  fontFamily: { display: ['Space Grotesk'], sans: ['Space Grotesk'] },
} }
```

## Do and don't

- **Do:** Use lime (#c0ee3c) only for outlined buttons, one rule and one highlight per section
- **Do:** Set headlines in bold sans-serif, near-white (#fafafa), stacked on several lines
- **Do:** Frame photographs with rounded corners, as in the hero
- **Don't:** Don't fill buttons with lime; keep them outlined
- **Don't:** Don't use light backgrounds; the dark ground is part of the look
- **Don't:** Don't set body copy at full white; use the grey tones

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
