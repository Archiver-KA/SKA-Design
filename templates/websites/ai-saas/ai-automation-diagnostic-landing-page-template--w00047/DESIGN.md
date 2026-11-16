# Design system — AI Automation Diagnostic Landing Page Template

`SN-W00047` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A black page with a large white serif headline and a warm gold (#d4a853) button, which is the only colour on the first screen. The headline is set in a serif at large size with tight leading, and small uppercase labels sit above it. Corners are almost square (about 4px) and there are no effects, so the look is editorial and sober.

**Mood:** editorial, sober, dark, restrained

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Text | `#efefef` | Headings and primary copy |
| Muted text | `#666666` | Secondary copy, captions |
| Border | `#1f1f1f` | Hairlines, dividers, outlines |
| Accent | `#d4a853` | Primary action and highlights |

Palette by frequency of use: `#d4a853` · `#999999` · `#efefef` · `#1f1f1f` · `#0a0a0a` · `#111111` · `#f0f0f0` · `#666666` · `#1a1a1a` · `#0f1a0f`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Instrument Serif
- **Body:** Instrument Serif
- **Loaded families:** Instrument Serif, Space Grotesk
- **Scale (largest breakpoint):** h1 60px · h2 48px · h3 18px · body 16px
- **Weights in use:** normal, medium
- **Letter spacing:** `tracking-[2px]`, `tracking-[1px]`

## Shape, spacing and layout

- **Corner radius:** `rounded-[4px]` (4px)
- **Content width:** `max-w-[1100px]`, `max-w-[800px]`
- **Section padding:** `py-[64px]`, `py-[120px]`
- **Common gaps:** `gap-4`, `gap-12`, `gap-6`

**Primary button**

```html
<a class="inline-block bg-[#d4a853] text-[#0a0a0a] font-space font-medium text-sm uppercase tracking-[1px] px-10 py-4 rounded-[4px] hover:bg-opacity-90 transition-opacity duration-200">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Video / media (`video-media`)
4. Testimonials (`testimonials`)
5. Process / steps (`how-it-works`)
6. 3D / canvas scene (`3d-canvas`)
7. Map / location (`map-location`)
8. FAQ (`faq`)
9. Footer (`footer`)

## Motion, effects and stack

- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #0a0a0a;
  --color-text: #efefef;
  --color-muted: #666666;
  --color-border: #1f1f1f;
  --color-accent: #d4a853;
  --font-display: "Instrument Serif", serif;
  --font-body: "Instrument Serif", serif;
  --radius: 4px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0a0a0a',
    ink: '#efefef',
    muted: '#666666',
    line: '#1f1f1f',
    accent: '#d4a853',
  },
  fontFamily: { display: ['Instrument Serif'], sans: ['Instrument Serif'] },
} }
```

## Do and don't

- **Do:** Use the gold (#d4a853) for the primary button only
- **Do:** Set headlines in Instrument Serif at large size
- **Do:** Keep corners at about 4px
- **Don't:** Don't add drop shadows or glass panels
- **Don't:** Don't introduce a second accent colour
- **Don't:** Don't use a rounded pill button

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
