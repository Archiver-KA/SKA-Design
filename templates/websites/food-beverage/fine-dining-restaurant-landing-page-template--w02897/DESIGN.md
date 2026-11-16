# Design system — Fine Dining Restaurant Landing Page Template

`SN-W02897` · food-beverage · dark mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A dark, dramatic hero with a three-line serif headline in white, where the last line is an italic grey serif that steps down in tone. The background is near-black (#0a0a0a) and the gold (#c5a059) appears as a tracked eyebrow label and on the reserve buttons. The stance is premium and theatrical, with contrast coming from size and tonal step rather than colour.

**Mood:** premium, theatrical, dark, tonal, gilded

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Surface | `#171717` | Cards, panels, raised areas |
| Text | `#fafafa` | Headings and primary copy |
| Muted text | `#a3a3a3` | Secondary copy, captions |
| Border | `#171717` | Hairlines, dividers, outlines |
| Accent | `#c5a059` | Primary action and highlights |

Palette by frequency of use: `#c5a059` · `#0a0a0a` · `#171717` · `#a3a3a3` · `#fafafa` · `#404040` · `#737373` · `#e5e5e5` · `#d4d4d4` · `#ffffff`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Jost
- **Body:** Jost
- **Loaded families:** Cormorant Garamond, Jost
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 20px · body 14px
- **Weights in use:** light, normal, medium
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px)
- **Content width:** `max-w-[1400px]`, `max-w-2xl`
- **Section padding:** `py-32`, `py-24`
- **Common gaps:** `gap-8`, `gap-6`, `gap-4`

**Primary button**

```html
<a class="w-full sm:w-auto border border-neutral-600 text-neutral-50 uppercase tracking-widest text-xs px-8 py-4 font-normal hover:bg-neutral-50 hover:text-neutral-950 transition-colors text-center backdrop-blur-sm bg-neutral-950/20">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Awards / press (`awards-press`)
5. About (`about`)
6. Timeline (`timeline`)
7. Menu list (`menu-list`)
8. Gallery / portfolio (`gallery-portfolio`)
9. Testimonials (`testimonials`)
10. Booking form (`booking`)
11. Newsletter signup (`newsletter`)
12. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #0a0a0a;
  --color-surface: #171717;
  --color-text: #fafafa;
  --color-muted: #a3a3a3;
  --color-border: #171717;
  --color-accent: #c5a059;
  --font-display: "Jost", sans-serif;
  --font-body: "Jost", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0a0a0a',
    surface: '#171717',
    ink: '#fafafa',
    muted: '#a3a3a3',
    line: '#171717',
    accent: '#c5a059',
  },
  fontFamily: { display: ['Jost'], sans: ['Jost'] },
} }
```

## Do and don't

- **Do:** Set the headline in a large serif, with the final line in italic at lower contrast.
- **Do:** Use gold (#c5a059) for the reserve buttons and the eyebrow label only.
- **Do:** Set navigation and eyebrow labels in small tracked uppercase.
- **Don't:** Don't use gold for body copy; it is reserved for buttons and the eyebrow.
- **Don't:** Don't set the headline in a sans; it is a serif.
- **Don't:** Don't drop the outlined secondary button; the filled and outlined pair is the pattern.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
