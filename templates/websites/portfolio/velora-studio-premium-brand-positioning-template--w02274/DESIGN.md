# Design system — Velora Studio Premium Brand Positioning Template

`SN-W02274` · portfolio · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A premium positioning page set over a greyscale fabric photograph that darkens toward the foot of the hero. A centred serif headline switches from upright white on its first line to light italic grey on its second, and a small paragraph and plain underlined text link carry the message. The photograph and the upright-to-italic shift in the headline are what make the page recognisable, with no accent colour used.

**Mood:** premium, understated, editorial, moody, refined

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f7f7f5` | Page ground |
| Surface | `#e4e4e7` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#27272a` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#a1a1aa` · `#e4e4e7` · `#ffffff` · `#27272a` · `#18181b` · `#71717a` · `#f7f7f5` · `#52525b` · `#000000` · `#d4d4d8`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Cormorant Garamond
- **Body:** Cormorant Garamond
- **Loaded families:** Cormorant Garamond, Inter
- **Scale (largest breakpoint):** h1 88px · h2 48px · h3 60px · body 36px
- **Weights in use:** light, normal
- **Letter spacing:** `tracking-[0.2em]`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px)
- **Shadows:** `shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)]`, `shadow-2xl`, `shadow-[0_40px_80px_-20px_rgba(0,0,0,0.08)]`
- **Content width:** `max-w-5xl`, `max-w-2xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-10`, `gap-4`, `gap-x-12`

**Primary button**

```html
<a class="inline-flex items-center justify-center gap-4 md:gap-6 md:px-10 md:py-5 text-[10px] md:text-xs uppercase hover:bg-white hover:text-black transition-colors duration-500 font-light text-zinc-200 tracking-[0.2em] w-full max-w-[320px] border-zinc-700/60 border pt-4 pr-6 pb-4 pl-6">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Logo cloud (`logo-cloud`)
4. Footer (`footer`)
5. Contact form (`contact-form`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #f7f7f5;
  --color-surface: #e4e4e7;
  --color-text: #ffffff;
  --color-muted: #71717a;
  --color-border: #27272a;
  --font-display: "Cormorant Garamond", serif;
  --font-body: "Cormorant Garamond", serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f7f7f5',
    surface: '#e4e4e7',
    ink: '#ffffff',
    muted: '#71717a',
    line: '#27272a',
  },
  fontFamily: { display: ['Cormorant Garamond'], sans: ['Cormorant Garamond'] },
} }
```

## Do and don't

- **Do:** Keep the photograph greyscale and darkened so the white serif headline reads clearly.
- **Do:** Set the second headline line in light italic grey at the same size as the first.
- **Do:** Use plain underlined text links in tracked uppercase for calls to action.
- **Don't:** Don't add accent colour; the page is grey, white and photograph tones.
- **Don't:** Don't set body copy in italic; keep the italic for the second headline line.
- **Don't:** Don't place a bright photograph behind the headline; it loses contrast.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
