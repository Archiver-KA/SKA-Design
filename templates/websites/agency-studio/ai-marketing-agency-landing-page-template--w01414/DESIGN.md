# Design system — AI Marketing Agency Landing Page Template

`SN-W01414` · agency-studio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A near-black page with a faint purple-tinted glow behind the hero, and a large white sans headline where the second line fades into grey. The primary button is a saturated magenta-violet pill, and the secondary is a dark pill with a thin border, so the one strong colour on the screen sits in the action. The glow stays in the background, keeping the layout calm and centred.

**Mood:** atmospheric, calm, dark, centred, gradient-faded

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#09090b` | Page ground |
| Surface | `#18181b` | Cards, panels, raised areas |
| Text | `#d4d4d8` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#ffffff` · `#71717a` · `#27272a` · `#000000` · `#18181b` · `#a1a1aa` · `#09090b` · `#3f3f46` · `#e4e4e7` · `#52525b`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 96px · h2 36px · h3 18px · body 14px
- **Weights in use:** medium, semibold
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-2xl` (16px)
- **Shadows:** `shadow-[0_0_15px_rgba(217,70,239,0.5)]`, `shadow-[0_0_20px_-5px_rgba(217,70,239,0.3)]`, `shadow-[0_0_30px_-5px_rgba(217,70,239,0.5)]`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-2`, `gap-6`, `gap-12`

**Primary button**

```html
<a class="hidden md:inline-flex text-xs font-medium bg-white text-black px-4 py-2 rounded-full hover:bg-zinc-200 transition-colors tracking-tight">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Services (`services`)
4. Stats band (`stats`)
5. Call to action (`cta`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #09090b;
  --color-surface: #18181b;
  --color-text: #d4d4d8;
  --color-muted: #71717a;
  --color-border: #ffffff;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#09090b',
    surface: '#18181b',
    ink: '#d4d4d8',
    muted: '#71717a',
    line: '#ffffff',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the primary button as a saturated magenta-violet pill, and keep the secondary dark with a thin border.
- **Do:** Fade the second headline line into grey (#a1a1aa) for the gradient text effect.
- **Do:** Keep the glow soft and behind the hero, never over the text.
- **Don't:** Don't add a second accent colour; the button is the only saturated element.
- **Don't:** Don't set the headline in a heavy weight; it is regular to medium.
- **Don't:** Don't use a light page; the ground is near-black throughout.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
