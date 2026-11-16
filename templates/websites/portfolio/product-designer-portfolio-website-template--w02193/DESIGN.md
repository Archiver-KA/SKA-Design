# Design system — Product Designer Portfolio Website Template

`SN-W02193` · portfolio · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

Light framed hero: a pale grid-textured ground (#fafafa) holds a white rounded panel with near-black headlines, the second line in dark green (#64906e). A dark pill button, a floating grey nav pill and a Selected Works row sit on the panel. The green is the only colour, used for the headline accent, so the page reads as calm and tidy.

**Mood:** light, tidy, calm, framed, modern

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fafafa` | Page ground |
| Surface | `#171717` | Cards, panels, raised areas |
| Text | `#171717` | Headings and primary copy |
| Muted text | `#404040` | Secondary copy, captions |
| Border | `#64906e` | Hairlines, dividers, outlines |
| Accent | `#64906e` | Primary action and highlights |

Palette by frequency of use: `#64906e` · `#ffffff` · `#e5e5e5` · `#404040` · `#a3a3a3` · `#171717` · `#525252` · `#fafafa` · `#f5f5f5` · `#000000`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Manrope
- **Body:** Manrope
- **Loaded families:** Manrope, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 96px · h2 30px · h3 18px · body 16px
- **Weights in use:** medium, bold, semibold
- **Letter spacing:** `tracking-wide`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-lg` (8px), `rounded-xl` (12px), `rounded-full` (9999px)
- **Shadows:** `shadow-sm`, `shadow-[0_24px_48px_-12px_rgba(100,144,110,0.15),inset_0_1px_0_0_rgba(255,255,255,0.9),inset_0_0_20px_rgba(255,255,255,0.5)]`, `shadow-2xl`
- **Content width:** `max-w-[1500px]`, `max-w-5xl`
- **Common gaps:** `gap-2`, `gap-6`, `gap-3`

**Primary button**

```html
<a class="inline-block px-1 -mx-1 rounded-sm text-neutral-900 font-semibold border-b border-[#64906E]/30 hover:border-[#64906E] hover:text-[#64906E] transition-all duration-300 hover:scale-110 hover:bg-neutral-50 origin-bottom">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. Bento grid (`bento-grid`)
3. About (`about`)
4. Booking form (`booking`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Three.js, Spline 3D
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #fafafa;
  --color-surface: #171717;
  --color-text: #171717;
  --color-muted: #404040;
  --color-border: #64906e;
  --color-accent: #64906e;
  --font-display: "Manrope", sans-serif;
  --font-body: "Manrope", sans-serif;
  --radius: 8px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fafafa',
    surface: '#171717',
    ink: '#171717',
    muted: '#404040',
    line: '#64906e',
    accent: '#64906e',
  },
  fontFamily: { display: ['Manrope'], sans: ['Manrope'] },
} }
```

## Do and don't

- **Do:** Set the headline in near-black Inter, with the second line in green (#64906e)
- **Do:** Keep content inside a white rounded panel on the pale ground
- **Do:** Use a dark pill button for the main action
- **Don't:** Don't use the green (#64906e) as a page background
- **Don't:** Don't remove the faint grid texture behind the panel
- **Don't:** Don't add shadows heavier than the panel edge

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
