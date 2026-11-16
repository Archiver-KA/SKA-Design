# Design system — Real Estate Landing Page Template

`SN-W03358` · real-estate · light mode · Sinera Atlas theme `dwell` · language `pl`

## Direction

A serif-led hero over a muted taupe-grey photographic ground, with a large light headline set in three lines and a small rounded label above it. The one emphasis is an italic word in warm tan (#a18058). A white pill navigation strip sits at the top, with a dark square logo and a near-black button for the contact action.

**Mood:** editorial, warm, understated, natural

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#a18058` | Page ground |
| Surface | `#1c1917` | Cards, panels, raised areas |
| Text | `#111111` | Headings and primary copy |
| Muted text | `#1c1917` | Secondary copy, captions |
| Border | `#e7e5e4` | Hairlines, dividers, outlines |
| Accent | `#a18058` | Primary action and highlights |

Palette by frequency of use: `#1c1917` · `#a18058` · `#ffffff` · `#78716c` · `#fafaf9` · `#e7e5e4` · `#a8a29e` · `#f5f5f4` · `#d6d3d1` · `#292524`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display, Geist, Roboto, Montserrat, Poppins
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 20px · body 12px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-sm` (2px), `rounded-[2rem]` (2rem)
- **Shadows:** `shadow-xl`, `shadow-sm`, `shadow-2xl`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-28`
- **Common gaps:** `gap-2`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="group bg-[#1C1917] hover:bg-[#292524] text-[#FAFAF9] text-xs font-medium py-3 px-6 rounded-full transition-all shadow-xl shadow-stone-900/10 flex items-center gap-3">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Bento grid (`bento-grid`)
4. Feature grid (`features`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #a18058;
  --color-surface: #1c1917;
  --color-text: #111111;
  --color-muted: #1c1917;
  --color-border: #e7e5e4;
  --color-accent: #a18058;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#a18058',
    surface: '#1c1917',
    ink: '#111111',
    muted: '#1c1917',
    line: '#e7e5e4',
    accent: '#a18058',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in a light serif in white, with one italic word in tan (#a18058)
- **Do:** Keep the hero ground in a muted taupe-grey so the white type stays legible
- **Do:** Use the near-black button for the main action in the navigation
- **Don't:** Don't use tan for body copy on light backgrounds
- **Don't:** Don't place the headline over the bright areas of the photograph
- **Don't:** Don't add a second accent colour to the navigation

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
