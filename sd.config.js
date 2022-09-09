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
      // Turn the object into JSON, the "2" third param is used to format indents with 2 spaces
      return JSON.stringify(parsedTokens, null, 2);
    },
  },
  platforms: {
    // Create a json platform which uses our custom format
    // and exports it to a file /figma-tokens.json
    json: {
      transformGroup: 'js',
      buildPath: '/',
      files: [
        {
          destination: 'figma-tokens.json',
          format: 'figmaTokensPluginJson',
        },
      ],
    },
  },
};
