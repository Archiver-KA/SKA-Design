# Design system — AI Consulting Landing Page Template

`SN-W01402` · agency-studio · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A white hero where the headline is a large sans in near-black on the first line and a grey second line, creating a two-tone heading without colour. The primary button is solid near-black with a soft shadow, and the secondary is a white outlined pill beside it. A faint grey gradient glow sits behind the top of the hero, keeping the page calm and monochrome.

**Mood:** calm, monochrome, clean, corporate, two-tone

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#fafafa` | Cards, panels, raised areas |
| Text | `#171717` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#e5e5e5` | Hairlines, dividers, outlines |
| Accent | `#171717` | Primary action and highlights |
| Second accent | `#22c55e` | Supporting highlights |

Palette by frequency of use: `#171717` · `#ffffff` · `#737373` · `#e5e5e5` · `#262626` · `#0a0a0a` · `#6366f1` · `#f5f5f5` · `#a3a3a3` · `#fafafa`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 20px · body 14px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-lg` (8px)
- **Shadows:** `shadow-sm`, `shadow-[0_0_0_4px_#f5f5f5]`, `shadow-md`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-4`, `gap-3`

**Primary button**

```html
<a class="hidden md:inline-flex items-center justify-center px-4 py-2 text-xs font-medium text-white bg-neutral-900 rounded-full hover:bg-neutral-800 transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Bento grid (`bento-grid`)
4. Process / steps (`how-it-works`)
5. Feature grid (`features`)
6. Logo cloud (`logo-cloud`)
7. Stats band (`stats`)
8. Case studies (`case-studies`)
9. Product grid (`product-grid`)
10. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #fafafa;
  --color-text: #171717;
  --color-muted: #737373;
  --color-border: #e5e5e5;
  --color-accent: #171717;
  --color-accent-2: #22c55e;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#fafafa',
    ink: '#171717',
    muted: '#737373',
    line: '#e5e5e5',
    accent: '#171717',
    accent2: '#22c55e',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Make the primary button solid near-black (#171717) with a soft shadow.
- **Do:** Keep the two-line headline in one sans, black on the first line and grey on the second.
- **Do:** Use a white outlined pill for the secondary action.
- **Don't:** Don't add a colour accent; the first screen is black, white and grey.
- **Don't:** Don't use indigo (#6366f1) as a button colour.
- **Don't:** Don't set the headline in a heavy weight; it is regular to medium.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
