# Design system — Premium Auto Detailing & PPF Template

`SN-W00638` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `cs`

## Direction

A black automotive page where a lime (#bbcf1d) line carries the second half of a large uppercase Inter headline and the primary button. The hero sits on an almost pure black ground with a soft glow behind the lime button.

**Mood:** bold, automotive, high-contrast, lime, dark

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#bbcf1d` | Primary action and highlights |

Palette by frequency of use: `#bbcf1d` · `#ffffff` · `#0a0a0a` · `#000000` · `#71717a` · `#a1a1aa` · `#d4d4d8` · `#52525b` · `#222222` · `#a0a0a0`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Orbitron
- **Scale (largest breakpoint):** h1 104px · h2 60px · h3 24px · body 14px
- **Weights in use:** light, medium, semibold
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-[2rem]` (2rem), `rounded-lg` (8px)
- **Shadows:** `shadow-[0_10px_30px_rgba(187,207,29,0.08)]`, `shadow-none`, `shadow-[0_0_15px_rgba(187,207,29,0.15)]`
- **Content width:** `max-w-[1400px]`, `max-w-[1280px]`
- **Common gaps:** `gap-4`, `gap-6`, `gap-2`

**Primary button**

```html
<a class="hidden md:inline-flex items-center gap-2 whitespace-nowrap text-xs font-orbitron font-semibold uppercase tracking-[0.2em] bg-[#bbcf1d] text-[#0a0a0a] px-6 py-2.5 rounded-full hover:bg-[#d4e34a] transition-all duration-300 hover:scale-105 shadow-[0_0_20px_rgba(187,207,29,0.15)] hover:shadow-[0_0_30px_rgba(187,207,29,0.3)]">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Listings (`listings`)
5. Contact form (`contact-form`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #000000;
  --color-text: #ffffff;
  --color-muted: #71717a;
  --color-border: #ffffff;
  --color-accent: #bbcf1d;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    ink: '#ffffff',
    muted: '#71717a',
    line: '#ffffff',
    accent: '#bbcf1d',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use lime (#bbcf1d) for the second headline phrase and the primary button only
- **Do:** Set headlines in large uppercase Inter, white on black (#000000)
- **Do:** Keep the secondary button as a thin outline, not a fill
- **Don't:** Don't set the page on a lime ground; the ground is black
- **Don't:** Don't use lime for body copy; it marks the headline and the action
- **Don't:** Don't add a second accent colour to the hero

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
