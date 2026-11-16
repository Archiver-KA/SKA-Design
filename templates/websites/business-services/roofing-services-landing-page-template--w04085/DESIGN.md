# Design system — Roofing Services Landing Page Template

`SN-W04085` · business-services · dark mode · Sinera Atlas theme `route` · language `en`

## Direction

A dark, monumental hero in which very large white serif headlines fill the left side of the screen, with tight leading and no ornament. A burnt-orange (#c05621) button is the only solid colour, and the brand's two-letter accent picks up the same tone. The page is austere and confident, letting the scale of the type carry it.

**Mood:** monumental, austere, confident, dark, editorial

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#050505` | Page ground |
| Surface | `#111111` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#a1a1aa` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#c05621` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#a1a1aa` · `#050505` · `#c05621` · `#d4d4d8` · `#0f1216` · `#111111` · `#ef4444` · `#71717a` · `#eab308`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Geist
- **Body:** Geist
- **Loaded families:** Geist, Newsreader
- **Scale (largest breakpoint):** h1 176px · h3 30px · body 30px
- **Weights in use:** light, semibold, medium
- **Letter spacing:** `tracking-tighter`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded` (4px)
- **Content width:** `max-w-4xl`
- **Common gaps:** `gap-3`, `gap-4`, `gap-1`

**Primary button**

```html
<a class="group relative inline-flex items-center justify-center px-10 py-5 bg-white/5 border border-white/10 hover:border-white/20 rounded-full overflow-hidden transition-all duration-300 hover:bg-white/10 backdrop-blur-md">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Logo cloud (`logo-cloud`)
4. Services (`services`)
5. Gallery / portfolio (`gallery-portfolio`)
6. Contact form (`contact-form`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #050505;
  --color-surface: #111111;
  --color-text: #ffffff;
  --color-muted: #a1a1aa;
  --color-border: #ffffff;
  --color-accent: #c05621;
  --font-display: "Geist", sans-serif;
  --font-body: "Geist", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#050505',
    surface: '#111111',
    ink: '#ffffff',
    muted: '#a1a1aa',
    line: '#ffffff',
    accent: '#c05621',
  },
  fontFamily: { display: ['Geist'], sans: ['Geist'] },
} }
```

## Do and don't

- **Do:** Set headlines very large in white serif with tight line spacing
- **Do:** Use the burnt orange (#c05621) for the main quote button and the brand accent
- **Do:** Keep the navigation small and uppercase, with the emergency link in red (#ef4444)
- **Don't:** Don't set body copy in the serif; the serif is for display text only
- **Don't:** Don't add decorative shapes behind the headline
- **Don't:** Don't use the red (#ef4444) on buttons; it marks the emergency link only

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
