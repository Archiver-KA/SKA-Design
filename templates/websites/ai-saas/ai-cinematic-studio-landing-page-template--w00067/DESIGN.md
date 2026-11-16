# Design system — AI Cinematic Studio Landing Page Template

`SN-W00067` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A greyscale, cinematic photograph sits behind the hero, with a large white serif headline set in roman and then italic. The second line is a light italic serif at very large size, which gives a film-title tone. Buttons are small and white with a play arrow, and no colour appears on the page. The page is an editorial showcase of a studio.

**Mood:** cinematic, monochrome, dramatic, editorial

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#171717` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#d4d4d4` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#ffffff` · `#2e5bff` · `#000000` · `#d4d4d4` · `#171717` · `#a3a3a3` · `#737373` · `#0a0a0a` · `#404040` · `#262626`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display, Geist, Roboto, Montserrat, Poppins
- **Scale (largest breakpoint):** h2 48px · h3 24px · body 14px
- **Weights in use:** light, medium, semibold
- **Letter spacing:** `tracking-wider`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded` (4px), `rounded-[4px]` (4px)
- **Shadows:** `shadow-[0_0_40px_-10px_rgba(46,91,255,0.6)]`, `shadow-2xl`, `shadow-black/50`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-3`, `gap-6`, `gap-2`

**Primary button**

```html
<a class="w-full py-3 text-center bg-[#2E5BFF] text-white text-sm hover:bg-[#2E5BFF]/90 transition-all">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Bento grid (`bento-grid`)
5. Process / steps (`how-it-works`)
6. Services (`services`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #171717;
  --color-text: #ffffff;
  --color-muted: #d4d4d4;
  --color-border: #ffffff;
  --font-display: "Playfair Display", serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#171717',
    ink: '#ffffff',
    muted: '#d4d4d4',
    line: '#ffffff',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headlines in Playfair Display, roman then italic
- **Do:** Keep the hero greyscale with a black-and-white photo behind the copy
- **Do:** Use the italic only for the second headline line
- **Don't:** Don't introduce a colour accent; the hero is greyscale
- **Don't:** Don't add colour photography to the hero
- **Don't:** Don't set body text in serif

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
