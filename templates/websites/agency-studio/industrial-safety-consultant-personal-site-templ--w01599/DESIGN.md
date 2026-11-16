# Design system — Industrial Safety Consultant Personal Site Template

`SN-W01599` · agency-studio · dark mode · Sinera Atlas theme `route` · language `es`

## Direction

A dark industrial personal-brand page on charcoal (#1a1a1a) where one safety yellow (#ffd700) carries the colour: small spaced uppercase labels, a short rule under the headline and one highlighted phrase in the body. The name is large and bold in white, with the surname in grey, so hierarchy comes from size and tone. The split hero has a yellow-outlined image frame on the left.

**Mood:** industrial, bold, direct, warm-dark

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#1a1a1a` | Page ground |
| Surface | `#262626` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#d4d4d4` | Secondary copy, captions |
| Border | `#333333` | Hairlines, dividers, outlines |
| Accent | `#ffd700` | Primary action and highlights |

Palette by frequency of use: `#1a1a1a` · `#ffd700` · `#ffffff` · `#333333` · `#262626` · `#888888` · `#d4d4d4` · `#f4f4f4` · `#555555` · `#a3a3a3`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 24px · body 20px
- **Weights in use:** semibold, light, medium
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** none used — square corners
- **Shadows:** `shadow-[10px_10px_0px_0px_rgba(26,26,26,1)]`, `shadow-[0_10px_20px_rgba(0,0,0,0.2)]`
- **Content width:** `max-w-4xl`, `max-w-3xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-3`, `gap-12`, `gap-20`

**Primary button**

```html
<a class="bg-[#1A1A1A] text-[#FFD700] px-10 py-5 text-lg font-semibold uppercase tracking-widest hover:bg-black transition-colors duration-300 shadow-[0_10px_20px_rgba(0,0,0,0.2)] flex items-center gap-3 mx-auto">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. Feature grid (`features`)
3. Footer (`footer`)

## Motion, effects and stack

- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #1a1a1a;
  --color-surface: #262626;
  --color-text: #ffffff;
  --color-muted: #d4d4d4;
  --color-border: #333333;
  --color-accent: #ffd700;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#1a1a1a',
    surface: '#262626',
    ink: '#ffffff',
    muted: '#d4d4d4',
    line: '#333333',
    accent: '#ffd700',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use yellow (#ffd700) for small uppercase labels, the rule under the headline and one highlight phrase
- **Do:** Set the name in heavy white sans with the surname in grey (#888888)
- **Do:** Keep the page on charcoal (#1a1a1a) and use the panel tone (#262626) for surfaces
- **Don't:** Don't use yellow for body copy or large fills
- **Don't:** Don't round the corners of the frame or panels; the look is square
- **Don't:** Don't add gradients; the look relies on flat tones

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
