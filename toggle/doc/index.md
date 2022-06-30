```js script
import '..';
```

# components/toggle

This package contains a `<ds-toggle>` component. It allows multi-choices and content
customization.

## Usage

Import the `toggle` package and use the `<ds-toggle>` component with a `name` attribute
to set the toggle `input` name.

By default, when no content is provided, it renders a simple boolean toggle. You can
pass a collection of `<li value="…">` items to render a multi-choices list. In this mode
clicking the toggle select next value in the list in a circle-way.

## Values

The component internally renders a collection of _radio_ elements using the given
`name` so you can retrieve the value in your form submissions.

## Events

The toggle element triggers a `changed` custom event that can be catched in an external
listener:

```js
myBytton.addEventListener('changed', ({ detail }) => {
  /* your callback here */
});
```

The `{ detail }` variable contains the current selected value in the toggle.

## Examples

```html preview-story
<ds-toggle name="example1"></ds-toggle>
```

```html preview-story
<ds-toggle name="example2">
  <li value="1">Choice 1</li>
  <li value="2" default>Choice 2</li>
  <li value="3">Choice 3</li>
</ds-toggle>
```
