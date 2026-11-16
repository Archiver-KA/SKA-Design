# Design system — ComedyGen AI Studio Template

`SN-W00289` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark product dashboard on charcoal [#18181b] with a darker sidebar, built as a set of tidy cards and form fields. The purple accent [#6366f1] marks the active state, toggles and the credits badge, and the rest of the interface stays neutral grey. Inter sets everything at small sizes, so the screen reads as a working tool rather than a marketing page.

**Mood:** dark, tidy, functional, neutral

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#18181b` | Page ground |
| Surface | `#18181b` | Cards, panels, raised areas |
| Text | `#f5f5f5` | Headings and primary copy |
| Muted text | `#ffffff` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#6366f1` | Primary action and highlights |
| Second accent | `#ef4444` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#e4e4e7` · `#a1a1aa` · `#18181b` · `#6366f1` · `#71717a` · `#27272a` · `#d4d4d8` · `#c7d2fe` · `#818cf8`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 30px · h3 14px · body 12px
- **Weights in use:** medium, semibold
- **Letter spacing:** `tracking-wider`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-md` (6px), `rounded-full` (9999px), `rounded-lg` (8px)
- **Shadows:** `shadow-lg`, `shadow-indigo-500/20`, `shadow-[0_0_8px_rgba(34,197,94,0.5)]`
- **Content width:** `max-w-4xl`
- **Common gaps:** `gap-3`, `gap-2`, `gap-4`

**Primary button**

```html
<a class="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-zinc-900/50 text-zinc-400 hover:text-zinc-200 transition-all">…</a>
```

## Page structure

Blocks in page order:

1. Sidebar (`sidebar`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #18181b;
  --color-surface: #18181b;
  --color-text: #f5f5f5;
  --color-muted: #ffffff;
  --color-border: #ffffff;
  --color-accent: #6366f1;
  --color-accent-2: #ef4444;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 6px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#18181b',
    surface: '#18181b',
    ink: '#f5f5f5',
    muted: '#ffffff',
    line: '#ffffff',
    accent: '#6366f1',
    accent2: '#ef4444',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use the indigo (#6366f1) for toggles, the active nav item and the credits badge
- **Do:** Keep panels in neutral grey with thin borders and small Inter labels
- **Do:** Put the primary form in a single column with the options as chips below
- **Don't:** Don't use the indigo for large backgrounds
- **Don't:** Don't add a second bright accent beyond the small red status dot
- **Don't:** Don't use a light sidebar on this dark layout

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
