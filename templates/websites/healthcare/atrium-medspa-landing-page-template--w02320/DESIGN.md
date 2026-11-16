# Design system — Atrium Medspa Landing Page Template

`SN-W02320` · healthcare · dark mode · Sinera Atlas theme `calm` · language `en`

## Direction

A deep teal page with a large white sans headline, and its closing word in a taupe (#e0d7c7) italic serif for emphasis. The hero photograph fades to grey on one side, and a row of small caps sits above the content. A dark teal pill and a solid white pill sit under the copy, keeping the palette cool, clinical and quiet.

**Mood:** clinical, luxurious, cool, quiet, polished

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#006d77` | Page ground |
| Surface | `#1c1917` | Cards, panels, raised areas |
| Text | `#f5f5f5` | Headings and primary copy |
| Muted text | `#ffffff` | Secondary copy, captions |
| Border | `#f5f5f4` | Hairlines, dividers, outlines |
| Accent | `#00555d` | Primary action and highlights |
| Second accent | `#e0d7c7` | Supporting highlights |

Palette by frequency of use: `#006d77` · `#ffffff` · `#78716c` · `#333333` · `#f5f5f5` · `#e7e5e4` · `#f5f5f4` · `#a8a29e` · `#57534e` · `#f9f9f9`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Marcellus
- **Body:** IBM Plex Sans
- **Loaded families:** IBM Plex Sans, Marcellus
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 18px · body 12px
- **Weights in use:** bold, medium, light
- **Letter spacing:** `tracking-widest`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-xl` (12px)
- **Shadows:** `shadow-lg`, `shadow-sm`, `shadow-xl`
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-4`, `gap-3`

**Primary button**

```html
<a class="bg-[#006D77] text-white px-6 py-3 rounded-full text-[12px] font-bold uppercase tracking-widest hover:bg-[#00555d] transition-all shadow-md hover:shadow-lg active:scale-95 flex items-center gap-2">…</a>
```

## Page structure

Blocks in page order:

1. Announcement bar (`announcement-bar`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Services (`services`)
5. Team (`team`)
6. Map / location (`map-location`)
7. Contact form (`contact-form`)
8. FAQ (`faq`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #006d77;
  --color-surface: #1c1917;
  --color-text: #f5f5f5;
  --color-muted: #ffffff;
  --color-border: #f5f5f4;
  --color-accent: #00555d;
  --color-accent-2: #e0d7c7;
  --font-display: "Marcellus", serif;
  --font-body: "IBM Plex Sans", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#006d77',
    surface: '#1c1917',
    ink: '#f5f5f5',
    muted: '#ffffff',
    line: '#f5f5f4',
    accent: '#00555d',
    accent2: '#e0d7c7',
  },
  fontFamily: { display: ['Marcellus'], sans: ['IBM Plex Sans'] },
} }
```

## Do and don't

- **Do:** Set the headline in white sans with the closing word in taupe (#e0d7c7) italic serif
- **Do:** Use the deep teal (#00555d) for primary buttons only
- **Do:** Keep the photograph faded to grey on one side so the copy has contrast
- **Don't:** Don't use the taupe for body copy
- **Don't:** Don't add warm colours to the teal palette
- **Don't:** Don't put the white pill button over a bright part of the photograph

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
