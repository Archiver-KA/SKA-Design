# Design system — fine-finish1

`SN-W03908` · business-services · light mode · Sinera Atlas theme `route` · language `en`

## Direction

A bright, stone-toned page where a dark serif headline line sits over a marble-floor photograph softened by a light wash. The second line switches to a heavy grey sans, a deliberate contrast that makes the page feel polished and quiet. Amber (#fbbf24) marks the main quote button, and the secondary button stays neutral. The overall tone is refined and calm.

**Mood:** polished, calm, stone-toned, refined, quiet

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#fafaf9` | Cards, panels, raised areas |
| Text | `#292524` | Headings and primary copy |
| Muted text | `#78716c` | Secondary copy, captions |
| Border | `#f5f5f4` | Hairlines, dividers, outlines |
| Accent | `#fbbf24` | Primary action and highlights |
| Second accent | `#e2e8f0` | Supporting highlights |

Palette by frequency of use: `#1c1917` · `#ffffff` · `#fafaf9` · `#e7e5e4` · `#78716c` · `#44403c` · `#a8a29e` · `#57534e` · `#f5f5f4` · `#292524`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 20px · body 14px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-xl` (12px), `rounded-full` (9999px), `rounded-2xl` (16px)
- **Shadows:** `shadow-sm`, `shadow-lg`, `shadow-xl`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Common gaps:** `gap-2`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="bg-stone-900 hover:bg-stone-800 text-white text-sm font-medium px-5 py-2.5 rounded-lg transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Logo cloud (`logo-cloud`)
4. Services (`services`)
5. Feature grid (`features`)
6. About (`about`)
7. FAQ (`faq`)
8. Contact form (`contact-form`)
9. Footer (`footer`)
10. Modal / overlay (`modal-overlay`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #fafaf9;
  --color-text: #292524;
  --color-muted: #78716c;
  --color-border: #f5f5f4;
  --color-accent: #fbbf24;
  --color-accent-2: #e2e8f0;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 12px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#fafaf9',
    ink: '#292524',
    muted: '#78716c',
    line: '#f5f5f4',
    accent: '#fbbf24',
    accent2: '#e2e8f0',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the first line of the headline in serif and the second in a heavy sans, in the same block.
- **Do:** Use the amber button for the primary quote action and keep the secondary button neutral.
- **Do:** Keep the marble photograph as the hero ground under a light wash.
- **Don't:** Don't put amber on text; it marks buttons only.
- **Don't:** Don't place dark photographs behind the hero copy; keep the light stone tone.
- **Don't:** Don't add further accent colours to the page.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
