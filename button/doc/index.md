# core/button

This package contains a `<ds-button>` web component to display buttons into your app.

## Usage

Import the `button` package, then use the `<ds-button>` component.

Content is passed as a slot to the component. You can pass text and/or sub-components
like `<ds-icon>`.

You can add attributes to customize the rendering:

- `primary`: render the button in its _brand_ shape rather than a neutral default one
- `overlayed`: use a `slot="content"` attribute to render the content not _inside_
  the button but apart, with the button displayed **over** to capture events

## Events

The component trigger a `clicked` event you can catch in an external listener:

```js
myBytton.addEventListener('clicked', () => {
  /* your callback here */
});
```
