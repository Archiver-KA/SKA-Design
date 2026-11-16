# Design system — Personal Trainer Portfolio Landing Page Template

`SN-W02159` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A dark coaching page on a near-black warm ground (#121212), with a very large white uppercase wordmark, 'MARCUS', spanning the lower right and overlapping the hero. The headline is white sans with a grey subline for the second clause. The accent is a warm orange pill button. Chrome is minimal, so the wordmark carries the page.

**Mood:** bold, athletic, dark, stark, warm

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#121212` | Page ground |
| Surface | `#000000` | Cards, panels, raised areas |
| Text | `#f2f0eb` | Headings and primary copy |
| Border | `#121212` | Hairlines, dividers, outlines |
| Accent | `#d7ff4a` | Primary action and highlights |

Palette by frequency of use: `#121212` · `#f2f0eb` · `#d7ff4a` · `#000000`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** var(--sa-font-body)
- **Body:** var(--sa-font-body)
- **Loaded families:** Bricolage Grotesque, Inter
- **Scale (largest breakpoint):** h1 148px · h2 48px · h3 36px · body 14px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** none used — square corners
- **Content width:** `max-w-6xl`, `max-w-2xl`
- **Section padding:** `py-14`, `py-24`
- **Common gaps:** `gap-8`, `gap-x-4`, `gap-2`

**Primary button**

```html
<a class="min-h-[48px] px-6 font-semibold bg-ground text-ink hover:bg-black">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Logo cloud (`logo-cloud`)

## Motion, effects and stack

- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** inline SVG

## Tokens

```css
:root {
  --color-background: #121212;
  --color-surface: #000000;
  --color-text: #f2f0eb;
  --color-border: #121212;
  --color-accent: #d7ff4a;
  --font-display: "var(--sa-font-body)", sans-serif;
  --font-body: "var(--sa-font-body)", sans-serif;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#121212',
    surface: '#000000',
    ink: '#f2f0eb',
    line: '#121212',
    accent: '#d7ff4a',
  },
  fontFamily: { display: ['var(--sa-font-body)'], sans: ['var(--sa-font-body)'] },
} }
```

## Do and don't

- **Do:** Set the wordmark as a very large white uppercase name spanning the page width, overlapping the hero.
- **Do:** Use one warm orange pill button as the primary call to action.
- **Do:** Keep the headline white, with the second clause in grey.
- **Don't:** Don't use the lime (#d7ff4a) as an accent; the accent is orange.
- **Don't:** Don't shrink the wordmark; the layout depends on its scale.
- **Don't:** Don't add cards or borders; the hero is open and dark.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
