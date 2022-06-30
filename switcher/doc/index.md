```js script
import '..';
```

# components/switcher

This package contains a `<ds-switcher>` component dedicated to _theme switching_. It uses
a _hardcoded_ list of the different themes available in the app (see the `tokens/themes`
packages for themes information).

## Usage

Import the `switcher` packages and use the `<ds-switcher>` component to render the
theme switcher.

## Actions

Each time the toggle _switcher_ is clicked, the new selected theme is set in the
`color-scheme` attribute on the `document.documentElement` (aka `<html>`) element.

⚠️ The state is **not** handled at a document level, meaning that if you have two
occurences of the switcher in your page, they're not synced.

## Example

```html preview-story
<ds-switcher></ds-switcher>
```
