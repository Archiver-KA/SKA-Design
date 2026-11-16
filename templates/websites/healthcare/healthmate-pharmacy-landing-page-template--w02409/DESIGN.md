# Design system — HealthMate Pharmacy Landing Page Template

`SN-W02409` · healthcare · light mode · Sinera Atlas theme `route` · language `en`

## Direction

HealthMate's hero is a pale mint ground (#f3f8f5) with deep teal (#0b3b3c) bold serif headlines and one italic amber word (#d9871c) for emphasis. The amber is also the primary button colour and the frame tint around the product photo, so warmth comes through the photo and the button. The eyebrow line is small, tracked uppercase, which gives the page a local, field-note tone.

**Mood:** warm, local, trustworthy, clean

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f3f8f5` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#0b3b3c` | Headings and primary copy |
| Muted text | `#57655f` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#0b3b3c` | Primary action and highlights |
| Second accent | `#d9871c` | Supporting highlights |

Palette by frequency of use: `#0b3b3c` · `#ffffff` · `#d9871c` · `#e7f3ec` · `#f2a63d` · `#57655f` · `#146b6b` · `#f3f8f5` · `#43524f` · `#faf9f4`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Fraunces, Inter, JetBrains Mono
- **Scale (largest breakpoint):** h1 60px · h2 48px · h3 24px · body 16px
- **Weights in use:** semibold, medium
- **Letter spacing:** `tracking-tight`, `tracking-[0.16em]`

## Shape, spacing and layout

- **Corner radius:** `rounded-xl` (12px), `rounded-2xl` (16px), `rounded-md` (6px)
- **Shadows:** `shadow-xl`, `shadow-[#0b3b3c]/10`
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Section padding:** `py-20`, `py-28`
- **Common gaps:** `gap-2`, `gap-3`, `gap-8`

**Primary button**

```html
<a class="inline-flex items-center gap-2 rounded-full bg-[#0b3b3c] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#d9871c]">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Services (`services`)
5. Contact form (`contact-form`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #f3f8f5;
  --color-surface: #ffffff;
  --color-text: #0b3b3c;
  --color-muted: #57655f;
  --color-border: #ffffff;
  --color-accent: #0b3b3c;
  --color-accent-2: #d9871c;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 12px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f3f8f5',
    surface: '#ffffff',
    ink: '#0b3b3c',
    muted: '#57655f',
    line: '#ffffff',
    accent: '#0b3b3c',
    accent2: '#d9871c',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headlines in bold serif in deep teal (#0b3b3c) with one italic amber word
- **Do:** Use amber (#d9871c) for the primary button and one emphasis word per section
- **Do:** Keep the ground pale mint (#f3f8f5) and frame product photos with a warm tint
- **Don't:** Don't set headlines in sans-serif; the serif carries the tone
- **Don't:** Don't use amber for body text or large fills
- **Don't:** Don't use cold blues or greys for panels; keep surfaces in the mint and white range

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
