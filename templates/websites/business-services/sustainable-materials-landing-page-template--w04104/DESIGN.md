# Design system — Sustainable Materials Landing Page Template

`SN-W04104` · business-services · dark mode · Sinera Atlas theme `route` · language `ko`

## Direction

A dark page on a near-black ground (#050505), with white text and warm amber (#f59e0b) used for a highlighted phrase in the headline and for the primary action. The Korean headline is large and centred, with generous space around it. The overall stance is calm and premium, with warm light set against the dark ground.

**Mood:** calm, premium, dark, warm, spacious

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#050505` | Page ground |
| Surface | `#1c1917` | Cards, panels, raised areas |
| Text | `#e7e5e4` | Headings and primary copy |
| Muted text | `#78716c` | Secondary copy, captions |
| Border | `#292524` | Hairlines, dividers, outlines |
| Accent | `#f59e0b` | Primary action and highlights |

Palette by frequency of use: `#78716c` · `#f59e0b` · `#fef3c7` · `#d6d3d1` · `#050505` · `#e7e5e4` · `#292524` · `#1c1917` · `#d97706` · `#a8a29e`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Cinzel
- **Body:** Cinzel
- **Loaded families:** Cinzel, Manrope
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 18px · body 12px
- **Weights in use:** extralight, normal
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-md` (6px)
- **Shadows:** `shadow-[0_0_1rem_rgba(212,175,55,0.05)]`
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Section padding:** `py-32`, `py-48`
- **Common gaps:** `gap-2`, `gap-6`, `gap-4`

**Primary button**

```html
<a class="flex items-center justify-center gap-2 px-8 py-4 border border-stone-800 text-stone-300 text-xs uppercase tracking-widest hover:border-stone-600 hover:bg-stone-900/50 hover:text-white transition-all duration-500 ease-out font-extralight rounded-md">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. About (`about`)
5. Feature grid (`features`)
6. Process / steps (`how-it-works`)
7. FAQ (`faq`)
8. Contact form (`contact-form`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #050505;
  --color-surface: #1c1917;
  --color-text: #e7e5e4;
  --color-muted: #78716c;
  --color-border: #292524;
  --color-accent: #f59e0b;
  --font-display: "Cinzel", serif;
  --font-body: "Cinzel", serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#050505',
    surface: '#1c1917',
    ink: '#e7e5e4',
    muted: '#78716c',
    line: '#292524',
    accent: '#f59e0b',
  },
  fontFamily: { display: ['Cinzel'], sans: ['Cinzel'] },
} }
```

## Do and don't

- **Do:** Use amber (#f59e0b) for one highlighted phrase per headline
- **Do:** Keep the page background near-black (#050505)
- **Do:** Centre hero text with generous space above and below
- **Don't:** Don't add bright blue or green accents
- **Don't:** Don't place amber text over amber fills
- **Don't:** Don't crowd the hero with more than a headline, a sub-line and two buttons

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
