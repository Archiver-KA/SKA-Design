# Design system — SonPhan | Home

`SN-W02236` · portfolio · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A bright, engineering-led hero on off-white: a centred, tight sans headline in near-black, with a small orange pill tag above and a single orange button below. Mono-style corner labels frame the screen, and the orange (#ff5c00) is the one strong colour, used for the call to action and the logo dot. The page is clean and spare, with plenty of empty space around the type.

**Mood:** bright, spare, engineered, confident

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f8f9f9` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#111827` | Headings and primary copy |
| Muted text | `#666666` | Secondary copy, captions |
| Border | `#f3f4f6` | Hairlines, dividers, outlines |
| Accent | `#ff5c00` | Primary action and highlights |

Palette by frequency of use: `#ff5c00` · `#0f0f0f` · `#666666` · `#ffffff` · `#111827` · `#f8f9f9` · `#f3f4f6` · `#d1d5db` · `#f9fafb` · `#9ca3af`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, JetBrains Mono, Playfair Display, Google Sans, Google Sans Flex, Nunito
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 20px · body 14px
- **Weights in use:** medium, normal
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-3xl` (24px), `rounded-full` (9999px), `rounded-sm` (2px)
- **Shadows:** `shadow-inner`, `shadow-[0_0_8px_#FF5C00]`, `shadow-[0_0_15px_#FF5C00]`
- **Content width:** `max-w-7xl`, `max-w-[200px]`
- **Section padding:** `py-32`, `py-16`
- **Common gaps:** `gap-1`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="group bg-[#FF5C00] text-white px-8 py-3.5 rounded-full text-sm font-medium hover:bg-[#E55300] transition-all duration-300 flex items-center gap-2 shadow-[0_8px_30px_-8px_rgba(255,92,0,0.6)] hover:shadow-[0_12px_40px_-8px_rgba(255,92,0,0.8)] hover:-translate-y-0.5 font-sans">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Marquee (`marquee`)
5. Feature grid (`features`)
6. Timeline (`timeline`)
7. Team (`team`)
8. Pricing (`pricing`)
9. Contact form (`contact-form`)
10. Footer (`footer`)

## Motion, effects and stack

- **Effects:** blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Lenis smooth scroll
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #f8f9f9;
  --color-surface: #ffffff;
  --color-text: #111827;
  --color-muted: #666666;
  --color-border: #f3f4f6;
  --color-accent: #ff5c00;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 24px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f8f9f9',
    surface: '#ffffff',
    ink: '#111827',
    muted: '#666666',
    line: '#f3f4f6',
    accent: '#ff5c00',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use the orange (#ff5c00) for the primary button and the logo dot only
- **Do:** Set headlines in a tight sans in near-black (#111827), centred
- **Do:** Keep small corner labels in grey caps to frame the hero
- **Don't:** Don't use the orange for body text or large backgrounds
- **Don't:** Don't add a second button colour
- **Don't:** Don't crowd the headline; the empty space is part of the look

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
