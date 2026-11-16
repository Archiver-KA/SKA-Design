# Design system — Arithmify Digital Agency Template

`SN-W01436` · agency-studio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A near-black ground with a faint olive glow behind the hero and a lime-yellow pill button for the main action. The display type is a bold, all-caps sans set very large and cropped at the edges, with the second word fading into grey. Hierarchy comes from size and contrast, not from a range of colours.

**Mood:** bold, loud, dark, confident, graphic

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#050505` | Page ground |
| Surface | `#111111` | Cards, panels, raised areas |
| Text | `#f5f5f5` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#333333` | Hairlines, dividers, outlines |
| Accent | `#4ade80` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#333333` · `#6b7280` · `#222222` · `#111111` · `#000000` · `#050505` · `#9ca3af` · `#0a0a0a` · `#1a1a1a`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Plus Jakarta Sans
- **Body:** Plus Jakarta Sans
- **Loaded families:** Plus Jakarta Sans, Syne
- **Scale (largest breakpoint):** h1 144px · h2 60px · h3 10px · body 20px
- **Weights in use:** semibold, bold, medium
- **Letter spacing:** `tracking-wider`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-lg` (8px), `rounded-full` (9999px), `rounded-3xl` (24px)
- **Shadows:** `shadow-2xl`, `shadow-[0_0_8px_rgb(var(--accent))]`, `shadow-[0_0_20px_rgba(var(--accent),0.3)]`
- **Content width:** `max-w-7xl`, `max-w-5xl`
- **Section padding:** `py-32`
- **Common gaps:** `gap-2`, `gap-3`, `gap-1`

**Primary button**

```html
<a class="fixed bottom-6 left-6 z-[110] bg-[#1a1a1a] border border-[#333] hover:border-[rgb(var(--accent))] text-xs font-medium px-4 py-2 rounded-full flex items-center gap-2 transition-all duration-300 shadow-2xl backdrop-blur-md hover:scale-105 active:scale-95">…</a>
```

## Page structure

Blocks in page order:

1. Sign-in form (`auth-form`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Services (`services`)
5. Case studies (`case-studies`)
6. About (`about`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #050505;
  --color-surface: #111111;
  --color-text: #f5f5f5;
  --color-muted: #6b7280;
  --color-border: #333333;
  --color-accent: #4ade80;
  --font-display: "Plus Jakarta Sans", sans-serif;
  --font-body: "Plus Jakarta Sans", sans-serif;
  --radius: 8px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#050505',
    surface: '#111111',
    ink: '#f5f5f5',
    muted: '#6b7280',
    line: '#333333',
    accent: '#4ade80',
  },
  fontFamily: { display: ['Plus Jakarta Sans'], sans: ['Plus Jakarta Sans'] },
} }
```

## Do and don't

- **Do:** Set display headlines in Plus Jakarta Sans at heavy weight in all caps
- **Do:** Use the lime-yellow button for the main action only
- **Do:** Let the second headline word fade to grey for emphasis
- **Don't:** Don't add a second bright colour to the hero
- **Don't:** Don't set display headlines at small sizes, they run very large
- **Don't:** Don't use a light page background for the hero

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
