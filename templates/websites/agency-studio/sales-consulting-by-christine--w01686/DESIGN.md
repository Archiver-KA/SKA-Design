# Design system — Sales Consulting by Christine

`SN-W01686` · agency-studio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A near-black page with a small teal (#29a2bf) accent used on the primary button and a highlight glow. Headlines are white sans, and body copy is set in a cool grey (#a1a1aa). The hero sits on a dark ground with a blurred glow, and the lower sections use thin-bordered cards on the same black.

**Mood:** calm, focused, dark, professional

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#030303` | Page ground |
| Surface | `#18181b` | Cards, panels, raised areas |
| Text | `#a1a1aa` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#27272a` | Hairlines, dividers, outlines |
| Accent | `#29a2bf` | Primary action and highlights |

Palette by frequency of use: `#29a2bf` · `#27272a` · `#a1a1aa` · `#ffffff` · `#18181b` · `#d4d4d8` · `#71717a` · `#52525b` · `#e4e4e7` · `#09090b`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 24px · body 16px
- **Weights in use:** light, extralight, normal
- **Letter spacing:** `tracking-tight`, `tracking-[0.2em]`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-xl` (12px)
- **Shadows:** `shadow-[0_0_15px_rgba(41,162,191,0.4)]`, `shadow-[inset_0_1px_2px_rgba(255,255,255,0.02)]`, `shadow-[0_0_15px_rgba(0,0,0,0.5)]`
- **Content width:** `max-w-[1200px]`, `max-w-3xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-4`, `gap-6`, `gap-8`

**Primary button**

```html
<a class="flex items-center justify-center px-4 py-1.5 bg-[#29A2BF] text-white rounded-full text-sm font-normal hover:bg-[#29A2BF]/90 shadow-[0_0_15px_rgba(41,162,191,0.4)] transition-all border border-[#29A2BF]">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Team (`team`)
5. Process / steps (`how-it-works`)
6. Services (`services`)
7. About (`about`)
8. FAQ (`faq`)
9. Booking form (`booking`)
10. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #030303;
  --color-surface: #18181b;
  --color-text: #a1a1aa;
  --color-muted: #71717a;
  --color-border: #27272a;
  --color-accent: #29a2bf;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#030303',
    surface: '#18181b',
    ink: '#a1a1aa',
    muted: '#71717a',
    line: '#27272a',
    accent: '#29a2bf',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use teal (#29a2bf) for the primary button and one glow behind the hero.
- **Do:** Keep headlines white and body copy in cool grey (#a1a1aa).
- **Do:** Separate cards with thin borders (#27272a) on the near-black ground.
- **Don't:** Don't use teal for body text or long links.
- **Don't:** Don't add a light section; the page is dark throughout.
- **Don't:** Don't add bright colours beyond the teal accent.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
