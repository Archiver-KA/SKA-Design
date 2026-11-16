# Design system — Food Product Landing Page Template

`SN-W02902` · food-beverage · light mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A neo-brutalist layout on a cream ground (#f2efe9) with heavy dark-green outlines and hard offset shadows on cards and buttons. The headline is a bold grotesk with a second line in italic dark green, and tilted photo cards with handwritten captions add a playful collage. Lime (#c9e265) and coral (#ff6b4a) are the two bright colours, used on the nav action and the main offer, and a dark-green band divides sections.

**Mood:** neo-brutalist, playful, bold, collage, high-contrast

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f2efe9` | Page ground |
| Surface | `#f2efe9` | Cards, panels, raised areas |
| Text | `#1a261d` | Headings and primary copy |
| Muted text | `#3d6b4f` | Secondary copy, captions |
| Border | `#1a261d` | Hairlines, dividers, outlines |
| Accent | `#ff6b4a` | Primary action and highlights |
| Second accent | `#c9e265` | Supporting highlights |

Palette by frequency of use: `#1a261d` · `#f2efe9` · `#c9e265` · `#ff6b4a` · `#9d8bb5` · `#ffffff` · `#3d6b4f` · `#e8e4db` · `#b5d145`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Space Grotesk
- **Body:** Space Grotesk
- **Loaded families:** Inter, Playfair Display, Space Grotesk
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 20px · body 14px
- **Weights in use:** semibold, bold, medium
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-2xl` (16px)
- **Shadows:** `shadow-[2px_2px_0px_0px_#1A261D]`, `shadow-none`, `shadow-[4px_4px_0px_0px_#9D8BB5]`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-24`, `py-20`
- **Common gaps:** `gap-3`, `gap-2`, `gap-12`

**Primary button**

```html
<a class="bg-[#C9E265] hover:bg-[#b5d145] text-[#1A261D] px-5 py-2.5 rounded-full text-sm font-semibold border-2 border-[#1A261D] shadow-[2px_2px_0px_0px_#1A261D] active:shadow-none active:translate-x-[2px] active:translate-y-[2px] transition-all flex items-center gap-2">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Modal / overlay (`modal-overlay`)
4. Marquee (`marquee`)
5. Feature grid (`features`)
6. Process / steps (`how-it-works`)
7. Pricing (`pricing`)
8. FAQ (`faq`)
9. Timeline (`timeline`)
10. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #f2efe9;
  --color-surface: #f2efe9;
  --color-text: #1a261d;
  --color-muted: #3d6b4f;
  --color-border: #1a261d;
  --color-accent: #ff6b4a;
  --color-accent-2: #c9e265;
  --font-display: "Space Grotesk", sans-serif;
  --font-body: "Space Grotesk", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f2efe9',
    surface: '#f2efe9',
    ink: '#1a261d',
    muted: '#3d6b4f',
    line: '#1a261d',
    accent: '#ff6b4a',
    accent2: '#c9e265',
  },
  fontFamily: { display: ['Space Grotesk'], sans: ['Space Grotesk'] },
} }
```

## Do and don't

- **Do:** Give cards and buttons a hard dark-green offset shadow and a dark outline.
- **Do:** Use coral (#ff6b4a) for the main offer button and lime (#c9e265) for the nav action.
- **Do:** Set the headline in a bold grotesk, with the second line in italic dark green.
- **Don't:** Don't use soft blurred shadows; depth comes from hard offsets.
- **Don't:** Don't use lime (#c9e265) as a page ground; it is a button colour here.
- **Don't:** Don't round cards far beyond a modest radius; the panels are squared-off.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
