# Design system — Women's Empowerment Networking Template

`SN-W03561` · education · light mode · Sinera Atlas theme `calm` · language `en`

## Direction

The networking page opens with a full-width photograph of people under a dark navy overlay, and a centred serif headline in white. The second line is set in italic serif, and a gold (#d3ad3b) button sits below the supporting copy. Below the hero the page switches to a cream ground (#fafaf7), where the content keeps the same serif-led typography. The design is warm, personal and editorial.

**Mood:** warm, editorial, community, photographic, elegant

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#fafaf7` | Cards, panels, raised areas |
| Text | `#2b2825` | Headings and primary copy |
| Border | `#1a1a2e` | Hairlines, dividers, outlines |
| Accent | `#d3ad3b` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#1a1a2e` · `#ca9667` · `#d3ad3b` · `#fafaf7` · `#2b2825` · `#000000`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** Playfair Display
- **Loaded families:** Playfair Display, Raleway
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 20px · body 14px
- **Weights in use:** medium, light, normal
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-[2rem]` (2rem)
- **Shadows:** `shadow-xl`, `shadow-[#1A1A2E]/5`, `shadow-lg`
- **Content width:** `max-w-2xl`, `max-w-4xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-6`, `gap-3`, `gap-16`

**Primary button**

```html
<a class="hidden md:inline-flex bg-[#D3AD3B] text-white text-xs font-medium uppercase tracking-widest px-6 py-3 rounded-full hover:bg-[#CA9667] transition-all duration-300">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Video / media (`video-media`)
5. Listings (`listings`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #fafaf7;
  --color-text: #2b2825;
  --color-border: #1a1a2e;
  --color-accent: #d3ad3b;
  --font-display: "Playfair Display", serif;
  --font-body: "Playfair Display", serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#fafaf7',
    ink: '#2b2825',
    line: '#1a1a2e',
    accent: '#d3ad3b',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['Playfair Display'] },
} }
```

## Do and don't

- **Do:** Place photography under a dark navy overlay in the hero
- **Do:** Set headlines in serif, with the second line in italic
- **Do:** Use gold (#d3ad3b) only for the join button
- **Don't:** Don't set headlines in sans-serif
- **Don't:** Don't place the gold button over busy photography
- **Don't:** Don't remove the overlay that keeps the white headline readable

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
