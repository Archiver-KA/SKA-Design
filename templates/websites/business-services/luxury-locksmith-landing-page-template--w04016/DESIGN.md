# Design system — Luxury Locksmith Landing Page Template

`SN-W04016` · business-services · dark mode · Sinera Atlas theme `route` · language `en`

## Direction

A dark, premium locksmith hero with a large white headline, where the phrase 'most elegant' is set in italic grey. A dark translucent form card sits on the right, and an orange button is the only saturated colour, marking the main action. Small icon stats below the copy give quick reassurance, and the contrast between the dark ground and the orange keeps the call clear.

**Mood:** premium, dark, reassuring, focused, urgent

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#171717` | Cards, panels, raised areas |
| Text | `#d4d4d4` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#262626` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#ffffff` · `#262626` · `#a3a3a3` · `#171717` · `#737373` · `#404040` · `#000000` · `#d4d4d4` · `#0a0a0a` · `#525252`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display, Geist, Roboto, Montserrat, Poppins
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 36px · body 16px
- **Weights in use:** medium, light, semibold
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-xl` (12px)
- **Shadows:** `shadow-lg`, `shadow-2xl`, `shadow-[0_0_20px_rgba(249,115,22,0.3)]`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-12`
- **Common gaps:** `gap-3`, `gap-2`, `gap-1`

**Primary button**

```html
<a class="hidden sm:flex bg-brand-600 hover:bg-brand-500 text-white px-5 py-2.5 rounded-lg text-base font-medium transition-all items-center gap-2 shadow-[0_0_20px_rgba(249,115,22,0.3)] hover:shadow-[0_0_30px_rgba(249,115,22,0.5)]">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Logo cloud (`logo-cloud`)
3. Hero (`hero`)
4. Testimonials (`testimonials`)
5. Services (`services`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #171717;
  --color-text: #d4d4d4;
  --color-muted: #737373;
  --color-border: #262626;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#171717',
    ink: '#d4d4d4',
    muted: '#737373',
    line: '#262626',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use the orange action colour only for the main form button and the key call
- **Do:** Set the headline large in white, with one italic grey phrase
- **Do:** Put the form in a dark translucent card beside the headline
- **Don't:** Don't use orange for body copy or decorative icons
- **Don't:** Don't use light backgrounds on the hero
- **Don't:** Don't remove the stats row under the copy

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
