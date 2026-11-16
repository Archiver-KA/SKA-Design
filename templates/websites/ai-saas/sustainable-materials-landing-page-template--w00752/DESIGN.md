# Design system — Sustainable Materials Landing Page Template

`SN-W00752` · ai-saas · dark mode · Sinera Atlas theme `route` · language `ko`

## Direction

A full-bleed photograph of two hands holding brown coffee grounds and blue plastic pellets, darkened with a grey overlay so the white centred headline stays readable. The buttons are translucent white pills with a dark grey pill beside them, so the controls sit on the image without a solid colour. The brown and blue materials are the only colour, so the photograph does the work an accent would do elsewhere.

**Mood:** photographic, natural, muted, plain

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#27272a` | Page ground |
| Surface | `#18181b` | Cards, panels, raised areas |
| Text | `#f4f4f5` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#27272a` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#27272a` · `#f4f4f5` · `#18181b` · `#71717a` · `#a1a1aa` · `#d4d4d8` · `#e4e4e7` · `#09090b` · `#a8a29e` · `#78716c`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 36px · body 14px
- **Weights in use:** normal, medium, semibold
- **Letter spacing:** `tracking-tighter`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-xl` (12px)
- **Shadows:** `shadow-[0_0_30px_rgba(41,37,36,0.2)]`, `shadow-[0_0_40px_rgba(244,244,245,0.15)]`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-32`
- **Common gaps:** `gap-3`, `gap-2`, `gap-4`

**Primary button**

```html
<a class="hidden md:inline-flex items-center justify-center text-xs font-medium text-zinc-100 bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 px-4 py-2 rounded-full transition-all">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Product grid (`product-grid`)
5. Process / steps (`how-it-works`)
6. Feature grid (`features`)
7. About (`about`)
8. Pricing (`pricing`)
9. FAQ (`faq`)
10. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #27272a;
  --color-surface: #18181b;
  --color-text: #f4f4f5;
  --color-muted: #71717a;
  --color-border: #27272a;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#27272a',
    surface: '#18181b',
    ink: '#f4f4f5',
    muted: '#71717a',
    line: '#27272a',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use a full-bleed photograph with a grey overlay under all hero text
- **Do:** Keep headline text white and centred over the image
- **Do:** Style the buttons as translucent white or dark grey pills
- **Don't:** Don't place a solid colour block over the photograph
- **Don't:** Don't set the headline in a serif face; the type here is sans
- **Don't:** Don't add coloured accents beside the image

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
