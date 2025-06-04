// eslint-disable-next-line import/no-extraneous-dependencies
import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  generates: {
    './src/__generated__/': {
      preset: 'client',
      schema: 'https://api.vogent.ai/query',
      documents: ['src/*.ts'],
      plugins: [
        {
          add: {
            content: '/* eslint-disable */',
          },
        },
      ],
      presetConfig: {
        gqlTagName: 'gql',
        fragmentMasking: false,
      },
      config: {
        dedupeFragments: true,
      },
    },
  },
  ignoreNoDocuments: true,
};

export default config;
