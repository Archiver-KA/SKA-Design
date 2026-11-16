# Design system — Law Firm Landing Page Template

`SN-W03980` · business-services · dark mode · Sinera Atlas theme `route` · language `sv`

## Direction

A stark black page with a very large, high-contrast serif headline in white, kept short so the type carries the whole first screen. Body copy sits in muted grey beside it, and a single warm gold (#c4a470) marks the main call to action. The almost empty layout, with no imagery behind the headline, gives the page a severe, premium character.

**Mood:** stark, severe, premium, minimal, monochrome

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#0a0a0a` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#c4a470` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#c4a470` · `#1a1a1a` · `#9ca3af` · `#000000` · `#6b7280` · `#f3f4f6` · `#e5e7eb` · `#d1d5db` · `#4b5563`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display, Geist, Roboto, Montserrat, Poppins
- **Scale (largest breakpoint):** h1 128px · h2 48px · h3 20px · body 14px
- **Weights in use:** medium, light, semibold
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-sm` (2px), `rounded-full` (9999px)
- **Shadows:** `shadow-xl`, `shadow-sm`
- **Content width:** `max-w-[1200px]`, `max-w-[1400px]`
- **Section padding:** `py-32`, `py-48`
- **Common gaps:** `gap-8`, `gap-5`, `gap-16`

**Primary button**

```html
<a class="w-full bg-[#C4A470] hover:bg-[#b39360] text-white font-medium uppercase tracking-widest text-[11px] py-4 transition-colors flex items-center justify-center gap-2 rounded-sm mt-2 shadow-sm">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Menu list (`menu-list`)
3. Hero (`hero`)
4. Feature grid (`features`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #0a0a0a;
  --color-text: #ffffff;
  --color-muted: #6b7280;
  --color-border: #ffffff;
  --color-accent: #c4a470;
  --font-display: "Playfair Display", serif;
  --font-body: "Inter", sans-serif;
  --radius: 2px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#0a0a0a',
    ink: '#ffffff',
    muted: '#6b7280',
    line: '#ffffff',
    accent: '#c4a470',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headlines in a serif at very large size, in white, on black
- **Do:** Use gold (#c4a470) only for the one primary action in each view
- **Do:** Keep body copy in muted grey (#9ca3af) beside the headline
- **Don't:** Don't place photography behind the headline; the flat black is the design
- **Don't:** Don't use more than one accent colour
- **Don't:** Don't set body copy in full white

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
