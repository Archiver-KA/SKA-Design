# Design system — Architecture Services Landing Page Template

`SN-W03192` · real-estate · dark mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A bold, dark planning-consultancy page where a very heavy uppercase grotesk headline fills the width of the hero. The second word is set as a thin outline with no fill, which makes a two-tone headline without using colour. Navigation is small uppercase text, and project facts sit in a bottom strip above a hairline rule.

**Mood:** bold, brutal, dark, graphic

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#111111` | Page ground |
| Surface | `#000000` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#000000` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#ffffff` · `#000000` · `#6b7280` · `#9ca3af` · `#111111` · `#4b5563` · `#374151` · `#0f0f0f` · `#eaeaea` · `#1a1a1a`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** a monospace face
- **Body:** var(--font-body)
- **Loaded families:** Archivo Black, Manrope
- **Scale (largest breakpoint):** h2 12px · h3 60px · body 14px
- **Weights in use:** light, bold, semibold
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-none` (0)
- **Content width:** `max-w-[1600px]`, `max-w-2xl`
- **Section padding:** `py-32`
- **Common gaps:** `gap-4`, `gap-2`, `gap-12`

**Primary button**

```html
<a class="mt-8 bg-[#111] text-white display py-6 px-8 text-lg hover:bg-[var(--c-accent)] transition-colors w-full flex justify-between items-center group">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Services (`services`)
4. Process / steps (`how-it-works`)
5. Contact form (`contact-form`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** gradient fills, blend modes
- **Libraries:** Tailwind CSS (CDN), GSAP, Lenis smooth scroll
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #111111;
  --color-surface: #000000;
  --color-text: #ffffff;
  --color-muted: #6b7280;
  --color-border: #000000;
  --font-display: "a monospace face", sans-serif;
  --font-body: "var(--font-body)", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#111111',
    surface: '#000000',
    ink: '#ffffff',
    muted: '#6b7280',
    line: '#000000',
  },
  fontFamily: { display: ['a monospace face'], sans: ['var(--font-body)'] },
} }
```

## Do and don't

- **Do:** Set the headline in heavy uppercase grotesk, with the second word as an outline
- **Do:** Keep the nav and metadata in small uppercase text
- **Do:** Use a hairline rule above the bottom metadata strip
- **Don't:** Don't add colour to the headline; contrast is white on near-black
- **Don't:** Don't set the headline in a monospace face
- **Don't:** Don't fill or gradient the outline word

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
