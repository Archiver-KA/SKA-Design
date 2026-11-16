# Design system — live oak pharmacy

`SN-W02077` · portfolio · light mode · Sinera Atlas theme `route` · language `en`

## Direction

A warm off-white ground (#fbf9f6) carries a deep green (#064e3b) pill for the main action. Type is Inter sans, and shapes use pill and large-radius forms, with a restrained green palette.

**Mood:** clean, local, calm, trustworthy, restrained

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fbf9f6` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#292524` | Headings and primary copy |
| Muted text | `#78716c` | Secondary copy, captions |
| Border | `#e7e5e4` | Hairlines, dividers, outlines |
| Accent | `#064e3b` | Primary action and highlights |

Palette by frequency of use: `#064e3b` · `#d1fae5` · `#ffffff` · `#fbf9f6` · `#022c22` · `#e7e5e4` · `#78716c` · `#57534e` · `#fafaf9` · `#44403c`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 24px · body 18px
- **Weights in use:** medium, bold, normal
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-3xl` (24px)
- **Shadows:** `shadow-sm`, `shadow-xl`, `shadow-lg`
- **Content width:** `max-w-7xl`, `max-w-6xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-4`, `gap-2`, `gap-8`

**Primary button**

```html
<a class="hidden md:inline-flex bg-emerald-900 text-[#FBF9F6] px-5 py-2.5 rounded-full text-base font-medium hover:bg-emerald-800 transition-all hover:scale-[1.02] shadow-lg shadow-emerald-900/10">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Services (`services`)
5. Feature grid (`features`)
6. Contact form (`contact-form`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #fbf9f6;
  --color-surface: #ffffff;
  --color-text: #292524;
  --color-muted: #78716c;
  --color-border: #e7e5e4;
  --color-accent: #064e3b;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fbf9f6',
    surface: '#ffffff',
    ink: '#292524',
    muted: '#78716c',
    line: '#e7e5e4',
    accent: '#064e3b',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use the deep green (#064e3b) for the primary pill button and the key action only.
- **Do:** Keep the page on warm off-white (#fbf9f6) with dark green-grey type.
- **Do:** Use rounded-full pills for buttons and large-radius cards.
- **Don't:** Don't use bright greens; the palette stays with deep forest tones.
- **Don't:** Don't add dark section backgrounds; the page is light.
- **Don't:** Don't use square buttons; the pill is the button shape.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
