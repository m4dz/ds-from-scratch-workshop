# Themes

This package contains the `themes` related features.

## Style dictionary definitions

`Themes` are _application tokens_ mapped to _design tokens_. They define tokens ready
to be used in your final application's components, like `brand`, `surfaces`, and `text`
colors.

Each _theme tokens_ are declared in its own file in the shape of `[themeName].tokens.json`,
by only using aliases mapping function from style-dictionary.

## Sass definitions

The package contains two Sass file used to define theme values at application level:

1. `themes.mixins.scss`: exposes a `theme($name, mode)` mixin to generate values
   mapping from _theme tokens_ to _application tokens_ in the shape of CSS Custom
   Properties aliases.
2. `themes.scss`: the file exploits the `theme` mixin to exposes themes definitions at
   application level hoisted under `[color-scheme]` CSS selector. The file is already
   included in the global root file `styles.(s)css` ready to be included in your final
   app.
