# Usage

`<app-icon class="app-c-icon icon-size-sm text-red" name="icon-user-sm" ariaLabel="User"></app-icon>`

## Notes:

- **IMPORTANT:** If the icon size is not based on font size, all the svg icons should have square `viewBox`. eg: 16x16, 24x24
- By default icon size is based on `icon-size-xx` class (width & height), not font size.
  - If you want the icon size based on font size, check the commented code in `styles.scss`.
- Icon color is based on text color.
- `ariaLabel` attribute is optional.
