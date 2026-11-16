# Design system — Creative Agency Portfolio Landing Page Template

`SN-W01877` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A dark creative-agency hero with a faint red glow across the top and a large white sans headline that fades from white to grey across two lines. The word 'vision' is set brighter than its neighbours, so emphasis comes from tone rather than colour. Buttons are dark outlined pills with a single white pill in the nav, and red appears only in the glow and the status pill.

**Mood:** dark, bold, cinematic, restrained

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Surface | `#262626` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#a3a3a3` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#ef4444` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#a3a3a3` · `#737373` · `#ef4444` · `#dc2626` · `#d4d4d4` · `#525252` · `#171717` · `#7f1d1d` · `#262626`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 96px · h2 72px · h3 20px · body 14px
- **Weights in use:** semibold, medium, normal
- **Letter spacing:** `tracking-widest`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded` (4px), `rounded-2xl` (16px)
- **Shadows:** `shadow-2xl`, `shadow-sm`, `shadow-lg`
- **Content width:** `max-w-2xl`, `max-w-7xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-3`, `gap-2`, `gap-6`

**Primary button**

```html
<a class="flex items-center gap-3 px-5 py-3 border border-white/10 bg-white/[0.02] hover:bg-white/5 rounded text-xs font-semibold tracking-wider uppercase text-white transition-colors mb-8 w-fit">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Stats band (`stats`)
4. Pricing (`pricing`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Unicorn Studio (WebGL scenes)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #0a0a0a;
  --color-surface: #262626;
  --color-text: #ffffff;
  --color-muted: #a3a3a3;
  --color-border: #ffffff;
  --color-accent: #ef4444;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0a0a0a',
    surface: '#262626',
    ink: '#ffffff',
    muted: '#a3a3a3',
    line: '#ffffff',
    accent: '#ef4444',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use a headline that fades from white to grey, with the emphasis word brightest
- **Do:** Keep red (#ef4444) to the top glow and the status pill
- **Do:** Use dark outlined pills for secondary calls to action and one white pill in the nav
- **Don't:** Don't use the deep maroon (#7f1d1d) as a page ground; the page is near-black.
- **Don't:** Don't set more than one line of body copy at full brightness
- **Don't:** Don't add a second accent beside the red

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
