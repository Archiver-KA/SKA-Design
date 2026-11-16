# Design system — ALBA Studio 

`SN-W01786` · portfolio · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A flat warm-grey page ([#b8b8b8]) with a very large, widely letterspaced wordmark and a dark brown headline ([#291d00]). The second line carries a rust-brown highlight ([#934910]) that matches the button and menu text, and the layout is blunt and spare. The stance is architectural, with type doing the work and no imagery in the hero.

**Mood:** brutalist, blunt, spare, warm grey

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#b8b8b8` | Page ground |
| Surface | `#a0a0a0` | Cards, panels, raised areas |
| Text | `#291d00` | Headings and primary copy |
| Border | `#291d00` | Hairlines, dividers, outlines |
| Accent | `#934910` | Primary action and highlights |

Palette by frequency of use: `#291d00` · `#934910` · `#b8b8b8` · `#ffea47` · `#a0a0a0`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h2 60px · h3 24px · body 16px
- **Weights in use:** semibold, normal, bold
- **Letter spacing:** `tracking-widest`, `tracking-[-0.04em]`

## Shape, spacing and layout

- **Corner radius:** `rounded-sm` (2px), `rounded-full` (9999px)
- **Shadows:** `shadow-lg`, `shadow-[#291D00]/10`
- **Content width:** `max-w-4xl`
- **Section padding:** `py-24`, `py-40`
- **Common gaps:** `gap-2`, `gap-6`, `gap-8`

**Primary button**

```html
<a class="block translate-y-full inline-flex items-center gap-3 text-xs font-semibold tracking-widest uppercase bg-[#291D00] text-[#B8B8B8] px-8 py-4 border border-[#291D00] hover:bg-transparent hover:text-[#291D00] transition-all duration-300 group shadow-lg shadow-[#291D00]/10">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Contact form (`contact-form`)
4. Hero (`hero`)
5. About (`about`)
6. Feature grid (`features`)
7. Process / steps (`how-it-works`)
8. Marquee (`marquee`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** gradient fills, blend modes
- **Libraries:** Tailwind CSS (CDN), GSAP, Lenis smooth scroll
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #b8b8b8;
  --color-surface: #a0a0a0;
  --color-text: #291d00;
  --color-border: #291d00;
  --color-accent: #934910;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 2px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#b8b8b8',
    surface: '#a0a0a0',
    ink: '#291d00',
    line: '#291d00',
    accent: '#934910',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the ground grey (#b8b8b8) and the headline dark brown (#291d00).
- **Do:** Use the rust (#934910) only for the highlight word and small calls to action.
- **Do:** Set the wordmark widely letterspaced in Inter.
- **Don't:** Don't add gradients or glow; the page is flat.
- **Don't:** Don't use a white page; the grey ground carries the look.
- **Don't:** Don't add a second accent colour beside the rust.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
