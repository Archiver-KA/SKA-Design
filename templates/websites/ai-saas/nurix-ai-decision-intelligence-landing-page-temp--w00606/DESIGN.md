# Design system — Nurix AI Decision Intelligence Landing Page Template

`SN-W00606` · ai-saas · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A warm, editorial light page on a cream ground (#fcfbf9) with a large dark serif headline and an orange italic phrase, Every Decision, as the single expressive move. Orange (#ea580c) is reserved for the primary button, the chart line and the retention card, and the rest is dark brown-black text on white. The serif and orange italic give it an old-world, considered tone that the sans body copy keeps grounded.

**Mood:** editorial, warm, considered, light, refined

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fcfbf9` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#292524` | Headings and primary copy |
| Muted text | `#78716c` | Secondary copy, captions |
| Border | `#e7e5e4` | Hairlines, dividers, outlines |
| Accent | `#ea580c` | Primary action and highlights |
| Second accent | `#22c55e` | Supporting highlights |

Palette by frequency of use: `#ea580c` · `#ffffff` · `#1c1917` · `#f97316` · `#78716c` · `#292524` · `#ffedd5` · `#b45309` · `#e7e5e4` · `#fb923c`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** Inter
- **Loaded families:** Playfair Display, Inter, Geist, Roboto, Montserrat, Poppins
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 20px · body 14px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-tighter`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-2xl` (16px)
- **Shadows:** `shadow-lg`, `shadow-2xl`, `shadow-sm`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-4`, `gap-2`, `gap-8`

**Primary button**

```html
<a class="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3.5 rounded-xl font-medium shadow-lg shadow-orange-500/25 transition-all duration-300 hover:scale-[1.02] flex items-center gap-2">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Logo cloud (`logo-cloud`)
5. Bento grid (`bento-grid`)
6. Timeline (`timeline`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN), AOS scroll reveal
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #fcfbf9;
  --color-surface: #ffffff;
  --color-text: #292524;
  --color-muted: #78716c;
  --color-border: #e7e5e4;
  --color-accent: #ea580c;
  --color-accent-2: #22c55e;
  --font-display: "Playfair Display", serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fcfbf9',
    surface: '#ffffff',
    ink: '#292524',
    muted: '#78716c',
    line: '#e7e5e4',
    accent: '#ea580c',
    accent2: '#22c55e',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the page ground to cream (#fcfbf9) with dark brown-black headlines (#292524) in a serif.
- **Do:** Use the orange italic (#ea580c) for one headline phrase and the primary button only.
- **Do:** Keep the chart line and the orange data card as the only other use of the orange.
- **Don't:** Don't set the whole headline in italic; only the one phrase takes it.
- **Don't:** Don't use the orange (#f97316) as a large background; it is for accents and actions.
- **Don't:** Don't set body copy in serif; body copy is sans.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
