# Design system — Digital Agency Landing Page Template

`SN-W01524` · agency-studio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A black hero with a very large two-tone headline, where the first word is white and the second is dim grey, and that contrast is the main typographic move. The primary button is gold, and the secondary is a dark outline, so gold is the only warm note. A floating green chat button is the only use of that green.

**Mood:** luxurious, dark, two-tone, restrained

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Surface | `#171717` | Cards, panels, raised areas |
| Text | `#d4d4d4` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#25d366` | Primary action and highlights |
| Second accent | `#d4af37` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#a3a3a3` · `#171717` · `#000000` · `#737373` · `#262626` · `#0a0a0a` · `#25d366` · `#3b82f6` · `#a855f7`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Space Grotesk
- **Body:** Inter
- **Loaded families:** Inter, Space Grotesk
- **Scale (largest breakpoint):** h1 128px · h2 48px · h3 30px · body 14px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-widest`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-lg` (8px)
- **Shadows:** `shadow-xl`, `shadow-lg`, `shadow-[0_0_20px_rgba(37,211,102,0.4)]`
- **Content width:** `max-w-7xl`, `max-w-5xl`
- **Section padding:** `py-32`, `py-12`
- **Common gaps:** `gap-2`, `gap-6`, `gap-8`

**Primary button**

```html
<a class="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#25D366] text-white text-sm font-semibold rounded-full hover:bg-[#20bd5a] transition-all w-full md:w-auto">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Case studies (`case-studies`)
4. Services (`services`)
5. Gallery / portfolio (`gallery-portfolio`)
6. About (`about`)
7. Contact form (`contact-form`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #0a0a0a;
  --color-surface: #171717;
  --color-text: #d4d4d4;
  --color-muted: #737373;
  --color-border: #ffffff;
  --color-accent: #25d366;
  --color-accent-2: #d4af37;
  --font-display: "Space Grotesk", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0a0a0a',
    surface: '#171717',
    ink: '#d4d4d4',
    muted: '#737373',
    line: '#ffffff',
    accent: '#25d366',
    accent2: '#d4af37',
  },
  fontFamily: { display: ['Space Grotesk'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the hero headline very large, with the second word in dim grey
- **Do:** Use gold for the primary button only
- **Do:** Keep the page ground near-black (#0a0a0a) with #171717 surfaces
- **Don't:** Don't use the green (#25d366) for anything except the chat button
- **Don't:** Don't add light backgrounds to the hero
- **Don't:** Don't add a second accent colour beside the gold

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
