# Design system — Creative Agency Landing Page Template

`SN-W01477` · agency-studio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A black hero (#080808) where the lime (#9aff00) is reserved for a single primary button, so the one saturated colour on screen marks the action. Headlines are a heavy, tightly tracked sans, with one emphasis word, 'visionaries', set in a lighter italic serif in white. A short muted paragraph sits beneath, and faint grid lines in the background add a technical texture rather than photography.

**Mood:** sharp, technical, dark, minimal

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#080808` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#9aff00` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#9aff00` · `#000000` · `#a3a3a3` · `#737373` · `#080808` · `#262626` · `#d4d4d4` · `#171717` · `#111111`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 20px · body 14px
- **Weights in use:** semibold, medium, bold
- **Letter spacing:** `tracking-tighter`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-lg` (8px)
- **Shadows:** `shadow-[0_0_40px_-10px_rgba(154,255,0,0.6)]`
- **Content width:** `max-w-7xl`, `max-w-5xl`
- **Section padding:** `py-32`
- **Common gaps:** `gap-2`, `gap-4`, `gap-8`

**Primary button**

```html
<a class="w-full md:w-auto px-8 py-4 bg-[#9AFF00] text-black text-sm font-semibold rounded-full hover:bg-[#88e000] transition-colors flex items-center justify-center gap-2">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Stats band (`stats`)
4. Services (`services`)
5. Case studies (`case-studies`)
6. Product grid (`product-grid`)
7. Contact form (`contact-form`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Unicorn Studio (WebGL scenes)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #080808;
  --color-surface: #ffffff;
  --color-text: #ffffff;
  --color-muted: #737373;
  --color-border: #ffffff;
  --color-accent: #9aff00;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#080808',
    surface: '#ffffff',
    ink: '#ffffff',
    muted: '#737373',
    line: '#ffffff',
    accent: '#9aff00',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use the lime (#9aff00) only for the primary button and one highlight per screen.
- **Do:** Set headlines in a heavy, tightly tracked sans, and set one emphasis word in an italic serif.
- **Do:** Keep the ground at #080808 with the faint grid texture rather than adding photography.
- **Don't:** Don't use the lime as a page or section background.
- **Don't:** Don't add a second saturated colour to the hero.
- **Don't:** Don't set the italic emphasis word in the lime; it stays white.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
