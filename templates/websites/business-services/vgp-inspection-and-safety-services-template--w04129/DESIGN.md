# Design system — VGP Inspection & Safety Services Template

`SN-W04129` · business-services · dark mode · Sinera Atlas theme `route` · language `fr`

## Direction

A dark, near-black hero with a serif headline in white, set inside a rounded outer frame. Small translucent dark tiles beside the text hold stats and a service promise, and the primary button is a white pill with a dark circular icon. Colour is almost absent, so the page relies on type contrast and tone.

**Mood:** sober, authoritative, dark, monochrome, serif-led

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#1c1917` | Page ground |
| Surface | `#292524` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#78716c` | Secondary copy, captions |
| Border | `#e7e5e4` | Hairlines, dividers, outlines |
| Accent | `#f5f5f4` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#1c1917` · `#f5f5f4` · `#fbbf24` · `#78716c` · `#e7e5e4` · `#57534e` · `#a8a29e` · `#fafaf9` · `#44403c`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 24px · body 16px
- **Weights in use:** normal, extralight, medium
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-[2rem]` (2rem), `rounded-xl` (12px)
- **Shadows:** `shadow-sm`, `shadow-xl`, `shadow-[0_-10px_40px_rgba(0,0,0,0.1)]`
- **Content width:** `max-w-2xl`, `max-w-4xl`
- **Common gaps:** `gap-2`, `gap-4`, `gap-6`

**Primary button**

```html
<a class="inline-flex items-center gap-2 text-base font-normal text-stone-900 hover:underline border border-stone-200 px-6 py-4 rounded-xl bg-white">…</a>
```

## Page structure

Blocks in page order:

1. Announcement bar (`announcement-bar`)
2. Hero (`hero`)
3. Gallery / portfolio (`gallery-portfolio`)
4. Feature grid (`features`)
5. Services (`services`)
6. Awards / press (`awards-press`)
7. FAQ (`faq`)
8. Contact form (`contact-form`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN), AOS scroll reveal
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #1c1917;
  --color-surface: #292524;
  --color-text: #ffffff;
  --color-muted: #78716c;
  --color-border: #e7e5e4;
  --color-accent: #f5f5f4;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#1c1917',
    surface: '#292524',
    ink: '#ffffff',
    muted: '#78716c',
    line: '#e7e5e4',
    accent: '#f5f5f4',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in a serif face in white on the near-black ground
- **Do:** Use white pill buttons with a dark circular icon for the primary action
- **Do:** Place stats in small translucent dark tiles beside the hero text
- **Don't:** Don't add yellow highlights where the page has no colour accent
- **Don't:** Don't use sharp-cornered tiles
- **Don't:** Don't introduce bright photography over the dark hero

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
