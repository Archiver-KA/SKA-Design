# Design system — Artisan Bâtiment Landing Page Template

`SN-W03808` · business-services · light mode · Sinera Atlas theme `route` · language `fr`

## Direction

A monochrome, centred landing page on white, with a large dark sans-serif headline set in two tightly spaced lines and a grey paragraph beneath it. Actions are dark and outlined pill buttons, and a small green status dot is the only colour in the hero. The page is spare and direct, with a large image frame below the actions to carry the photography.

**Mood:** monochrome, spare, direct, modern

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#fafafa` | Cards, panels, raised areas |
| Text | `#18181b` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#e4e4e7` | Hairlines, dividers, outlines |
| Accent | `#22c55e` | Primary action and highlights |

Palette by frequency of use: `#18181b` · `#ffffff` · `#e4e4e7` · `#71717a` · `#a1a1aa` · `#fafafa` · `#52525b` · `#d4d4d8` · `#f4f4f5` · `#3f3f46`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 60px · h2 30px · h3 18px · body 14px
- **Weights in use:** medium, bold, light
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-xl` (12px), `rounded-2xl` (16px), `rounded-md` (6px)
- **Shadows:** `shadow-sm`, `shadow`
- **Content width:** `max-w-6xl`, `max-w-3xl`
- **Section padding:** `py-20`, `py-32`
- **Common gaps:** `gap-8`, `gap-2`, `gap-4`

**Primary button**

```html
<a class="hidden md:inline-flex h-9 items-center justify-center rounded-md bg-zinc-900 px-4 text-sm font-medium text-white shadow transition-colors hover:bg-zinc-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Services (`services`)
5. Pricing (`pricing`)
6. FAQ (`faq`)
7. Menu list (`menu-list`)
8. Contact form (`contact-form`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels)
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #fafafa;
  --color-text: #18181b;
  --color-muted: #71717a;
  --color-border: #e4e4e7;
  --color-accent: #22c55e;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 12px;
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
    accent: '#22c55e',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Centre the hero headline in a heavy sans-serif, in near-black (#18181b), with tight line spacing.
- **Do:** Use dark pill buttons for the main action and outlined pills for the secondary one.
- **Do:** Keep the green status dot as the only colour in the hero.
- **Don't:** Don't add coloured backgrounds to the hero.
- **Don't:** Don't use green for buttons.
- **Don't:** Don't left-align the centred headline.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
