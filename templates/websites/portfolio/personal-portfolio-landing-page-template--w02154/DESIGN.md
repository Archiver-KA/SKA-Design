# Design system — Personal Portfolio Landing Page Template

`SN-W02154` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A dark product-designer portfolio on black (#000000) with a large bold white greeting and a subtitle in which the employer name is set heavier in white. Body copy is muted grey, and a blue dot (#3b82f6) marks the current role in a right-hand experience list. Rounded project cards sit below the hero, and the primary action is a white pill beside an outlined secondary, so the page reads as clear and personal.

**Mood:** clear, dark, personal, minimal, focused

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#171717` | Cards, panels, raised areas |
| Text | `#f4f4f5` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#3b82f6` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#f5f5f5` · `#737373` · `#000000` · `#171717` · `#d4d4d4` · `#525252` · `#f4f4f5` · `#08090a` · `#3f3f46`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist
- **Scale (largest breakpoint):** h1 72px · h2 30px · h3 20px · body 12px
- **Weights in use:** medium, semibold, light
- **Letter spacing:** `tracking-widest`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-sm` (2px), `rounded-full` (9999px), `rounded` (4px)
- **Shadows:** `shadow-[0_0_8px_rgba(34,197,94,0.5)]`
- **Content width:** `max-w-[1400px]`, `max-w-3xl`
- **Common gaps:** `gap-2`, `gap-4`, `gap-8`

**Primary button**

```html
<a class="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-medium uppercase tracking-wide transition-colors bg-neutral-100 text-black hover:bg-neutral-200 font-geist">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Product grid (`product-grid`)
4. Gallery / portfolio (`gallery-portfolio`)
5. About (`about`)
6. Timeline (`timeline`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Unicorn Studio (WebGL scenes)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #171717;
  --color-text: #f4f4f5;
  --color-muted: #737373;
  --color-border: #ffffff;
  --color-accent: #3b82f6;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 2px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#171717',
    ink: '#f4f4f5',
    muted: '#737373',
    line: '#ffffff',
    accent: '#3b82f6',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the greeting large and bold in white, with the subtitle in grey and the key name in white.
- **Do:** Use the blue (#3b82f6) dot for the current role and one status marker only.
- **Do:** Keep the primary action a white pill with an outlined pill beside it.
- **Don't:** Don't use blue for buttons; the buttons are white and outlined.
- **Don't:** Don't set the greeting in a light weight.
- **Don't:** Don't add a light background behind the experience list.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
