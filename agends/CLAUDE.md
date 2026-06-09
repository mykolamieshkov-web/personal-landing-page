# CLAUDE.md — Layout Rules for This Project

## Stack
- React 18 + Vite
- SCSS (no Tailwind, no CSS modules)
- Component-based architecture
- Vite handles all path aliases — never write relative paths to mixins manually

---

## File Structure — Strict

```
src/
├── assets/
│   └── styles/
│       ├── mixins/
│       │   ├── _media.scss     ← breakpoint mixins
│       │   └── _mixins.scss    ← utility mixins
│       ├── _reset.scss
│       ├── _root.scss
│       ├── _typography.scss
│       ├── _utilities.scss
│       └── main.scss
├── components/
│   └── ComponentName/
│       ├── ComponentName.jsx
│       └── ComponentName.scss
├── App.jsx
└── main.jsx

public/
└── img/
    └── SectionName/
        └── filename.svg
```

---

## ABSOLUTE RULES — Never Break

1. NEVER rename, rewrite, or recreate media query mixins. Use only the mixin names that already exist in _media.scss.
2. NEVER guess mixin names. If unsure — read _media.scss first, then use the exact names found there.
3. NEVER touch existing media queries in any file. Read them first, then add only inside existing breakpoints.
4. NEVER write @import — use @use only.
5. NEVER write import paths manually in component .scss files. Vite auto-injects mixins via vite.config.js additionalData. Just call the mixin directly.
6. NEVER add inline styles to JSX.
7. NEVER add Tailwind classes.
8. NEVER change vite.config.js unless explicitly asked.
9. NEVER rewrite _reset.scss, _root.scss, _utilities.scss, main.scss.
10. NEVER hardcode colors, font sizes, or spacing — use CSS custom properties from _root.scss.
11. Images go to public/img/ComponentName/ — referenced as /img/ComponentName/file.svg in JSX.

---

## What Vite Does For You (Do Not Duplicate)

vite.config.js uses additionalData to auto-prepend mixin imports into every .scss file.
This means inside any component .scss — mixins are already available. Do NOT add @use lines for mixins.

---

## CSS Custom Properties (from _root.scss)

```scss
--container-max-width: 1196px;
// Color palette is commented out — do not uncomment without being asked.
// Add project-specific variables only when explicitly instructed.
```

---

## Reset Behavior (from _reset.scss) — Already Applied Globally

- * { margin: 0 0 0 0; padding: 0 0 0 0; box-sizing: border-box; }
- img: max-width: 100%; flex-shrink: 0; vertical-align: middle;
- a: color: inherit; text-decoration: none; display: inline-block;
- button: all: initial;
- nav: display: flex;
- ul, li: list-style: none;

Do not re-declare any of these inside components.

---

## Utility Classes — Already in _utilities.scss (Do Not Rewrite)

These selectors are global and work via attribute selector:
- [class*="__container"] — max-width wrapper, centered, px 16 padding
- [class*="__cover"] — absolute background image layer, z-index: 1
- [class*="__content"] — content layer above cover, z-index: 2, position: relative
- [class*="__layout"] — flex column, centered
- [class*="__layout--row"] — flex row, wraps at tablet-b breakpoint

Use these class names in JSX. Do not add duplicate styles for them in component scss.

---

## BEM Naming Convention

| Suffix | Purpose |
|---|---|
| __container | Main block wrapper |
| __cover | Background layer (absolute, z-index: 1) |
| __content | Content layer above cover (relative, z-index: 2) |
| __inner | Inner wrapper when __content is taken |
| __layout | Flex column container |
| __layout--row | Flex row, wraps on tablet |
| __list / __item | Semantic lists |
| __title | Headings |
| __desc | Multiline text |
| __price / __value | Numeric data |
| __img / __icon | Images and SVG icons |
| __badge | Visual labels |
| __btn | Buttons |
| __link | Navigation links |
| __control | Slider arrows, inputs |

State modifiers: --active, --closed, --hidden, --disabled, --loading

---

## When Adding a New Component

1. Create src/components/ComponentName/ComponentName.jsx
2. Create src/components/ComponentName/ComponentName.scss
3. Import scss in jsx: import './ComponentName.scss'
4. Do NOT add @use for mixins — Vite handles it
5. Import component in App.jsx

---

## When Editing an Existing Component

1. Read the full .jsx and .scss before writing anything
2. List all existing @media / mixin calls before making changes
3. Add only what is asked — do not refactor surrounding code
4. Do not rename existing classes
5. Do not reorder existing CSS rules

---

## Scope Discipline

- Do only what is asked. Nothing more.
- If a change requires touching files outside the requested component — ask first.
- Never "clean up" or "improve" code that was not part of the task.
- Never add comments unless asked.
