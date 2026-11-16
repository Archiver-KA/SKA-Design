# Design system — High Sequence Futuristic Creative Studio Landing Page Template

`SN-W01595` · agency-studio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A cinematic dark stage on pure black (#000000). A centred, very heavy uppercase Inter headline is filled with a metallic white-to-grey gradient, and tiny letter-spaced system captions sit above and below it like an archive index. Colour is absent: the page depends on scale, gradient and the contrast of its labels, which gives it a stark, futuristic tone.

**Mood:** cinematic, stark, futuristic, archival

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#34d399` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#000000` · `#71717a` · `#18181b` · `#27272a` · `#52525b` · `#09090b` · `#34d399` · `#d4d4d8` · `#030303`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, JetBrains Mono, Geist, Roboto, Montserrat, Poppins
- **Scale (largest breakpoint):** h1 128px · h2 36px · h3 20px · body 14px
- **Weights in use:** medium, light, semibold
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px)
- **Content width:** `max-w-7xl`, `max-w-5xl`
- **Section padding:** `py-24`, `py-40`
- **Common gaps:** `gap-2`, `gap-8`, `gap-6`

**Primary button**

```html
<a class="group relative px-8 py-4 bg-zinc-900 hover:bg-white transition-colors duration-500 overflow-hidden">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Timeline (`timeline`)
4. Feature grid (`features`)
5. Contact form (`contact-form`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #000000;
  --color-text: #ffffff;
  --color-muted: #71717a;
  --color-border: #ffffff;
  --color-accent: #34d399;
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
    ink: '#ffffff',
    muted: '#71717a',
    line: '#ffffff',
    accent: '#34d399',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the page on pure black (#000000) with white and grey type only
- **Do:** Set headlines in very large, heavy uppercase with a metallic gradient fill
- **Do:** Use small, letter-spaced uppercase captions for labels and system status lines
- **Don't:** Don't switch the page to a light background; the design is black
- **Don't:** Don't add colour to the headline fills
- **Don't:** Don't wrap hero content in rounded cards; keep it full-bleed and centred

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
