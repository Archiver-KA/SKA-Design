# Design system — Ivy Studio Beauty Landing Page Template

`SN-W02763` · beauty-fashion · light mode · Sinera Atlas theme `dwell` · language `en`

## Direction

Muted, earthy studio page on a pale grey-beige ground, with a very large serif headline that alternates dark brown roman lines and sage green italic lines. A large round sage button with a small arrow sits in the lower left and is the one strong shape on the page. The stance is quiet and organic, with the type acting as the composition.

**Mood:** earthy, quiet, organic, editorial

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#e8e6e1` | Page ground |
| Surface | `#f0ede6` | Cards, panels, raised areas |
| Text | `#2b2320` | Headings and primary copy |
| Muted text | `#586353` | Secondary copy, captions |
| Border | `#2b2320` | Hairlines, dividers, outlines |
| Accent | `#586353` | Primary action and highlights |

Palette by frequency of use: `#2b2320` · `#586353` · `#e8e6e1` · `#f0ede6` · `#ffffff` · `#57534e` · `#465042`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Cormorant Garamond
- **Body:** Cormorant Garamond
- **Loaded families:** Cormorant Garamond, Inter, Geist, Roboto, Montserrat, Poppins
- **Scale (largest breakpoint):** h2 72px · h3 30px · body 14px
- **Weights in use:** bold, medium, semibold
- **Letter spacing:** `tracking-widest`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px)
- **Shadows:** `shadow-2xl`
- **Content width:** `max-w-[1600px]`, `max-w-[1920px]`
- **Common gaps:** `gap-2`, `gap-8`, `gap-6`

**Primary button**

```html
<a class="inline-block px-6 py-3 border border-paper/20 rounded-full text-[10px] font-bold tracking-widest uppercase hover:bg-paper hover:text-ink transition-all">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Services (`services`)
5. About (`about`)
6. Video / media (`video-media`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), blend modes
- **Libraries:** Tailwind CSS (CDN), Lenis smooth scroll
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #e8e6e1;
  --color-surface: #f0ede6;
  --color-text: #2b2320;
  --color-muted: #586353;
  --color-border: #2b2320;
  --color-accent: #586353;
  --font-display: "Cormorant Garamond", serif;
  --font-body: "Cormorant Garamond", serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#e8e6e1',
    surface: '#f0ede6',
    ink: '#2b2320',
    muted: '#586353',
    line: '#2b2320',
    accent: '#586353',
  },
  fontFamily: { display: ['Cormorant Garamond'], sans: ['Cormorant Garamond'] },
} }
```

## Do and don't

- **Do:** Alternate dark brown roman lines with sage green (#586353) italic lines in the headline
- **Do:** Use a large round sage button with a small arrow icon for the main action
- **Do:** Keep the ground pale grey-beige (#e8e6e1) with dark brown type
- **Don't:** Don't add bright colours; the palette is brown, sage and cream
- **Don't:** Don't set the headline in a sans serif; the serif is the identity
- **Don't:** Don't turn the round action into a rectangle; the circle is the page's one strong shape

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
