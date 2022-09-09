```js script
import '..';
```

# core/icon

This package contains a `<ds-icon>` web component to embed icons into your app.

## Usage

Import the `icon` package, then use the icon name from the _Phosphor_ icons library
in the `icn` attribute to load it using the `<ds-icon icn="…"></ds-icon>` component:
https://icones.js.org/collection/ph.

Use _components tokens_ in the shape of CSS Custom Properties to customize your icon:

- `--icon-color`: set the icon's color
- `--icon-size`: set the icon's size

You can pass a label as a slot for accessibility purposes, the content is hidden by
default in the final rendering on non-assistive devices.

## Examples

```html preview-story
<ds-icon icn="lightbulb">light</ds-icon>
```

```html preview-story
<ds-icon icn="light" style="--icon-color: var(--orange-5)"></ds-icon>
```

```html preview-story
<ds-icon icn="search" style="--icon-size: var(--size-12)"></ds-icon>
```
