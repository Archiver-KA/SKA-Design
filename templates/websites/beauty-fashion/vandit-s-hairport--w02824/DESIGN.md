# Design system — VANDIT'S HAIRPORT 

`SN-W02824` · beauty-fashion · dark mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A dark luxury hair studio on a near-black ground (#050505) with a soft vignette and a large white Inter headline whose second word is set in gold (#d4af37). Gold is the page's single accent, used for the emphasised word and for the 3D canvas section. Thin line icons run down a fixed left rail, and small uppercase tracked labels give the page a precise, gallery-like finish.

**Mood:** luxurious, dark, precise, gallery-like

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#050505` | Page ground |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#525252` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#d4af37` | Primary action and highlights |
| Second accent | `#10b981` | Supporting highlights |

Palette by frequency of use: `#d4af37` · `#ffffff` · `#737373` · `#000000` · `#525252` · `#171717` · `#a3a3a3` · `#050505` · `#0a0a0a` · `#080808`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 128px · h2 12px · h3 48px · body 14px
- **Weights in use:** light, medium, bold
- **Letter spacing:** `tracking-wider`, `tracking-[0.3em]`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded` (4px), `rounded-sm` (2px)
- **Shadows:** `shadow-[0_0_20px_rgba(212,175,55,0.4)]`, `shadow-[0_0_15px_rgba(212,175,55,0.4)]`
- **Content width:** `max-w-4xl`, `max-w-6xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-8`, `gap-4`

**Primary button**

```html
<a class="py-2 px-3 rounded border border-[#D4AF37] bg-[#D4AF37]/10 text-xs text-[#D4AF37] font-medium">…</a>
```

## Page structure

Blocks in page order:

1. 3D / canvas scene (`3d-canvas`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Product grid (`product-grid`)
5. Booking form (`booking`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Three.js, Unicorn Studio (WebGL scenes)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #050505;
  --color-text: #ffffff;
  --color-muted: #525252;
  --color-border: #ffffff;
  --color-accent: #d4af37;
  --color-accent-2: #10b981;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#050505',
    ink: '#ffffff',
    muted: '#525252',
    line: '#ffffff',
    accent: '#d4af37',
    accent2: '#10b981',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use the near-black (#050505) ground with white headlines
- **Do:** Set the emphasised headline word in gold (#d4af37) and no other colour
- **Do:** Keep the left icon rail thin, line-based and sized for quick scanning
- **Don't:** Don't use the green (#10b981) as an accent; the gold carries the page
- **Don't:** Don't use gold as a page background; it is the accent
- **Don't:** Don't put the gold on light backgrounds, where it loses contrast

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
