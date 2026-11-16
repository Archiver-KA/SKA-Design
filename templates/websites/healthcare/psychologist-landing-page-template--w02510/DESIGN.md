# Design system — Psychologist Landing Page Template

`SN-W02510` · healthcare · light mode · Sinera Atlas theme `calm` · language `es`

## Direction

A soft, human-centred hero on off-white (#fafaf9), with a near-black headline in which one italic word is set in dusty rose (#b86e8a). The primary button is a pale pink pill (#fbc2d1) with dark text, and the secondary is a plain outline. A tall rounded photograph of two people in conversation anchors the page and keeps the tone warm and personal.

**Mood:** warm, personal, soft, reassuring

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fafaf9` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#1c1917` | Headings and primary copy |
| Muted text | `#78716c` | Secondary copy, captions |
| Border | `#f5f5f4` | Hairlines, dividers, outlines |
| Accent | `#b86e8a` | Primary action and highlights |

Palette by frequency of use: `#1c1917` · `#ffffff` · `#78716c` · `#f5f5f4` · `#a8a29e` · `#b86e8a` · `#fbc2d1` · `#fafaf9` · `#57534e` · `#292524`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display, Geist, Roboto, Montserrat, Poppins
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 18px · body 14px
- **Weights in use:** medium, light, semibold
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-[2rem]` (2rem), `rounded-[2.5rem]` (2.5rem)
- **Shadows:** `shadow-xl`, `shadow-sm`, `shadow-lg`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-20`
- **Common gaps:** `gap-4`, `gap-6`, `gap-12`

**Primary button**

```html
<a class="inline-flex items-center justify-center px-8 py-4 bg-[#FBC2D1] text-stone-900 text-sm font-medium rounded-full hover:bg-[#ffcfdc] transition-all shadow-[0_10px_30px_-10px_rgba(251,194,209,0.6)]">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Call to action (`cta`)
4. Bento grid (`bento-grid`)
5. FAQ (`faq`)
6. Footer (`footer`)
7. Modal / overlay (`modal-overlay`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #fafaf9;
  --color-surface: #ffffff;
  --color-text: #1c1917;
  --color-muted: #78716c;
  --color-border: #f5f5f4;
  --color-accent: #b86e8a;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fafaf9',
    surface: '#ffffff',
    ink: '#1c1917',
    muted: '#78716c',
    line: '#f5f5f4',
    accent: '#b86e8a',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set one italic word per headline in dusty rose (#b86e8a)
- **Do:** Use the pale pink pill (#fbc2d1) as the primary action with dark text
- **Do:** Frame photographs of people with large rounded corners
- **Don't:** Don't use pink as a page background; it is for buttons and emphasis
- **Don't:** Don't set text in white on the pale pink button; contrast fails
- **Don't:** Don't use more than one accent colour per section

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
