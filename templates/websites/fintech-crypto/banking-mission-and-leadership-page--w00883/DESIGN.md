# Design system — Banking Mission and Leadership Page

`SN-W00883` · fintech-crypto · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A deep navy page (#0f172a) with a centred white headline in which the second word, Mission, is set in lilac (#c084fc). Body copy is light grey in short paragraphs, and a purple-glowing placeholder panel sits beside the leadership text. The lilac is the single accent, used on the headline and the soft glow, which gives a calm, measured tone.

**Mood:** dark, calm, measured, soft-glow, purple-accented

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0f172a` | Page ground |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#d1d5db` | Secondary copy, captions |
| Accent | `#c084fc` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#312e81` · `#3730a3` · `#d1d5db` · `#c084fc` · `#d8b4fe` · `#9333ea` · `#4f46e5` · `#a855f7` · `#0f172a`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Space Grotesk
- **Body:** Space Grotesk
- **Loaded families:** Space Grotesk
- **Scale (largest breakpoint):** h1 60px · h2 30px · h3 20px · body 14px
- **Weights in use:** semibold, bold, medium

## Shape, spacing and layout

- **Corner radius:** `rounded-xl` (12px), `rounded-lg` (8px), `rounded-2xl` (16px)
- **Content width:** `max-w-5xl`, `max-w-3xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-16`, `gap-8`, `gap-6`

**Primary button**

```html
<a class="inline-block py-3 px-8 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium hover:from-purple-700 hover:to-indigo-700 transition duration-300 glow">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** inline SVG

## Tokens

```css
:root {
  --color-background: #0f172a;
  --color-text: #ffffff;
  --color-muted: #d1d5db;
  --color-accent: #c084fc;
  --font-display: "Space Grotesk", sans-serif;
  --font-body: "Space Grotesk", sans-serif;
  --radius: 12px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0f172a',
    ink: '#ffffff',
    muted: '#d1d5db',
    accent: '#c084fc',
  },
  fontFamily: { display: ['Space Grotesk'], sans: ['Space Grotesk'] },
} }
```

## Do and don't

- **Do:** Set one headline word per section in lilac (#c084fc)
- **Do:** Keep body copy in short paragraphs in light grey (#d1d5db)
- **Do:** Use a soft purple glow behind image panels, not a hard border
- **Don't:** Don't use the dark indigo (#312e81) as a text colour; it does not read on navy
- **Don't:** Don't add a second accent hue beside the lilac
- **Don't:** Don't set the headline in a heavy weight; regular to medium is enough

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
