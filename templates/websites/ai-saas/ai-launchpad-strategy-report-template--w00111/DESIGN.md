# Design system — AI Launchpad Strategy Report Template

`SN-W00111` · ai-saas · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

Acme Creative Studio is a printed-report style page: a cream sheet (#fffaef) on a warm grey-beige ground, with a large high-contrast serif title in deep plum (#230839) and an italic second line. Small uppercase sans labels and a plum badge mark the metadata, and a yellow dot signals confidential status. It reads like a considered strategy document, with thin rules and ample margins.

**Mood:** editorial, warm, considered, printed, formal

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f2efe9` | Page ground |
| Surface | `#fffaef` | Cards, panels, raised areas |
| Text | `#230839` | Headings and primary copy |
| Border | `#fffaef` | Hairlines, dividers, outlines |
| Accent | `#230839` | Primary action and highlights |
| Second accent | `#fbe94e` | Supporting highlights |

Palette by frequency of use: `#230839` · `#fffaef` · `#fbe94e` · `#f0b6d2` · `#faf7f0` · `#ffffff` · `#000000` · `#f2efe9`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 30px · body 12px
- **Weights in use:** semibold, medium, bold
- **Letter spacing:** `tracking-widest`, `tracking-[0.2em]`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded` (4px)
- **Shadows:** `shadow-sm`, `shadow-2xl`, `shadow-[#230839]/5`
- **Content width:** `max-w-2xl`, `max-w-5xl`
- **Section padding:** `py-12`, `py-20`
- **Common gaps:** `gap-2`, `gap-3`, `gap-5`

**Primary button**

```html
<a class="group bg-[#230839] hover:bg-[#230839]/90 text-[#FBE94E] pl-6 pr-4 py-3 text-sm font-medium transition-colors flex items-center gap-4 shadow-lg shadow-[#230839]/20">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. Stats band (`stats`)
3. Feature grid (`features`)
4. Timeline (`timeline`)
5. Footer (`footer`)
6. Modal / overlay (`modal-overlay`)

## Motion, effects and stack

- **Effects:** gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #f2efe9;
  --color-surface: #fffaef;
  --color-text: #230839;
  --color-border: #fffaef;
  --color-accent: #230839;
  --color-accent-2: #fbe94e;
  --font-display: "Playfair Display", serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f2efe9',
    surface: '#fffaef',
    ink: '#230839',
    line: '#fffaef',
    accent: '#230839',
    accent2: '#fbe94e',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set titles in a high-contrast serif in deep plum (#230839), with the second line in italic
- **Do:** Use the yellow (#fbe94e) only for small status markers and highlights
- **Do:** Use small uppercase sans labels with thin rules to structure the metadata
- **Don't:** Don't use bright fills on the report pages; the cream and plum are the palette
- **Don't:** Don't set long body copy in the display serif; the body is sans
- **Don't:** Don't add drop shadows beyond the single soft card edge

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
