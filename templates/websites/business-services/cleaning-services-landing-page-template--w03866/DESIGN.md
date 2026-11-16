# Design system — Cleaning Services Landing Page Template

`SN-W03866` · business-services · light mode · Sinera Atlas theme `route` · language `en`

## Direction

A clean, minimal service page on an off-white ground (#fafaf9) with a near-black sans-serif headline and a dark pill button as the main action. Service blocks sit in white rounded cards with small icon tiles and short headings, arranged in an even four-column row. The page relies on generous spacing and neutral tones, with no colour accent in the hero.

**Mood:** clean, neutral, orderly, minimal, reassuring

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fafaf9` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#1c1917` | Headings and primary copy |
| Muted text | `#57534e` | Secondary copy, captions |
| Border | `#e7e5e4` | Hairlines, dividers, outlines |
| Accent | `#1c1917` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#1c1917` · `#e7e5e4` · `#57534e` · `#fafaf9` · `#44403c` · `#292524` · `#f5f5f4` · `#78716c` · `#a8a29e`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 60px · h2 36px · h3 18px · body 14px
- **Weights in use:** medium, semibold
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-3xl` (24px)
- **Shadows:** `shadow-lg`, `shadow-stone-200/50`, `shadow-stone-900/10`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-16`
- **Common gaps:** `gap-2`, `gap-4`, `gap-3`

**Primary button**

```html
<a class="bg-stone-900 text-white text-sm font-medium px-5 py-2.5 rounded-full hover:bg-stone-800 transition-all hover:shadow-lg hover:shadow-stone-900/10 active:scale-95">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Services (`services`)
5. Booking form (`booking`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #fafaf9;
  --color-surface: #ffffff;
  --color-text: #1c1917;
  --color-muted: #57534e;
  --color-border: #e7e5e4;
  --color-accent: #1c1917;
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
    muted: '#57534e',
    line: '#e7e5e4',
    accent: '#1c1917',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the primary button in near-black (#1c1917) with white text
- **Do:** Set card titles in bold sans-serif and keep body text in a warm grey
- **Do:** Place service blocks in white rounded cards on the off-white ground
- **Don't:** Don't add a bright accent colour to buttons or headings; the page stays neutral
- **Don't:** Don't break the even four-column rhythm of the service cards
- **Don't:** Don't enlarge the icon tiles; they stay small squares beside each card title

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
