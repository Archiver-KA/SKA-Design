# Design system — Basketball Community and League Landing Page Template

`SN-W03570` · events · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

The sports league template is built on a near-black ground (#09090b) with white text and grey secondary labels. The opening screen is sparse: a small navigation bar and a single white pill button, with little else visible. The look is high-contrast and restrained, so it is defined mainly by the dark ground and the white type.

**Mood:** high-contrast, minimal, dark, sporty

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#09090b` | Page ground |
| Surface | `#18181b` | Cards, panels, raised areas |
| Text | `#fafafa` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#27272a` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#09090b` · `#ffffff` · `#e4e4e7` · `#18181b` · `#27272a` · `#a1a1aa` · `#d4d4d8` · `#71717a` · `#fafafa` · `#52525b`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Anton
- **Scale (largest breakpoint):** h2 48px · h3 48px · body 16px
- **Weights in use:** medium
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded` (4px)
- **Content width:** `max-w-2xl`, `max-w-7xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-4`, `gap-2`, `gap-8`

**Primary button**

```html
<a class="hidden md:inline-flex bg-white text-zinc-950 px-4 py-2 rounded-full text-sm font-medium hover:bg-zinc-200 transition-colors items-center gap-2 focus-ring">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Modal / overlay (`modal-overlay`)
3. Hero (`hero`)
4. Feature grid (`features`)
5. Call to action (`cta`)
6. Bento grid (`bento-grid`)
7. About (`about`)
8. Product grid (`product-grid`)
9. Newsletter signup (`newsletter`)
10. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #09090b;
  --color-surface: #18181b;
  --color-text: #fafafa;
  --color-muted: #71717a;
  --color-border: #27272a;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#09090b',
    surface: '#18181b',
    ink: '#fafafa',
    muted: '#71717a',
    line: '#27272a',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the page ground near-black (#09090b)
- **Do:** Use the white pill as the only solid button in the navigation
- **Do:** Set labels in grey (#a1a1aa) and headings in white
- **Don't:** Don't add light section backgrounds
- **Don't:** Don't add colour to the navigation
- **Don't:** Don't use more than one solid button on the first screen

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
