# Design system — Luxury Restaurant Landing Page Template

`SN-W02938` · food-beverage · dark mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A dark, moody steakhouse hero on near-black (#0b0b0b) over a dim, out-of-focus texture. The headline is large white serif with the second line in italic, and a bright red (#e50914) primary button and red eyebrow line provide the heat. Red is the only colour, so it marks every action and label on the page.

**Mood:** fiery, dramatic, bold, dark

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0b0b0b` | Page ground |
| Surface | `#151515` | Cards, panels, raised areas |
| Text | `#f5f5f5` | Headings and primary copy |
| Muted text | `#9ca3af` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#e50914` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#e50914` · `#6b7280` · `#9ca3af` · `#000000` · `#d1d5db` · `#151515` · `#0b0b0b` · `#374151` · `#4b5563`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 18px · body 12px
- **Weights in use:** medium, light
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded` (4px), `rounded-full` (9999px), `rounded-xl` (12px)
- **Shadows:** `shadow-[inset_0_0_30px_rgba(229,9,20,0)]`, `shadow-[inset_0_0_30px_rgba(229,9,20,0.15)]`, `shadow-2xl`
- **Content width:** `max-w-2xl`, `max-w-4xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-4`, `gap-2`, `gap-1`

**Primary button**

```html
<a class="inline-flex items-center justify-center border border-[#e50914] text-[#e50914] px-6 py-2.5 text-sm font-medium rounded hover:bg-[#e50914] hover:text-white transition-all duration-300 glow-accent-hover">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Product grid (`product-grid`)
5. Menu list (`menu-list`)
6. Call to action (`cta`)
7. Gallery / portfolio (`gallery-portfolio`)
8. Booking form (`booking`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #0b0b0b;
  --color-surface: #151515;
  --color-text: #f5f5f5;
  --color-muted: #9ca3af;
  --color-border: #ffffff;
  --color-accent: #e50914;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 4px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0b0b0b',
    surface: '#151515',
    ink: '#f5f5f5',
    muted: '#9ca3af',
    line: '#ffffff',
    accent: '#e50914',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in a large white serif with the second line in italic
- **Do:** Use bright red (#e50914) for the primary button and the eyebrow label
- **Do:** Keep the hero background dim and textured so the headline reads clearly
- **Don't:** Don't use a red page background; the red is for actions and labels
- **Don't:** Don't use the darker red (#b3070f) on dark ground; the bright red is the one that reads
- **Don't:** Don't use bright photography behind the headline

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
