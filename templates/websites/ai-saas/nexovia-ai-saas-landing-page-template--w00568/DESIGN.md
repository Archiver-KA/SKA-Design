# Design system — Nexovia AI SaaS Landing Page Template

`SN-W00568` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark hero on near-black (#050505) where a white sans-serif headline sits above a teal (#00b7a8) italic serif word, 'Empower.'. The serif-sans pairing is what makes the headline recognisable. A soft teal glow sits behind the hero, the solid teal primary button leads the actions, and a dark pill with an avatar serves as the secondary action.

**Mood:** confident, dark, warm-contrast, polished

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#050505` | Page ground |
| Surface | `#0a0a0a` | Cards, panels, raised areas |
| Text | `#d1d5db` | Headings and primary copy |
| Muted text | `#4b5563` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#00b7a8` | Primary action and highlights |
| Second accent | `#172c48` | Supporting highlights |

Palette by frequency of use: `#00b7a8` · `#ffffff` · `#4b5563` · `#6b7280` · `#172c48` · `#9ca3af` · `#d1d5db` · `#078d8b` · `#050505` · `#000000`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Newsreader
- **Body:** Inter
- **Loaded families:** Inter, Newsreader
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 18px · body 12px
- **Weights in use:** medium, normal, semibold
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded` (4px)
- **Shadows:** `shadow-[0_0_20px_-5px_rgba(0,183,168,0.4)]`, `shadow-[0_2px_8px_rgba(0,0,0,0.2)]`, `shadow-2xl`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-2`, `gap-3`, `gap-6`

**Primary button**

```html
<a class="w-full py-3 rounded-lg bg-[#00b7a8] text-[#050505] font-semibold text-sm text-center hover:bg-[#00b7a8]/90 transition-all mt-auto shadow-[0_0_15px_rgba(0,183,168,0.3)]">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Feature grid (`features`)
5. Pricing (`pricing`)
6. FAQ (`faq`)
7. Call to action (`cta`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #050505;
  --color-surface: #0a0a0a;
  --color-text: #d1d5db;
  --color-muted: #4b5563;
  --color-border: #ffffff;
  --color-accent: #00b7a8;
  --color-accent-2: #172c48;
  --font-display: "Newsreader", serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#050505',
    surface: '#0a0a0a',
    ink: '#d1d5db',
    muted: '#4b5563',
    line: '#ffffff',
    accent: '#00b7a8',
    accent2: '#172c48',
  },
  fontFamily: { display: ['Newsreader'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the second headline word in teal (#00b7a8) italic serif beneath the white sans line
- **Do:** Use the solid teal button for the primary action and a dark pill for the secondary
- **Do:** Keep the soft teal glow behind the hero, not behind body text
- **Don't:** Don't set the whole headline in serif; the sans line is the contrast
- **Don't:** Don't use teal for body copy
- **Don't:** Don't add a second bright accent colour beside the teal

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
