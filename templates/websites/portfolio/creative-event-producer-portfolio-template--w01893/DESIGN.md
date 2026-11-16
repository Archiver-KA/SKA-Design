# Design system — Creative Event Producer Portfolio Template

`SN-W01893` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A black stage with oversized uppercase display type in three treatments: solid white, outlined, and one green italic phrase. The green (#3df604) also marks the logo tile, so it carries the energy of the page while the rest stays white on black. Small monospace labels sit above the headline and give it an event-listing tone.

**Mood:** loud, high-energy, editorial, kinetic

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#050505` | Page ground |
| Surface | `#111111` | Cards, panels, raised areas |
| Text | `#eaeaea` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#3df604` | Primary action and highlights |

Palette by frequency of use: `#3df604` · `#ffffff` · `#000000` · `#9ca3af` · `#6b7280` · `#050505` · `#111111` · `#0a0a0a` · `#4b5563` · `#333333`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Space Mono
- **Body:** Space Mono
- **Loaded families:** Space Mono, Unbounded
- **Scale (largest breakpoint):** h1 144px · h2 24px · h3 20px · body 12px
- **Weights in use:** bold, black
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-sm` (2px)
- **Shadows:** `shadow-2xl`
- **Content width:** `max-w-[80%]`, `max-w-2xl`
- **Section padding:** `py-12`
- **Common gaps:** `gap-2`, `gap-4`, `gap-6`

**Primary button**

```html
<a class="bg-[#3DF604] text-black font-['Unbounded'] font-bold text-sm px-8 py-3 rounded-full hover:bg-white transition-colors flex items-center gap-2">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Bento grid (`bento-grid`)
5. Listings (`listings`)
6. Footer (`footer`)
7. Case studies (`case-studies`)
8. Contact form (`contact-form`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

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

- **Do:** Set one headline phrase in green (#3df604) italic and keep the rest white.
- **Do:** Use outlined type only for the middle headline line, never for body copy.
- **Do:** Keep small labels in monospace, uppercase, above the headline.
- **Don't:** Don't use green for body text or large blocks.
- **Don't:** Don't mix more than two type treatments in one headline.
- **Don't:** Don't place body copy beside the headline band; it collides with the display type.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
