# Design system — Creative Law Firm Landing Page Template

`SN-W03873` · business-services · light mode · Sinera Atlas theme `route` · language `en`

## Direction

A warm off-white page with a large dark serif headline, where the middle phrase is set in italic. The hero is centred and symmetrical, with a small uppercase strip above the navigation and a near-black pill button as the main action. Generous margins and a single type voice keep the page quiet and literary.

**Mood:** literary, warm, elegant, restrained, classic

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f5f3ef` | Page ground |
| Surface | `#1c1917` | Cards, panels, raised areas |
| Text | `#1c1917` | Headings and primary copy |
| Muted text | `#a8a29e` | Secondary copy, captions |
| Border | `#e7e5e4` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#1c1917` · `#f5f3ef` · `#292524` · `#ffffff` · `#a8a29e` · `#d6d3d1` · `#57534e` · `#78716c` · `#e7e5e4` · `#ebe8e0`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Manrope
- **Body:** Manrope
- **Loaded families:** DM Serif Display, Manrope
- **Scale (largest breakpoint):** h1 128px · h2 60px · h3 48px · body 20px
- **Weights in use:** medium, light, semibold
- **Letter spacing:** `tracking-widest`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded` (4px)
- **Shadows:** `shadow-2xl`, `shadow-[#D1CEC7]/50`, `shadow-lg`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-20`, `py-24`
- **Common gaps:** `gap-4`, `gap-12`, `gap-2`

**Primary button**

```html
<a class="px-8 py-4 border border-stone-300 text-stone-900 rounded-full hover:bg-stone-200 transition-all duration-300 w-full md:w-auto font-medium">…</a>
```

## Page structure

Blocks in page order:

1. Logo cloud (`logo-cloud`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Marquee (`marquee`)
5. Services (`services`)
6. Team (`team`)
7. Product grid (`product-grid`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), blend modes, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #f5f3ef;
  --color-surface: #1c1917;
  --color-text: #1c1917;
  --color-muted: #a8a29e;
  --color-border: #e7e5e4;
  --font-display: "Manrope", sans-serif;
  --font-body: "Manrope", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f5f3ef',
    surface: '#1c1917',
    ink: '#1c1917',
    muted: '#a8a29e',
    line: '#e7e5e4',
  },
  fontFamily: { display: ['Manrope'], sans: ['Manrope'] },
} }
```

## Do and don't

- **Do:** Set headlines in a large dark serif and switch one phrase to italic
- **Do:** Keep the page on warm off-white (#f5f3ef) with near-black text
- **Do:** Use a near-black pill button for the main action and an outlined one beside it
- **Don't:** Don't set headlines in bold sans-serif; the serif is the voice
- **Don't:** Don't add a second accent colour; the page works in black and cream
- **Don't:** Don't set the top strip in a light colour; it is a dark bar with light text

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
