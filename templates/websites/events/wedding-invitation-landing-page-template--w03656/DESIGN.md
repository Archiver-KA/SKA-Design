# Design system — Wedding Invitation Landing Page Template

`SN-W03656` · events · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A quiet, ceremonial invitation page on an off-white ground, with a sage green palette that sets the mood. The first screen is an envelope with a round seal, set in generous empty space above a small uppercase prompt. Serif type for the headline and a sans-serif for supporting text give it the character of a formal printed card.

**Mood:** romantic, quiet, airy, ceremonial

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f8f7f2` | Page ground |
| Surface | `#dde6da` | Cards, panels, raised areas |
| Text | `#4f564d` | Headings and primary copy |
| Muted text | `#8a857c` | Secondary copy, captions |
| Border | `#f8f7f2` | Hairlines, dividers, outlines |
| Accent | `#9aaa92` | Primary action and highlights |

Palette by frequency of use: `#f8f7f2` · `#4f564d` · `#9aaa92` · `#8a857c` · `#c9d8c2` · `#dde6da` · `#eaf1e6` · `#f4f8f3` · `#d8cbb8`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Cormorant Garamond
- **Body:** Montserrat
- **Loaded families:** Cormorant Garamond, Great Vibes, Montserrat
- **Scale (largest breakpoint):** h1 30px · h2 48px · h3 60px · body 12px
- **Weights in use:** light, normal
- **Letter spacing:** `tracking-tight`, `tracking-[0.2em]`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-none` (0), `rounded-2xl` (16px)
- **Shadows:** `shadow-sm`, `shadow-2xl`, `shadow-[#9AAA92]/10`
- **Content width:** `max-w-[340px]`, `max-w-[600px]`
- **Section padding:** `py-20`, `py-24`
- **Common gaps:** `gap-3`, `gap-8`

**Primary button**

```html
<a class="w-full py-5 bg-[#9AAA92] text-[#F8F7F2] font-sans text-[10px] tracking-[0.2em] uppercase rounded-full hover:bg-[#8A857C] transition-colors duration-300 mt-4 shadow-lg shadow-[#9AAA92]/20">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. Call to action (`cta`)
3. Timeline (`timeline`)
4. Feature grid (`features`)
5. Contact form (`contact-form`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #f8f7f2;
  --color-surface: #dde6da;
  --color-text: #4f564d;
  --color-muted: #8a857c;
  --color-border: #f8f7f2;
  --color-accent: #9aaa92;
  --font-display: "Cormorant Garamond", serif;
  --font-body: "Montserrat", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f8f7f2',
    surface: '#dde6da',
    ink: '#4f564d',
    muted: '#8a857c',
    line: '#f8f7f2',
    accent: '#9aaa92',
  },
  fontFamily: { display: ['Cormorant Garamond'], sans: ['Montserrat'] },
} }
```

## Do and don't

- **Do:** Set headlines in a serif with generous space around them
- **Do:** Use the sage tones (#9aaa92, #dde6da) for the envelope and seal, not for body text
- **Do:** Keep the seal prompt in small uppercase with wide letter spacing
- **Don't:** Don't fill the page with photos or busy patterns; the design depends on empty space
- **Don't:** Don't use saturated colours in the envelope or seal
- **Don't:** Don't set body text in the sage tones; keep it in the dark grey (#4f564d)

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
