# Design system — Intranet Merani Marketing Skills Template

`SN-W01607` · agency-studio · light mode · Sinera Atlas theme `route` · language `en`

## Direction

A loud, playful intranet landing on off-white (#fafaf9), with oversized black uppercase Space Grotesk headlines. Flat colour shapes sit against the words: a yellow (#fde047) pill, a pink (#f9a8d4) circle and a small blue (#2563eb) dot. The shapes sit beside the type rather than behind content, so the page has the energy of a sticker sheet. Black is the only text colour, and the saturated fills carry the mood.

**Mood:** playful, energetic, flat, bold

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fafaf9` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#000000` | Headings and primary copy |
| Muted text | `#475569` | Secondary copy, captions |
| Border | `#000000` | Hairlines, dividers, outlines |
| Accent | `#fde047` | Primary action and highlights |
| Second accent | `#f9a8d4` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#000000` · `#fde047` · `#f9a8d4` · `#f5f5f4` · `#2563eb` · `#0f172a` · `#fafaf9` · `#e7e5e4` · `#cbd5e1`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Space Grotesk
- **Body:** Space Grotesk
- **Loaded families:** Space Grotesk, Syne
- **Scale (largest breakpoint):** h1 128px · h2 72px · h3 24px · body 18px
- **Weights in use:** semibold, normal, medium
- **Letter spacing:** `tracking-tighter`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded` (4px), `rounded-3xl` (24px)
- **Shadows:** `shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]`, `shadow-lg`
- **Content width:** `max-w-7xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-6`, `gap-8`

**Primary button**

```html
<a class="inline-flex items-center gap-3 px-8 py-4 bg-[#FDE047] text-black font-semibold tracking-tight text-xl rounded-full hover:scale-105 hover:bg-white transition-all duration-300 border-2 border-black neo-shadow-sm hover:neo-shadow">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Marquee (`marquee`)
4. Feature grid (`features`)
5. Team (`team`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** gradient fills, blend modes, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #fafaf9;
  --color-surface: #ffffff;
  --color-text: #000000;
  --color-muted: #475569;
  --color-border: #000000;
  --color-accent: #fde047;
  --color-accent-2: #f9a8d4;
  --font-display: "Space Grotesk", sans-serif;
  --font-body: "Space Grotesk", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fafaf9',
    surface: '#ffffff',
    ink: '#000000',
    muted: '#475569',
    line: '#000000',
    accent: '#fde047',
    accent2: '#f9a8d4',
  },
  fontFamily: { display: ['Space Grotesk'], sans: ['Space Grotesk'] },
} }
```

## Do and don't

- **Do:** Set headlines in Space Grotesk, bold uppercase, black on off-white
- **Do:** Place yellow (#fde047) and pink (#f9a8d4) pills and dots beside or behind headline words
- **Do:** Keep text black (#000000) and use the blue (#2563eb) only for one small dot or icon
- **Don't:** Don't add shadows; the look is flat
- **Don't:** Don't place body copy over the colour shapes
- **Don't:** Don't use more than three fills in one hero

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
