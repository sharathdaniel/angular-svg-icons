# Usage

`<app-icon class="app-c-icon icon-size-sm text-red" name="icon-user" ariaLabel="User"></app-icon>`

`<button aria-label="Go home"><app-icon class="app-c-icon icon-size-md" name="icon-home"></app-icon></button>`

## Notes:

- **IMPORTANT:** All the svg icons should have square `viewBox`. eg: 16x16, 24x24
- Icon size is based on `icon-size-xx` class (width & height), not font size.
- Icon color is based on text color.
- `ariaLabel` attribute is optional.

## Accessibility

| Scenario | Use `ariaLabel`? | Example |
|----------|-----------------|---------|
| Standalone icon (conveys meaning on its own) | Yes | `<app-icon name="icon-user" ariaLabel="User profile">` |
| Icon inside a `<button>` or `<a>` | No | `<button aria-label="Go home"><app-icon name="icon-home"></app-icon></button>` |
| Purely decorative icon | No | `<app-icon name="icon-home"></app-icon>` |

- When `ariaLabel` is set → `role="img"` + `aria-label` are applied to the SVG
- When `ariaLabel` is omitted → `aria-hidden="true"` hides the SVG from screen readers
