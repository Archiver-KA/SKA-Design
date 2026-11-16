# Design system — YJA Convention Landing Page Template

`SN-W00841` · ai-saas · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A lime-and-forest event page with a heavy grotesque headline in near-black green and a large serif italic 'New Jersey' in mid green. Coral (#ff6b4a) is the accent, used on tilted photo cards and a highlight tag, while pill buttons in dark green and outline carry the actions. The tilted polaroids and bold type give it a playful, poster-like energy.

**Mood:** playful, poster-like, bold, energetic

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#c9e265` | Page ground |
| Surface | `#f2efe9` | Cards, panels, raised areas |
| Text | `#1a261d` | Headings and primary copy |
| Muted text | `#3d6b4f` | Secondary copy, captions |
| Border | `#1a261d` | Hairlines, dividers, outlines |
| Accent | `#ff6b4a` | Primary action and highlights |
| Second accent | `#ff6b4a` | Supporting highlights |

Palette by frequency of use: `#1a261d` · `#f2efe9` · `#c9e265` · `#ff6b4a` · `#9d8bb5` · `#3d6b4f` · `#ffffff` · `#e5e7eb` · `#000000` · `#b5d145`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Space Grotesk
- **Body:** Space Grotesk
- **Loaded families:** Inter, Playfair Display, Space Grotesk
- **Scale (largest breakpoint):** h1 128px · h2 72px · body 20px
- **Weights in use:** bold, medium, black
- **Letter spacing:** `tracking-tighter`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded` (4px)
- **Shadows:** `shadow-[4px_4px_0px_0px_#1A261D]`, `shadow-[6px_6px_0px_0px_#1A261D]`, `shadow-[2px_2px_0px_0px_#1A261D]`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="bg-[#C9E265] hover:bg-[#b5d145] text-[#1A261D] px-5 py-2.5 rounded-full text-sm font-bold border-2 border-[#1A261D] shadow-[2px_2px_0px_0px_#1A261D] active:shadow-none active:translate-x-[2px] active:translate-y-[2px] transition-all flex items-center gap-2">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Modal / overlay (`modal-overlay`)
4. Marquee (`marquee`)
5. About (`about`)
6. Gallery / portfolio (`gallery-portfolio`)
7. Timeline (`timeline`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #c9e265;
  --color-surface: #f2efe9;
  --color-text: #1a261d;
  --color-muted: #3d6b4f;
  --color-border: #1a261d;
  --color-accent: #ff6b4a;
  --color-accent-2: #ff6b4a;
  --font-display: "Space Grotesk", sans-serif;
  --font-body: "Space Grotesk", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#c9e265',
    surface: '#f2efe9',
    ink: '#1a261d',
    muted: '#3d6b4f',
    line: '#1a261d',
    accent: '#ff6b4a',
    accent2: '#ff6b4a',
  },
  fontFamily: { display: ['Space Grotesk'], sans: ['Space Grotesk'] },
} }
```

## Do and don't

- **Do:** Set the headline in a heavy grotesque at 128px in dark green (#1a261d)
- **Do:** Use coral (#ff6b4a) only for the tilted photo cards and small highlight tags
- **Do:** Set the one italic serif word in mid green (#3d6b4f) for contrast
- **Don't:** Don't set body copy in the coral
- **Don't:** Don't use the italic serif for more than one phrase per screen
- **Don't:** Don't flatten the tilted cards into a straight grid in the hero

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
