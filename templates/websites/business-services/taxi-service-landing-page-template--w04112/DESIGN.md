# Design system — Taxi Service Landing Page Template

`SN-W04112` · business-services · light mode · Sinera Atlas theme `route` · language `en`

## Direction

A plain, minimal page on white, with a large, bold, tightly spaced sans-serif headline in near-black (#18181b) and muted grey support text. Buttons are solid near-black pills, and the layout relies on space and type rather than colour or imagery. The result is calm and direct.

**Mood:** minimal, direct, monochrome, spacious, calm

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#fafafa` | Cards, panels, raised areas |
| Text | `#18181b` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#e4e4e7` | Hairlines, dividers, outlines |
| Accent | `#18181b` | Primary action and highlights |

Palette by frequency of use: `#18181b` · `#f4f4f5` · `#fafafa` · `#e4e4e7` · `#71717a` · `#ffffff` · `#3f3f46` · `#a1a1aa` · `#27272a` · `#52525b`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 30px · h3 14px · body 14px
- **Weights in use:** medium, light, semibold
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-lg` (8px), `rounded-full` (9999px), `rounded-xl` (12px)
- **Shadows:** `shadow-sm`, `shadow-md`
- **Content width:** `max-w-screen-xl`, `max-w-3xl`
- **Section padding:** `py-24`, `py-12`
- **Common gaps:** `gap-4`, `gap-2`, `gap-6`

**Primary button**

```html
<a class="bg-zinc-900 text-white text-xs sm:text-sm font-medium px-4 py-2 rounded-full hover:bg-zinc-800 transition-colors font-sans">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Contact form (`contact-form`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #fafafa;
  --color-text: #18181b;
  --color-muted: #71717a;
  --color-border: #e4e4e7;
  --color-accent: #18181b;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 8px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#fafafa',
    ink: '#18181b',
    muted: '#71717a',
    line: '#e4e4e7',
    accent: '#18181b',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headlines large, bold and tightly tracked in near-black (#18181b)
- **Do:** Use solid near-black pill buttons as the main action
- **Do:** Keep the page on white, with light grey (#f4f4f5) for panels
- **Don't:** Don't add a colour accent to the buttons or headlines
- **Don't:** Don't crowd the hero with imagery
- **Don't:** Don't set headlines in thin weights

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
