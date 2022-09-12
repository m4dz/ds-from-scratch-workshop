// Importing our tokens transformer for Figma Tokens JSON format
import { transform } from '@divriots/style-dictionary-to-figma';

export default {
  // This array of globs will match our token source files
  source: ['**/*.tokens.json'],
  format: {
    // Define a custom format using our transformer
    figmaTokensPluginJson: (opts) => {
      const { dictionary } = opts;
      // Transform the tokens from the style dictionary instance
      const parsedTokens = transform(dictionary.tokens);

      const removeKeys = (obj, keys) =>
        obj !== Object(obj)
          ? obj
          : Array.isArray(obj)
          ? obj.map((item) => removeKeys(item, keys))
          : Object.keys(obj)
              .filter((k) => !keys.includes(k))
              .reduce(
                (acc, x) =>
                  Object.assign(acc, { [x]: removeKeys(obj[x], keys) }),
                {}
              );

      const cleanedTokens = removeKeys(parsedTokens, [
        'filePath', // <-- these keys will be removed from the object everywhere, regardless of nesting
        'isSource',
        'original',
        'attributes',
        'path',
      ]);

      // Turn the object into JSON, the "2" third param is used to format indents with 2 spaces
      return JSON.stringify(cleanedTokens, null, 2);
    },
  },
  platforms: {
    // Create a json platform which uses our custom format
    // and exports it to a file /figma-tokens.json
    json: {
      transformGroup: 'js',
      buildPath: '',
      files: [
        {
          destination: 'figma-tokens.json',
          format: 'figmaTokensPluginJson',
        },
      ],
    },
    css: {
      transformGroup: 'css',
      buildPath: 'tokens/',
      files: [
        {
          destination: 'open-props.css',
          format: 'css/variables',
          options: {
            selector: ':where(html)',
          },
        },
      ],
    },
  },
};
