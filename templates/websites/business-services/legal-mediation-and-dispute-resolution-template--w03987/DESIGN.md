# Design system — Legal Mediation and Dispute Resolution Template

`SN-W03987` · business-services · light mode · Sinera Atlas theme `route` · language `en`

## Direction

A quiet, editorial hero on a warm off-white ground, with a large dark headline set tight and a short line of body copy beneath it. The primary button is solid dark navy (#1e293b) and the secondary is plain text, so the choice is clear. A soft terracotta glow (#9d6b53) sits behind a large portrait frame, adding warmth without any coloured blocks.

**Mood:** quiet, editorial, warm, considered, soft

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fcfbf9` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#2d2a26` | Headings and primary copy |
| Muted text | `#5a5753` | Secondary copy, captions |
| Border | `#000000` | Hairlines, dividers, outlines |
| Accent | `#1e293b` | Primary action and highlights |
| Second accent | `#9d6b53` | Supporting highlights |

Palette by frequency of use: `#000000` · `#5a5753` · `#1e293b` · `#2d2a26` · `#ffffff` · `#1c1a18` · `#9d6b53` · `#fcfbf9` · `#78746e` · `#e6e4df`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display
- **Scale (largest breakpoint):** h1 48px · h2 36px · h3 20px · body 14px
- **Weights in use:** medium, light
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-sm` (2px), `rounded-full` (9999px), `rounded-xl` (12px)
- **Shadows:** `shadow-sm`, `shadow-lg`
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Section padding:** `py-24`, `py-12`
- **Common gaps:** `gap-2`, `gap-4`, `gap-8`

**Primary button**

```html
<a class="nav-link bg-[#1e293b] text-[#fcfbf9] px-5 py-2.5 rounded-sm text-sm font-medium hover:bg-[#0f172a] transition-all duration-200 shadow-sm">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. FAQ (`faq`)
4. About (`about`)
5. Articles (`blog-articles`)
6. Contact form (`contact-form`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), blend modes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #fcfbf9;
  --color-surface: #ffffff;
  --color-text: #2d2a26;
  --color-muted: #5a5753;
  --color-border: #000000;
  --color-accent: #1e293b;
  --color-accent-2: #9d6b53;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 2px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fcfbf9',
    surface: '#ffffff',
    ink: '#2d2a26',
    muted: '#5a5753',
    line: '#000000',
    accent: '#1e293b',
    accent2: '#9d6b53',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the primary button solid dark navy (#1e293b) and the secondary as a text-style button
- **Do:** Use the terracotta (#9d6b53) only as a soft glow or a small accent
- **Do:** Place a large portrait frame beside the headline, without shadows
- **Don't:** Don't use saturated colour on the ground; keep it warm off-white
- **Don't:** Don't add a second button colour
- **Don't:** Don't crowd the headline with extra copy above it

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
