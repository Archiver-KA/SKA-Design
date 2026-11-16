# Design system — Interactive Sidebar Navigation Panel

`SN-W04225` · other-landing · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark AI workspace sits inside a soft grey frame, with a narrow icon rail on the left and a near-black content panel. The headline is white, with the word 'Reality' set in a pink-to-red gradient, which is the one warm accent on the screen. Feature cards are dark and rounded, and the prompt bar is a white pill with a red send button.

**Mood:** product-led, dark workspace, rounded, single warm accent

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#020617` | Page ground |
| Surface | `#d1d5db` | Cards, panels, raised areas |
| Text | `#f3f4f6` | Headings and primary copy |
| Muted text | `#020617` | Secondary copy, captions |
| Border | `#d1d5db` | Hairlines, dividers, outlines |
| Accent | `#c4b5fd` | Primary action and highlights |
| Second accent | `#93c5fd` | Supporting highlights |

Palette by frequency of use: `#d1d5db` · `#000000` · `#e5e7eb` · `#9ca3af` · `#4b5563` · `#020617` · `#f3f4f6` · `#6b7280` · `#c4b5fd` · `#93c5fd`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 48px · h2 14px · body 18px
- **Weights in use:** medium, normal
- **Letter spacing:** `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-2xl` (16px)
- **Shadows:** `shadow-lg`, `shadow-md`, `shadow-2xl`
- **Content width:** `max-w-6xl`, `max-w-4xl`
- **Common gaps:** `gap-1`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="flex gap-1 sm:text-sm sm:py-2 sm:px-4 transition-all duration-200 hover:scale-105 text-xs font-medium rounded-full pt-1.5 pr-3 pb-1.5 pl-3 items-center bg-gradient-to-br from-pink-500 to-rose-500 hover:from-violet-300 hover:to-blue-300 text-black">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #020617;
  --color-surface: #d1d5db;
  --color-text: #f3f4f6;
  --color-muted: #020617;
  --color-border: #d1d5db;
  --color-accent: #c4b5fd;
  --color-accent-2: #93c5fd;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#020617',
    surface: '#d1d5db',
    ink: '#f3f4f6',
    muted: '#020617',
    line: '#d1d5db',
    accent: '#c4b5fd',
    accent2: '#93c5fd',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the rail and panel on the near-black ground with white headline text
- **Do:** Use the pink-to-red gradient only on the highlighted headline word
- **Do:** Keep the prompt bar as a white pill at the foot of the panel
- **Don't:** Don't use the warm gradient for more than one word per screen
- **Don't:** Don't use the white card treatment for every feature card; only the first one is light
- **Don't:** Don't square off the prompt bar or the card corners

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
