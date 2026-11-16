# Design system — Premium Auto Detailing & Car Wrap Landing Page Template

`SN-W04057` · business-services · dark mode · Sinera Atlas theme `route` · language `cs`

## Direction

A dark, automotive-film page on a charcoal ground. A large white uppercase sans-serif headline in two lines has its second line set in lime (#bbcf1d). Lime pill buttons lead the actions, and a thin outlined navigation pill frames the top. Small uppercase stats sit under the buttons, giving the page a sharp, high-contrast tone.

**Mood:** sharp, high-contrast, automotive, dark

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#1f1f1f` | Page ground |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#bbcf1d` | Primary action and highlights |

Palette by frequency of use: `#bbcf1d` · `#ffffff` · `#1f1f1f` · `#000000` · `#a1a1aa` · `#71717a` · `#d4d4d8` · `#52525b` · `#222222` · `#cccccc`.

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
- **Common gaps:** `gap-4`, `gap-2`, `gap-6`

**Primary button**

```html
<a class="hidden lg:inline-flex items-center gap-2 whitespace-nowrap text-xs font-orbitron font-semibold uppercase tracking-[0.2em] bg-[#bbcf1d] text-[#0a0a0a] px-6 py-2.5 rounded-full hover:bg-[#d4e34a] transition-all duration-300 hover:scale-105 shadow-[0_0_20px_rgba(187,207,29,0.15)] hover:shadow-[0_0_30px_rgba(187,207,29,0.3)]">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Bento grid (`bento-grid`)
5. Gallery / portfolio (`gallery-portfolio`)
6. Contact form (`contact-form`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #1f1f1f;
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
    background: '#1f1f1f',
    ink: '#ffffff',
    muted: '#71717a',
    line: '#ffffff',
    accent: '#bbcf1d',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the second headline line in lime (#bbcf1d)
- **Do:** Use lime fills for the primary button and outlined pills for secondary
- **Do:** Keep navigation as one rounded outlined bar with uppercase labels
- **Don't:** Don't put lime text on light backgrounds
- **Don't:** Don't add more than one lime button per view
- **Don't:** Don't use lowercase in navigation labels

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
