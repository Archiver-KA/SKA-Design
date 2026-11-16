# Design system — Minimal Wedding Invitation Landing Page Template

`SN-W03623` · events · light mode · Sinera Atlas theme `workshop` · language `es`

## Direction

A quiet, airy invitation page on an off-white ground, with the couple's names set as one large serif line and the ampersand smaller and in a lighter warm grey. Everything else is small, letter-spaced sans-serif text for the date and venue, and white space does the work that colour would do elsewhere. Actions are near-black pill buttons, the only strong contrast on the screen.

**Mood:** minimal, airy, elegant, quiet

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fafaf9` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#292524` | Headings and primary copy |
| Muted text | `#78716c` | Secondary copy, captions |
| Border | `#e7e5e4` | Hairlines, dividers, outlines |
| Accent | `#1c1917` | Primary action and highlights |

Palette by frequency of use: `#78716c` · `#1c1917` · `#e7e5e4` · `#fafaf9` · `#292524` · `#a8a29e` · `#f5f5f4` · `#ffffff` · `#57534e` · `#d6d3d1`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display
- **Scale (largest breakpoint):** h1 96px · h2 36px · h3 30px · body 14px
- **Weights in use:** medium, light, bold
- **Letter spacing:** `tracking-wide`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-lg` (8px), `rounded-full` (9999px), `rounded-2xl` (16px)
- **Shadows:** `shadow-sm`, `shadow-md`, `shadow-lg`
- **Content width:** `max-w-5xl`, `max-w-3xl`
- **Common gaps:** `gap-2`, `gap-6`, `gap-12`

**Primary button**

```html
<a class="group flex items-center gap-2 text-xs font-medium bg-stone-900 text-stone-50 px-5 py-2 rounded-full hover:bg-stone-800 transition-all shadow-md shadow-stone-200">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Bento grid (`bento-grid`)
4. Contact form (`contact-form`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #fafaf9;
  --color-surface: #ffffff;
  --color-text: #292524;
  --color-muted: #78716c;
  --color-border: #e7e5e4;
  --color-accent: #1c1917;
  --font-display: "Playfair Display", serif;
  --font-body: "Inter", sans-serif;
  --radius: 8px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fafaf9',
    surface: '#ffffff',
    ink: '#292524',
    muted: '#78716c',
    line: '#e7e5e4',
    accent: '#1c1917',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the couple's names in a large serif, with the ampersand smaller and lighter
- **Do:** Use near-black (#1c1917) for the primary button only
- **Do:** Keep date and venue labels small and letter-spaced in the sans-serif
- **Don't:** Don't add coloured accents or decorative backgrounds
- **Don't:** Don't fill cards with strong colour; separate them with hairline borders (#e7e5e4)
- **Don't:** Don't set the names in a sans-serif

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
