```js script
import '..';
import '../../icon';
```

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

## Examples

```html preview-story
<ds-button>Here's a default button</ds-button>
```

```html preview-story
<ds-button primary>
  <ds-icon icn="search"></ds-icon>
  This is a primary button
</ds-button>
```

```html preview-story
<p>In this overlayed content, the button is transparent and over the icon</p>
<ds-button overlayed>
  <ds-icon
    slot="content"
    icn="file_upload"
    style="--size: var(--size-8); --color: var(--brand)"
  ></ds-icon>
</ds-button>
```
