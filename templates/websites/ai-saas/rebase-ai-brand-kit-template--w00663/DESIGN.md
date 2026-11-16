# Design system — Rebase AI Brand Kit Template

`SN-W00663` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark brand-guidelines page with a near-black ground and white Inter type. The hero is a centred name in medium-weight sans, followed by three bordered preview cards for construction, app icon and in-context use, each with a small uppercase label above and a caption below. The design is restrained and tool-like, so the logo and type samples carry the visual weight rather than colour.

**Mood:** restrained, technical, dark, tool-like

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#08090a` | Page ground |
| Surface | `#08090a` | Cards, panels, raised areas |
| Text | `#f5f5f5` | Headings and primary copy |
| Muted text | `#ffffff` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#e2e8f0` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#a3a3a3` · `#525252` · `#737373` · `#6366f1` · `#08090a` · `#262626` · `#000000` · `#d4d4d4` · `#e2e8f0`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 96px · h3 14px · body 12px
- **Weights in use:** medium, normal, light
- **Letter spacing:** `tracking-tighter`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-lg` (8px)
- **Shadows:** `shadow-lg`, `shadow-2xl`, `shadow-[0_0_20px_rgba(99,102,241,0.3)]`
- **Content width:** `max-w-6xl`, `max-w-3xl`
- **Section padding:** `py-12`
- **Common gaps:** `gap-2`, `gap-8`, `gap-6`

**Primary button**

```html
<a class="px-4 py-2 rounded-md border border-white/10 text-xs font-medium text-neutral-300 hover:text-white hover:bg-white/5 hover:border-white/20 transition-all flex items-center gap-2">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #08090a;
  --color-surface: #08090a;
  --color-text: #f5f5f5;
  --color-muted: #ffffff;
  --color-border: #ffffff;
  --color-accent: #e2e8f0;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#08090a',
    surface: '#08090a',
    ink: '#f5f5f5',
    muted: '#ffffff',
    line: '#ffffff',
    accent: '#e2e8f0',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the page ground to near-black (#08090a) and show brand previews on it
- **Do:** Use Inter at medium weight for headings and labels
- **Do:** Show each brand asset in its own bordered card with a small uppercase label above
- **Don't:** Don't use indigo (#6366f1) as a page background; the ground is near-black
- **Don't:** Don't add coloured gradients behind the logo previews
- **Don't:** Don't use drop shadows on preview cards; borders define them

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
