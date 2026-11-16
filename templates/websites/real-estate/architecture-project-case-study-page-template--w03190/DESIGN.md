# Design system — Architecture Project Case Study Page Template

`SN-W03190` · real-estate · light mode · Sinera Atlas theme `dwell` · language `fr`

## Direction

A quiet, light French architecture page on a warm off-white ground, with thin hairline column rules that divide the hero into a grid. The headline is a large, tightly set sans-serif in near-black across three lines, and the body copy sits below in mid-grey. Colour is almost absent; structure and whitespace do the work.

**Mood:** quiet, structured, minimal, airy

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f3f3ef` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#1a1a1a` | Headings and primary copy |
| Muted text | `#666666` | Secondary copy, captions |
| Border | `#d4d4d0` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#d4d4d0` · `#666666` · `#f3f3ef` · `#1a1a1a` · `#999999` · `#ffffff` · `#000000` · `#fafafa` · `#e5e5e0` · `#eaeae5`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 128px · h2 24px · h3 18px · body 14px
- **Weights in use:** medium, semibold, normal
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px)
- **Shadows:** `shadow-2xl`, `shadow-[#D4D4D0]/20`
- **Content width:** `max-w-[1600px]`
- **Common gaps:** `gap-3`, `gap-2`, `gap-6`

**Primary button**

```html
<a class="inline-flex items-center gap-3 px-8 py-4 bg-[#F3F3EF] text-[#1A1A1A] rounded-full text-lg font-medium hover:bg-white transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Logo cloud (`logo-cloud`)
4. Services (`services`)
5. Feature grid (`features`)
6. Articles (`blog-articles`)
7. Contact form (`contact-form`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #f3f3ef;
  --color-surface: #ffffff;
  --color-text: #1a1a1a;
  --color-muted: #666666;
  --color-border: #d4d4d0;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f3f3ef',
    surface: '#ffffff',
    ink: '#1a1a1a',
    muted: '#666666',
    line: '#d4d4d0',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in a large, tight sans-serif in near-black, across three lines
- **Do:** Draw structure with hairline column rules in the light grey border colour
- **Do:** Keep the ground at #f3f3ef and use no accent colour in the hero
- **Don't:** Don't add shadows or filled cards to the hero
- **Don't:** Don't use a second typeface for headlines
- **Don't:** Don't use strong colour; the page stays near-black and warm grey

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
