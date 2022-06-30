# Tokens

This package contains the design tokens ready to be imported in your final app.
It contains a `open-props.css` auto-generated file via [style-dictionary](https://amzn.github.io/style-dictionary/)
that reflects a few tokens from the [Open Props](https://open-props.style/) project
by [Adam Argyle](https://twitter.com/argyleink).

## Generation

Have a look at the `sd.config.json` root file for generation config.

Tokens are extracted from files with the `.tokens.json` in packages. Browse the _tokens_
packages for a comprehensive list of exposed tokens.

## Usage

The generated file is supposed to be included right away in your final app. For DX
purposes, it is already included in the root file `styles.(s)css` that contains the
global app styles. You should prefer to include this one in your final project.
