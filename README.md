# Usage

`<app-icon class="app-c-icon icon-size-sm text-red" name="icon-user-sm" ariaLabel="User"></app-icon>`

## Notes:

- **IMPORTANT:** All the svg icons should have square `viewBox`. eg: 16x16, 24x24
- Icon size is based on `icon-size-xx` class (width & height), not font size.
  - If you want the icon size based on font size, check the commented code in `styles.scss`. Then the `viewBox` can be of any dimension.
- Icon color is based on text color.
- `ariaLabel` attribute is optional.
