# Design system — BT y Asociados - Asesores de Seguros

`SN-W00255` · ai-saas · light mode · Sinera Atlas theme `circuit` · language `es`

## Direction

A restrained, corporate advisory page: a light slate page (#f1f5f9) frames a deep navy panel (#1a2533) that holds the hero copy. The headline pairs an off-white serif with an italic sand (#c5b394) phrase, and the body is a small, widely spaced sans in soft grey on navy. The navy and sand give the page a trust-led tone, and the layout keeps to one framed hero block.

**Mood:** authoritative, corporate, warm, restrained

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f1f5f9` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#111111` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#f1f5f9` | Hairlines, dividers, outlines |
| Accent | `#1a2533` | Primary action and highlights |
| Second accent | `#c5b394` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#e2e8f0` · `#94a3b8` · `#1a2533` · `#f1f5f9` · `#f8fafc` · `#64748b` · `#c5b394` · `#cbd5e1` · `#1e293b`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Manrope
- **Body:** Manrope
- **Loaded families:** Manrope, Playfair Display
- **Scale (largest breakpoint):** h1 20px · h2 24px · h3 18px · body 10px
- **Weights in use:** bold, semibold, medium
- **Letter spacing:** `tracking-widest`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded` (4px)
- **Shadows:** `shadow-sm`, `shadow-xl`, `shadow-brand-navy/5`
- **Content width:** `max-w-[90rem]`, `max-w-5xl`
- **Common gaps:** `gap-2`, `gap-4`, `gap-6`

**Primary button**

```html
<a class="px-6 py-3 rounded-lg bg-brand-gold text-brand-navy text-xs font-bold uppercase tracking-widest hover:bg-white transition-colors text-center flex items-center gap-2 justify-center">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. Logo cloud (`logo-cloud`)
3. Feature grid (`features`)
4. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #f1f5f9;
  --color-surface: #ffffff;
  --color-text: #111111;
  --color-muted: #64748b;
  --color-border: #f1f5f9;
  --color-accent: #1a2533;
  --color-accent-2: #c5b394;
  --font-display: "Manrope", sans-serif;
  --font-body: "Manrope", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f1f5f9',
    surface: '#ffffff',
    ink: '#111111',
    muted: '#64748b',
    line: '#f1f5f9',
    accent: '#1a2533',
    accent2: '#c5b394',
  },
  fontFamily: { display: ['Manrope'], sans: ['Manrope'] },
} }
```

## Do and don't

- **Do:** Set the hero panel in deep navy (#1a2533) on a light slate page ground
- **Do:** Use the sand (#c5b394) only for the italic highlight phrase
- **Do:** Keep the eyebrow pill small and outlined inside the navy panel
- **Don't:** Don't use bright accent colours; navy and sand are the palette
- **Don't:** Don't set the headline in sans-serif; the headline is an off-white serif
- **Don't:** Don't add shadows or gradients to the navy panel

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
