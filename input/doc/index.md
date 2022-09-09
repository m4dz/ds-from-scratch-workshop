```js script
import '..';
```

# core/input

This package contains a `<ds-input>` web component to display text inputs into your app.

## Usage

Import the `input` package, then use the `<ds-input>` component.

You can add attributes to customize the rendering:

- `type`: the input type, may be `text` (_default_) or `password`
- `placeholder`: like on regular `<input>` tags
- `icn`: an icon name (see `core/icon` component) that generate a `<ds-icon>` component prepend to the input field
- `btn`: a text `string` that will be displayed in a button append to the input field

## Events

The component trigger two events: `clicked` and `keyed`, that you can catch in an external listener:

```js
myInput.addEventListener('clicked', () => {
  /* your callback here */
});
```

## Examples

```html preview-story
<ds-input placeholder="Here's a default input"></ds-input>
```

```html preview-story
<ds-input
  placeholder="Enter your password"
  type="password"
  icn="lock"
></ds-input>
```

```html preview-story
<ds-input placeholder="Ask me anything" btn="search" icn="search"></ds-input>
```
