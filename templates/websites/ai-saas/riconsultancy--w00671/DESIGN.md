# Design system — RIConsultancy 

`SN-W00671` · ai-saas · dark mode · Sinera Atlas theme `route` · language `en`

## Direction

A dark, editorial consulting hero: a black left panel with a large white serif headline, where the second line 'Bigger Returns.' is set in italic. A blue-tinted gradient panel fills the right half and carries the only colour in the first screen. Buttons are plain white and black with squared corners, and an outlined tag above the headline introduces the service.

**Mood:** editorial, dark, precise, restrained

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#e5e7eb` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#3b82f6` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#000000` · `#1a1a1a` · `#f1f5f9` · `#64748b` · `#3b82f6` · `#1e293b` · `#e5e7eb` · `#cbd5e1` · `#2a2a2a`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Playfair Display
- **Scale (largest breakpoint):** h1 96px · h2 30px · h3 20px · body 14px
- **Weights in use:** medium, light, bold
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-none` (0), `rounded-full` (9999px), `rounded-lg` (8px)
- **Shadows:** `shadow-lg`, `shadow-[0_0_8px_rgba(59,130,246,0.8)]`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="hidden md:flex items-center gap-2 text-xs font-medium border px-6 py-2 rounded-none transition-colors text-white border-white bg-transparent hover:bg-white hover:text-black uppercase tracking-widest">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Services (`services`)
5. Timeline (`timeline`)
6. Gallery / portfolio (`gallery-portfolio`)
7. Stats band (`stats`)
8. Contact form (`contact-form`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN), Unicorn Studio (WebGL scenes)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #e5e7eb;
  --color-text: #ffffff;
  --color-muted: #64748b;
  --color-border: #ffffff;
  --color-accent: #3b82f6;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 0;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#e5e7eb',
    ink: '#ffffff',
    muted: '#64748b',
    line: '#ffffff',
    accent: '#3b82f6',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in a large serif, with the second line in italic
- **Do:** Keep the left hero panel black and place the blue gradient panel on the right only
- **Do:** Use squared buttons in plain white and black, matching the no-radius setting
- **Don't:** Don't round the buttons; the template uses square corners
- **Don't:** Don't put the serif headline on the blue panel; it stays on black
- **Don't:** Don't add a second accent colour; the blue is the only one visible

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
