# Design system — Luxury Fitness Studio Landing Page Template

`SN-W02651` · sports-fitness · dark mode · Sinera Atlas theme `calm` · language `en`

## Direction

A dark, editorial fitness studio on near-black (#080808) with very large serif headlines in Playfair Display. The contrast between the high-contrast serif and the small Inter body text gives a luxury, magazine-like tone. Teal (#1a9c9c) is nearly absent from the hero and appears mainly in the logo mark, so colour stays restrained. Grey tones carry most of the text.

**Mood:** editorial, luxurious, restrained, dark, elegant

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#080808` | Page ground |
| Surface | `#0a0a0a` | Cards, panels, raised areas |
| Text | `#d4d4d8` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#1a9c9c` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#0a0a0a` · `#a1a1aa` · `#71717a` · `#080808` · `#52525b` · `#d4d4d8` · `#000000` · `#1a9c9c` · `#ef4444`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display
- **Scale (largest breakpoint):** h1 128px · h2 72px · h3 24px · body 16px
- **Weights in use:** normal, light, medium
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-3xl` (24px), `rounded-2xl` (16px)
- **Shadows:** `shadow-[0_0_10px_rgba(26,156,156,0.8)]`
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Section padding:** `py-40`, `py-32`
- **Common gaps:** `gap-2`, `gap-6`, `gap-4`

**Primary button**

```html
<a class="px-10 py-5 rounded-full text-white bg-white/5 border border-white/10 hover:bg-white/10 transition-colors duration-300 flex items-center justify-center gap-3 w-full sm:w-auto interactive">…</a>
```

## Page structure

Blocks in page order:

1. Logo cloud (`logo-cloud`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. About (`about`)
5. Feature grid (`features`)
6. Bento grid (`bento-grid`)
7. Timeline (`timeline`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #080808;
  --color-surface: #0a0a0a;
  --color-text: #d4d4d8;
  --color-muted: #71717a;
  --color-border: #ffffff;
  --color-accent: #1a9c9c;
  --font-display: "Playfair Display", serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#080808',
    surface: '#0a0a0a',
    ink: '#d4d4d8',
    muted: '#71717a',
    line: '#ffffff',
    accent: '#1a9c9c',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set display headlines in Playfair Display at very large sizes.
- **Do:** Pair the serif headlines with Inter for body and buttons.
- **Do:** Use the teal (#1a9c9c) only for the logo and a single highlight.
- **Don't:** Don't set body copy in the serif.
- **Don't:** Don't use teal for large fills or backgrounds.
- **Don't:** Don't add bright colours; the page stays grey and near-black.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
