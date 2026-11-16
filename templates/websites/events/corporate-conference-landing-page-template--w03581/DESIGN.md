# Design system — Corporate Conference Landing Page Template

`SN-W03581` · events · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

The corporate conference page is black (#000000) from edge to edge, with a large white headline that fades to grey on its second line, a gradient fill applied to the type. Body copy is light grey, and the buttons are one solid white and one thin outline. Green (#10b981) appears only as a small status dot. The effect is formal and quiet, with no decoration beyond the type.

**Mood:** sober, dark, corporate, restrained, quiet

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#27272a` | Cards, panels, raised areas |
| Text | `#d4d4d8` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#10b981` | Primary action and highlights |
| Second accent | `#a855f7` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#71717a` · `#a1a1aa` · `#000000` · `#e4e4e7` · `#10b981` · `#d4d4d8` · `#3b82f6` · `#a855f7` · `#27272a`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 30px · h3 18px · body 14px
- **Weights in use:** medium, semibold, normal
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-xl` (12px), `rounded-md` (6px), `rounded-lg` (8px)
- **Shadows:** `shadow-sm`, `shadow-[0_0_20px_rgba(255,255,255,0.1)]`
- **Content width:** `max-w-6xl`, `max-w-4xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-4`, `gap-2`, `gap-12`

**Primary button**

```html
<a class="h-9 px-4 inline-flex items-center justify-center rounded-md bg-white text-black text-sm font-medium hover:bg-zinc-200 transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Services (`services`)
5. Team (`team`)
6. Schedule (`schedule-agenda`)
7. Call to action (`cta`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #27272a;
  --color-text: #d4d4d8;
  --color-muted: #71717a;
  --color-border: #ffffff;
  --color-accent: #10b981;
  --color-accent-2: #a855f7;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 12px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#27272a',
    ink: '#d4d4d8',
    muted: '#71717a',
    line: '#ffffff',
    accent: '#10b981',
    accent2: '#a855f7',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the page on pure black (#000000) with white and grey type only
- **Do:** Use a gradient fill on one headline line, fading from white to grey
- **Do:** Use green (#10b981) only for small status markers
- **Don't:** Don't add coloured panels or accent blocks
- **Don't:** Don't put body text in pure white at small sizes
- **Don't:** Don't use more than one solid button in the hero

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
