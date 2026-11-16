# Design system — pizzeria 1

`SN-W02959` · food-beverage · dark mode · Sinera Atlas theme `dwell` · language `cs`

## Direction

A dark, cinematic single-page pizzeria on near-black (#050505) with a white serif headline and an italic gold second line in pale yellow. A thin gold rule drops from above the hero and another rises from below, framing the text like a stage. Body copy is a warm light grey, and the gold is held to the italic line and the small button outline.

**Mood:** cinematic, dark, refined, theatrical

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#050505` | Page ground |
| Surface | `#1c1917` | Cards, panels, raised areas |
| Text | `#d6d3d1` | Headings and primary copy |
| Muted text | `#78716c` | Secondary copy, captions |
| Border | `#292524` | Hairlines, dividers, outlines |
| Accent | `#fbbf24` | Primary action and highlights |

Palette by frequency of use: `#292524` · `#000000` · `#a8a29e` · `#fde68a` · `#fbbf24` · `#1c1917` · `#78716c` · `#d6d3d1` · `#f59e0b` · `#f5f5f4`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Manrope
- **Body:** Manrope
- **Loaded families:** Cinzel, Manrope
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 30px · body 10px
- **Weights in use:** light, semibold
- **Letter spacing:** `tracking-widest`, `tracking-[0.2em]`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-sm` (2px)
- **Shadows:** `shadow-2xl`, `shadow-[0_0_20px_rgba(212,175,55,0.2)]`
- **Content width:** `max-w-4xl`
- **Section padding:** `py-32`, `py-48`
- **Common gaps:** `gap-2`, `gap-5`, `gap-6`

**Primary button**

```html
<a class="hidden md:flex items-center gap-3 border border-stone-700/50 rounded-full px-5 py-2 hover:border-amber-700/50 hover:bg-amber-900/10 transition-all duration-500 group">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. About (`about`)
5. Menu list (`menu-list`)
6. Feature grid (`features`)
7. Contact form (`contact-form`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #050505;
  --color-surface: #1c1917;
  --color-text: #d6d3d1;
  --color-muted: #78716c;
  --color-border: #292524;
  --color-accent: #fbbf24;
  --font-display: "Manrope", sans-serif;
  --font-body: "Manrope", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#050505',
    surface: '#1c1917',
    ink: '#d6d3d1',
    muted: '#78716c',
    line: '#292524',
    accent: '#fbbf24',
  },
  fontFamily: { display: ['Manrope'], sans: ['Manrope'] },
} }
```

## Do and don't

- **Do:** Set the hero headline in a serif with the second line in italic gold
- **Do:** Frame the hero with thin gold rules above and below the text block
- **Do:** Keep the outline button in light grey text on the black ground
- **Don't:** Don't use the pale yellow (#fde68a) for the italic line; it reads washed out next to the darker gold
- **Don't:** Don't set body copy in pure white
- **Don't:** Don't use a light page background

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
