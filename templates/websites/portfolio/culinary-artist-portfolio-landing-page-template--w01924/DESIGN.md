# Design system — Culinary Artist Portfolio Landing Page Template

`SN-W01924` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A dark zinc page in an editorial register, with the hero set as a quiet, centred block: a large white heading in Inter, a muted grey paragraph beneath, and two actions, one solid white pill and one plain text link. The navigation is a single row of small links and a small outlined contact pill. The greys carry the mood, and the page relies on spacing and type scale rather than colour.

**Mood:** editorial, quiet, monochrome, refined, spacious

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#09090b` | Page ground |
| Surface | `#18181b` | Cards, panels, raised areas |
| Text | `#a1a1aa` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#34d399` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#71717a` · `#27272a` · `#52525b` · `#a1a1aa` · `#09090b` · `#18181b` · `#d4d4d8` · `#e4e4e7` · `#3f3f46`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 30px · h3 18px · body 14px
- **Weights in use:** medium, semibold, light
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded` (4px)
- **Shadows:** `shadow-2xl`
- **Content width:** `max-w-7xl`, `max-w-[200px]`
- **Section padding:** `py-24`
- **Common gaps:** `gap-4`, `gap-2`, `gap-3`

**Primary button**

```html
<a class="group bg-white text-zinc-950 px-8 py-3 rounded-full text-sm font-medium hover:bg-zinc-200 transition-all flex items-center gap-2">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Awards / press (`awards-press`)
4. About (`about`)
5. Call to action (`cta`)
6. Gallery / portfolio (`gallery-portfolio`)
7. Services (`services`)
8. Marquee (`marquee`)
9. Testimonials (`testimonials`)
10. Contact form (`contact-form`)
11. Newsletter signup (`newsletter`)
12. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #09090b;
  --color-surface: #18181b;
  --color-text: #a1a1aa;
  --color-muted: #71717a;
  --color-border: #ffffff;
  --color-accent: #34d399;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#09090b',
    surface: '#18181b',
    ink: '#a1a1aa',
    muted: '#71717a',
    line: '#ffffff',
    accent: '#34d399',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the hero heading in Inter, white, with a grey second line
- **Do:** Use one solid white pill and one text link as the hero actions
- **Do:** Keep body text in muted zinc grey (#a1a1aa) on the near-black ground
- **Don't:** Don't add colour to the hero; it is monochrome
- **Don't:** Don't crowd the hero with more than two actions
- **Don't:** Don't use a light background for sections; they stay in the zinc range

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
