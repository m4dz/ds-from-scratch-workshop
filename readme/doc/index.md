```js script
import '../../swatch';
```

# Build Your Design System from Scratch - A Workshop

This repo contains a design system sample for a workshop where
attendees will work on implementing a design system made of
tokens, a few components, and a theme feature.

<ds-swatch></ds-swatch>

---

## Chapters

1. What is a Design System?

   - from a brand style guide to design systems
   - our choices for thihs workshop to get started: Backlight, GitHub integration, Figma

2. Tokens: using style-dictionary to generate tokens from an external source

   1. import tokens from Open Props
   2. using SD to bring tokens to Figma

3. Components: making core elements with Web Components

   1. create a few basic elements with CSS, JavaScript, and a bit of Web Copmonents
   2. using story.to.design to generate initial components in Figma

4. Documentation: creating a layout for consistency

   - involving the UX writter in the process

5. Organisms: consuming design system resources and documenting them

   1. create advanced components using Design System primitives
   2. keep Figma and the code in-sync with story.to.design

6. Theming: cascading the tokens

   - use Figma as source of truth for tokens
   - sync tokens through apps
   - cascade tokens

7. Publishing: being ready to distribute

8. Future of design systems: having a look at the upcoming web features empowering the design system tooling
   - using Figma as source of truth with tokens
   - CSS upcoming features

## Resources

- Backlight documentation: https://backlight.dev/docs/
- Design systems Mastery: https://backlight.dev/mastery/

* dockit-core documentation framework: https://studio.backlight.dev/edit/4BeMe20hqOWTkdUL2NuJ/
* Markdown Javascript: https://rocket.modern-web.dev/docs/markdown-javascript/overview/

- Style Dictionary: https://amzn.github.io/style-dictionary/
- SD Playground: https://www.style-dictionary-play.dev/
- Open Props: https://open-props.style/
- Figma: https://www.figma.com/
- story.to.design: https://story.to.design/

* Sass mixins: https://sass-lang.com/documentation/at-rules/mixin

- Web Components doc - MDN: https://developer.mozilla.org/en-US/docs/Web/Web_Components
- Web Component vanillaJS demo: https://studio.webcomponents.dev/edit/IOlipIXmlDrAFIPVbaKE/src/index.js?p=stories

* Open Props - Colors schemes codepen: https://codepen.io/argyleink/pen/XWaYyWe
* Phosphor collection - Icones.js: https://icones.js.org/collection/ph
* Cupcake Ipsum: http://www.cupcakeipsum.com/

---

## Getting started

### Architecure

The design system is organised in packages, a flat-way. They are split in different
sections:

1. _tokens_: values and variables definitions of the different parts of your brands
2. _core_: the low-level elements to build your views and advanced components on
3. _components_: high-level components ready to be used in your application

### Core/Components

The different components are made with vanilla webcomponents in plain JS. All components
packages exposes a root `index.js` file which re-exposes the component. Using them need
no more than importing the package and using the webcomponent (prefixed with `ds-`) in
your views.

### Styles

Styles from _tokens_ and _core_ are made with Sass. Packages can expose `mixins` that are
gathered in the root `mixins.scss` file. So using mixins only needs to `@use mixins.scss`
then `@include mixins.[mixinName]` in your Sass files.

Global styles are gathered in the root `styles.scss` file, meaning you need to import it
(or its `styles.css` dist version) in your final app to embed the overall styles.

### Contact us

M4dz
[Twitter](https://twitter.com/m4d_z) - [LinkedIn](https://www.linkedin.com/in/m4d-z/)

Thais Santos
[Twitter](https://twitter.com/th4is_ds) - [LinkedIn](https://www.linkedin.com/in/thaissantosdesigner/)
