# Design system — AI Insights Blog Layout

`SN-W00107` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

AI Horizons is a dark, editorial blog layout on a deep navy-black ground (#030712), with a large white system sans headline and a muted blue subtitle. A large featured-article card sits on the left, and a tinted side panel lists the latest news items in short stacked entries. The light indigo (#a5b4fc) marks category labels, and the layout is calm and text-first.

**Mood:** editorial, dark, calm, text-first, structured

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#030712` | Page ground |
| Text | `#ffffff` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#a5b4fc` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#a5b4fc` · `#6366f1` · `#818cf8` · `#030712` · `#000000` · `#4f46e5` · `#312e81` · `#ec4899` · `#3b82f6`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** system sans-serif
- **Body:** system sans-serif
- **Scale (largest breakpoint):** h1 36px · h2 30px · h3 20px · body 14px
- **Weights in use:** medium, bold

## Shape, spacing and layout

- **Corner radius:** `rounded-2xl` (16px), `rounded-full` (9999px), `rounded-lg` (8px)
- **Shadows:** `shadow-xl`
- **Content width:** `max-w-6xl`
- **Common gaps:** `gap-6`, `gap-8`

**Primary button**

```html
<a class="block w-full py-2 text-center bg-white/10 rounded-lg text-white hover:bg-white/20 transition">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. Bento grid (`bento-grid`)
3. About (`about`)
4. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** inline SVG

## Tokens

```css
:root {
  --color-background: #030712;
  --color-text: #ffffff;
  --color-border: #ffffff;
  --color-accent: #a5b4fc;
  --font-display: "system sans-serif", serif;
  --font-body: "system sans-serif", serif;
  --radius: 16px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#030712',
    ink: '#ffffff',
    line: '#ffffff',
    accent: '#a5b4fc',
  },
  fontFamily: { display: ['system sans-serif'], sans: ['system sans-serif'] },
} }
```

## Do and don't

- **Do:** Set the masthead in white sans with a muted indigo subtitle
- **Do:** Use the light indigo (#a5b4fc) for category tags only
- **Do:** Lay out articles as a large featured card beside a stacked news list
- **Don't:** Don't use a full-colour background for article cards; they are dark tinted panels
- **Don't:** Don't add extra accent colours to the tags
- **Don't:** Don't set the body copy in pure white; it is light grey

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
