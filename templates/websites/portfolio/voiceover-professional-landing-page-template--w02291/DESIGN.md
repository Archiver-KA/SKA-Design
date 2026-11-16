# Design system — Voiceover Professional Landing Page Template

`SN-W02291` · portfolio · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A cream page with a dark serif headline and a terracotta (#c4562a) accent used for the primary button and an italic subhead. A circular greyscale portrait and a small audio player card carry the voice theme, and the small monospace nav labels give it a studio-log feel. The palette is warm, paper-like and restrained.

**Mood:** warm, paper-like, editorial, restrained, personal

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f5f0e8` | Page ground |
| Surface | `#1a1a1a` | Cards, panels, raised areas |
| Text | `#1a1a1a` | Headings and primary copy |
| Muted text | `#1a1a1a` | Secondary copy, captions |
| Border | `#f5f0e8` | Hairlines, dividers, outlines |
| Accent | `#c4562a` | Primary action and highlights |

Palette by frequency of use: `#c4562a` · `#f5f0e8` · `#1a1a1a` · `#ffffff`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Space Mono
- **Body:** Lora
- **Loaded families:** DM Serif Display, Lora, Space Mono
- **Scale (largest breakpoint):** h1 128px · h2 12px · h3 30px · body 14px
- **Letter spacing:** `tracking-widest`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px)
- **Shadows:** `shadow-lg`, `shadow-md`, `shadow-xl`
- **Content width:** `max-w-[1400px]`, `max-w-[400px]`
- **Section padding:** `py-24`, `py-12`
- **Common gaps:** `gap-3`, `gap-2`, `gap-12`

**Primary button**

```html
<a class="inline-flex items-center gap-3 bg-[#C4562A] text-[#F5F0E8] font-mono uppercase tracking-widest text-xs px-12 py-8 btn-fill border border-[#C4562A] hover:border-[#1A1A1A] transition-colors w-fit">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Marquee (`marquee`)
4. About (`about`)
5. Case studies (`case-studies`)
6. Testimonials (`testimonials`)
7. Contact form (`contact-form`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #f5f0e8;
  --color-surface: #1a1a1a;
  --color-text: #1a1a1a;
  --color-muted: #1a1a1a;
  --color-border: #f5f0e8;
  --color-accent: #c4562a;
  --font-display: "Space Mono", sans-serif;
  --font-body: "Lora", serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f5f0e8',
    surface: '#1a1a1a',
    ink: '#1a1a1a',
    muted: '#1a1a1a',
    line: '#f5f0e8',
    accent: '#c4562a',
  },
  fontFamily: { display: ['Space Mono'], sans: ['Lora'] },
} }
```

## Do and don't

- **Do:** Set the headline in a dark serif and the subhead in italic terracotta (#c4562a)
- **Do:** Keep the portrait circular and in greyscale
- **Do:** Set nav labels in small monospace capitals
- **Don't:** Don't use a terracotta page background; the ground is cream (#f5f0e8)
- **Don't:** Don't set nav labels in serif
- **Don't:** Don't use a bright or saturated photograph

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
