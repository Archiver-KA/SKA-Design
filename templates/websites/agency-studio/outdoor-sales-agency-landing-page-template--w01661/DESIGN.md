# Design system — Outdoor Sales Agency Landing Page Template

`SN-W01661` · agency-studio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A near-black page with a huge uppercase wordmark-style headline in white, widely tracked subtitle text, and a warm tan (#d8b485) primary button in the navigation and hero. A thin tan rule and small caption run beside the copy. The look is restrained and premium, with tan as the only colour.

**Mood:** premium, restrained, warm, minimal, spacious

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#09090b` | Page ground |
| Surface | `#0c0c0e` | Cards, panels, raised areas |
| Text | `#d4d4d8` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#d8b485` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#d8b485` · `#09090b` · `#71717a` · `#a1a1aa` · `#0c0c0e` · `#52525b` · `#3f3f46` · `#d4d4d8` · `#27272a`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 128px · h2 48px · h3 18px · body 11px
- **Weights in use:** bold, medium, light
- **Letter spacing:** `tracking-widest`, `tracking-[0.2em]`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px)
- **Content width:** `max-w-[1400px]`, `max-w-2xl`
- **Section padding:** `py-20`, `py-12`
- **Common gaps:** `gap-4`, `gap-6`, `gap-8`

**Primary button**

```html
<a class="hidden md:inline-flex items-center justify-center px-6 py-3 text-[10px] font-bold tracking-widest text-zinc-950 bg-[#d8b485] hover:bg-[#c2a277] transition-colors uppercase">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. About (`about`)
5. Logo cloud (`logo-cloud`)
6. Contact form (`contact-form`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #09090b;
  --color-surface: #0c0c0e;
  --color-text: #d4d4d8;
  --color-muted: #71717a;
  --color-border: #ffffff;
  --color-accent: #d8b485;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#09090b',
    surface: '#0c0c0e',
    ink: '#d4d4d8',
    muted: '#71717a',
    line: '#ffffff',
    accent: '#d8b485',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use tan (#d8b485) for the primary button and thin rules only
- **Do:** Set the wordmark or headline in large, widely spaced uppercase
- **Do:** Keep subtitle lines small, tracked and in muted grey (#71717a)
- **Don't:** Don't read the page background as the listed grey (#27272a); it is near-black (#09090b)
- **Don't:** Don't add a second accent colour
- **Don't:** Don't set the wide tracking on long body paragraphs

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
