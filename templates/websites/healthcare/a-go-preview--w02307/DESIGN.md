# Design system — A-go Preview

`SN-W02307` · healthcare · dark mode · Sinera Atlas theme `calm` · language `fr`

## Direction

A dark starfield backdrop with a large bold white sans headline in three lines, where the middle phrase is green (#37cf86) and the closing phrase is amber (#ffb600). Small tracked labels and a monospace readout add a diagnostic tone. The colour does the emphasis, while the layout stays plain and the stars sit low behind the type.

**Mood:** diagnostic, dark, bold, clinical, futuristic

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#18181b` | Page ground |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#52525b` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#ffb600` | Primary action and highlights |
| Second accent | `#37cf86` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#37cf86` · `#71717a` · `#000000` · `#a1a1aa` · `#ffb600` · `#18181b` · `#27272a` · `#52525b` · `#d4d4d8`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Manrope
- **Body:** Inter
- **Loaded families:** Inter, Manrope
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 24px · body 14px
- **Weights in use:** bold, semibold, medium
- **Letter spacing:** `tracking-wider`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-3xl` (24px)
- **Shadows:** `shadow-[0_0_10px_#37CF86]`, `shadow-2xl`, `shadow-black/50`
- **Content width:** `max-w-7xl`, `max-w-6xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-8`, `gap-2`, `gap-4`

**Primary button**

```html
<a class="w-full sm:w-auto group relative px-8 py-4 bg-accent hover:bg-emerald-600 text-black rounded-full font-bold tracking-wide transition-all shadow-[0_0_40px_-10px_rgba(55,207,134,0.5)] flex items-center justify-center gap-3">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Bento grid (`bento-grid`)
4. Feature grid (`features`)
5. Call to action (`cta`)
6. Contact form (`contact-form`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #18181b;
  --color-text: #ffffff;
  --color-muted: #52525b;
  --color-border: #ffffff;
  --color-accent: #ffb600;
  --color-accent-2: #37cf86;
  --font-display: "Manrope", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#18181b',
    ink: '#ffffff',
    muted: '#52525b',
    line: '#ffffff',
    accent: '#ffb600',
    accent2: '#37cf86',
  },
  fontFamily: { display: ['Manrope'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in bold white sans, with the middle phrase in green (#37cf86) and the last in amber (#ffb600)
- **Do:** Keep the starfield at low opacity behind the hero
- **Do:** Use monospace text for small technical labels
- **Don't:** Don't use the green as a page background; it is a phrase colour
- **Don't:** Don't colour body copy in green or amber
- **Don't:** Don't add more than two accent phrases to the hero

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
