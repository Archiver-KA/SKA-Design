# Design system — My Portfolio 

`SN-W02133` · portfolio · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A soft, warm personal landing page on an off-white ground (#fcfbf9) with near-black stone text (#292524) and a serif display face for the name. The look is calm and personal without decoration: a circular portrait placeholder, small tracked labels and two pill buttons, one filled dark and one outlined. A faint blush glow sits behind the hero, and rose (#fb7185) appears only in that glow.

**Mood:** warm, calm, personal, elegant, soft

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fcfbf9` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#292524` | Headings and primary copy |
| Muted text | `#78716c` | Secondary copy, captions |
| Border | `#f5f5f4` | Hairlines, dividers, outlines |
| Accent | `#fb7185` | Primary action and highlights |

Palette by frequency of use: `#292524` · `#f5f5f4` · `#ffffff` · `#e7e5e4` · `#78716c` · `#fafaf9` · `#57534e` · `#ffe4e6` · `#fecdd3` · `#a8a29e`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** Lato
- **Loaded families:** Lato, Playfair Display, Geist, Roboto, Montserrat, Poppins
- **Scale (largest breakpoint):** h1 96px · h2 36px · h3 20px · body 14px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-wide`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-xl` (12px)
- **Shadows:** `shadow-sm`, `shadow-lg`, `shadow-stone-200/50`
- **Content width:** `max-w-6xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-2`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="hidden md:inline-flex items-center justify-center px-6 py-2 border rounded-full text-xs font-semibold tracking-wide uppercase transition-all duration-300 border-stone-200 hover:bg-stone-800 hover:text-white hover:border-stone-800">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Timeline (`timeline`)
5. Services (`services`)
6. Case studies (`case-studies`)
7. Testimonials (`testimonials`)
8. Contact form (`contact-form`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN), AOS scroll reveal
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #fcfbf9;
  --color-surface: #ffffff;
  --color-text: #292524;
  --color-muted: #78716c;
  --color-border: #f5f5f4;
  --color-accent: #fb7185;
  --font-display: "Playfair Display", serif;
  --font-body: "Lato", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fcfbf9',
    surface: '#ffffff',
    ink: '#292524',
    muted: '#78716c',
    line: '#f5f5f4',
    accent: '#fb7185',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['Lato'] },
} }
```

## Do and don't

- **Do:** Set the name in Playfair Display, large and centred, in near-black (#292524).
- **Do:** Use one filled dark pill and one outlined pill for the hero actions.
- **Do:** Keep the blush glow behind the hero only, in rose (#fb7185) at low strength.
- **Don't:** Don't set the name in burgundy; it is near-black.
- **Don't:** Don't add a bright accent button; the hero uses dark and outline only.
- **Don't:** Don't move the page to pure white; the warm off-white ground is part of the look.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
