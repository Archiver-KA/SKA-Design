# Design system — AI Privacy Infrastructure Landing Page Template

`SN-W00128` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

Near-black privacy-infrastructure page on #0a0a0a, with white Inter headlines and the second hero line in a fading grey gradient. Colour is almost absent: a small red-tinted tag and the red accent (#ef4444) are the only hues, and buttons are white or dark outlined. A soft radial vignette behind the hero adds depth without ornament.

**Mood:** austere, monochrome, serious, dark

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Surface | `#171717` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#ef4444` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#737373` · `#a3a3a3` · `#262626` · `#0a0a0a` · `#d4d4d4` · `#404040` · `#171717` · `#000000` · `#e5e5e5`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 60px · h2 30px · h3 14px · body 12px
- **Weights in use:** medium, semibold
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded` (4px), `rounded-full` (9999px), `rounded-lg` (8px)
- **Shadows:** `shadow-[0_0_30px_-10px_rgba(255,255,255,0.1)]`
- **Content width:** `max-w-6xl`, `max-w-4xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-4`, `gap-6`

**Primary button**

```html
<a class="text-xs font-medium bg-white text-black px-3 py-1.5 rounded hover:bg-neutral-200 transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Services (`services`)
4. Feature grid (`features`)
5. Bento grid (`bento-grid`)
6. Integrations (`integrations`)
7. Product grid (`product-grid`)
8. Timeline (`timeline`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #0a0a0a;
  --color-surface: #171717;
  --color-text: #ffffff;
  --color-muted: #737373;
  --color-border: #ffffff;
  --color-accent: #ef4444;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 4px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0a0a0a',
    surface: '#171717',
    ink: '#ffffff',
    muted: '#737373',
    line: '#ffffff',
    accent: '#ef4444',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the page ground at #0a0a0a and set headlines in white
- **Do:** Set the second headline line in a grey gradient for contrast
- **Do:** Use the red accent (#ef4444) only on the status tag or one highlight per section
- **Don't:** Don't colour the buttons; keep the primary white and the secondary outlined
- **Don't:** Don't use the red accent for large fills
- **Don't:** Don't add illustrations; the page relies on type and the vignette

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
