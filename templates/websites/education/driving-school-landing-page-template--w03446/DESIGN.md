# Design system — Driving School Landing Page Template

`SN-W03446` · education · light mode · Sinera Atlas theme `calm` · language `de`

## Direction

A light, mint-tinted driving-school hero with an uppercase bold sans headline in dark slate. The word Führerschein is set in bright green [#22c55e] with a black rule beneath it, and a serif italic quote adds a personal note. A dark slate button is the main action, and a rotating circular text badge sits at the right.

**Mood:** playful, bright, fresh, direct

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fafafa` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#1f2937` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#f3f4f6` | Hairlines, dividers, outlines |
| Accent | `#22c55e` | Primary action and highlights |

Palette by frequency of use: `#22c55e` · `#ffffff` · `#1f2937` · `#6b7280` · `#9ca3af` · `#4b5563` · `#f3f4f6` · `#f0fdf4` · `#d1d5db` · `#f9fafb`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Caveat, Montserrat, Inter
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 18px · body 14px
- **Weights in use:** bold, black, extrabold
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-3xl` (24px)
- **Shadows:** `shadow-sm`, `shadow-2xl`, `shadow-xl`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-4`, `gap-1`

**Primary button**

```html
<a class="bg-[#22C55E] text-white px-6 py-2.5 rounded-full font-heading font-bold text-xs tracking-wider hover:bg-[#1F2937] hover:scale-105 transition-all duration-300 shadow-lg shadow-green-500/20">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Marquee (`marquee`)
4. Bento grid (`bento-grid`)
5. Feature grid (`features`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #fafafa;
  --color-surface: #ffffff;
  --color-text: #1f2937;
  --color-muted: #6b7280;
  --color-border: #f3f4f6;
  --color-accent: #22c55e;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fafafa',
    surface: '#ffffff',
    ink: '#1f2937',
    muted: '#6b7280',
    line: '#f3f4f6',
    accent: '#22c55e',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the key headline word in bright green (#22c55e) with a black rule beneath
- **Do:** Use the dark slate button for the main action
- **Do:** Add a serif italic quote in the hero for a personal tone
- **Don't:** Don't set long paragraphs in the serif italic
- **Don't:** Don't use the green for buttons; it is reserved for headline emphasis
- **Don't:** Don't add more than one black rule per headline

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
