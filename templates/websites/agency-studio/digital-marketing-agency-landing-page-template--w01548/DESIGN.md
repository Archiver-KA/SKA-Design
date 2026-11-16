# Design system — Digital Marketing Agency Landing Page Template

`SN-W01548` · agency-studio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A black page with a bold white headline in which the second line is outlined and the word ONLINE is set in neon green. Green (#3df604) appears on that word, the primary button and the status dot, and a green circle floats as a chat button at the bottom right.

**Mood:** bold, high-contrast, outlined, energetic

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#050505` | Page ground |
| Surface | `#111111` | Cards, panels, raised areas |
| Text | `#eaeaea` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#3df604` | Primary action and highlights |

Palette by frequency of use: `#3df604` · `#ffffff` · `#000000` · `#6b7280` · `#111111` · `#9ca3af` · `#0a0a0a` · `#050505` · `#374151` · `#d1d5db`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Space Mono
- **Body:** Space Mono
- **Loaded families:** Space Mono, Unbounded
- **Scale (largest breakpoint):** h1 96px · h2 30px · h3 14px · body 12px
- **Weights in use:** semibold, extrabold, bold
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-sm` (2px)
- **Shadows:** `shadow-[0_0_20px_rgba(61,246,4,0.3)]`, `shadow-[0_0_30px_rgba(61,246,4,0.1)]`, `shadow-2xl`
- **Content width:** `max-w-[1800px]`, `max-w-5xl`
- **Common gaps:** `gap-2`, `gap-4`, `gap-8`

**Primary button**

```html
<a class="bg-[#3DF604] text-black font-['Unbounded'] font-semibold text-xs px-8 py-4 rounded-full hover:bg-white transition-colors flex items-center justify-center gap-2 uppercase tracking-wide">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Services (`services`)
5. Process / steps (`how-it-works`)
6. Feature grid (`features`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #050505;
  --color-surface: #111111;
  --color-text: #eaeaea;
  --color-muted: #6b7280;
  --color-border: #ffffff;
  --color-accent: #3df604;
  --font-display: "Space Mono", sans-serif;
  --font-body: "Space Mono", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#050505',
    surface: '#111111',
    ink: '#eaeaea',
    muted: '#6b7280',
    line: '#ffffff',
    accent: '#3df604',
  },
  fontFamily: { display: ['Space Mono'], sans: ['Space Mono'] },
} }
```

## Do and don't

- **Do:** Use green (#3df604) on the highlighted headline word, the primary button and the status dot only
- **Do:** Set one headline line as outlined text for contrast
- **Do:** Keep the page ground at #050505 with #111111 surfaces
- **Don't:** Don't set body copy in green
- **Don't:** Don't use a light page ground
- **Don't:** Don't use the outline style on small labels

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
