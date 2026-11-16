# Design system — Agriculture Systems Architecture Landing Page Template

`SN-W03166` · real-estate · dark mode · Sinera Atlas theme `route` · language `en`

## Direction

A stark industrial page on near-black (#050505): a heavy uppercase sans headline in three lines, with the middle word in grey and the first and last in white. Small monospace labels in orange (#d97706) carry operator and sector details in the left margin, and a ghosted silhouette sits behind the copy. The orange is reserved for labels and warnings, which gives the page its technical, slightly urgent voice.

**Mood:** industrial, stark, technical, urgent, dark

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#050505` | Page ground |
| Surface | `#121212` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#e5e7eb` | Secondary copy, captions |
| Border | `#262626` | Hairlines, dividers, outlines |
| Accent | `#d97706` | Primary action and highlights |

Palette by frequency of use: `#262626` · `#ffffff` · `#050505` · `#121212` · `#0a0a0a` · `#333333` · `#d97706` · `#e5e7eb`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** a monospace face
- **Body:** Geist
- **Loaded families:** Geist, Roboto, Montserrat, Poppins, Playfair Display, Instrument Serif
- **Scale (largest breakpoint):** h1 96px · h2 12px · h3 36px · body 14px
- **Weights in use:** light, normal, bold
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-sm` (2px), `rounded-full` (9999px)
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-4`, `gap-8`, `gap-2`

**Primary button**

```html
<a class="group relative px-8 py-4 bg-white text-base font-mono text-sm uppercase tracking-wider overflow-hidden">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Feature grid (`features`)
5. Bento grid (`bento-grid`)
6. Comparison (`comparison`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #050505;
  --color-surface: #121212;
  --color-text: #ffffff;
  --color-muted: #e5e7eb;
  --color-border: #262626;
  --color-accent: #d97706;
  --font-display: "a monospace face", sans-serif;
  --font-body: "Geist", sans-serif;
  --radius: 2px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#050505',
    surface: '#121212',
    ink: '#ffffff',
    muted: '#e5e7eb',
    line: '#262626',
    accent: '#d97706',
  },
  fontFamily: { display: ['a monospace face'], sans: ['Geist'] },
} }
```

## Do and don't

- **Do:** Set headlines in heavy uppercase sans, with the middle line in grey
- **Do:** Use orange (#d97706) for monospace labels, metadata and warnings only
- **Do:** Keep body copy short and white on the near-black ground
- **Don't:** Don't set body copy in orange
- **Don't:** Don't use mixed case in the headline; the style is uppercase
- **Don't:** Don't add other accent hues beside the orange

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
