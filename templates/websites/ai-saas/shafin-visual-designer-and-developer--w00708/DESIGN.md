# Design system — Shafin - Visual Designer and  Developer

`SN-W00708` · ai-saas · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A quiet portfolio homepage: a plain white ground with a large near-black Inter headline, where one phrase is set in orange (#ea580c) and another in light italic grey. The orange is the only colour and appears on the availability label and that headline word, while the primary button is a solid near-black pill. Copy sits in a narrow left column, and the section below is left to the work itself.

**Mood:** editorial, precise, warm, minimal, confident

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#1c1917` | Headings and primary copy |
| Muted text | `#57534e` | Secondary copy, captions |
| Border | `#e7e5e4` | Hairlines, dividers, outlines |
| Accent | `#ea580c` | Primary action and highlights |

Palette by frequency of use: `#ea580c` · `#1c1917` · `#e7e5e4` · `#ffffff` · `#57534e` · `#a8a29e` · `#78716c` · `#f5f5f4` · `#fafaf9` · `#fed7aa`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 72px · h2 24px · h3 18px · body 14px
- **Weights in use:** medium, semibold, normal
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-md` (6px), `rounded-2xl` (16px)
- **Content width:** `max-w-5xl`, `max-w-3xl`
- **Common gaps:** `gap-1.5`, `gap-2`, `gap-12`

**Primary button**

```html
<a class="hidden sm:inline-flex text-sm font-medium px-4 py-2 rounded-full transition-colors duration-300 bg-stone-900 text-white hover:bg-orange-600">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Case studies (`case-studies`)
4. About (`about`)
5. Contact form (`contact-form`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #ffffff;
  --color-text: #1c1917;
  --color-muted: #57534e;
  --color-border: #e7e5e4;
  --color-accent: #ea580c;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#ffffff',
    ink: '#1c1917',
    muted: '#57534e',
    line: '#e7e5e4',
    accent: '#ea580c',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the key headline word in orange (#ea580c) and keep the rest near-black.
- **Do:** Use italic light grey for one phrase in the headline as a contrast device.
- **Do:** Make the primary button a solid near-black pill with white text.
- **Don't:** Don't tint the page background peach; the ground is white.
- **Don't:** Don't use orange for body copy or large fills.
- **Don't:** Don't add a second accent colour to the hero.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
