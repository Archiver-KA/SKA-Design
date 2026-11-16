# Design system — SaaS Consultant Portfolio Landing Page Template

`SN-W02212` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A near-black editorial hero built on contrast between a roman and an italic serif. The headline is a large light serif (Cormorant Garamond at 96px), and its second line drops to grey italic, which carries the emphasis without colour. Small tracked caps label the top line, and the buttons are one solid white and one outlined, so the page reads as restrained and premium.

**Mood:** editorial, restrained, premium, quiet

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#080808` | Page ground |
| Surface | `#171717` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#a3a3a3` | Secondary copy, captions |
| Border | `#262626` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#171717` · `#ffffff` · `#262626` · `#525252` · `#080808` · `#e5e5e5` · `#a3a3a3` · `#737373` · `#d4d4d4` · `#f5f5f5`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Cormorant Garamond
- **Body:** Inter
- **Loaded families:** Cormorant Garamond, Inter
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 20px · body 14px
- **Weights in use:** medium, light, semibold
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px)
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-4`, `gap-2`, `gap-16`

**Primary button**

```html
<a class="group flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-white border border-neutral-800 px-4 py-2 hover:bg-neutral-100 hover:text-black transition-all duration-300">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Services (`services`)
5. Testimonials (`testimonials`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #080808;
  --color-surface: #171717;
  --color-text: #ffffff;
  --color-muted: #a3a3a3;
  --color-border: #262626;
  --font-display: "Cormorant Garamond", serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#080808',
    surface: '#171717',
    ink: '#ffffff',
    muted: '#a3a3a3',
    line: '#262626',
  },
  fontFamily: { display: ['Cormorant Garamond'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headlines in Cormorant Garamond, with the second line in grey italic
- **Do:** Keep the page ground at #080808 and the headline in white
- **Do:** Use one solid white button and one outlined button per hero
- **Don't:** Don't add a colour accent; the page is black, white and grey
- **Don't:** Don't set the italic line in bold
- **Don't:** Don't use a sans-serif for the headline

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
