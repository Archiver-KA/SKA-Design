# Design system — Cultural Events Ticketing Landing Page Template

`SN-W03685` · entertainment · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A dark, warm-brown page where a cream serif headline sits over a near-black ground, and its second line is set in italic gold-tan. The primary button is filled gold-tan beside an outlined button, so the page reads as theatrical and tailored. Navigation is small and quiet at the top.

**Mood:** warm, theatrical, refined, dark

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#181514` | Page ground |
| Surface | `#a8a5a2` | Cards, panels, raised areas |
| Text | `#f5f1ec` | Headings and primary copy |
| Border | `#a8a5a2` | Hairlines, dividers, outlines |
| Accent | `#d6b98c` | Primary action and highlights |

Palette by frequency of use: `#a8a5a2` · `#d6b98c` · `#f5f1ec` · `#181514` · `#ffffff` · `#2a1f1c` · `#000000`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Cormorant, IBM Plex Sans Arabic, Inter, Playfair Display
- **Scale (largest breakpoint):** h1 96px · h2 36px · h3 20px · body 14px
- **Weights in use:** medium, light, bold
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-md` (6px), `rounded-lg` (8px)
- **Shadows:** `shadow-2xl`, `shadow-black/40`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-24`, `py-16`
- **Common gaps:** `gap-2`, `gap-4`, `gap-6`

**Primary button**

```html
<a class="text-sm text-[#181514] bg-[#D6B98C] px-4 py-2 rounded-full font-medium whitespace-nowrap">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Feature grid (`features`)
5. Product grid (`product-grid`)
6. Booking form (`booking`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #181514;
  --color-surface: #a8a5a2;
  --color-text: #f5f1ec;
  --color-border: #a8a5a2;
  --color-accent: #d6b98c;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#181514',
    surface: '#a8a5a2',
    ink: '#f5f1ec',
    line: '#a8a5a2',
    accent: '#d6b98c',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in cream serif, with the second line in gold-tan italic
- **Do:** Use the gold-tan (#d6b98c) for the primary button and the italic line
- **Do:** Keep the ground near-black (#181514) across all sections
- **Don't:** Don't use the gold-tan for body text
- **Don't:** Don't add cool colours; the page stays warm
- **Don't:** Don't use a light background for the hero

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
